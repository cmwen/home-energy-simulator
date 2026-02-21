import { create } from 'zustand';
import type { EnergyComponent, SimulationState, PowerFlow, SystemSummary, UserLevel, ComponentType } from '../types/energy';
import { calculatePowerFlows, calculateSummary } from '../utils/simulation';

// Default component factory
function createDefaultComponent(type: ComponentType, id: string): EnergyComponent {
  const defaults: Record<ComponentType, Partial<EnergyComponent>> = {
    grid: {
      name: 'Power Grid',
      maxPowerW: 25000,
      currentPowerW: 0,
      position: { x: 50, y: 300 },
      config: {},
    },
    smartMeter: {
      name: 'Smart Meter',
      maxPowerW: 25000,
      currentPowerW: 0,
      position: { x: 200, y: 300 },
      config: { gridExportLimitW: 10000, feedInTariff: 0.08, importTariff: 0.30 },
    },
    solarPanel: {
      name: 'Solar Panels',
      maxPowerW: 10000,
      currentPowerW: 0,
      position: { x: 400, y: 80 },
      config: { panelCount: 20, panelWattage: 500, roofAngle: 30, roofOrientation: 0 },
    },
    inverter: {
      name: 'Hybrid Inverter',
      maxPowerW: 10000,
      currentPowerW: 0,
      position: { x: 400, y: 250 },
      config: { maxOutputW: 10000, efficiency: 0.97, hybridMode: true },
    },
    battery: {
      name: 'Home Battery',
      maxPowerW: 5000,
      currentPowerW: 0,
      position: { x: 600, y: 400 },
      config: { capacityKwh: 10, currentSocPercent: 50, maxChargeRateW: 5000, maxDischargeRateW: 5000 },
    },
    evCharger: {
      name: 'EV Charger',
      maxPowerW: 22000,
      currentPowerW: 0,
      position: { x: 600, y: 150 },
      config: { maxCurrentA: 32, phases: 3, voltage: 230, chargingStandard: 'ocpp201', chargingMode: 'eco', isCharging: false, evBatteryPercent: 40 },
    },
    homeLoad: {
      name: 'Home Consumption',
      maxPowerW: 15000,
      currentPowerW: -1500,
      position: { x: 400, y: 450 },
      config: { baseLoadW: 1500 },
    },
    heatPump: {
      name: 'Heat Pump',
      maxPowerW: 5000,
      currentPowerW: 0,
      position: { x: 200, y: 450 },
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

interface EnergyStore {
  components: EnergyComponent[];
  simulation: SimulationState;
  powerFlows: PowerFlow[];
  summary: SystemSummary;
  userLevel: UserLevel;
  selectedComponentId: string | null;
  activeTab: 'simulator' | 'learn' | 'protocols' | 'strategies';
  
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
  recalculate: () => void;
  resetToDefault: () => void;
}

const defaultComponents: EnergyComponent[] = [
  createDefaultComponent('grid', 'grid-1'),
  createDefaultComponent('smartMeter', 'meter-1'),
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
  userLevel: 'beginner',
  selectedComponentId: null,
  activeTab: 'simulator',

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
      components: state.components.map((c) =>
        c.id === id ? { ...c, config: { ...c.config, ...config } } : c
      ),
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

  recalculate: () => {
    const { components, simulation } = get();
    const { flows, updatedComponents } = calculatePowerFlows(components, simulation);
    const summary = calculateSummary(updatedComponents, flows);
    set({ powerFlows: flows, components: updatedComponents, summary });
  },

  resetToDefault: () => {
    set({
      components: defaultComponents,
      simulation: defaultSimulation,
      powerFlows: [],
      selectedComponentId: null,
    });
    get().recalculate();
  },
}));
