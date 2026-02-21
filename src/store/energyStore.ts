import { create } from 'zustand';
import type {
  EnergyComponent,
  SimulationState,
  PowerFlow,
  SystemSummary,
  UserLevel,
  ComponentType,
  ScenarioPreset,
} from '../types/energy';
import { calculatePowerFlows, calculateSummary } from '../utils/simulation';

// ─── Default component factory ────────────────────────────────────────────────

function createDefaultComponent(type: ComponentType, id: string): EnergyComponent {
  const defaults: Record<ComponentType, Partial<EnergyComponent>> = {
    grid: {
      name: 'Power Grid',
      maxPowerW: 25000,
      currentPowerW: 0,
      position: { x: 80, y: 380 },
      config: {},
    },
    gridMeter: {
      // The Ausgrid / DNSP bi-directional NMI meter — sits at the property boundary.
      // Records import and export. Sets the export limit rule (e.g. 5 kW in Ausgrid zones).
      // Consumer CANNOT control or read this meter directly — only the retailer can.
      name: 'Grid Meter (NMI)',
      maxPowerW: 25000,
      currentPowerW: 0,
      position: { x: 240, y: 380 },
      config: { gridExportLimitW: 5000, feedInTariff: 0.05, importTariff: 0.32 },
    },
    // Legacy alias — same behaviour as gridMeter
    smartMeter: {
      name: 'Grid Meter (NMI)',
      maxPowerW: 25000,
      currentPowerW: 0,
      position: { x: 240, y: 380 },
      config: { gridExportLimitW: 5000, feedInTariff: 0.05, importTariff: 0.32 },
    },
    mainSwitchboard: {
      // The main AC distribution board (power board) inside the home.
      // EVERY AC load — home circuits, EV charger, heat pump — connects here.
      // The inverter's AC output and the grid connection both feed INTO this board.
      name: 'Main Switchboard',
      maxPowerW: 25000,
      currentPowerW: 0,
      position: { x: 430, y: 380 },
      config: {},
    },
    energyMonitor: {
      // Consumer-side energy monitor with CT clamps (e.g. Shelly EM, Emporia Vue).
      // Installed INSIDE the home at the switchboard.
      // Enables real-time measurement of solar production, grid import/export,
      // and individual circuits (EV, AC, etc.) so the HEMS can make smart decisions.
      name: 'Energy Monitor (CT)',
      maxPowerW: 0,
      currentPowerW: 0,
      position: { x: 430, y: 240 },
      config: { monitoredCircuits: ['solar', 'grid', 'ev', 'total'] },
    },
    solarPanel: {
      name: 'Solar Panels',
      maxPowerW: 10000,
      currentPowerW: 0,
      position: { x: 430, y: 100 },
      config: { panelCount: 20, panelWattage: 400, roofAngle: 30, roofOrientation: 0 },
    },
    inverter: {
      name: 'Hybrid Inverter',
      maxPowerW: 8000,
      currentPowerW: 0,
      position: { x: 240, y: 240 },
      config: { maxOutputW: 8000, efficiency: 0.97, hybridMode: true },
    },
    battery: {
      name: 'Home Battery',
      maxPowerW: 5000,
      currentPowerW: 0,
      position: { x: 80, y: 240 },
      config: { capacityKwh: 10, currentSocPercent: 50, maxChargeRateW: 5000, maxDischargeRateW: 5000 },
    },
    evCharger: {
      // EV charger connects to the main switchboard on its own dedicated circuit (32A breaker).
      // It does NOT connect to the inverter. Power comes from the switchboard,
      // which is fed by both solar (via inverter) and the grid.
      name: 'EV Charger',
      maxPowerW: 7400,
      currentPowerW: 0,
      position: { x: 800, y: 380 },
      config: {
        maxCurrentA: 32,
        phases: 1,
        voltage: 230,
        chargingStandard: 'ocpp201',
        chargingMode: 'eco',
        isCharging: false,
        evBatteryPercent: 40,
        evCapacityKwh: 60,
        evEfficiencyKmPerKwh: 6,
        evSessionKwh: 0,
      },
    },
    homeLoad: {
      name: 'Home Consumption',
      maxPowerW: 15000,
      currentPowerW: -1500,
      position: { x: 620, y: 380 },
      config: { baseLoadW: 1500 },
    },
    heatPump: {
      name: 'Heat Pump',
      maxPowerW: 3500,
      currentPowerW: 0,
      position: { x: 980, y: 380 },
      config: { copRating: 3.5 },
    },
  };

  const d = defaults[type];
  return {
    id,
    type,
    name: d.name || type,
    enabled: true,
    position: d.position || { x: 400, y: 300 },
    currentPowerW: d.currentPowerW || 0,
    maxPowerW: d.maxPowerW || 5000,
    config: d.config || {},
  };
}

// ─── Default system components ────────────────────────────────────────────────
// Topology: Grid → Grid Meter → Main Switchboard → {Home Load, EV Charger, ...}
//                               ↑
//                        Inverter (Solar + Battery)

const defaultComponents: EnergyComponent[] = [
  createDefaultComponent('grid', 'grid-1'),
  createDefaultComponent('gridMeter', 'meter-1'),
  createDefaultComponent('mainSwitchboard', 'board-1'),
  createDefaultComponent('solarPanel', 'solar-1'),
  createDefaultComponent('inverter', 'inverter-1'),
  createDefaultComponent('battery', 'battery-1'),
  createDefaultComponent('evCharger', 'ev-1'),
  createDefaultComponent('homeLoad', 'load-1'),
];

const defaultSimulation: SimulationState = {
  timeOfDay: 12,
  cloudCover: 0.2,
  temperature: 22,
  season: 'summer',
  isRunning: false,
  speedMultiplier: 1,
};

// ─── Scenario presets ─────────────────────────────────────────────────────────
// Each scenario represents a real question a homeowner asks before or after
// installing solar. The simulator is pre-configured to show the answer visually.

export const scenarioPresets: ScenarioPreset[] = [
  {
    id: 'solar-only',
    name: 'Solar Only — Reduce My Bill',
    icon: '☀️',
    tagline: 'Entry-level solar, no battery yet',
    description:
      'A new solar owner with 6.6 kW of panels and a 5 kW inverter. No battery, no EV. Goal is to shift daytime appliance use to solar hours and export the rest.',
    goal: 'Reduce electricity bill by maximising daytime self-consumption.',
    context:
      'Ausgrid zone. 5 kW export limit applies. Feed-in tariff is low (~5¢/kWh) so self-use is far more valuable than exporting.',
    components: [
      { id: 'grid-1', type: 'grid', name: 'Power Grid', enabled: true, position: { x: 80, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: {} },
      { id: 'meter-1', type: 'gridMeter', name: 'Grid Meter (NMI)', enabled: true, position: { x: 240, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: { gridExportLimitW: 5000, feedInTariff: 0.05, importTariff: 0.32 } },
      { id: 'board-1', type: 'mainSwitchboard', name: 'Main Switchboard', enabled: true, position: { x: 430, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: {} },
      { id: 'solar-1', type: 'solarPanel', name: 'Solar Panels', enabled: true, position: { x: 430, y: 100 }, maxPowerW: 6600, currentPowerW: 0, config: { panelCount: 16, panelWattage: 415, roofAngle: 22, roofOrientation: 0 } },
      { id: 'inverter-1', type: 'inverter', name: 'String Inverter', enabled: true, position: { x: 240, y: 240 }, maxPowerW: 5000, currentPowerW: 0, config: { maxOutputW: 5000, efficiency: 0.975, hybridMode: false } },
      { id: 'load-1', type: 'homeLoad', name: 'Home Consumption', enabled: true, position: { x: 620, y: 380 }, maxPowerW: 15000, currentPowerW: -1800, config: { baseLoadW: 1800 } },
    ],
    simulation: { timeOfDay: 13, cloudCover: 0.1, season: 'summer', isRunning: false, speedMultiplier: 1, temperature: 28 },
  },
  {
    id: 'solar-battery',
    name: 'Solar + Battery — Zero Night Bill',
    icon: '🔋',
    tagline: 'Store solar for evening use',
    description:
      'The most common upgrade path. A 10 kWh battery stores surplus midday solar to power the home through the evening and night, eliminating most grid imports.',
    goal: 'Cover evening and overnight consumption with stored solar. Aim for 80%+ self-sufficiency.',
    context:
      'Without a battery, 60–70% of solar might be exported at low feed-in rates. With a 10 kWh battery, most homes can reach near-zero grid imports on sunny days.',
    components: [
      { id: 'grid-1', type: 'grid', name: 'Power Grid', enabled: true, position: { x: 80, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: {} },
      { id: 'meter-1', type: 'gridMeter', name: 'Grid Meter (NMI)', enabled: true, position: { x: 240, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: { gridExportLimitW: 5000, feedInTariff: 0.05, importTariff: 0.32 } },
      { id: 'board-1', type: 'mainSwitchboard', name: 'Main Switchboard', enabled: true, position: { x: 430, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: {} },
      { id: 'solar-1', type: 'solarPanel', name: 'Solar Panels', enabled: true, position: { x: 430, y: 100 }, maxPowerW: 8000, currentPowerW: 0, config: { panelCount: 20, panelWattage: 400, roofAngle: 25, roofOrientation: 0 } },
      { id: 'inverter-1', type: 'inverter', name: 'Hybrid Inverter', enabled: true, position: { x: 240, y: 240 }, maxPowerW: 8000, currentPowerW: 0, config: { maxOutputW: 8000, efficiency: 0.97, hybridMode: true } },
      { id: 'battery-1', type: 'battery', name: 'Home Battery', enabled: true, position: { x: 80, y: 240 }, maxPowerW: 5000, currentPowerW: 0, config: { capacityKwh: 10, currentSocPercent: 30, maxChargeRateW: 5000, maxDischargeRateW: 5000 } },
      { id: 'load-1', type: 'homeLoad', name: 'Home Consumption', enabled: true, position: { x: 620, y: 380 }, maxPowerW: 15000, currentPowerW: -1800, config: { baseLoadW: 1800 } },
    ],
    simulation: { timeOfDay: 14, cloudCover: 0.15, season: 'summer', isRunning: false, speedMultiplier: 1, temperature: 26 },
  },
  {
    id: 'solar-ev',
    name: 'Solar + EV — Charge Free From the Sun',
    icon: '🚗',
    tagline: 'Use solar surplus to charge your EV',
    description:
      'An EV owner who wants to charge their car from solar during the day. The EV charger plugs into a dedicated 32A circuit on the switchboard — not the inverter. A consumer energy monitor (CT clamp) lets the charger see real-time solar surplus and dial its power up or down accordingly.',
    goal: 'Charge the EV for free using surplus solar. Avoid drawing from the grid for EV charging.',
    context:
      'The EV charger sits on the main switchboard — it draws from whatever the board is fed with (solar, battery, or grid). A CT clamp monitors the grid connection: when solar surplus pushes the meter to zero import, the charger ramps up. Without a CT clamp or energy monitor, "solar-only" charging is not possible.',
    components: [
      { id: 'grid-1', type: 'grid', name: 'Power Grid', enabled: true, position: { x: 80, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: {} },
      { id: 'meter-1', type: 'gridMeter', name: 'Grid Meter (NMI)', enabled: true, position: { x: 240, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: { gridExportLimitW: 5000, feedInTariff: 0.05, importTariff: 0.32 } },
      { id: 'board-1', type: 'mainSwitchboard', name: 'Main Switchboard', enabled: true, position: { x: 430, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: {} },
      { id: 'monitor-1', type: 'energyMonitor', name: 'Energy Monitor (CT)', enabled: true, position: { x: 430, y: 240 }, maxPowerW: 0, currentPowerW: 0, config: { monitoredCircuits: ['solar', 'grid', 'ev', 'total'] } },
      { id: 'solar-1', type: 'solarPanel', name: 'Solar Panels', enabled: true, position: { x: 240, y: 100 }, maxPowerW: 10000, currentPowerW: 0, config: { panelCount: 24, panelWattage: 415, roofAngle: 22, roofOrientation: 0 } },
      { id: 'inverter-1', type: 'inverter', name: 'Hybrid Inverter', enabled: true, position: { x: 240, y: 240 }, maxPowerW: 10000, currentPowerW: 0, config: { maxOutputW: 10000, efficiency: 0.97, hybridMode: false } },
      { id: 'ev-1', type: 'evCharger', name: 'EV Charger', enabled: true, position: { x: 800, y: 380 }, maxPowerW: 7400, currentPowerW: 0, config: { maxCurrentA: 32, phases: 1, voltage: 230, chargingStandard: 'ocpp201', chargingMode: 'solar_only', isCharging: true, evBatteryPercent: 35, evCapacityKwh: 60, evEfficiencyKmPerKwh: 6, evSessionKwh: 0 } },
      { id: 'load-1', type: 'homeLoad', name: 'Home Consumption', enabled: true, position: { x: 620, y: 380 }, maxPowerW: 15000, currentPowerW: -1500, config: { baseLoadW: 1500 } },
    ],
    simulation: { timeOfDay: 11, cloudCover: 0.1, season: 'summer', isRunning: false, speedMultiplier: 1, temperature: 27 },
  },
  {
    id: 'full-system',
    name: 'Full System — Solar + Battery + EV',
    icon: '⚡',
    tagline: 'The complete off-grid-leaning home',
    description:
      'The setup most homeowners are working towards: solar panels, hybrid inverter, home battery, and a smart EV charger — all orchestrated by an energy monitor. Priority is to use solar first, store surplus in the battery, use battery to charge the EV overnight, and only touch the grid when necessary.',
    goal: 'Achieve 90%+ self-sufficiency. Use solar for daytime loads, battery for evenings, and grid only as backup.',
    context:
      'This is the scenario where the interplay between components matters most. The grid meter sees the net flow at the property boundary. The energy monitor gives the HEMS real-time data to make smart decisions across all four devices.',
    components: [
      { id: 'grid-1', type: 'grid', name: 'Power Grid', enabled: true, position: { x: 80, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: {} },
      { id: 'meter-1', type: 'gridMeter', name: 'Grid Meter (NMI)', enabled: true, position: { x: 240, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: { gridExportLimitW: 5000, feedInTariff: 0.05, importTariff: 0.32 } },
      { id: 'board-1', type: 'mainSwitchboard', name: 'Main Switchboard', enabled: true, position: { x: 430, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: {} },
      { id: 'monitor-1', type: 'energyMonitor', name: 'Energy Monitor (CT)', enabled: true, position: { x: 430, y: 240 }, maxPowerW: 0, currentPowerW: 0, config: { monitoredCircuits: ['solar', 'grid', 'ev', 'total'] } },
      { id: 'solar-1', type: 'solarPanel', name: 'Solar Panels', enabled: true, position: { x: 240, y: 100 }, maxPowerW: 10000, currentPowerW: 0, config: { panelCount: 24, panelWattage: 415, roofAngle: 25, roofOrientation: 0 } },
      { id: 'inverter-1', type: 'inverter', name: 'Hybrid Inverter', enabled: true, position: { x: 240, y: 240 }, maxPowerW: 10000, currentPowerW: 0, config: { maxOutputW: 10000, efficiency: 0.97, hybridMode: true } },
      { id: 'battery-1', type: 'battery', name: 'Home Battery', enabled: true, position: { x: 80, y: 240 }, maxPowerW: 5000, currentPowerW: 0, config: { capacityKwh: 13.5, currentSocPercent: 40, maxChargeRateW: 5000, maxDischargeRateW: 5000 } },
      { id: 'ev-1', type: 'evCharger', name: 'EV Charger', enabled: true, position: { x: 800, y: 380 }, maxPowerW: 7400, currentPowerW: 0, config: { maxCurrentA: 32, phases: 1, voltage: 230, chargingStandard: 'ocpp201', chargingMode: 'eco', isCharging: true, evBatteryPercent: 50, evCapacityKwh: 60, evEfficiencyKmPerKwh: 6, evSessionKwh: 0 } },
      { id: 'load-1', type: 'homeLoad', name: 'Home Consumption', enabled: true, position: { x: 620, y: 380 }, maxPowerW: 15000, currentPowerW: -2000, config: { baseLoadW: 2000 } },
    ],
    simulation: { timeOfDay: 13, cloudCover: 0.2, season: 'summer', isRunning: false, speedMultiplier: 1, temperature: 25 },
  },
  {
    id: 'zero-export',
    name: 'Zero Export — Apartment / Embedded Network',
    icon: '🚫',
    tagline: 'No export allowed — use every watt on-site',
    description:
      'Some homes are in embedded networks (strata, new estates) or have a DNSP restriction that forbids exporting to the grid. Every watt of solar must be consumed or stored on-site. This requires the inverter to throttle itself in real time using CT clamp feedback.',
    goal: 'Use 100% of solar on-site. Battery absorbs surplus; inverter throttles if battery is full.',
    context:
      'Zero-export mode is configured in the inverter settings, with a CT clamp on the grid connection providing real-time feedback. The energy monitor is essential here — without it, the inverter cannot know when to throttle.',
    components: [
      { id: 'grid-1', type: 'grid', name: 'Power Grid', enabled: true, position: { x: 80, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: {} },
      { id: 'meter-1', type: 'gridMeter', name: 'Grid Meter (NMI)', enabled: true, position: { x: 240, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: { gridExportLimitW: 0, feedInTariff: 0, importTariff: 0.32 } },
      { id: 'board-1', type: 'mainSwitchboard', name: 'Main Switchboard', enabled: true, position: { x: 430, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: {} },
      { id: 'monitor-1', type: 'energyMonitor', name: 'Energy Monitor (CT)', enabled: true, position: { x: 430, y: 240 }, maxPowerW: 0, currentPowerW: 0, config: { monitoredCircuits: ['solar', 'grid', 'total'] } },
      { id: 'solar-1', type: 'solarPanel', name: 'Solar Panels', enabled: true, position: { x: 240, y: 100 }, maxPowerW: 6600, currentPowerW: 0, config: { panelCount: 16, panelWattage: 415, roofAngle: 15, roofOrientation: 0 } },
      { id: 'inverter-1', type: 'inverter', name: 'Hybrid Inverter', enabled: true, position: { x: 240, y: 240 }, maxPowerW: 5000, currentPowerW: 0, config: { maxOutputW: 5000, efficiency: 0.97, hybridMode: true } },
      { id: 'battery-1', type: 'battery', name: 'Home Battery', enabled: true, position: { x: 80, y: 240 }, maxPowerW: 5000, currentPowerW: 0, config: { capacityKwh: 10, currentSocPercent: 20, maxChargeRateW: 5000, maxDischargeRateW: 5000 } },
      { id: 'load-1', type: 'homeLoad', name: 'Home Consumption', enabled: true, position: { x: 620, y: 380 }, maxPowerW: 15000, currentPowerW: -1500, config: { baseLoadW: 1500 } },
    ],
    simulation: { timeOfDay: 10, cloudCover: 0.1, season: 'summer', isRunning: false, speedMultiplier: 1, temperature: 24 },
  },
  {
    id: 'ev-no-ct',
    name: 'EV Charging — No CT Clamp (Manual Rate)',
    icon: '🔌',
    tagline: 'Solar + EV but no energy monitor — limited control',
    description:
      'An EV owner with solar but no CT clamp or energy monitor. Without real-time solar surplus data, the charger cannot dynamically follow solar production. The homeowner must set a fixed charging current manually — typically 6–10A to stay "roughly" within solar output. When solar drops (clouds, afternoon), the grid automatically fills in and the homeowner has no way to prevent it.',
    goal: 'Understand the cost of not having a CT clamp. Compare grid import here vs the Solar + EV (CT Clamp) scenario to see the dollar difference.',
    context:
      'Without a CT clamp, smart charging features like "Solar Only" or "Eco" mode are unavailable. The charger runs at a fixed user-set current regardless of solar conditions. Installing a CT clamp ($150–300 for Shelly EM or Emporia Vue) enables dynamic solar charging and can pay for itself within months.',
    components: [
      { id: 'grid-1', type: 'grid', name: 'Power Grid', enabled: true, position: { x: 80, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: {} },
      { id: 'meter-1', type: 'gridMeter', name: 'Grid Meter (NMI)', enabled: true, position: { x: 240, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: { gridExportLimitW: 5000, feedInTariff: 0.05, importTariff: 0.32 } },
      { id: 'board-1', type: 'mainSwitchboard', name: 'Main Switchboard', enabled: true, position: { x: 430, y: 380 }, maxPowerW: 25000, currentPowerW: 0, config: {} },
      { id: 'solar-1', type: 'solarPanel', name: 'Solar Panels', enabled: true, position: { x: 240, y: 100 }, maxPowerW: 10000, currentPowerW: 0, config: { panelCount: 24, panelWattage: 415, roofAngle: 22, roofOrientation: 0 } },
      { id: 'inverter-1', type: 'inverter', name: 'String Inverter', enabled: true, position: { x: 240, y: 240 }, maxPowerW: 10000, currentPowerW: 0, config: { maxOutputW: 10000, efficiency: 0.97, hybridMode: false } },
      { id: 'ev-1', type: 'evCharger', name: 'EV Charger (Fixed 10A)', enabled: true, position: { x: 800, y: 380 }, maxPowerW: 2300, currentPowerW: 0, config: { maxCurrentA: 10, phases: 1, voltage: 230, chargingStandard: 'ocpp16', chargingMode: 'fast', isCharging: true, evBatteryPercent: 30, evCapacityKwh: 60, evEfficiencyKmPerKwh: 6, evSessionKwh: 0 } },
      { id: 'load-1', type: 'homeLoad', name: 'Home Consumption', enabled: true, position: { x: 620, y: 380 }, maxPowerW: 15000, currentPowerW: -1500, config: { baseLoadW: 1500 } },
    ],
    simulation: { timeOfDay: 13, cloudCover: 0.35, season: 'summer', isRunning: false, speedMultiplier: 1, temperature: 26 },
  },
];

// ─── Store interface ───────────────────────────────────────────────────────────

export interface SessionStats {
  solarKwh: number;
  importKwh: number;
  exportKwh: number;
  homeKwh: number;
  evKwh: number;
}

interface EnergyStore {
  components: EnergyComponent[];
  simulation: SimulationState;
  powerFlows: PowerFlow[];
  summary: SystemSummary;
  sessionStats: SessionStats;
  userLevel: UserLevel;
  selectedComponentId: string | null;
  activeTab: 'simulator' | 'scenarios' | 'learn' | 'protocols' | 'strategies';
  activeScenarioId: string | null;

  // Actions
  addComponent: (type: ComponentType) => void;
  removeComponent: (id: string) => void;
  toggleComponent: (id: string) => void;
  updateComponentConfig: (id: string, config: Partial<EnergyComponent['config']>) => void;
  updateComponentPower: (id: string, powerW: number) => void;
  setSimulation: (sim: Partial<SimulationState>) => void;
  selectComponent: (id: string | null) => void;
  setUserLevel: (level: UserLevel) => void;
  setActiveTab: (tab: EnergyStore['activeTab']) => void;
  loadScenario: (scenarioId: string) => void;
  recalculate: () => void;
  resetToDefault: () => void;
  resetSessionStats: () => void;
}

// ─── Store ────────────────────────────────────────────────────────────────────

export const useEnergyStore = create<EnergyStore>((set, get) => ({
  components: defaultComponents,
  simulation: defaultSimulation,
  powerFlows: [],
  summary: {
    totalSolarGenerationW: 0,
    totalConsumptionW: 0,
    gridImportW: 0,
    gridExportW: 0,
    batteryPowerW: 0,
    selfConsumptionPercent: 0,
    autarkyPercent: 0,
  },
  sessionStats: { solarKwh: 0, importKwh: 0, exportKwh: 0, homeKwh: 0, evKwh: 0 },
  userLevel: 'beginner',
  selectedComponentId: null,
  activeTab: 'simulator',
  activeScenarioId: null,

  addComponent: (type) => {
    const id = `${type}-${Date.now()}`;
    const comp = createDefaultComponent(type, id);
    set((state) => ({ components: [...state.components, comp] }));
    get().recalculate();
  },

  removeComponent: (id) => {
    set((state) => ({
      components: state.components.filter((c) => c.id !== id),
      selectedComponentId: state.selectedComponentId === id ? null : state.selectedComponentId,
    }));
    get().recalculate();
  },

  toggleComponent: (id) => {
    set((state) => ({
      components: state.components.map((c) => (c.id === id ? { ...c, enabled: !c.enabled } : c)),
    }));
    get().recalculate();
  },

  updateComponentConfig: (id, config) => {
    set((state) => ({
      components: state.components.map((c) => {
        if (c.id !== id) return c;
        // When EV charging is started (isCharging toggled on), reset the session energy counter
        const resetSession =
          c.type === 'evCharger' && config.isCharging === true && c.config.isCharging === false
            ? { evSessionKwh: 0 }
            : {};
        return { ...c, config: { ...c.config, ...config, ...resetSession } };
      }),
    }));
    get().recalculate();
  },

  updateComponentPower: (id, powerW) => {
    set((state) => ({
      components: state.components.map((c) => (c.id === id ? { ...c, currentPowerW: powerW } : c)),
    }));
    get().recalculate();
  },

  setSimulation: (sim) => {
    set((state) => ({ simulation: { ...state.simulation, ...sim } }));
    get().recalculate();
  },

  selectComponent: (id) => set({ selectedComponentId: id }),
  setUserLevel: (level) => set({ userLevel: level }),
  setActiveTab: (tab) => set({ activeTab: tab }),

  loadScenario: (scenarioId) => {
    const scenario = scenarioPresets.find((s) => s.id === scenarioId);
    if (!scenario) return;
    set({
      components: scenario.components as EnergyComponent[],
      simulation: { ...defaultSimulation, ...scenario.simulation },
      selectedComponentId: null,
      activeScenarioId: scenarioId,
      activeTab: 'simulator',
      sessionStats: { solarKwh: 0, importKwh: 0, exportKwh: 0, homeKwh: 0, evKwh: 0 },
    });
    get().recalculate();
  },

  recalculate: () => {
    const { components, simulation, sessionStats } = get();
    const { flows, updatedComponents } = calculatePowerFlows(components, simulation);
    const summary = calculateSummary(updatedComponents, flows);

    // Accumulate session energy only while running (each tick = 0.05 * speed simulated hours)
    let newSessionStats = sessionStats;
    if (simulation.isRunning) {
      const deltaHours = 0.05 * simulation.speedMultiplier;
      newSessionStats = {
        solarKwh: sessionStats.solarKwh + (summary.totalSolarGenerationW / 1000) * deltaHours,
        importKwh: sessionStats.importKwh + (summary.gridImportW / 1000) * deltaHours,
        exportKwh: sessionStats.exportKwh + (summary.gridExportW / 1000) * deltaHours,
        homeKwh: sessionStats.homeKwh + (summary.totalConsumptionW / 1000) * deltaHours,
        evKwh: sessionStats.evKwh + (updatedComponents
          .filter((c) => c.type === 'evCharger' && c.enabled)
          .reduce((sum, c) => sum + Math.abs(c.currentPowerW), 0) / 1000) * deltaHours,
      };
    }

    set({ powerFlows: flows, components: updatedComponents, summary, sessionStats: newSessionStats });
  },

  resetSessionStats: () => {
    set({ sessionStats: { solarKwh: 0, importKwh: 0, exportKwh: 0, homeKwh: 0, evKwh: 0 } });
  },

  resetToDefault: () => {
    set({
      components: defaultComponents,
      simulation: defaultSimulation,
      powerFlows: [],
      selectedComponentId: null,
      activeScenarioId: null,
      sessionStats: { solarKwh: 0, importKwh: 0, exportKwh: 0, homeKwh: 0, evKwh: 0 },
    });
    get().recalculate();
  },
}));
