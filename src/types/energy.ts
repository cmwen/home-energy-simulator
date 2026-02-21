export type ComponentType = 
  | 'grid' 
  | 'smartMeter' 
  | 'solarPanel' 
  | 'inverter' 
  | 'battery' 
  | 'evCharger' 
  | 'homeLoad' 
  | 'heatPump';

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
  evBatteryPercent?: number;
  
  // Inverter specific
  maxOutputW?: number;
  efficiency?: number; // 0-1
  hybridMode?: boolean; // can manage battery too
  
  // Smart meter specific
  gridExportLimitW?: number;
  feedInTariff?: number; // per kWh
  importTariff?: number; // per kWh
  
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
