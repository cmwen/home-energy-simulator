import React, { useState } from 'react';
import { useEnergyStore } from '../../store/energyStore';

function SectionCard({
  title,
  isOpen,
  onToggle,
  accentColor,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  accentColor: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: '#1e1e2e',
        borderRadius: 8,
        marginBottom: 10,
        overflow: 'hidden',
        border: '1px solid #2a2a3e',
        borderLeft: `3px solid ${accentColor}`,
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '14px 18px',
          backgroundColor: isOpen ? '#2a2a4e' : 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: accentColor,
          fontSize: 15,
          fontWeight: 600,
          textAlign: 'left',
          transition: 'background-color 0.2s',
        }}
      >
        <span>{title}</span>
        <span
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
            fontSize: 12,
          }}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div
          style={{
            padding: '14px 18px',
            color: '#e0e0e0',
            fontSize: 14,
            lineHeight: 1.7,
            borderTop: '1px solid #2a2a3e',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function TipBox({
  children,
  type = 'tip',
}: {
  children: React.ReactNode;
  type?: 'tip' | 'warning' | 'info';
}) {
  const styles = {
    tip: {
      bg: '#1a2e1a',
      border: '#2a3e2a',
      label: 'Tip',
      color: '#9ece6a',
    },
    warning: {
      bg: '#2e2a1a',
      border: '#3e3a2a',
      label: 'Important',
      color: '#e0af68',
    },
    info: {
      bg: '#1a1a2e',
      border: '#2a2a3e',
      label: 'Note',
      color: '#7aa2f7',
    },
  };
  const s = styles[type];

  return (
    <div
      style={{
        backgroundColor: s.bg,
        borderRadius: 6,
        padding: 12,
        margin: '10px 0',
        border: `1px solid ${s.border}`,
      }}
    >
      <strong style={{ color: s.color }}>{s.label}:</strong>{' '}
      {children}
    </div>
  );
}

function ModeCard({
  name,
  color,
  description,
  details,
}: {
  name: string;
  color: string;
  description: string;
  details: string[];
}) {
  return (
    <div
      style={{
        backgroundColor: '#16161e',
        borderRadius: 6,
        padding: 12,
        marginBottom: 8,
        borderLeft: `3px solid ${color}`,
      }}
    >
      <strong style={{ color, fontSize: 14 }}>{name}</strong>
      <p style={{ margin: '6px 0 8px', fontSize: 13 }}>{description}</p>
      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
        {details.map((d, i) => (
          <li key={i} style={{ marginBottom: 3 }}>
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function StrategiesSection() {
  const userLevel = useEnergyStore((s) => s.userLevel);
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div style={{ padding: '0 4px' }}>
      <div style={{ marginBottom: 16 }}>
        <h2
          style={{
            margin: '0 0 6px',
            fontSize: 20,
            fontWeight: 700,
            color: '#c0caf5',
          }}
        >
          Energy Optimization Strategies
        </h2>
        <p style={{ margin: 0, fontSize: 13, color: '#888' }}>
          How to get the most out of your home energy system.
          {userLevel === 'advanced' &&
            ' Advanced view includes HEMS architecture and grid services.'}
        </p>
      </div>

      {/* 1. Solar Self-Consumption Optimization */}
      <SectionCard
        title="Solar Self-Consumption Optimization"
        isOpen={openSections.has('self-consumption')}
        onToggle={() => toggle('self-consumption')}
        accentColor="#9ece6a"
      >
        <p style={{ margin: '0 0 10px' }}>
          Self-consumption means using the solar electricity you generate directly in your home, rather than exporting it to the grid. This is almost always more financially valuable because feed-in tariffs are lower than import tariffs.
        </p>

        <p style={{ margin: '0 0 8px' }}>
          <strong style={{ color: '#bb9af7' }}>Priority order for surplus solar:</strong>
        </p>
        <div
          style={{
            backgroundColor: '#16161e',
            borderRadius: 6,
            padding: 14,
            marginBottom: 12,
            fontFamily: 'monospace',
            fontSize: 13,
            color: '#9ece6a',
            lineHeight: 2,
          }}
        >
          1. Home loads (always served first)
          <br />
          2. Home battery (store for evening use)
          <br />
          3. EV charging (large flexible load)
          <br />
          4. Heat pump / hot water (thermal storage)
          <br />
          5. Grid export (last resort, lowest value)
        </div>

        <p style={{ margin: '0 0 8px' }}>
          <strong style={{ color: '#bb9af7' }}>Why self-consumption matters:</strong>
        </p>
        <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
          <li style={{ marginBottom: 4 }}>
            Typical import tariff: $0.25–$0.45/kWh
          </li>
          <li style={{ marginBottom: 4 }}>
            Typical feed-in tariff: $0.05–$0.12/kWh
          </li>
          <li style={{ marginBottom: 4 }}>
            Every kWh self-consumed saves you the full import rate instead of earning only the export rate
          </li>
          <li style={{ marginBottom: 4 }}>
            Increasing self-consumption from 30% to 70% can double your solar savings
          </li>
        </ul>

        <p style={{ margin: '0 0 8px' }}>
          <strong style={{ color: '#bb9af7' }}>Seasonal strategies:</strong>
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10,
            marginBottom: 10,
          }}
        >
          <div
            style={{
              backgroundColor: '#16161e',
              borderRadius: 6,
              padding: 12,
              borderLeft: '3px solid #7aa2f7',
            }}
          >
            <strong style={{ color: '#7aa2f7' }}>Winter</strong>
            <p style={{ margin: '6px 0 0', fontSize: 13 }}>
              Less solar available. Focus on using every watt directly. Minimize export. Heat pump runs more, naturally absorbing solar. Battery cycles are shallow.
            </p>
          </div>
          <div
            style={{
              backgroundColor: '#16161e',
              borderRadius: 6,
              padding: 12,
              borderLeft: '3px solid #e0af68',
            }}
          >
            <strong style={{ color: '#e0af68' }}>Summer</strong>
            <p style={{ margin: '6px 0 0', fontSize: 13 }}>
              Abundant solar. Charge everything — battery, EV, hot water. Schedule high-power appliances (dishwasher, washing machine) during peak solar hours.
            </p>
          </div>
        </div>

        <TipBox>
          Running appliances during solar peak hours (10am–3pm) is one of the simplest ways to boost self-consumption without any extra equipment.
        </TipBox>
      </SectionCard>

      {/* 2. Dynamic EV Charging Modes */}
      <SectionCard
        title="Dynamic EV Charging Modes"
        isOpen={openSections.has('ev-modes')}
        onToggle={() => toggle('ev-modes')}
        accentColor="#7aa2f7"
      >
        <p style={{ margin: '0 0 12px' }}>
          Smart EV chargers can operate in different modes depending on your priorities — saving money, charging quickly, or a balance of both. The charger adjusts its power draw dynamically based on real-time energy data.
        </p>

        <ModeCard
          name="Solar Only"
          color="#9ece6a"
          description="Only charges when surplus solar is available. Pauses charging if solar drops below the minimum threshold."
          details={[
            'Best for: Maximizing savings, lowest electricity cost per km',
            'Requires a CT clamp / energy monitor at the switchboard — without it, the charger cannot see solar surplus',
            'Uses CT clamp or energy monitor data to measure surplus solar in real time',
            'Minimum charge threshold: typically 1.4 kW (6A × 230V on single phase)',
            'Below 6A most EVs will not accept a charge — the charger must pause',
            'Charge speed varies throughout the day following the solar curve',
            'May not fully charge the EV on cloudy days or in winter',
          ]}
        />

        <ModeCard
          name="Eco / Hybrid"
          color="#e0af68"
          description="Prioritizes solar surplus but tops up from the grid to maintain at least the minimum charge rate once charging has started."
          details={[
            'Best for: Good balance of savings and convenience',
            'Always maintains minimum 6A (1.4 kW) once a session starts',
            'Solar surplus is used first; grid fills the gap to the minimum',
            'If solar exceeds the minimum, charge rate increases to use all surplus',
            'Typically saves 50–70% compared to grid-only charging',
          ]}
        />

        <ModeCard
          name="Fast / Boost"
          color="#f7768e"
          description="Charges at maximum power regardless of solar availability. Draws from grid as needed."
          details={[
            'Best for: When you need the car charged as quickly as possible',
            'Uses the full rated power of your charger (e.g., 7.4 kW or 22 kW)',
            'No solar optimization — all about speed',
            'May trigger demand charges or overload your grid connection if not managed',
          ]}
        />

        <ModeCard
          name="Scheduled"
          color="#bb9af7"
          description="Charges during designated time windows, typically off-peak tariff hours overnight."
          details={[
            'Best for: Time-of-use tariff customers',
            'Common schedule: charge 11pm–6am when rates are lowest',
            'Can be combined with solar during the day for hybrid scheduling',
            'Set departure time to ensure the car is ready when you need it',
          ]}
        />

        <ModeCard
          name="Target SoC"
          color="#73daca"
          description="Sets a target battery percentage by a departure time. The optimizer decides the cheapest way to reach it."
          details={[
            'Best for: Advanced users with dynamic tariffs or solar forecasting',
            'Considers: current SoC, target SoC, departure time, solar forecast, tariff schedule',
            'Automatically selects the cheapest charging windows',
            'May split charging across multiple periods (e.g., solar midday + off-peak overnight)',
          ]}
        />

        <TipBox type="warning">
          The minimum charge rate for most EVs is 6A per phase (1.4 kW single phase, 4.1 kW three phase). Below this, the EV will refuse to charge. Smart chargers must handle this threshold carefully when modulating with solar.
        </TipBox>
      </SectionCard>

      {/* 3. Battery Management Strategies */}
      <SectionCard
        title="Battery Management Strategies"
        isOpen={openSections.has('battery')}
        onToggle={() => toggle('battery')}
        accentColor="#e0af68"
      >
        <p style={{ margin: '0 0 12px' }}>
          A home battery is only as useful as its control strategy. The right approach depends on your tariff structure, solar system size, and consumption patterns.
        </p>

        <div style={{ marginBottom: 14 }}>
          <h4 style={{ margin: '0 0 6px', color: '#9ece6a' }}>
            Solar Self-Consumption
          </h4>
          <p style={{ margin: '0 0 6px' }}>
            The most common strategy: store excess solar during the day and discharge in the evening and overnight.
          </p>
          <ul style={{ margin: '0', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Battery charges when solar production exceeds home consumption
            </li>
            <li style={{ marginBottom: 4 }}>
              Battery discharges when consumption exceeds solar (evening, night)
            </li>
            <li style={{ marginBottom: 4 }}>
              Increases self-consumption from ~30% to ~70% for a typical system
            </li>
            <li style={{ marginBottom: 4 }}>
              Works best with a battery sized to cover overnight consumption (8–12 kWh)
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: 14 }}>
          <h4 style={{ margin: '0 0 6px', color: '#7aa2f7' }}>
            Time-of-Use Arbitrage
          </h4>
          <p style={{ margin: '0 0 6px' }}>
            Charge the battery during cheap-rate periods and discharge during expensive periods.
          </p>
          <ul style={{ margin: '0', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Charge overnight at off-peak rates (e.g., $0.10/kWh)
            </li>
            <li style={{ marginBottom: 4 }}>
              Discharge during peak rates (e.g., $0.40/kWh)
            </li>
            <li style={{ marginBottom: 4 }}>
              Profitable when peak:off-peak ratio exceeds ~3:1 (accounting for round-trip losses)
            </li>
            <li style={{ marginBottom: 4 }}>
              Can be combined with solar self-consumption for maximum benefit
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: 14 }}>
          <h4 style={{ margin: '0 0 6px', color: '#f7768e' }}>Peak Shaving</h4>
          <p style={{ margin: '0 0 6px' }}>
            Limit grid import to a maximum threshold to avoid demand charges or overloading your connection.
          </p>
          <ul style={{ margin: '0', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Battery discharges to cover any consumption above the threshold
            </li>
            <li style={{ marginBottom: 4 }}>
              Common threshold: keep grid import below 5 kW
            </li>
            <li style={{ marginBottom: 4 }}>
              Useful when EV charging + home loads would exceed your main fuse capacity
            </li>
            <li style={{ marginBottom: 4 }}>
              Some tariffs charge extra for peak 15-minute demand — peak shaving avoids this
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ margin: '0 0 6px', color: '#e0af68' }}>
            Backup / Reserve
          </h4>
          <p style={{ margin: '0 0 6px' }}>
            Keep a minimum state of charge (SoC) reserved for power outages.
          </p>
          <ul style={{ margin: '0', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Set a reserve level (e.g., 20%) that the battery will not discharge below during normal operation
            </li>
            <li style={{ marginBottom: 4 }}>
              During a grid outage, the battery powers critical loads (if the inverter supports backup)
            </li>
            <li style={{ marginBottom: 4 }}>
              Trade-off: higher reserve = less usable capacity for daily cycling
            </li>
            <li style={{ marginBottom: 4 }}>
              Some inverters support automatic islanding (disconnecting from grid and powering the home independently)
            </li>
          </ul>
        </div>

        <TipBox type="info">
          The best strategy is often a combination: solar self-consumption during the day, time-of-use arbitrage for the battery, and a small backup reserve for peace of mind.
        </TipBox>
      </SectionCard>

      {/* 4. HEMS — Advanced only */}
      {userLevel === 'advanced' && (
        <SectionCard
          title="Home Energy Management System (HEMS)"
          isOpen={openSections.has('hems')}
          onToggle={() => toggle('hems')}
          accentColor="#bb9af7"
        >
          <p style={{ margin: '0 0 10px' }}>
            A HEMS is a central controller that optimizes all energy flows in your home. It reads data from every device, applies optimization rules, and sends control commands to maximize savings, self-consumption, or comfort.
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Integration points:</strong>
          </p>
          <div
            style={{
              backgroundColor: '#16161e',
              borderRadius: 6,
              padding: 14,
              marginBottom: 12,
              fontFamily: 'monospace',
              fontSize: 12,
              color: '#a9b1d6',
              lineHeight: 1.8,
            }}
          >
            Inverter ←→ HEMS &nbsp;&nbsp;(Modbus TCP / SunSpec)
            <br />
            Smart Meter ←→ HEMS &nbsp;&nbsp;(Modbus RTU / P1 port)
            <br />
            EV Charger ←→ HEMS &nbsp;&nbsp;(OCPP 1.6/2.0.1)
            <br />
            Battery ←→ HEMS &nbsp;&nbsp;(CAN bus / Modbus / manufacturer API)
            <br />
            Heat Pump ←→ HEMS &nbsp;&nbsp;(Modbus / SG Ready / EEBUS)
            <br />
            Tariff API ←→ HEMS &nbsp;&nbsp;(REST API / MQTT)
            <br />
            Weather API ←→ HEMS &nbsp;&nbsp;(REST API for solar forecast)
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Decision inputs:</strong>
          </p>
          <ul style={{ margin: '0 0 12px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Current solar production</strong> — real-time measurement from inverter or CT clamp
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Forecasted solar</strong> — weather-based prediction for the coming hours/day
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Electricity prices</strong> — current and upcoming tariff rates (spot price or time-of-use schedule)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>EV departure time</strong> — when the car needs to be ready, and target SoC
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Battery SoC</strong> — current state of charge and available capacity
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Home consumption pattern</strong> — historical and predicted load profile
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Grid constraints</strong> — export limits, main fuse rating, demand charge thresholds
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Optimization logic example:</strong>
          </p>
          <div
            style={{
              backgroundColor: '#16161e',
              borderRadius: 6,
              padding: 14,
              marginBottom: 12,
              fontFamily: 'monospace',
              fontSize: 12,
              color: '#a9b1d6',
              lineHeight: 1.8,
            }}
          >
            solar_surplus = solar_production - home_consumption
            <br />
            <br />
            if solar_surplus &gt; 0:
            <br />
            &nbsp;&nbsp;1. Charge battery (up to max charge rate)
            <br />
            &nbsp;&nbsp;2. Remaining surplus → charge EV (if connected)
            <br />
            &nbsp;&nbsp;3. Remaining surplus → heat hot water
            <br />
            &nbsp;&nbsp;4. Remaining surplus → export to grid
            <br />
            <br />
            if solar_surplus &lt;= 0:
            <br />
            &nbsp;&nbsp;1. Discharge battery (if tariff is expensive)
            <br />
            &nbsp;&nbsp;2. Import from grid (if tariff is cheap)
            <br />
            &nbsp;&nbsp;3. Pause EV charging (if in solar-only mode)
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Implementation options:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Commercial energy management systems:</strong> Purpose-built appliances that integrate with specific inverter and charger brands. Often include solar forecasting and tariff optimization.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Home Assistant:</strong> Open-source home automation platform with excellent energy dashboard and integrations for most solar inverters, batteries, and EV chargers. Extensible with custom automations.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Node-RED:</strong> Flow-based programming tool that can read Modbus registers, call APIs, and send OCPP commands. Good for custom energy management logic.
            </li>
          </ul>

          <TipBox type="info">
            A good HEMS can save an additional 10–20% on electricity costs beyond what solar and battery alone provide, by making intelligent real-time decisions about when and where to use energy.
          </TipBox>
        </SectionCard>
      )}

      {/* 5. Grid Services and Demand Response */}
      {userLevel === 'advanced' && (
        <SectionCard
          title="Grid Services and Demand Response"
          isOpen={openSections.has('grid-services')}
          onToggle={() => toggle('grid-services')}
          accentColor="#73daca"
        >
          <p style={{ margin: '0 0 10px' }}>
            Home batteries and EVs are not just consumer devices — they can participate in grid-level services, earning revenue while helping stabilize the electricity grid.
          </p>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#e0af68' }}>
              Frequency Regulation
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              The grid must maintain a frequency of exactly 50 Hz (or 60 Hz in some regions). Batteries can inject or absorb power within milliseconds to help maintain this balance.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                FCR (Frequency Containment Reserve): Automatic response within seconds
              </li>
              <li style={{ marginBottom: 4 }}>
                Requires fast-responding battery with bidirectional inverter
              </li>
              <li style={{ marginBottom: 4 }}>
                Usually managed through an aggregator, not directly by homeowners
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#7aa2f7' }}>
              Virtual Power Plants (VPP)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              A VPP aggregates thousands of distributed batteries and controllable loads into a single virtual resource that can be dispatched like a traditional power plant.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Homeowners opt in through their battery manufacturer or energy retailer
              </li>
              <li style={{ marginBottom: 4 }}>
                The aggregator sends discharge commands during grid stress events
              </li>
              <li style={{ marginBottom: 4 }}>
                Participants receive payments or tariff credits for making their battery available
              </li>
              <li style={{ marginBottom: 4 }}>
                Batteries typically maintain a minimum SoC for household needs
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <h4 style={{ margin: '0 0 6px', color: '#9ece6a' }}>
              Vehicle-to-Grid (V2G)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              V2G enables an EV to discharge power back to the grid, effectively turning the car into a mobile battery. A 60 kWh EV battery is significantly larger than a typical 10 kWh home battery.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Requires a bidirectional charger and a V2G-capable EV
              </li>
              <li style={{ marginBottom: 4 }}>
                Currently supported by a limited number of vehicles (e.g., Nissan Leaf via CHAdeMO, some newer models via CCS)
              </li>
              <li style={{ marginBottom: 4 }}>
                ISO 15118-20 and OCPP 2.0.1 provide the protocol support
              </li>
              <li style={{ marginBottom: 4 }}>
                Battery degradation concerns exist, though modern EVs handle shallow cycling well
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ margin: '0 0 6px', color: '#f7768e' }}>
              Vehicle-to-Home (V2H)
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              Similar to V2G but the EV discharges only to power the home, not back to the grid. Simpler to implement and does not require utility approval in most jurisdictions.
            </p>
            <ul style={{ margin: '0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                EV acts as a home battery backup during outages or peak tariff periods
              </li>
              <li style={{ marginBottom: 4 }}>
                Can provide 10–20 kWh of usable energy while maintaining enough charge for the next trip
              </li>
              <li style={{ marginBottom: 4 }}>
                Particularly valuable for homes without a dedicated stationary battery
              </li>
            </ul>
          </div>

          <TipBox type="warning">
            V2G and VPP participation may affect your battery warranty. Check manufacturer terms before enrolling. Most programs limit the number of additional cycles to minimize degradation impact.
          </TipBox>
        </SectionCard>
      )}
    </div>
  );
}
