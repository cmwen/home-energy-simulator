import { useState } from 'react';
import { useEnergyStore, scenarioPresets } from '../../store/energyStore';
import type { ScenarioPreset } from '../../types/energy';

// What each component type unlocks — shown as a callout inside each scenario card
const componentUnlocks: Record<string, string[]> = {
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
};

const UNLOCK_COLORS: Record<string, string> = {
  gridMeter: '#6366f1',
  energyMonitor: '#ec4899',
  mainSwitchboard: '#ca8a04',
  inverter: '#14b8a6',
  battery: '#10b981',
  evCharger: '#8b5cf6',
};

const UNLOCK_ICONS: Record<string, string> = {
  gridMeter: '🔌',
  energyMonitor: '📡',
  mainSwitchboard: '🔧',
  inverter: '🔄',
  battery: '🔋',
  evCharger: '🚗',
};

function UnlockCallout({ types }: { types: string[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        What this setup unlocks
      </div>
      {types.map((type) => {
        const features = componentUnlocks[type];
        if (!features) return null;
        return (
          <div
            key={type}
            style={{
              background: '#16161e',
              borderRadius: 6,
              padding: '8px 10px',
              borderLeft: `3px solid ${UNLOCK_COLORS[type] ?? '#6b7280'}`,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 600, color: UNLOCK_COLORS[type] ?? '#e0e0e0', marginBottom: 4 }}>
              {UNLOCK_ICONS[type]} {type === 'gridMeter' ? 'Grid Meter (NMI)' : type === 'energyMonitor' ? 'Energy Monitor (CT)' : type === 'mainSwitchboard' ? 'Main Switchboard' : type}
            </div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: '#c0c0d0', lineHeight: 1.6 }}>
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function ScenarioCard({
  scenario,
  isActive,
  onLoad,
}: {
  scenario: ScenarioPreset;
  isActive: boolean;
  onLoad: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  // Derive which "notable" component types are in this scenario for the unlock callout
  const presentTypes = [...new Set(scenario.components.map((c) => c.type as string))].filter(
    (t) => Object.keys(componentUnlocks).includes(t)
  );

  return (
    <div
      style={{
        background: isActive ? '#1a1a3e' : '#1e1e2e',
        border: `1px solid ${isActive ? '#7aa2f7' : '#2a2a3e'}`,
        borderRadius: 10,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        transition: 'border-color 0.2s',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 28 }}>{scenario.icon}</span>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#c0caf5' }}>{scenario.name}</div>
            <div style={{ fontSize: 12, color: '#7aa2f7', marginTop: 2 }}>{scenario.tagline}</div>
          </div>
        </div>
        {isActive && (
          <span style={{ fontSize: 11, fontWeight: 600, color: '#22c55e', background: '#14532d', padding: '2px 8px', borderRadius: 10, whiteSpace: 'nowrap' }}>
            Active
          </span>
        )}
      </div>

      {/* Description */}
      <p style={{ margin: 0, fontSize: 13, color: '#9ca3af', lineHeight: 1.6 }}>{scenario.description}</p>

      {/* Goal + Context */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <div style={{ background: '#0f0f1a', borderRadius: 6, padding: '8px 10px' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#9ece6a', marginBottom: 3 }}>Goal</div>
          <div style={{ fontSize: 12, color: '#c0c0d0', lineHeight: 1.5 }}>{scenario.goal}</div>
        </div>
        <div style={{ background: '#0f0f1a', borderRadius: 6, padding: '8px 10px' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#e0af68', marginBottom: 3 }}>Australian Context</div>
          <div style={{ fontSize: 12, color: '#c0c0d0', lineHeight: 1.5 }}>{scenario.context}</div>
        </div>
      </div>

      {/* Component chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {scenario.components.map((c) => (
          <span
            key={c.id}
            style={{
              fontSize: 11,
              padding: '2px 8px',
              background: '#2a2a3e',
              borderRadius: 10,
              color: '#a0a0c0',
            }}
          >
            {c.name}
          </span>
        ))}
      </div>

      {/* Unlock callout — toggled */}
      <button
        onClick={() => setExpanded((v) => !v)}
        style={{
          background: 'none',
          border: '1px solid #2a2a4e',
          borderRadius: 6,
          padding: '6px 12px',
          color: '#7aa2f7',
          fontSize: 12,
          cursor: 'pointer',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>What does this setup unlock?</span>
        <span style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', fontSize: 10 }}>▼</span>
      </button>
      {expanded && <UnlockCallout types={presentTypes} />}

      {/* Load button */}
      <button
        onClick={onLoad}
        disabled={isActive}
        style={{
          padding: '10px 16px',
          background: isActive ? '#2a2a3e' : '#7aa2f7',
          border: 'none',
          borderRadius: 8,
          color: isActive ? '#6b7280' : '#0f0f1a',
          fontWeight: 700,
          fontSize: 14,
          cursor: isActive ? 'default' : 'pointer',
          transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => {
          if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = '#93b4f8';
        }}
        onMouseLeave={(e) => {
          if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = '#7aa2f7';
        }}
      >
        {isActive ? 'Currently Loaded' : 'Load Scenario →'}
      </button>
    </div>
  );
}

export default function ScenariosSection() {
  const activeScenarioId = useEnergyStore((s) => s.activeScenarioId);
  const loadScenario = useEnergyStore((s) => s.loadScenario);

  return (
    <div style={{ padding: '0 4px' }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ margin: '0 0 6px', fontSize: 20, fontWeight: 700, color: '#c0caf5' }}>
          Scenarios
        </h2>
        <p style={{ margin: 0, fontSize: 13, color: '#888', lineHeight: 1.6 }}>
          Real Australian homeowner setups, pre-configured and ready to explore. Load a scenario to see how the system behaves — then adjust sliders, enable components, or run the simulation to understand the trade-offs.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 16 }}>
        {scenarioPresets.map((scenario) => (
          <ScenarioCard
            key={scenario.id}
            scenario={scenario}
            isActive={activeScenarioId === scenario.id}
            onLoad={() => loadScenario(scenario.id)}
          />
        ))}
      </div>

      <div style={{ marginTop: 24, padding: '14px 18px', background: '#1e1e2e', borderRadius: 8, borderLeft: '3px solid #7aa2f7', fontSize: 13, color: '#9ca3af', lineHeight: 1.7 }}>
        <strong style={{ color: '#7aa2f7' }}>Tip:</strong> After loading a scenario, switch to the <strong>Simulator</strong> tab to see the live system diagram and power flows. Use the <strong>Add Component</strong> panel to add or remove devices, and the <strong>Learn</strong> tab to understand what each component does.
      </div>
    </div>
  );
}
