import React, { useState } from 'react';
import { useEnergyStore } from '../../store/energyStore';

interface SectionData {
  title: string;
  content: React.ReactNode;
  advanced?: boolean;
}

function AccordionCard({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
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
          color: '#7aa2f7',
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

export default function LearnSection() {
  const userLevel = useEnergyStore((s) => s.userLevel);
  const [openSections, setOpenSections] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const sections: SectionData[] = [
    {
      title: '☀️ How Does a Home Solar System Work?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            A home solar system converts sunlight into usable electricity for your household. Here is how the energy flows:
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
              lineHeight: 1.8,
            }}
          >
            Sunlight → <strong>Solar Panels</strong> (DC electricity)
            <br />
            &nbsp;&nbsp;→ <strong>Inverter</strong> (converts DC to AC)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>Your Home</strong> (powers appliances)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>Battery</strong> (stores excess)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;→ <strong>Grid</strong> (exports surplus)
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Solar Panels</strong> are made of photovoltaic (PV) cells that generate direct current (DC) electricity when exposed to sunlight. Even on cloudy days, panels still produce some energy, though at reduced output.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            The <strong style={{ color: '#bb9af7' }}>inverter</strong> is the brain of the system. It converts the DC electricity from panels into alternating current (AC) that your home appliances use. A hybrid inverter can also manage a battery.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            Your home uses solar electricity first. Any excess can be stored in a <strong style={{ color: '#bb9af7' }}>home battery</strong> for later use, or exported to the <strong style={{ color: '#bb9af7' }}>grid</strong> for a feed-in tariff credit.
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            The goal is to use as much of your own solar as possible — this is called <strong>self-consumption</strong>, and it saves you the most money.
          </p>
        </>
      ),
    },
    {
      title: '📊 What is a Smart Meter?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            A smart meter is a digital electricity meter that measures both the electricity you <strong style={{ color: '#f7768e' }}>import</strong> from the grid and the electricity you <strong style={{ color: '#9ece6a' }}>export</strong> back to it.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Key features:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Records energy usage in near real-time (typically every 5–15 seconds for instantaneous power, logged every 15 minutes)
            </li>
            <li style={{ marginBottom: 4 }}>
              Communicates with your utility company automatically — no more manual meter readings
            </li>
            <li style={{ marginBottom: 4 }}>
              Enables <strong>time-of-use tariffs</strong> where electricity costs different amounts at different times of day
            </li>
            <li style={{ marginBottom: 4 }}>
              Measures both import and export, allowing accurate billing with solar
            </li>
            <li style={{ marginBottom: 4 }}>
              Many smart meters provide a local data interface (e.g., P1 port, Modbus) that a home energy management system can read
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            A smart meter is essential for optimizing solar self-consumption and for participating in dynamic tariff programs.
          </p>
        </>
      ),
    },
    {
      title: '💰 Understanding Your Electricity Bill',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            With a solar system, your electricity bill is calculated based on two main flows:
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 10,
              marginBottom: 12,
            }}
          >
            <div
              style={{
                backgroundColor: '#1a1a2e',
                borderRadius: 6,
                padding: 12,
                borderLeft: '3px solid #f7768e',
              }}
            >
              <strong style={{ color: '#f7768e' }}>Import (you pay)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Electricity drawn from the grid when your solar and battery cannot cover your needs. Typically $0.25–$0.45/kWh depending on your tariff and time of day.
              </p>
            </div>
            <div
              style={{
                backgroundColor: '#1a1a2e',
                borderRadius: 6,
                padding: 12,
                borderLeft: '3px solid #9ece6a',
              }}
            >
              <strong style={{ color: '#9ece6a' }}>Export (you earn)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Excess solar sent to the grid earns you a feed-in tariff. Typically $0.05–$0.12/kWh — much less than what you pay to import.
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Self-consumption savings:</strong> Every kWh of solar you use directly avoids importing at the full retail rate. If import is $0.30/kWh and export is $0.08/kWh, each self-consumed kWh saves you $0.30 instead of earning only $0.08.
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            This is why maximizing self-consumption (using solar directly or storing it in a battery) is more valuable than exporting to the grid.
          </p>
        </>
      ),
    },
    {
      title: '🔋 What is a Home Battery?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            A home battery (also called a solar battery or energy storage system) stores excess solar energy for use when the sun is not shining.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>How it works:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Charges</strong> during the day when solar production exceeds home consumption
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Discharges</strong> in the evening and at night to power your home instead of importing from the grid
            </li>
            <li style={{ marginBottom: 4 }}>
              Significantly increases your <strong>self-consumption rate</strong> — from typically 30–40% without a battery to 60–80% with one
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Typical specifications:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Capacity:</strong> 5–15 kWh usable (a typical home uses 8–12 kWh overnight)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Power:</strong> 2.5–5 kW continuous charge/discharge rate
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Cycle life:</strong> 4,000–10,000 cycles depending on chemistry
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Round-trip efficiency:</strong> 90–95% (you lose 5–10% in the charge/discharge cycle)
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            A battery is most valuable when there is a large gap between your feed-in tariff and import tariff, or if you are on a time-of-use plan.
          </p>
        </>
      ),
    },
    {
      title: '🚗 EV Charging at Home',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Charging an electric vehicle at home is one of the largest controllable loads in a household, making it ideal for smart energy management.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Charging levels:</strong>
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 10,
              marginBottom: 12,
            }}
          >
            <div
              style={{
                backgroundColor: '#1a1a2e',
                borderRadius: 6,
                padding: 12,
                borderLeft: '3px solid #e0af68',
              }}
            >
              <strong style={{ color: '#e0af68' }}>Level 1 (Slow)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Standard outlet, 1.4–2.4 kW. Adds about 8–15 km of range per hour. Fine for overnight top-ups with short commutes.
              </p>
            </div>
            <div
              style={{
                backgroundColor: '#1a1a2e',
                borderRadius: 6,
                padding: 12,
                borderLeft: '3px solid #7aa2f7',
              }}
            >
              <strong style={{ color: '#7aa2f7' }}>Level 2 (Fast)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Dedicated EVSE, 3.7–22 kW. Single phase (up to 7.4 kW) or three phase (up to 22 kW). Adds 25–120 km/hour.
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Single phase vs three phase:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Single phase:</strong> Most common in residential. Max 32A × 230V = 7.4 kW
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Three phase:</strong> Available in some markets. Max 32A × 3 × 230V = 22 kW
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Smart charging benefits:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Charge with surplus solar to minimize electricity costs
            </li>
            <li style={{ marginBottom: 4 }}>
              Schedule charging for off-peak tariff periods
            </li>
            <li style={{ marginBottom: 4 }}>
              Dynamically adjust charge rate to match available solar power
            </li>
            <li style={{ marginBottom: 4 }}>
              Prevent overloading your grid connection
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            An EV battery (40–100 kWh) is much larger than a home battery (5–15 kWh), so smart charging decisions have a significant impact on your energy costs.
          </p>
        </>
      ),
    },
    {
      title: '⚡ What is an Inverter?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            An inverter converts direct current (DC) electricity from solar panels into alternating current (AC) that your home and the grid use. It is the central component of any solar system.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Types of inverters:</strong>
          </p>
          <div style={{ marginBottom: 12 }}>
            <div
              style={{
                backgroundColor: '#1a1a2e',
                borderRadius: 6,
                padding: 12,
                marginBottom: 8,
                borderLeft: '3px solid #e0af68',
              }}
            >
              <strong style={{ color: '#e0af68' }}>String Inverter</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Panels are connected in series (a &quot;string&quot;). One inverter handles the whole string. Cost-effective but the weakest panel limits the entire string. Best for roofs without shading.
              </p>
            </div>
            <div
              style={{
                backgroundColor: '#1a1a2e',
                borderRadius: 6,
                padding: 12,
                marginBottom: 8,
                borderLeft: '3px solid #7aa2f7',
              }}
            >
              <strong style={{ color: '#7aa2f7' }}>Micro Inverter</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Each panel has its own small inverter. Panels operate independently, so shading on one panel does not affect others. Higher cost but better for complex roofs or partial shading.
              </p>
            </div>
            <div
              style={{
                backgroundColor: '#1a1a2e',
                borderRadius: 6,
                padding: 12,
                borderLeft: '3px solid #9ece6a',
              }}
            >
              <strong style={{ color: '#9ece6a' }}>Hybrid Inverter</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Combines a solar inverter and battery inverter in one unit. Manages solar production, battery charging/discharging, and grid interaction. The most common choice for new installations with battery storage.
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Efficiency:</strong> Modern inverters are 96–98% efficient. This means for every 1000W of DC input, you get 960–980W of AC output. The small loss is converted to heat.
          </p>
          <p style={{ margin: 0, color: '#73daca' }}>
            Inverter sizing matters: it should roughly match your solar array size. An undersized inverter will clip (waste) peak solar production, while an oversized inverter wastes money.
          </p>
        </>
      ),
    },
    {
      title: '📐 System Sizing Guide',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Correctly sizing your solar, battery, and inverter system is critical for maximizing return on investment.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Solar array sizing:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Start with your annual electricity consumption (e.g., 6,000 kWh/year)
            </li>
            <li style={{ marginBottom: 4 }}>
              Divide by your location&apos;s peak sun hours × 365 (e.g., 4.5 hours × 365 = 1,642)
            </li>
            <li style={{ marginBottom: 4 }}>
              Apply a derate factor of 0.8 for losses: 6,000 / (1,642 × 0.8) ≈ 4.6 kW system
            </li>
            <li style={{ marginBottom: 4 }}>
              Rule of thumb: 1 kW of solar produces approximately 1,200–1,600 kWh/year depending on location
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Battery sizing:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Calculate your evening/night consumption (typically 8–12 kWh for an average home)
            </li>
            <li style={{ marginBottom: 4 }}>
              Choose a battery that covers 80–100% of this overnight load
            </li>
            <li style={{ marginBottom: 4 }}>
              Account for depth of discharge (DoD): a 10 kWh battery at 90% DoD provides 9 kWh usable
            </li>
            <li style={{ marginBottom: 4 }}>
              Oversizing the battery provides diminishing returns unless you have very large solar
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Inverter sizing:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Match the inverter to your solar array: a 1:1 to 1.3:1 DC:AC ratio is typical
            </li>
            <li style={{ marginBottom: 4 }}>
              A slight oversize (e.g., 6.6 kW panels on a 5 kW inverter) maximizes morning and afternoon output
            </li>
            <li style={{ marginBottom: 4 }}>
              Ensure the inverter supports your battery&apos;s charge/discharge rate if hybrid
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '🔌 Grid Connection Types',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            How your solar system connects to the grid affects what you can install and how much you can export.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Connection phases:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Single phase:</strong> Standard residential connection. Typically 40–63A main fuse. Limits inverter to 5 kW in many jurisdictions. One live wire.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Three phase:</strong> Common in newer homes and some regions. Three live wires, each carrying a phase. Allows larger inverters (up to 15–30 kW), three-phase EV charging (22 kW), and better load balancing.
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Export configurations:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Full export:</strong> No limit on how much you can send to the grid (uncommon in new installations)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Export limited:</strong> The inverter is configured to limit grid export to a set value (e.g., 5 kW). Excess solar is curtailed or diverted to battery/EV.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Zero export:</strong> No electricity may be exported. The inverter must throttle production to match consumption exactly. Requires a CT clamp or meter for real-time feedback.
            </li>
          </ul>
          <p style={{ margin: 0, color: '#73daca' }}>
            Export limiting allows you to install a larger solar system even when grid export capacity is restricted — the excess charges your battery or EV instead.
          </p>
        </>
      ),
    },
    {
      title: '🧪 Battery Chemistry Comparison',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            The two dominant lithium-ion chemistries in home batteries are LFP and NMC.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 10,
              marginBottom: 12,
            }}
          >
            <div
              style={{
                backgroundColor: '#1a1a2e',
                borderRadius: 6,
                padding: 12,
                borderLeft: '3px solid #9ece6a',
              }}
            >
              <strong style={{ color: '#9ece6a' }}>LFP (Lithium Iron Phosphate)</strong>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>6,000–10,000+ cycle life</li>
                <li style={{ marginBottom: 3 }}>Very safe, thermally stable</li>
                <li style={{ marginBottom: 3 }}>100% depth of discharge (DoD)</li>
                <li style={{ marginBottom: 3 }}>Lower energy density (heavier)</li>
                <li style={{ marginBottom: 3 }}>No cobalt — more ethical supply chain</li>
                <li>Examples: BYD, Tesla Powerwall 3</li>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: '#1a1a2e',
                borderRadius: 6,
                padding: 12,
                borderLeft: '3px solid #7aa2f7',
              }}
            >
              <strong style={{ color: '#7aa2f7' }}>NMC (Nickel Manganese Cobalt)</strong>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>3,000–5,000 cycle life</li>
                <li style={{ marginBottom: 3 }}>Higher energy density (lighter)</li>
                <li style={{ marginBottom: 3 }}>Typically 80–90% DoD recommended</li>
                <li style={{ marginBottom: 3 }}>Requires more thermal management</li>
                <li style={{ marginBottom: 3 }}>Higher cost per cycle over lifetime</li>
                <li>Examples: LG RESU, older Powerwall</li>
              </ul>
            </div>
          </div>
          <p style={{ margin: 0, color: '#73daca' }}>
            For daily cycling in a home solar system, LFP is now the preferred chemistry due to its longer cycle life, safety, and improving cost per kWh over the battery lifetime.
          </p>
        </>
      ),
    },
    {
      title: '🌡️ Heat Pump Integration',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Heat pumps are highly efficient electric heaters that pair well with solar systems, using electricity to move heat rather than generate it directly.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>COP (Coefficient of Performance):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              A COP of 3.5 means for every 1 kW of electricity consumed, the heat pump delivers 3.5 kW of heat
            </li>
            <li style={{ marginBottom: 4 }}>
              COP varies with outdoor temperature — lower in extreme cold
            </li>
            <li style={{ marginBottom: 4 }}>
              Seasonal COP (SCOP) of 3.0–4.0 is typical for modern air-source heat pumps
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Thermal storage:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              A hot water tank acts as a thermal battery — heat water with excess solar during the day
            </li>
            <li style={{ marginBottom: 4 }}>
              Preheat the house before expensive tariff periods using solar or cheap-rate electricity
            </li>
            <li style={{ marginBottom: 4 }}>
              Buffer tanks store thermal energy with minimal loss over several hours
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Smart grid interaction:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              A HEMS can signal the heat pump to run during solar surplus or low grid prices
            </li>
            <li style={{ marginBottom: 4 }}>
              SG Ready interface (common in European heat pumps) enables external control via two digital inputs
            </li>
            <li style={{ marginBottom: 4 }}>
              Some heat pumps support Modbus for direct integration with energy management systems
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '📡 Monitoring and Data',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Monitoring your energy system is essential for understanding performance, identifying issues, and optimizing usage.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>CT Clamps (Current Transformers):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Clip-on sensors that measure current flowing through a cable without cutting into it
            </li>
            <li style={{ marginBottom: 4 }}>
              Placed on the grid feed, solar feed, and individual circuits to measure power flow
            </li>
            <li style={{ marginBottom: 4 }}>
              Used by many inverters and energy monitors for real-time feedback
            </li>
            <li style={{ marginBottom: 4 }}>
              Accuracy depends on quality — typically 1–2% for good CTs
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Energy monitoring systems:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Inverter portals:</strong> Most inverters have cloud dashboards (Fronius Solar.web, Huawei FusionSolar, SMA Sunny Portal)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Dedicated monitors:</strong> Devices like Shelly EM, Emporia Vue, or IoTaWatt provide granular circuit-level monitoring
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>DIY platforms:</strong> Home Assistant with energy dashboard, Grafana with InfluxDB for time-series data
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>HEMS (Home Energy Management System):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              Centralized controller that reads data from all devices and makes optimization decisions
            </li>
            <li style={{ marginBottom: 4 }}>
              Protocols used: Modbus TCP/RTU for inverters and meters, OCPP for EV chargers, MQTT for IoT sensors
            </li>
            <li style={{ marginBottom: 4 }}>
              Can automate battery charging, EV charging, heat pump scheduling, and export management
            </li>
          </ul>
        </>
      ),
    },
  ];

  const visibleSections = sections.filter(
    (s) => !s.advanced || userLevel === 'advanced'
  );

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
          Learn: Home Energy Systems
        </h2>
        <p style={{ margin: 0, fontSize: 13, color: '#888' }}>
          {userLevel === 'beginner'
            ? 'Foundational concepts for understanding home energy. Switch to Advanced for more technical content.'
            : 'All topics shown, including advanced system design and technical details.'}
        </p>
      </div>
      {visibleSections.map((section, idx) => (
        <AccordionCard
          key={idx}
          title={section.title}
          isOpen={openSections.has(idx)}
          onToggle={() => toggle(idx)}
        >
          {section.content}
        </AccordionCard>
      ))}
    </div>
  );
}
