import type { EnergyComponent, SimulationState, PowerFlow, SystemSummary } from '../types/energy';

// Calculate solar irradiance based on time of day, season, cloud cover
export function calculateSolarIrradiance(sim: SimulationState): number {
  const { timeOfDay, cloudCover, season } = sim;
  
  // Peak sun hours vary by season
  const seasonalPeak: Record<string, number> = {
    summer: 1.0,
    spring: 0.75,
    autumn: 0.65,
    winter: 0.4,
  };
  
  // Sunrise/sunset hours by season
  const sunHours: Record<string, [number, number]> = {
    summer: [5, 21],
    spring: [6, 19.5],
    autumn: [7, 18],
    winter: [8, 16.5],
  };
  
  const [sunrise, sunset] = sunHours[season];
  
  if (timeOfDay < sunrise || timeOfDay > sunset) return 0;
  
  // Bell curve for solar output during the day
  const dayLength = sunset - sunrise;
  const midday = sunrise + dayLength / 2;
  const hoursFromNoon = Math.abs(timeOfDay - midday);
  const halfDay = dayLength / 2;
  const normalizedPosition = hoursFromNoon / halfDay;
  
  // Cosine-based curve (peaks at solar noon)
  const baseIrradiance = Math.max(0, Math.cos(normalizedPosition * Math.PI / 2));
  
  // Apply season and cloud modifiers
  const seasonFactor = seasonalPeak[season];
  const cloudFactor = 1 - (cloudCover * 0.85); // clouds reduce up to 85%
  
  return baseIrradiance * seasonFactor * cloudFactor;
}

// Calculate actual solar panel output
function calculateSolarOutput(component: EnergyComponent, irradiance: number): number {
  if (!component.enabled) return 0;
  const { panelCount = 20, panelWattage = 500, roofAngle = 30 } = component.config;
  
  // Angle efficiency (optimal ~30-35 degrees)
  const optimalAngle = 32;
  const angleDiff = Math.abs(roofAngle! - optimalAngle);
  const angleEfficiency = 1 - (angleDiff / 90) * 0.3;
  
  // Temperature derating (above 25C, panels lose ~0.4% per degree)
  // We'll skip temperature for simplicity here, applied at inverter level
  
  const maxOutput = panelCount! * panelWattage!;
  return Math.round(maxOutput * irradiance * angleEfficiency);
}

// Main power flow calculation
export function calculatePowerFlows(
  components: EnergyComponent[],
  simulation: SimulationState
): { flows: PowerFlow[]; updatedComponents: EnergyComponent[] } {
  const flows: PowerFlow[] = [];
  const updated = components.map((c) => ({ ...c }));
  
  const find = (type: string) => updated.filter((c) => c.type === type && c.enabled);
  
  // Step 1: Calculate solar generation
  const irradiance = calculateSolarIrradiance(simulation);
  const solars = find('solarPanel');
  let totalSolarW = 0;
  
  for (const solar of solars) {
    const output = calculateSolarOutput(solar, irradiance);
    solar.currentPowerW = output;
    totalSolarW += output;
  }
  
  // Step 2: Apply inverter efficiency
  const inverters = find('inverter');
  let availableSolarW = totalSolarW;
  
  for (const inv of inverters) {
    const eff = inv.config.efficiency ?? 0.97;
    const maxOut = inv.config.maxOutputW ?? 10000;
    const invertedPower = Math.min(availableSolarW, maxOut);
    inv.currentPowerW = Math.round(invertedPower * eff);
    availableSolarW = inv.currentPowerW;
    
    if (totalSolarW > 0) {
      for (const solar of solars) {
        flows.push({
          fromId: solar.id,
          toId: inv.id,
          powerW: solar.currentPowerW,
          label: `${(solar.currentPowerW / 1000).toFixed(1)} kW`,
        });
      }
    }
  }
  
  let surplusW = availableSolarW;
  
  // Step 3: Supply home loads first
  const homeLoads = find('homeLoad');
  let totalDemandW = 0;
  for (const load of homeLoads) {
    const demand = Math.abs(load.config.baseLoadW ?? 1500);
    load.currentPowerW = -demand;
    totalDemandW += demand;
  }
  
  // Heat pumps as loads
  const heatPumps = find('heatPump');
  for (const hp of heatPumps) {
    const hpDemand = Math.abs(hp.currentPowerW) || 2000;
    hp.currentPowerW = -hpDemand;
    totalDemandW += hpDemand;
  }
  
  // Solar -> home loads flow
  const solarToHome = Math.min(surplusW, totalDemandW);
  if (solarToHome > 0 && inverters.length > 0 && homeLoads.length > 0) {
    flows.push({
      fromId: inverters[0].id,
      toId: homeLoads[0].id,
      powerW: solarToHome,
      label: `${(solarToHome / 1000).toFixed(1)} kW`,
    });
  }
  surplusW -= solarToHome;
  let unmetDemandW = totalDemandW - solarToHome;
  
  // Step 4: Handle EV charger based on mode
  const evChargers = find('evCharger');
  for (const ev of evChargers) {
    if (!ev.config.isCharging) {
      ev.currentPowerW = 0;
      continue;
    }
    
    const maxCharge = (ev.config.maxCurrentA ?? 32) * (ev.config.voltage ?? 230) * (ev.config.phases ?? 1);
    let evDemandW = 0;
    
    switch (ev.config.chargingMode) {
      case 'solar_only':
        evDemandW = Math.min(surplusW, maxCharge);
        surplusW -= evDemandW;
        break;
      case 'eco':
        // Use surplus first, then up to 50% from grid
        evDemandW = Math.min(surplusW + maxCharge * 0.5, maxCharge);
        const fromSolar = Math.min(surplusW, evDemandW);
        surplusW -= fromSolar;
        unmetDemandW += evDemandW - fromSolar;
        break;
      case 'fast':
        evDemandW = maxCharge;
        const evFromSolar = Math.min(surplusW, evDemandW);
        surplusW -= evFromSolar;
        unmetDemandW += evDemandW - evFromSolar;
        break;
      case 'scheduled':
        // Only charge during off-peak (23:00-06:00)
        if (simulation.timeOfDay >= 23 || simulation.timeOfDay < 6) {
          evDemandW = maxCharge;
          unmetDemandW += evDemandW;
        }
        break;
    }
    
    ev.currentPowerW = -evDemandW;
    
    if (evDemandW > 0 && inverters.length > 0) {
      flows.push({
        fromId: inverters[0].id,
        toId: ev.id,
        powerW: evDemandW,
        label: `${(evDemandW / 1000).toFixed(1)} kW`,
      });
    }
  }
  
  // Step 5: Battery management
  const batteries = find('battery');
  for (const bat of batteries) {
    const soc = bat.config.currentSocPercent ?? 50;
    const maxCharge = bat.config.maxChargeRateW ?? 5000;
    const maxDischarge = bat.config.maxDischargeRateW ?? 5000;
    
    if (surplusW > 0 && soc < 100) {
      // Charge battery with surplus solar
      const chargeW = Math.min(surplusW, maxCharge);
      bat.currentPowerW = chargeW;
      surplusW -= chargeW;
      
      if (inverters.length > 0) {
        flows.push({
          fromId: inverters[0].id,
          toId: bat.id,
          powerW: chargeW,
          label: `${(chargeW / 1000).toFixed(1)} kW`,
        });
      }
    } else if (unmetDemandW > 0 && soc > 10) {
      // Discharge battery to cover demand
      const dischargeW = Math.min(unmetDemandW, maxDischarge);
      bat.currentPowerW = -dischargeW;
      unmetDemandW -= dischargeW;
      
      if (homeLoads.length > 0) {
        flows.push({
          fromId: bat.id,
          toId: homeLoads[0].id,
          powerW: dischargeW,
          label: `${(dischargeW / 1000).toFixed(1)} kW`,
        });
      }
    } else {
      bat.currentPowerW = 0;
    }
  }
  
  // Step 6: Grid interaction
  const meters = find('smartMeter');
  const grids = find('grid');
  
  if (grids.length > 0 && meters.length > 0) {
    const meter = meters[0];
    const grid = grids[0];
    const exportLimit = meter.config.gridExportLimitW ?? 10000;
    
    if (surplusW > 0) {
      // Export surplus to grid (within limit)
      const exportW = Math.min(surplusW, exportLimit);
      grid.currentPowerW = -exportW; // negative = exporting
      meter.currentPowerW = -exportW;
      
      if (inverters.length > 0) {
        flows.push({
          fromId: inverters[0].id,
          toId: meter.id,
          powerW: exportW,
          label: `${(exportW / 1000).toFixed(1)} kW export`,
        });
      }
      flows.push({
        fromId: meter.id,
        toId: grid.id,
        powerW: exportW,
        label: `${(exportW / 1000).toFixed(1)} kW export`,
      });
    } else if (unmetDemandW > 0) {
      // Import from grid
      grid.currentPowerW = unmetDemandW;
      meter.currentPowerW = unmetDemandW;
      
      flows.push({
        fromId: grid.id,
        toId: meter.id,
        powerW: unmetDemandW,
        label: `${(unmetDemandW / 1000).toFixed(1)} kW import`,
      });
      if (homeLoads.length > 0) {
        flows.push({
          fromId: meter.id,
          toId: homeLoads[0].id,
          powerW: unmetDemandW,
          label: `${(unmetDemandW / 1000).toFixed(1)} kW`,
        });
      }
    } else {
      grid.currentPowerW = 0;
      meter.currentPowerW = 0;
    }
  }
  
  return { flows, updatedComponents: updated };
}

export function calculateSummary(components: EnergyComponent[], _flows: PowerFlow[]): SystemSummary {
  let totalSolarGenerationW = 0;
  let totalConsumptionW = 0;
  let gridImportW = 0;
  let gridExportW = 0;
  let batteryPowerW = 0;
  
  for (const c of components) {
    if (!c.enabled) continue;
    switch (c.type) {
      case 'solarPanel':
        totalSolarGenerationW += c.currentPowerW;
        break;
      case 'homeLoad':
      case 'heatPump':
        totalConsumptionW += Math.abs(c.currentPowerW);
        break;
      case 'evCharger':
        totalConsumptionW += Math.abs(c.currentPowerW);
        break;
      case 'grid':
        if (c.currentPowerW > 0) gridImportW = c.currentPowerW;
        else gridExportW = Math.abs(c.currentPowerW);
        break;
      case 'battery':
        batteryPowerW = c.currentPowerW;
        break;
    }
  }
  
  const selfConsumptionPercent = totalSolarGenerationW > 0
    ? Math.round(((totalSolarGenerationW - gridExportW) / totalSolarGenerationW) * 100)
    : 0;
  
  const autarkyPercent = totalConsumptionW > 0
    ? Math.round(((totalConsumptionW - gridImportW) / totalConsumptionW) * 100)
    : 0;
  
  return {
    totalSolarGenerationW,
    totalConsumptionW,
    gridImportW,
    gridExportW,
    batteryPowerW,
    selfConsumptionPercent: Math.max(0, Math.min(100, selfConsumptionPercent)),
    autarkyPercent: Math.max(0, Math.min(100, autarkyPercent)),
  };
}
