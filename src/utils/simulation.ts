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
  
  const maxOutput = panelCount! * panelWattage!;
  return Math.round(maxOutput * irradiance * angleEfficiency);
}

// Main power flow calculation
//
// Correct residential topology:
//
//   Solar Panels (DC)
//       │
//   Hybrid Inverter  ──────────────────┐
//       │ (AC output)                  │ (DC side, if hybrid)
//       │                              │
//   Main Switchboard  ◄────────────────┤ Battery (AC-coupled or DC-coupled via inverter)
//       │
//   ┌───┼──────────────┬──────────────┐
//   │   │              │              │
// Home  EV Charger  Heat Pump   Grid Meter ── Grid
// Load  (on its own    (on its     (NMI boundary)
//        circuit at     own circuit)
//        switchboard)
//
// The EV charger and all AC loads are fed from the switchboard, not from the inverter directly.
// The inverter AC output feeds INTO the switchboard, same as the grid connection.
// The grid meter sits between the switchboard and the street (measures import/export at NMI).
// Consumer energy monitors (CT clamps) sit at the switchboard to measure individual circuits.

export function calculatePowerFlows(
  components: EnergyComponent[],
  simulation: SimulationState
): { flows: PowerFlow[]; updatedComponents: EnergyComponent[] } {
  const flows: PowerFlow[] = [];
  const updated = components.map((c) => ({ ...c }));
  
  const find = (type: string) => updated.filter((c) => c.type === type && c.enabled);
  // gridMeter was previously called smartMeter — support both
  const findMeter = () => [
    ...updated.filter((c) => c.type === 'gridMeter' && c.enabled),
    ...updated.filter((c) => c.type === 'smartMeter' && c.enabled),
  ];
  
  const switchboards = find('mainSwitchboard');
  // If no explicit switchboard exists, use a virtual hub (no visual node) —
  // we just use the inverter or homeLoad as the hub ID for flow lines.
  const hubId = switchboards.length > 0 ? switchboards[0].id : null;

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
  // Inverter converts DC solar → AC and feeds it into the switchboard
  const inverters = find('inverter');
  let availableSolarW = totalSolarW;
  
  for (const inv of inverters) {
    const eff = inv.config.efficiency ?? 0.97;
    const maxOut = inv.config.maxOutputW ?? 10000;
    const invertedPower = Math.min(availableSolarW, maxOut);
    inv.currentPowerW = Math.round(invertedPower * eff);
    availableSolarW = inv.currentPowerW;
    
    // Solar panels → Inverter (DC side)
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

    // Inverter AC output → Switchboard (or virtual hub)
    if (inv.currentPowerW > 0 && hubId) {
      flows.push({
        fromId: inv.id,
        toId: hubId,
        powerW: inv.currentPowerW,
        label: `${(inv.currentPowerW / 1000).toFixed(1)} kW`,
      });
    }
  }
  
  let surplusW = availableSolarW;
  
  // Step 3: Supply home loads first — these are fed from the switchboard
  const homeLoads = find('homeLoad');
  let totalDemandW = 0;
  for (const load of homeLoads) {
    const demand = Math.abs(load.config.baseLoadW ?? 1500);
    load.currentPowerW = -demand;
    totalDemandW += demand;
  }
  
  // Heat pumps — also fed from switchboard via their own circuit
  const heatPumps = find('heatPump');
  for (const hp of heatPumps) {
    const hpDemand = Math.abs(hp.currentPowerW) || 2000;
    hp.currentPowerW = -hpDemand;
    totalDemandW += hpDemand;
  }
  
  // Switchboard (or inverter) → Home loads
  const solarToHome = Math.min(surplusW, totalDemandW);
  if (solarToHome > 0 && homeLoads.length > 0) {
    const sourceId = hubId ?? (inverters.length > 0 ? inverters[0].id : null);
    if (sourceId) {
      flows.push({
        fromId: sourceId,
        toId: homeLoads[0].id,
        powerW: solarToHome,
        label: `${(solarToHome / 1000).toFixed(1)} kW`,
      });
    }
  }
  surplusW -= solarToHome;
  let unmetDemandW = totalDemandW - solarToHome;
  
  // Step 4: EV Charger — connected to its own circuit on the switchboard
  // It is NOT wired through the inverter; it draws from the switchboard
  // which is fed by both the inverter (solar/battery) and the grid.
  const evChargers = find('evCharger');
  for (const ev of evChargers) {
    if (!ev.config.isCharging) {
      ev.currentPowerW = 0;
      continue;
    }

    const evSoc = ev.config.evBatteryPercent ?? 50;
    // Stop charging if battery is full
    if (evSoc >= 100) {
      ev.currentPowerW = 0;
      continue;
    }
    
    const maxCharge = (ev.config.maxCurrentA ?? 32) * (ev.config.voltage ?? 230) * (ev.config.phases ?? 1);
    let evDemandW = 0;
    
    switch (ev.config.chargingMode) {
      case 'solar_only':
        // Only charge from surplus solar reaching the switchboard
        evDemandW = Math.min(surplusW, maxCharge);
        surplusW -= evDemandW;
        break;
      case 'eco': {
        // Use surplus first, then up to 50% from grid via switchboard
        const ecoFromSolar = Math.min(surplusW, maxCharge);
        const ecoFromGrid = Math.min(maxCharge * 0.5, maxCharge - ecoFromSolar);
        evDemandW = ecoFromSolar + ecoFromGrid;
        surplusW -= ecoFromSolar;
        unmetDemandW += ecoFromGrid;
        break;
      }
      case 'fast': {
        evDemandW = maxCharge;
        const evFromSolar = Math.min(surplusW, evDemandW);
        surplusW -= evFromSolar;
        unmetDemandW += evDemandW - evFromSolar;
        break;
      }
      case 'scheduled':
        // Only charge during off-peak (23:00-06:00), purely from grid
        if (simulation.timeOfDay >= 23 || simulation.timeOfDay < 6) {
          evDemandW = maxCharge;
          unmetDemandW += evDemandW;
        }
        break;
    }

    // Integrate EV SoC when simulation is running
    if (simulation.isRunning && evDemandW > 0) {
      const capacityKwh = ev.config.evCapacityKwh ?? 60;
      const deltaHours = 0.05 * simulation.speedMultiplier;
      const addedKwh = (evDemandW / 1000) * deltaHours;
      const addedSoc = (addedKwh / capacityKwh) * 100;
      const newSoc = Math.min(100, evSoc + addedSoc);
      const newSessionKwh = (ev.config.evSessionKwh ?? 0) + addedKwh;
      ev.config = { ...ev.config, evBatteryPercent: newSoc, evSessionKwh: newSessionKwh };
    }
    
    ev.currentPowerW = -evDemandW;
    
    // Flow: Switchboard → EV Charger circuit
    if (evDemandW > 0) {
      const sourceId = hubId ?? (inverters.length > 0 ? inverters[0].id : null);
      if (sourceId) {
        flows.push({
          fromId: sourceId,
          toId: ev.id,
          powerW: evDemandW,
          label: `${(evDemandW / 1000).toFixed(1)} kW`,
        });
      }
    }
  }
  
  // Step 5: Battery management
  // Battery is DC-coupled via hybrid inverter (most common AU setup) or
  // AC-coupled with its own AC-battery inverter — both appear on the switchboard
  const batteries = find('battery');
  for (const bat of batteries) {
    const soc = bat.config.currentSocPercent ?? 50;
    const maxCharge = bat.config.maxChargeRateW ?? 5000;
    const maxDischarge = bat.config.maxDischargeRateW ?? 5000;
    
    if (surplusW > 0 && soc < 100) {
      // Charge battery with surplus solar (via inverter/switchboard)
      const chargeW = Math.min(surplusW, maxCharge);
      bat.currentPowerW = chargeW;
      surplusW -= chargeW;

      // Integrate SoC when running
      if (simulation.isRunning) {
        const capacityKwh = bat.config.capacityKwh ?? 10;
        const deltaHours = 0.05 * simulation.speedMultiplier;
        const addedKwh = (chargeW / 1000) * deltaHours;
        const newSoc = Math.min(100, soc + (addedKwh / capacityKwh) * 100);
        bat.config = { ...bat.config, currentSocPercent: newSoc };
      }
      
      const sourceId = hubId ?? (inverters.length > 0 ? inverters[0].id : null);
      if (sourceId) {
        flows.push({
          fromId: sourceId,
          toId: bat.id,
          powerW: chargeW,
          label: `${(chargeW / 1000).toFixed(1)} kW`,
        });
      }
    } else if (unmetDemandW > 0 && soc > 0) {
      // Discharge battery back into the switchboard to cover demand
      const dischargeW = Math.min(unmetDemandW, maxDischarge);
      bat.currentPowerW = -dischargeW;
      unmetDemandW -= dischargeW;

      // Integrate SoC when running
      if (simulation.isRunning) {
        const capacityKwh = bat.config.capacityKwh ?? 10;
        const deltaHours = 0.05 * simulation.speedMultiplier;
        const removedKwh = (dischargeW / 1000) * deltaHours;
        const newSoc = Math.max(0, soc - (removedKwh / capacityKwh) * 100);
        bat.config = { ...bat.config, currentSocPercent: newSoc };
      }
      
      const destId = hubId ?? (homeLoads.length > 0 ? homeLoads[0].id : null);
      if (destId) {
        flows.push({
          fromId: bat.id,
          toId: destId,
          powerW: dischargeW,
          label: `${(dischargeW / 1000).toFixed(1)} kW`,
        });
      }
    } else {
      bat.currentPowerW = 0;
    }
  }
  
  // Step 6: Grid interaction — measured at the grid meter (NMI boundary)
  // Grid ↔ Grid Meter ↔ Main Switchboard
  const meters = findMeter();
  const grids = find('grid');
  
  if (grids.length > 0) {
    const grid = grids[0];
    const exportLimit = meters.length > 0 ? (meters[0].config.gridExportLimitW ?? 10000) : 10000;
    
    if (surplusW > 0) {
      // Export surplus to grid (within limit set by grid meter / DNSP rules)
      const exportW = Math.min(surplusW, exportLimit);
      grid.currentPowerW = -exportW;
      if (meters.length > 0) meters[0].currentPowerW = -exportW;
      
      // Switchboard → Grid Meter → Grid
      const sourceId = hubId ?? (inverters.length > 0 ? inverters[0].id : null);
      if (sourceId) {
        if (meters.length > 0) {
          flows.push({
            fromId: sourceId,
            toId: meters[0].id,
            powerW: exportW,
            label: `${(exportW / 1000).toFixed(1)} kW export`,
          });
          flows.push({
            fromId: meters[0].id,
            toId: grid.id,
            powerW: exportW,
            label: `${(exportW / 1000).toFixed(1)} kW`,
          });
        } else {
          flows.push({
            fromId: sourceId,
            toId: grid.id,
            powerW: exportW,
            label: `${(exportW / 1000).toFixed(1)} kW export`,
          });
        }
      }
    } else if (unmetDemandW > 0) {
      // Import from grid → Grid Meter → Switchboard
      grid.currentPowerW = unmetDemandW;
      if (meters.length > 0) meters[0].currentPowerW = unmetDemandW;
      
      if (meters.length > 0) {
        flows.push({
          fromId: grid.id,
          toId: meters[0].id,
          powerW: unmetDemandW,
          label: `${(unmetDemandW / 1000).toFixed(1)} kW import`,
        });
        const destId = hubId ?? (homeLoads.length > 0 ? homeLoads[0].id : null);
        if (destId) {
          flows.push({
            fromId: meters[0].id,
            toId: destId,
            powerW: unmetDemandW,
            label: `${(unmetDemandW / 1000).toFixed(1)} kW`,
          });
        }
      } else {
        const destId = hubId ?? (homeLoads.length > 0 ? homeLoads[0].id : null);
        if (destId) {
          flows.push({
            fromId: grid.id,
            toId: destId,
            powerW: unmetDemandW,
            label: `${(unmetDemandW / 1000).toFixed(1)} kW import`,
          });
        }
      }
    } else {
      grid.currentPowerW = 0;
      if (meters.length > 0) meters[0].currentPowerW = 0;
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
