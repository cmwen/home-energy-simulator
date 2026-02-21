import React from 'react';
import type { Translations } from './types';

const codeBlockStyle: React.CSSProperties = {
  backgroundColor: '#16161e',
  borderRadius: 6,
  padding: 12,
  margin: '8px 0',
  fontFamily: '"Fira Code", "Cascadia Code", "Consolas", monospace',
  fontSize: 12,
  lineHeight: 1.6,
  color: '#a9b1d6',
  overflowX: 'auto',
  border: '1px solid #2a2a3e',
};

export const en: Translations = {
  // ── Nav ──
  nav_title: 'Home Energy Simulator',
  nav_simulator: 'Simulator',
  nav_scenarios: 'Scenarios',
  nav_learn: 'Learn',
  nav_protocols: 'Protocols',
  nav_strategies: 'Strategies',
  nav_level: 'Level:',
  nav_level_beginner: 'beginner',
  nav_level_advanced: 'advanced',

  // ── Footer ──
  footer_text: 'Home Energy Simulator — Interactive learning tool for residential energy systems',

  // ── Theme ──
  theme_light: 'Light',
  theme_dark: 'Dark',
  theme_auto: 'Auto',

  // ── SystemSummary ──
  summary_solar_generation: 'Solar Generation',
  summary_home_consumption: 'Home Consumption',
  summary_grid_import: 'Grid Import',
  summary_grid_export: 'Grid Export',
  summary_battery: 'Battery',
  summary_battery_idle: 'Idle',
  summary_battery_charging: 'Charging',
  summary_battery_discharging: 'Discharging',
  summary_ev: 'EV',
  summary_ev_full: 'Full',
  summary_ev_not_charging: 'Not charging',
  summary_self_consumption: 'Self-Consumption',
  summary_self_sufficiency: 'Self-Sufficiency',

  // ── SessionStatsPanel ──
  stats_session_totals: 'Session Totals',
  stats_press_play: '— press Play to accumulate',
  stats_reset: 'Reset',
  stats_solar_generated: 'Solar Generated',
  stats_self_used: 'self-used',
  stats_exported: 'exported',
  stats_grid_imported: 'Grid Imported',
  stats_cost: 'Cost:',
  stats_grid_exported: 'Grid Exported',
  stats_earned: 'Earned:',
  stats_solar_value: 'Solar Value',
  stats_avoided_import_fit: 'avoided import + FiT earned',
  stats_net_grid_cost: 'Net Grid Cost',
  stats_net_credit: 'net credit (exported more than cost)',
  stats_import_minus_fit: 'import spend minus FiT',
  stats_home_consumed: 'Home Consumed',
  stats_total_load: 'total load (incl. EV)',
  stats_fit: 'FiT',

  // ── SimulationControls ──
  sim_pause: 'Pause',
  sim_play: 'Play',
  sim_speed: 'Speed',
  sim_time: 'Time:',
  sim_clouds: 'Clouds:',
  sim_season: 'Season',
  sim_temperature: 'Temperature',
  sim_spring: 'Spring',
  sim_summer: 'Summer',
  sim_autumn: 'Autumn',
  sim_winter: 'Winter',

  // ── ComponentEditor ──
  editor_enabled: 'Enabled',
  editor_disabled: 'Disabled',
  editor_remove_component: 'Remove Component',
  editor_power_override: 'Power Override',

  // Type labels
  type_grid: 'Power Grid',
  type_smart_meter: 'Smart Meter',
  type_grid_meter: 'Grid Meter (NMI)',
  type_energy_monitor: 'Energy Monitor (CT)',
  type_main_switchboard: 'Main Switchboard',
  type_solar_panels: 'Solar Panels',
  type_inverter: 'Inverter',
  type_battery: 'Battery',
  type_ev_charger: 'EV Charger',
  type_home_load: 'Home Load',
  type_heat_pump: 'Heat Pump',

  // Field labels
  field_panel_count: 'Panel Count',
  field_panel_wattage: 'Panel Wattage',
  field_roof_angle: 'Roof Angle',
  field_capacity: 'Capacity',
  field_current_soc: 'Current SOC',
  field_max_charge_rate: 'Max Charge Rate',
  field_max_discharge_rate: 'Max Discharge Rate',
  field_max_current: 'Max Current',
  field_phases: 'Phases',
  field_phase_single: '1-Phase',
  field_phase_three: '3-Phase',
  field_voltage: 'Voltage',
  field_charging_standard: 'Charging Standard',
  field_charging_mode: 'Charging Mode',
  field_is_charging: 'Is Charging',
  field_ev_battery: 'EV Battery (start %)',
  field_ev_capacity: 'EV Capacity',
  field_efficiency: 'Efficiency',
  field_max_output: 'Max Output',
  field_hybrid_mode: 'Hybrid Mode',
  field_grid_export_limit: 'Grid Export Limit',
  field_feed_in_tariff: 'Feed-in Tariff',
  field_import_tariff: 'Import Tariff',
  field_base_load: 'Base Load',
  field_cop_rating: 'COP Rating',

  // Charging modes
  mode_fast: 'Fast',
  mode_eco: 'Eco',
  mode_solar_only: 'Solar Only',
  mode_scheduled: 'Scheduled',

  // Info blurbs
  info_grid_meter: 'This is the Ausgrid/DNSP NMI meter at the property boundary. It records import/export for billing and sets the export limit rule. You cannot read or control it directly.',
  info_energy_monitor: 'Consumer-side CT clamp monitor (e.g. Shelly EM, Emporia Vue) — installed at your main switchboard. Enables real-time solar surplus measurement, required for solar-only EV charging and inverter zero-export throttling.',
  info_switchboard: 'The main AC distribution board inside your home. Every AC load (home circuits, EV charger, heat pump) connects here. The inverter AC output and the grid connection both feed into this board.',

  // ── AddComponentPanel ──
  add_component: 'Add Component',
  add_switchboard: 'Switchboard',

  // ── SetupToolbar ──
  setup_label: 'Setup',
  setup_save_json: 'Save JSON',
  setup_load_json: 'Load JSON',
  setup_share_url: 'Share URL',
  setup_reset: 'Reset',
  setup_downloaded: 'Setup downloaded',
  setup_invalid_file: 'Invalid setup file — could not parse JSON',
  setup_loaded: 'Loaded:',
  setup_url_copied: 'Share URL copied to clipboard',
  setup_reset_confirm: 'Reset to default system? This will discard your current setup.',
  setup_reset_done: 'Reset to default',
  setup_auto_saved: 'Auto-saved locally',
  setup_auto_saved_tooltip: 'Your setup is automatically saved to this browser\'s local storage',

  // ── ScenariosSection ──
  scenarios_title: 'Scenarios',
  scenarios_description: 'Real Australian homeowner setups, pre-configured and ready to explore. Load a scenario to see how the system behaves — then adjust sliders, enable components, or run the simulation to understand the trade-offs.',
  scenarios_active: 'Active',
  scenarios_goal: 'Goal',
  scenarios_context: 'Australian Context',
  scenarios_what_unlocks: 'What does this setup unlock?',
  scenarios_what_setup_unlocks: 'What this setup unlocks',
  scenarios_load: 'Load Scenario →',
  scenarios_currently_loaded: 'Currently Loaded',
  scenarios_tip_label: 'Tip: ',
  scenarios_tip: 'After loading a scenario, switch to the Simulator tab to see the live system diagram and power flows. Use the Add Component panel to add or remove devices, and the Learn tab to understand what each component does.',

  // ── Scenario preset strings ──
  scenario_solar_only_name: 'Solar Only — Reduce My Bill',
  scenario_solar_only_tagline: 'Entry-level solar, no battery yet',
  scenario_solar_only_description: 'A new solar owner with 6.6 kW of panels and a 5 kW inverter. No battery, no EV. Goal is to shift daytime appliance use to solar hours and export the rest.',
  scenario_solar_only_goal: 'Reduce electricity bill by maximising daytime self-consumption.',
  scenario_solar_only_context: 'Ausgrid zone. 5 kW export limit applies. Feed-in tariff is low (~5¢/kWh) so self-use is far more valuable than exporting.',

  scenario_solar_battery_name: 'Solar + Battery — Zero Night Bill',
  scenario_solar_battery_tagline: 'Store solar for evening use',
  scenario_solar_battery_description: 'The most common upgrade path. A 10 kWh battery stores surplus midday solar to power the home through the evening and night, eliminating most grid imports.',
  scenario_solar_battery_goal: 'Cover evening and overnight consumption with stored solar. Aim for 80%+ self-sufficiency.',
  scenario_solar_battery_context: 'Without a battery, 60–70% of solar might be exported at low feed-in rates. With a 10 kWh battery, most homes can reach near-zero grid imports on sunny days.',

  scenario_solar_ev_name: 'Solar + EV — Charge Free From the Sun',
  scenario_solar_ev_tagline: 'Use solar surplus to charge your EV',
  scenario_solar_ev_description: 'An EV owner who wants to charge their car from solar during the day. The EV charger plugs into a dedicated 32A circuit on the switchboard — not the inverter. A consumer energy monitor (CT clamp) lets the charger see real-time solar surplus and dial its power up or down accordingly.',
  scenario_solar_ev_goal: 'Charge the EV for free using surplus solar. Avoid drawing from the grid for EV charging.',
  scenario_solar_ev_context: 'The EV charger sits on the main switchboard — it draws from whatever the board is fed with (solar, battery, or grid). A CT clamp monitors the grid connection: when solar surplus pushes the meter to zero import, the charger ramps up. Without a CT clamp or energy monitor, "solar-only" charging is not possible.',

  scenario_full_system_name: 'Full System — Solar + Battery + EV',
  scenario_full_system_tagline: 'The complete off-grid-leaning home',
  scenario_full_system_description: 'The setup most homeowners are working towards: solar panels, hybrid inverter, home battery, and a smart EV charger — all orchestrated by an energy monitor. Priority is to use solar first, store surplus in the battery, use battery to charge the EV overnight, and only touch the grid when necessary.',
  scenario_full_system_goal: 'Achieve 90%+ self-sufficiency. Use solar for daytime loads, battery for evenings, and grid only as backup.',
  scenario_full_system_context: 'This is the scenario where the interplay between components matters most. The grid meter sees the net flow at the property boundary. The energy monitor gives the HEMS real-time data to make smart decisions across all four devices.',

  scenario_zero_export_name: 'Zero Export — Apartment / Embedded Network',
  scenario_zero_export_tagline: 'No export allowed — use every watt on-site',
  scenario_zero_export_description: 'Some homes are in embedded networks (strata, new estates) or have a DNSP restriction that forbids exporting to the grid. Every watt of solar must be consumed or stored on-site. This requires the inverter to throttle itself in real time using CT clamp feedback.',
  scenario_zero_export_goal: 'Use 100% of solar on-site. Battery absorbs surplus; inverter throttles if battery is full.',
  scenario_zero_export_context: 'Zero-export mode is configured in the inverter settings, with a CT clamp on the grid connection providing real-time feedback. The energy monitor is essential here — without it, the inverter cannot know when to throttle.',

  scenario_ev_no_ct_name: 'EV Charging — No CT Clamp (Manual Rate)',
  scenario_ev_no_ct_tagline: 'Solar + EV but no energy monitor — limited control',
  scenario_ev_no_ct_description: 'An EV owner with solar but no CT clamp or energy monitor. Without real-time solar surplus data, the charger cannot dynamically follow solar production. The homeowner must set a fixed charging current manually — typically 6–10A to stay "roughly" within solar output. When solar drops (clouds, afternoon), the grid automatically fills in and the homeowner has no way to prevent it.',
  scenario_ev_no_ct_goal: 'Understand the cost of not having a CT clamp. Compare grid import here vs the Solar + EV (CT Clamp) scenario to see the dollar difference.',
  scenario_ev_no_ct_context: 'Without a CT clamp, smart charging features like "Solar Only" or "Eco" mode are unavailable. The charger runs at a fixed user-set current regardless of solar conditions. Installing a CT clamp ($150–300 for Shelly EM or Emporia Vue) enables dynamic solar charging and can pay for itself within months.',

  // ── Component unlock strings ──
  unlock: {
    gridMeter: [
      'Records import & export for billing (NMI meter)',
      'Sets the export limit rule (e.g. 5 kW in Ausgrid zones)',
      'Enables feed-in tariff credit from your retailer',
    ],
    energyMonitor: [
      'Real-time solar surplus visibility for the HEMS',
      'Required for solar-only EV charging (CT clamp feedback)',
      'Required for inverter zero-export throttling',
      'Enables smart battery dispatch decisions',
    ],
    mainSwitchboard: [
      'AC distribution hub — all loads connect here',
      'EV charger draws from the switchboard, not the inverter',
      'Both solar (via inverter) and grid feed into the board',
    ],
    inverter: [
      'Converts solar DC to household AC',
      'Hybrid mode: manages DC-coupled battery charging',
      'Zero-export mode: throttles output via CT clamp feedback',
    ],
    battery: [
      'Stores surplus solar for evening & overnight use',
      'Raises self-sufficiency from ~35% to ~80%+ on sunny days',
      'Can be charged from off-peak grid tariffs overnight',
    ],
    evCharger: [
      'OCPP 2.0.1: smart charging, dynamic load management',
      'Solar-only mode: charges only when solar surplus > minimum (needs CT clamp)',
      'Scheduled mode: charges at cheapest off-peak tariff window',
    ],
  },

  // ── Education ──
  learn_title: 'Learn: Home Energy Systems',
  learn_beginner_subtitle: 'Foundational concepts for understanding home energy. Switch to Advanced for more technical content.',
  learn_advanced_subtitle: 'All topics shown, including advanced system design and technical details.',

  learn_sections: [
    {
      title: '\u2600\uFE0F How Does a Home Solar System Work?',
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
      title: '\uD83D\uDD0C Grid Meter vs Energy Monitor — What\'s the Difference?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            There are <strong>two very different metering devices</strong> in a solar home. They are often confused because they both measure electricity — but they sit in different places, serve different purposes, and are owned by different parties.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #6366f1' }}>
              <strong style={{ color: '#6366f1' }}>Grid Meter (NMI Meter)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                The <strong>Ausgrid / DNSP bi-directional meter</strong> at the property boundary. Installed and owned by your electricity distributor. Records the total import and export across the whole property for billing. You cannot read or control this meter directly.
              </p>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 12, color: '#9ca3af' }}>
                <li style={{ marginBottom: 3 }}>Sets the export limit rule (e.g. 5 kW in Ausgrid zones)</li>
                <li style={{ marginBottom: 3 }}>Provides billing data to your retailer</li>
                <li style={{ marginBottom: 3 }}>Enables feed-in tariff credit</li>
                <li>You pay the retailer; they read this meter</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #ec4899' }}>
              <strong style={{ color: '#ec4899' }}>Energy Monitor (CT Clamp)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                A <strong>consumer-side device</strong> you install at your main switchboard. Examples: Shelly EM, Emporia Vue, IoTaWatt. Uses clip-on CT sensors on each circuit. Gives your HEMS or inverter real-time power readings in milliseconds.
              </p>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 12, color: '#9ca3af' }}>
                <li style={{ marginBottom: 3 }}>Required for solar-only EV charging</li>
                <li style={{ marginBottom: 3 }}>Required for inverter zero-export throttling</li>
                <li style={{ marginBottom: 3 }}>Enables smart battery dispatch</li>
                <li>You own it and read it</li>
              </ul>
            </div>
          </div>
          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 10, fontFamily: 'monospace', fontSize: 12, color: '#9ece6a', lineHeight: 1.9 }}>
            Grid → <strong>Grid Meter (NMI)</strong> → Main Switchboard<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Energy Monitor (CT)</strong> ← clips onto board wires<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ feeds data to HEMS / inverter
          </div>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>Key rule:</strong> The NMI meter is your bill. The CT clamp is your brain. For smart solar self-consumption — especially solar-only EV charging — you need the CT clamp. The NMI meter alone is not enough.
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDCB0 Understanding Your Electricity Bill',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            With a solar system, your electricity bill is calculated based on two main flows:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #f7768e' }}>
              <strong style={{ color: '#f7768e' }}>Import (you pay)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Electricity drawn from the grid when your solar and battery cannot cover your needs. Typically $0.25–$0.45/kWh depending on your tariff and time of day.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
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
      title: '\uD83D\uDD0B What is a Home Battery?',
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
      title: '\uD83D\uDE97 EV Charging at Home',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Charging an electric vehicle at home is one of the largest controllable loads in a household, making it ideal for smart energy management.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Charging levels:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>Level 1 (Slow)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Standard outlet, 1.4–2.4 kW. Adds about 8–15 km of range per hour. Fine for overnight top-ups with short commutes.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
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
      title: '\u26A1 What is an Inverter?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            An inverter converts direct current (DC) electricity from solar panels into alternating current (AC) that your home and the grid use. It is the central component of any solar system.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Types of inverters:</strong>
          </p>
          <div style={{ marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>String Inverter</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Panels are connected in series (a &quot;string&quot;). One inverter handles the whole string. Cost-effective but the weakest panel limits the entire string. Best for roofs without shading.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Micro Inverter</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Each panel has its own small inverter. Panels operate independently, so shading on one panel does not affect others. Higher cost but better for complex roofs or partial shading.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
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
      title: '\uD83D\uDCD0 System Sizing Guide',
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
      title: '\uD83D\uDD0C Grid Connection Types',
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
      title: '\uD83E\uDDEA Battery Chemistry Comparison',
      advanced: true,
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            The two dominant lithium-ion chemistries in home batteries are LFP and NMC.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
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
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
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
      title: '\uD83C\uDF21\uFE0F Heat Pump Integration',
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
      title: '\uD83D\uDCE1 Monitoring and Data',
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
    {
      title: '\uD83D\uDD0C Home EV Charger Features — What Does a Smart Charger Actually Do?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Not all home EV chargers are equal. A basic charger gives you a fixed power output. A smart charger actively communicates with your home energy system and adjusts charging in real time.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Basic features (all home chargers):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>Fixed power output at the rated amperage (e.g. 16A or 32A)</li>
            <li style={{ marginBottom: 4 }}>Scheduled charging — start/stop at a time you set in an app</li>
            <li style={{ marginBottom: 4 }}>Session energy logging</li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Smart / high-end features:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>Dynamic current adjustment</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                The charger continuously adjusts its current (e.g. 6A–32A) based on signals from the energy monitor. This is the core mechanism for solar-only charging — the charger follows the solar surplus curve in real time.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>App remote control + OTA updates</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Start/stop sessions remotely, configure charging modes, receive firmware updates over the air. Keeps the charger up to date with new protocols and features without an electrician visit.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #bb9af7' }}>
              <strong style={{ color: '#bb9af7' }}>Plug &amp; Charge (ISO 15118)</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                The EV and charger authenticate each other automatically via TLS certificates the moment the cable is plugged in — no RFID card or app needed. Required for future V2G (bidirectional) charging.
              </p>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>OCPP 2.0.1 smart charging</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Enables a central management system (CSMS) to send time-stamped power schedules to the charger. The charger executes the schedule independently — even if the network drops. Required for grid demand response and VPP participation.
              </p>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Is it safe to dynamically adjust the charging current?</strong>
          </p>
          <p style={{ margin: '0 0 8px', fontSize: 13 }}>
            Yes — provided the charger and EV use a standard communication protocol (PWM pilot signal on Mode 2/3 cables, or ISO 15118 on CCS). The charger signals the maximum available current via the pilot; the EV always draws only what it can safely accept. The charger cannot force the EV to draw more than it requests.
          </p>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>One hard rule:</strong> Most EVs will not accept a charge below 6A (1.4 kW single-phase). If solar surplus drops below this threshold, a smart charger must either pause the session or bridge the gap from the grid (Eco mode), not try to charge at 3A.
          </p>
        </>
      ),
    },
    {
      title: '\u2600\uFE0F\uD83D\uDD04 Solar Inverter + EV Charger Integration — Do They Need to Be the Same Brand?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            A common question from solar owners adding an EV charger: <em>{'"Do I need a Fronius/SMA/Huawei charger to work with my Fronius/SMA/Huawei inverter?"'}</em> The short answer is <strong>no</strong> — but understanding why requires knowing which device actually controls the charging.
          </p>
          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 12, fontFamily: 'monospace', fontSize: 12, color: '#9ece6a', lineHeight: 1.9 }}>
            Solar Panels → Inverter (DC→AC) → Main Switchboard<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Energy Monitor (CT clamp)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ real-time data<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EV Charger ← adjusts current
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>The inverter's role:</strong> Convert DC to AC and synchronise with the grid. It does not decide how much power the EV charger draws. That decision comes from the <strong>energy monitor</strong> (CT clamp) and the <strong>charger's own control logic</strong>.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>What actually enables solar-only EV charging:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>A CT clamp / energy monitor</strong> at the switchboard measures solar surplus in real time
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>The EV charger</strong> reads this data (directly via Modbus, or via a HEMS/cloud relay) and adjusts its charge current accordingly
            </li>
            <li style={{ marginBottom: 4 }}>
              The inverter brand is irrelevant to this process — it just produces AC power
            </li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Same-brand advantage (e.g. Fronius Wattpilot + Fronius Smart Meter):</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>Plug-and-play setup — no manual configuration</li>
            <li style={{ marginBottom: 4 }}>Single app for inverter + charger</li>
            <li style={{ marginBottom: 4 }}>Tighter integration, faster update cycles</li>
          </ul>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Open-standard alternative:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>Any CT clamp that exposes Modbus or MQTT (e.g. Shelly EM, IoTaWatt)</li>
            <li style={{ marginBottom: 4 }}>Any OCPP-compatible charger (Myenergi Zappi, Ocular IQ, Smappee)</li>
            <li style={{ marginBottom: 4 }}>Optionally a HEMS like Home Assistant to orchestrate everything</li>
            <li style={{ marginBottom: 4 }}>Advantages: swap brands freely, support any EV, integrate third-party platforms</li>
          </ul>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            <strong>Bottom line:</strong> If you already have a Fronius inverter, a Fronius Wattpilot is the easiest path. But you are not locked in. Any smart charger that reads a CT clamp or HEMS data can achieve the same solar-priority charging result.
          </p>
        </>
      ),
    },
    {
      title: '\u2601\uFE0F Cloud vs Local — What Happens When the Internet Goes Down?',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            Many smart home energy products rely on cloud servers for their apps and control logic. It is important to know which functions require the internet and which run entirely on your local network.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #f7768e' }}>
              <strong style={{ color: '#f7768e' }}>Breaks without internet</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Remote app control (start/stop from outside home)</li>
                <li style={{ marginBottom: 3 }}>Cloud-based energy history &amp; dashboards</li>
                <li style={{ marginBottom: 3 }}>OTA firmware updates</li>
                <li style={{ marginBottom: 3 }}>Solar forecasting (weather data)</li>
                <li>Dynamic electricity price feeds</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>Continues to work locally</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Solar production &amp; EV charging</li>
                <li style={{ marginBottom: 3 }}>Dynamic solar-only charging (CT clamp local loop)</li>
                <li style={{ marginBottom: 3 }}>OCPP charging schedules already downloaded</li>
                <li style={{ marginBottom: 3 }}>Battery charge/discharge cycles</li>
                <li>Heat pump operation</li>
              </ul>
            </div>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Why solar-only EV charging works offline:</strong> The CT clamp, EV charger, and their communication happen entirely on your local network (or even via direct wiring/Modbus). There is no cloud in the loop for the real-time current adjustment. The cloud is only needed for historical logging and remote app access.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Best practice for resilience:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>Ensure your EV charger can run its charging logic locally (check manufacturer specs)</li>
            <li style={{ marginBottom: 4 }}>Use local-first platforms (Home Assistant, local OCPP server) for automation</li>
            <li style={{ marginBottom: 4 }}>Use cloud only for monitoring dashboards, notifications, and remote access</li>
            <li style={{ marginBottom: 4 }}>OCPP 2.0.1 allows charging schedules to be downloaded and executed locally on the charger — no server needed once the schedule is set</li>
          </ul>
          <p style={{ margin: 0, color: '#73daca', fontSize: 13 }}>
            A well-designed system keeps the critical control loop (solar → CT clamp → charger) entirely local. The cloud is useful, but it should never be a single point of failure for your daily energy routine.
          </p>
        </>
      ),
    },
    {
      title: '\uD83D\uDE97 Recommended Smart EV Chargers for Australian Solar Homes',
      content: (
        <>
          <p style={{ margin: '0 0 10px' }}>
            These chargers are well-suited to Australian conditions (single-phase grid, 5 kW export limit, Ausgrid/Endeavour/SA Power zones) and support solar-surplus charging without requiring brand lock-in.
          </p>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8 }}>High Integration / Solar-First</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
                <strong style={{ color: '#9ece6a' }}>Myenergi Zappi (7.4 kW / 22 kW)</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  Best-in-class solar surplus charging with three modes: Eco (solar + grid top-up), Eco+ (solar only, pauses when surplus drops), and Boost (full speed). Works standalone with an external CT clamp — no inverter brand dependency. App control, OCPP support, future-proof.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6 · External CT clamp · App control · 7.4 kW (single phase)</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #bb9af7' }}>
                <strong style={{ color: '#bb9af7' }}>Ocular IQ Home Solar Smart Charger</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  Australian-made, designed specifically for solar homes. Integrates directly with most inverter brands via Modbus or manufacturer APIs. Supports Home Assistant. Can expand to battery and V2H coordination. Good choice if you want local-first control.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 2.0.1 · Modbus · Local API · 7.4 kW</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
                <strong style={{ color: '#7aa2f7' }}>Smappee EV Wall</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  Pairs with the Smappee Energy Monitor (CT clamp) for tight solar integration. Supports dynamic load balancing across multiple chargers. OCPP, local network operation, home energy dashboard. Good for multi-charger households.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6/2.0 · CT clamp pairing · 7.4 kW / 22 kW</div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8 }}>Value / Easy Setup</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
                <strong style={{ color: '#e0af68' }}>Evos 7.4 kW Smart EV Charger</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  Budget-friendly, widely available in Australia. App-controlled scheduling, solar-priority mode via CT clamp. Good for straightforward installations where deep HEMS integration is not required.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>App scheduling · CT clamp support · 7.4 kW</div>
              </div>
              <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, borderLeft: '3px solid #73daca' }}>
                <strong style={{ color: '#73daca' }}>GoodWe HCA G2 (7 kW)</strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
                  Best if you already have a GoodWe inverter — native integration with no extra CT clamp needed. GoodWe's SEMS portal handles solar + EV in one dashboard. OCPP for third-party CSMS if needed.
                </p>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>OCPP 1.6 · GoodWe native integration · 7 kW</div>
              </div>
            </div>
          </div>

          <div style={{ padding: '12px 14px', background: '#16161e', borderRadius: 6, borderLeft: '3px solid #7aa2f7', fontSize: 13, color: '#9ca3af', lineHeight: 1.7 }}>
            <strong style={{ color: '#7aa2f7' }}>Core selection checklist:</strong>
            <ol style={{ margin: '8px 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>Does it support solar-surplus charging via an external CT clamp or Modbus? (required for solar-only mode)</li>
              <li style={{ marginBottom: 4 }}>Does it support OCPP 1.6 or 2.0.1? (required for smart charging and future grid services)</li>
              <li style={{ marginBottom: 4 }}>Can it run its charging logic locally without an internet connection?</li>
              <li style={{ marginBottom: 4 }}>Is it certified for the Australian market? (check RCM mark, AS/NZS 3000 wiring rules compliance)</li>
              <li>Does it support OTA firmware updates? (future-proofing for protocol upgrades)</li>
            </ol>
          </div>
        </>
      ),
    },
  ],

  // ── Protocols ──
  protocols_title: 'Communication Protocols',
  protocols_subtitle: 'How devices in a home energy system talk to each other.',
  protocols_advanced_extra: ' Advanced view includes additional protocols and technical details.',

  protocols_sections: [
    {
      key: 'modbus',
      title: 'Modbus — Industrial Communication Protocol',
      accentColor: '#e0af68',
      content: (userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#e0af68' }}>What it is:</strong> Modbus is a serial communication protocol originally published by Modicon in 1979. It has become the de facto standard for connecting industrial electronic devices and is widely used in home energy systems.
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>How it works:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Master-slave architecture:</strong> One master device (e.g., your energy management system) initiates requests; slave devices (inverter, meter) respond with data.
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Register-based data model:</strong> All data is organized as numbered registers. Each register holds a 16-bit value (0–65535).
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Request-response:</strong> The master asks &quot;read register 40001&quot; and the slave returns the value stored there.
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>In home energy systems:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Inverters:</strong> SMA, Fronius, Huawei, GoodWe, and most others support Modbus TCP or RTU for reading production data and setting power limits
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Smart meters:</strong> Devices like the Eastron SDM630 or Carlo Gavazzi provide real-time power readings via Modbus
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Heat pumps:</strong> Many modern heat pumps expose operational data and accept control commands via Modbus
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Modbus TCP vs RTU:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Modbus TCP</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Over Ethernet / Wi-Fi</li>
                <li style={{ marginBottom: 3 }}>Port 502 (default)</li>
                <li style={{ marginBottom: 3 }}>Easy to integrate with software</li>
                <li>Standard TCP/IP networking</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #9ece6a' }}>
              <strong style={{ color: '#9ece6a' }}>Modbus RTU</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>Over RS-485 serial bus</li>
                <li style={{ marginBottom: 3 }}>Wired, 2-wire connection</li>
                <li style={{ marginBottom: 3 }}>Up to 32 devices on one bus</li>
                <li>Common for meters and sensors</li>
              </ul>
            </div>
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Register types:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>Holding Registers (4xxxx):</strong> Read/write — used for setpoints and configuration (e.g., set power limit)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Input Registers (3xxxx):</strong> Read-only — used for measurements (e.g., current power, voltage, frequency)
            </li>
          </ul>

          {userLevel === 'beginner' && (
            <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, border: '1px solid #2a3e2a' }}>
              <strong style={{ color: '#9ece6a' }}>Beginner tip:</strong> Think of Modbus like a filing cabinet — each drawer (register) holds one piece of data. You ask for a specific drawer number, and the device tells you what is inside.
            </div>
          )}

          {userLevel === 'advanced' && (
            <>
              <p style={{ margin: '12px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>Function codes:</strong>
              </p>
              <pre style={codeBlockStyle}>
                {`FC03 - Read Holding Registers (read setpoints, config)
FC04 - Read Input Registers  (read measurements)
FC06 - Write Single Register  (set one value)
FC16 - Write Multiple Registers (set a range of values)`}
              </pre>
              <p style={{ margin: '8px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>Register map example (Fronius Symo inverter via SunSpec):</strong>
              </p>
              <pre style={codeBlockStyle}>
                {`Register  | Length | Description          | Unit
----------|--------|----------------------|------
40072     | 1      | AC Power (total)     | W
40074     | 1      | AC Frequency         | Hz
40084     | 1      | DC Power             | W
40092     | 1      | Operating State      | enum
40236     | 1      | WMaxLimPct           | %
40242     | 1      | WMaxLim_Ena          | enum`}
              </pre>
              <p style={{ margin: '8px 0 0', fontSize: 13, color: '#888' }}>
                Note: Register addresses and data formats vary by manufacturer. Always consult the device&apos;s Modbus register map documentation.
              </p>
            </>
          )}
        </>
      ),
    },
    {
      key: 'ocpp',
      title: 'OCPP — Open Charge Point Protocol',
      accentColor: '#7aa2f7',
      content: (userLevel) => (
        <>
          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#7aa2f7' }}>What it is:</strong> OCPP (Open Charge Point Protocol) is an open, standardized protocol for communication between EV charging stations and a central management system (CSMS). It enables remote monitoring, control, and smart charging.
          </p>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>OCPP 1.6 vs 2.0.1:</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>OCPP 1.6</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>JSON or SOAP over WebSocket</li>
                <li style={{ marginBottom: 3 }}>Widely adopted, most chargers support it</li>
                <li style={{ marginBottom: 3 }}>Basic smart charging profiles</li>
                <li style={{ marginBottom: 3 }}>Simpler message structure</li>
                <li>No device model / security profiles</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>OCPP 2.0.1</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 13 }}>
                <li style={{ marginBottom: 3 }}>JSON over WebSocket only</li>
                <li style={{ marginBottom: 3 }}>Device model for configuration</li>
                <li style={{ marginBottom: 3 }}>Enhanced security profiles</li>
                <li style={{ marginBottom: 3 }}>ISO 15118 support (Plug &amp; Charge)</li>
                <li>Improved smart charging with cost-based profiles</li>
              </ul>
            </div>
          </div>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Core operations:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>BootNotification:</strong> Charger registers itself with the CSMS on startup
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>Authorize:</strong> Validates user identity (RFID, app, or Plug &amp; Charge)
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>StartTransaction / StopTransaction:</strong> Begins and ends a charging session, tracking energy delivered
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>MeterValues:</strong> Periodic energy readings sent from charger to CSMS during a session
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>SetChargingProfile:</strong> The CSMS sends a power limit schedule to the charger
            </li>
          </ul>

          <p style={{ margin: '0 0 8px' }}>
            <strong style={{ color: '#bb9af7' }}>Smart charging profiles:</strong>
          </p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 20 }}>
            <li style={{ marginBottom: 4 }}>
              <strong>ChargePointMaxProfile:</strong> Sets the overall power limit for the entire charge point
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>TxDefaultProfile:</strong> Default charging schedule applied to all transactions on a connector
            </li>
            <li style={{ marginBottom: 4 }}>
              <strong>TxProfile:</strong> Charging schedule for a specific active transaction — highest priority
            </li>
          </ul>

          <p style={{ margin: '0 0 10px' }}>
            <strong style={{ color: '#bb9af7' }}>How it enables solar charging:</strong> The energy management system (acting as or communicating with a CSMS) reads current solar surplus from the inverter/meter, calculates available power for EV charging, and sends a SetChargingProfile message to the charger with the updated power limit. The charger adjusts its output accordingly, typically updated every 5–60 seconds.
          </p>

          <div style={{ backgroundColor: '#16213e', borderRadius: 6, padding: 12, border: '1px solid #1e3a5f', marginBottom: 12 }}>
            <strong style={{ color: '#7aa2f7' }}>Australian market context:</strong>
            <p style={{ margin: '6px 0 0', fontSize: 13 }}>
              Most residential EV chargers sold in Australia today support <strong>OCPP 1.6</strong>, which is sufficient for basic smart charging and solar integration. <strong>OCPP 2.0.1</strong> — required for ISO 15118 Plug &amp; Charge and bidirectional V2G charging — is only just beginning to appear in the Australian market (2024–2025).
            </p>
            <p style={{ margin: '6px 0 0', fontSize: 13 }}>
              AEMO and ARENA have run smart charging trials using OCPP as the control protocol, treating home chargers as flexible loads. This positions OCPP as the likely standard for any future grid-interactive EV charging programs in Australia. When choosing a charger, OCPP 1.6 support is sufficient for current solar charging needs; OCPP 2.0.1 is worth prioritising if you anticipate participating in V2G or future demand response programs.
            </p>
          </div>

          {userLevel === 'beginner' && (
            <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, border: '1px solid #2a3e2a' }}>
              <strong style={{ color: '#9ece6a' }}>Beginner tip:</strong> OCPP is like a language that your EV charger speaks to the energy management system. The management system says &quot;you can use 3 kW right now&quot; and the charger obeys, adjusting in real time as solar production changes.
            </div>
          )}

          {userLevel === 'advanced' && (
            <>
              <p style={{ margin: '12px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>Message structure (OCPP 1.6 JSON):</strong>
              </p>
              <pre style={codeBlockStyle}>
                {`// Request: [MessageTypeId, UniqueId, Action, Payload]
[2, "msg001", "SetChargingProfile", {
  "connectorId": 1,
  "csChargingProfiles": {
    "chargingProfileId": 1,
    "stackLevel": 0,
    "chargingProfilePurpose": "TxProfile",
    "chargingProfileKind": "Absolute",
    "chargingSchedule": {
      "chargingRateUnit": "W",
      "chargingSchedulePeriod": [
        { "startPeriod": 0, "limit": 7400.0 }
      ]
    }
  }
}]

// Response: [MessageTypeId, UniqueId, Payload]
[3, "msg001", { "status": "Accepted" }]`}
              </pre>
              <p style={{ margin: '8px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>Smart charging stack (priority low to high):</strong>
              </p>
              <pre style={codeBlockStyle}>
                {`1. ChargePointMaxProfile  (site-level limit)
2. TxDefaultProfile       (connector default)
3. TxProfile              (per-transaction override)

The effective limit = min(all applicable profiles)
Stack level: higher stackLevel overrides lower within same purpose`}
              </pre>
              <p style={{ margin: '8px 0 8px' }}>
                <strong style={{ color: '#bb9af7' }}>ISO 15118 integration (OCPP 2.0.1):</strong>
              </p>
              <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
                <li style={{ marginBottom: 4 }}>
                  Plug &amp; Charge: Automatic authentication via TLS certificates — no RFID needed
                </li>
                <li style={{ marginBottom: 4 }}>
                  Enables bidirectional power transfer (V2G) with coordinated CSMS control
                </li>
                <li style={{ marginBottom: 4 }}>
                  15118-20 adds scheduled and dynamic control modes for granular power management
                </li>
              </ul>
            </>
          )}
        </>
      ),
    },
    {
      key: 'other',
      title: 'Other Energy Protocols',
      accentColor: '#9ece6a',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#e0af68' }}>SunSpec</h4>
            <p style={{ margin: '0 0 6px' }}>
              A standardized data model built on top of Modbus for solar and storage equipment. Defines consistent register maps so that a SunSpec-compliant inverter from any manufacturer exposes the same data at the same registers.
            </p>
            <pre style={codeBlockStyle}>
              {`SunSpec Common Model (Model 1):
  Register 40001: "SunS" identifier (0x53756e53)
  Register 40003: Manufacturer
  Register 40021: Model
  Register 40045: Serial Number

SunSpec Inverter Model (Model 101/103):
  AC Power, Frequency, Voltage, Current, Energy counters`}
            </pre>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#7aa2f7' }}>EEBUS</h4>
            <p style={{ margin: '0 0 6px' }}>
              A European smart home energy communication standard. Uses SPINE (Smart Premises Interoperable Neutral-message Exchange) protocol over IP networks. Designed for device-to-device communication without cloud dependency.
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                Use cases: EV charging coordination, heat pump control, battery management
              </li>
              <li style={{ marginBottom: 4 }}>
                Supported by major European manufacturers (SMA, Viessmann, BMW, Porsche)
              </li>
              <li style={{ marginBottom: 4 }}>
                Enables device negotiation: charger requests power, HEMS approves/limits
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#f7768e' }}>OpenADR</h4>
            <p style={{ margin: '0 0 6px' }}>
              Open Automated Demand Response — enables utilities to send demand response signals to buildings and devices. Used for grid stabilization during peak demand events.
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                VTN (Virtual Top Node) sends DR events to VEN (Virtual End Node) devices
              </li>
              <li style={{ marginBottom: 4 }}>
                Signals include price, load level, or simple event notifications
              </li>
              <li style={{ marginBottom: 4 }}>
                Primarily used in commercial buildings and aggregated residential fleets
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '0 0 8px', color: '#bb9af7' }}>MQTT</h4>
            <p style={{ margin: '0 0 6px' }}>
              Lightweight publish-subscribe messaging protocol widely used for IoT energy monitoring. Not energy-specific, but commonly used to transport energy data.
            </p>
            <pre style={codeBlockStyle}>
              {`Topic structure example:
  home/energy/solar/power      → 4523    (watts)
  home/energy/grid/import      → 312     (watts)
  home/energy/battery/soc      → 72      (percent)
  home/energy/ev/charging      → true
  home/energy/ev/power         → 7400    (watts)

Broker receives and distributes messages to subscribers.
QoS levels: 0 (fire & forget), 1 (at least once), 2 (exactly once)`}
            </pre>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px', color: '#73daca' }}>Matter / Thread</h4>
            <p style={{ margin: '0 0 6px' }}>
              Emerging smart home standards backed by Apple, Google, Amazon, and Samsung. While primarily focused on general smart home devices (lights, locks, sensors), energy management use cases are expanding.
            </p>
            <ul style={{ margin: '0 0 0', paddingLeft: 20 }}>
              <li style={{ marginBottom: 4 }}>
                <strong>Matter:</strong> Application-layer protocol. Energy management device types are being added in newer versions.
              </li>
              <li style={{ marginBottom: 4 }}>
                <strong>Thread:</strong> Low-power mesh networking protocol (IP-based). Provides the network layer for Matter devices.
              </li>
              <li style={{ marginBottom: 4 }}>
                Future potential for standardized EV charger, battery, and solar inverter communication in the consumer smart home ecosystem.
              </li>
            </ul>
          </div>
        </>
      ),
    },
  ],

  // ── Strategies ──
  strategies_title: 'Energy Optimization Strategies',
  strategies_subtitle: 'How to get the most out of your home energy system.',
  strategies_advanced_extra: ' Advanced view includes HEMS architecture and grid services.',

  strategies_sections: [
    {
      key: 'self-consumption',
      title: 'Solar Self-Consumption Optimization',
      accentColor: '#9ece6a',
      content: (_userLevel) => (
        <>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #7aa2f7' }}>
              <strong style={{ color: '#7aa2f7' }}>Winter</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Less solar available. Focus on using every watt directly. Minimize export. Heat pump runs more, naturally absorbing solar. Battery cycles are shallow.
              </p>
            </div>
            <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, borderLeft: '3px solid #e0af68' }}>
              <strong style={{ color: '#e0af68' }}>Summer</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13 }}>
                Abundant solar. Charge everything — battery, EV, hot water. Schedule high-power appliances (dishwasher, washing machine) during peak solar hours.
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#1a2e1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a3e2a' }}>
            <strong style={{ color: '#9ece6a' }}>Tip:</strong>{' '}
            Running appliances during solar peak hours (10am–3pm) is one of the simplest ways to boost self-consumption without any extra equipment.
          </div>
        </>
      ),
    },
    {
      key: 'ev-modes',
      title: 'Dynamic EV Charging Modes',
      accentColor: '#7aa2f7',
      content: (_userLevel) => (
        <>
          <p style={{ margin: '0 0 12px' }}>
            Smart EV chargers can operate in different modes depending on your priorities — saving money, charging quickly, or a balance of both. The charger adjusts its power draw dynamically based on real-time energy data.
          </p>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #9ece6a' }}>
            <strong style={{ color: '#9ece6a', fontSize: 14 }}>Solar Only</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>Only charges when surplus solar is available. Pauses charging if solar drops below the minimum threshold.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Best for: Maximizing savings, lowest electricity cost per km</li>
              <li style={{ marginBottom: 3 }}>Requires a CT clamp / energy monitor at the switchboard — without it, the charger cannot see solar surplus</li>
              <li style={{ marginBottom: 3 }}>Uses CT clamp or energy monitor data to measure surplus solar in real time</li>
              <li style={{ marginBottom: 3 }}>Minimum charge threshold: typically 1.4 kW (6A × 230V on single phase)</li>
              <li style={{ marginBottom: 3 }}>Below 6A most EVs will not accept a charge — the charger must pause</li>
              <li style={{ marginBottom: 3 }}>Charge speed varies throughout the day following the solar curve</li>
              <li style={{ marginBottom: 3 }}>May not fully charge the EV on cloudy days or in winter</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #e0af68' }}>
            <strong style={{ color: '#e0af68', fontSize: 14 }}>Eco / Hybrid</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>Prioritizes solar surplus but tops up from the grid to maintain at least the minimum charge rate once charging has started.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Best for: Good balance of savings and convenience</li>
              <li style={{ marginBottom: 3 }}>Always maintains minimum 6A (1.4 kW) once a session starts</li>
              <li style={{ marginBottom: 3 }}>Solar surplus is used first; grid fills the gap to the minimum</li>
              <li style={{ marginBottom: 3 }}>If solar exceeds the minimum, charge rate increases to use all surplus</li>
              <li style={{ marginBottom: 3 }}>Typically saves 50–70% compared to grid-only charging</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #f7768e' }}>
            <strong style={{ color: '#f7768e', fontSize: 14 }}>Fast / Boost</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>Charges at maximum power regardless of solar availability. Draws from grid as needed.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Best for: When you need the car charged as quickly as possible</li>
              <li style={{ marginBottom: 3 }}>Uses the full rated power of your charger (e.g., 7.4 kW or 22 kW)</li>
              <li style={{ marginBottom: 3 }}>No solar optimization — all about speed</li>
              <li style={{ marginBottom: 3 }}>May trigger demand charges or overload your grid connection if not managed</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #bb9af7' }}>
            <strong style={{ color: '#bb9af7', fontSize: 14 }}>Scheduled</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>Charges during designated time windows, typically off-peak tariff hours overnight.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Best for: Time-of-use tariff customers</li>
              <li style={{ marginBottom: 3 }}>Common schedule: charge 11pm–6am when rates are lowest</li>
              <li style={{ marginBottom: 3 }}>Can be combined with solar during the day for hybrid scheduling</li>
              <li style={{ marginBottom: 3 }}>Set departure time to ensure the car is ready when you need it</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#16161e', borderRadius: 6, padding: 12, marginBottom: 8, borderLeft: '3px solid #73daca' }}>
            <strong style={{ color: '#73daca', fontSize: 14 }}>Target SoC</strong>
            <p style={{ margin: '6px 0 8px', fontSize: 13 }}>Sets a target battery percentage by a departure time. The optimizer decides the cheapest way to reach it.</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
              <li style={{ marginBottom: 3 }}>Best for: Advanced users with dynamic tariffs or solar forecasting</li>
              <li style={{ marginBottom: 3 }}>Considers: current SoC, target SoC, departure time, solar forecast, tariff schedule</li>
              <li style={{ marginBottom: 3 }}>Automatically selects the cheapest charging windows</li>
              <li style={{ marginBottom: 3 }}>May split charging across multiple periods (e.g., solar midday + off-peak overnight)</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#2e2a1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #3e3a2a' }}>
            <strong style={{ color: '#e0af68' }}>Important:</strong>{' '}
            The minimum charge rate for most EVs is 6A per phase (1.4 kW single phase, 4.1 kW three phase). Below this, the EV will refuse to charge. Smart chargers must handle this threshold carefully when modulating with solar.
          </div>
        </>
      ),
    },
    {
      key: 'battery',
      title: 'Battery Management Strategies',
      accentColor: '#e0af68',
      content: (_userLevel) => (
        <>
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

          <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a2a3e' }}>
            <strong style={{ color: '#7aa2f7' }}>Note:</strong>{' '}
            The best strategy is often a combination: solar self-consumption during the day, time-of-use arbitrage for the battery, and a small backup reserve for peace of mind.
          </div>
        </>
      ),
    },
    {
      key: 'hems',
      title: 'Home Energy Management System (HEMS)',
      accentColor: '#bb9af7',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
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

          <div style={{ backgroundColor: '#1a1a2e', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #2a2a3e' }}>
            <strong style={{ color: '#7aa2f7' }}>Note:</strong>{' '}
            A good HEMS can save an additional 10–20% on electricity costs beyond what solar and battery alone provide, by making intelligent real-time decisions about when and where to use energy.
          </div>
        </>
      ),
    },
    {
      key: 'grid-services',
      title: 'Grid Services and Demand Response',
      accentColor: '#73daca',
      advancedOnly: true,
      content: (_userLevel) => (
        <>
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

          <div style={{ backgroundColor: '#2e2a1a', borderRadius: 6, padding: 12, margin: '10px 0', border: '1px solid #3e3a2a' }}>
            <strong style={{ color: '#e0af68' }}>Important:</strong>{' '}
            V2G and VPP participation may affect your battery warranty. Check manufacturer terms before enrolling. Most programs limit the number of additional cycles to minimize degradation impact.
          </div>
        </>
      ),
    },
  ],
};

export default en;
