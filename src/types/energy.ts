export type ComponentType = 
  | 'grid' 
  | 'gridMeter'        // Ausgrid/DNSP bi-directional meter at the boundary (NMI meter)
  | 'energyMonitor'    // Consumer-side CT clamp / energy monitor (e.g. Emporia, Shelly EM)
  | 'mainSwitchboard'  // Main AC switchboard / power board — the AC distribution hub
  | 'solarPanel' 
  | 'inverter' 
  | 'battery' 
  | 'evCharger' 
  | 'homeLoad' 
  | 'heatPump'
  // Legacy alias kept so any serialised data referencing 'smartMeter' still works
  | 'smartMeter';

export type ChargingStandard = 'ocpp16' | 'ocpp201' | 'modbus';
export type ChargingMode = 'fast' | 'eco' | 'solar_only' | 'scheduled';
export type UserLevel = 'beginner' | 'advanced';

export interface Position {
  x: number;
  y: number;
}

export interface EnergyComponent {
  id: string;
  type: ComponentType;
  name: string;
  enabled: boolean;
  position: Position;
  // Power in watts - positive = producing/supplying, negative = consuming
  currentPowerW: number;
  maxPowerW: number;
  config: ComponentConfig;
}

export interface ComponentConfig {
  // Solar specific
  panelCount?: number;
  panelWattage?: number; // per panel
  roofAngle?: number; // degrees
  roofOrientation?: number; // degrees from south
  
  // Battery specific
  capacityKwh?: number;
  currentSocPercent?: number; // state of charge 0-100
  maxChargeRateW?: number;
  maxDischargeRateW?: number;
  
  // EV Charger specific
  maxCurrentA?: number;
  phases?: 1 | 3;
  voltage?: number;
  chargingStandard?: ChargingStandard;
  chargingMode?: ChargingMode;
  isCharging?: boolean;
  evBatteryPercent?: number;    // current SoC 0-100
  evCapacityKwh?: number;       // usable battery capacity (e.g. 60 kWh)
  evEfficiencyKmPerKwh?: number; // km per kWh (used to show km added, default 6)
  evSessionKwh?: number;        // energy delivered this session (reset when charging starts)
  
  // Inverter specific
  maxOutputW?: number;
  efficiency?: number; // 0-1
  hybridMode?: boolean; // can manage battery too
  
  // Grid meter (Ausgrid NMI meter) — replaces old smartMeter
  gridExportLimitW?: number;
  feedInTariff?: number; // per kWh
  importTariff?: number; // per kWh

  // Energy monitor (consumer CT clamp)
  monitoredCircuits?: string[]; // e.g. ['solar', 'grid', 'ev']

  // Home load specific
  baseLoadW?: number;
  
  // Heat pump
  copRating?: number; // coefficient of performance
}

export interface PowerFlow {
  fromId: string;
  toId: string;
  powerW: number;
  label: string;
}

export interface SimulationState {
  timeOfDay: number; // 0-24 hours
  cloudCover: number; // 0-1
  temperature: number; // celsius
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  isRunning: boolean;
  speedMultiplier: number;
}

export interface SystemSummary {
  totalSolarGenerationW: number;
  totalConsumptionW: number;
  gridImportW: number;
  gridExportW: number;
  batteryPowerW: number; // positive = charging, negative = discharging
  selfConsumptionPercent: number;
  autarkyPercent: number; // self-sufficiency
}

// ─── Scenario Preset ───────────────────────────────────────────────────────────

export interface ScenarioPreset {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  /** What the homeowner is trying to achieve */
  goal: string;
  /** Typical Australian context */
  context: string;
  components: Partial<EnergyComponent>[];
  simulation: Partial<SimulationState>;
}
