import { useState } from 'react';
import { useEnergyStore, scenarioPresets } from '../../store/energyStore';
import type { ScenarioPreset } from '../../types/energy';
import { useTranslation } from '../../i18n';

// We map component types to their theme colors and icons
const UNLOCK_COLORS: Record<string, string> = {
  gridMeter: 'var(--accent-blue)',
  energyMonitor: 'var(--accent-red)',
  mainSwitchboard: 'var(--accent-yellow)',
  inverter: 'var(--accent-teal)',
  battery: 'var(--accent-green)',
  evCharger: 'var(--accent-purple)',
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
  const { t, translations } = useTranslation();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {t('scenarios_what_setup_unlocks')}
      </div>
      {types.map((type) => {
        const features = translations.unlock[type as keyof typeof translations.unlock];
        if (!features) return null;
        return (
          <div
            key={type}
            style={{
              background: 'var(--bg-code)',
              borderRadius: 6,
              padding: '8px 10px',
              borderLeft: `3px solid ${UNLOCK_COLORS[type] ?? 'var(--text-dim)'}`,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 600, color: UNLOCK_COLORS[type] ?? 'var(--text-primary)', marginBottom: 4 }}>
              {UNLOCK_ICONS[type]} {type === 'gridMeter' ? t('type_grid_meter') : type === 'energyMonitor' ? t('type_energy_monitor') : type === 'mainSwitchboard' ? t('type_main_switchboard') : type}
            </div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {features.map((f: string, i: number) => (
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
  const { t, translations } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  // Derive which "notable" component types are in this scenario for the unlock callout
  const presentTypes = [...new Set(scenario.components.map((c) => c.type as string))].filter(
    (t) => Object.keys(translations.unlock).includes(t)
  );

  return (
    <div
      style={{
        background: isActive ? 'var(--bg-card-hover)' : 'var(--bg-card)',
        border: `1px solid ${isActive ? 'var(--accent-blue)' : 'var(--border)'}`,
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
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-heading)' }}>
              {t(`scenario_${scenario.id.replace(/-/g, '_')}_name` as Parameters<typeof t>[0]) || scenario.name}
            </div>
            <div style={{ fontSize: 12, color: 'var(--accent-blue)', marginTop: 2 }}>
              {t(`scenario_${scenario.id.replace(/-/g, '_')}_tagline` as Parameters<typeof t>[0]) || scenario.tagline}
            </div>
          </div>
        </div>
        {isActive && (
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent-green)', background: 'color-mix(in srgb, var(--accent-green) 20%, transparent)', padding: '2px 8px', borderRadius: 10, whiteSpace: 'nowrap' }}>
            {t('scenarios_active')}
          </span>
        )}
      </div>

      {/* Description */}
      <p style={{ margin: 0, fontSize: 13, color: 'var(--text-label)', lineHeight: 1.6 }}>
        {t(`scenario_${scenario.id.replace(/-/g, '_')}_description` as Parameters<typeof t>[0]) || scenario.description}
      </p>

      {/* Goal + Context */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <div style={{ background: 'var(--bg-primary)', borderRadius: 6, padding: '8px 10px' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent-green)', marginBottom: 3 }}>
            {t('scenarios_goal')}
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            {t(`scenario_${scenario.id.replace(/-/g, '_')}_goal` as Parameters<typeof t>[0]) || scenario.goal}
          </div>
        </div>
        <div style={{ background: 'var(--bg-primary)', borderRadius: 6, padding: '8px 10px' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent-yellow)', marginBottom: 3 }}>
            {t('scenarios_context')}
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            {t(`scenario_${scenario.id.replace(/-/g, '_')}_context` as Parameters<typeof t>[0]) || scenario.context}
          </div>
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
              background: 'var(--border)',
              borderRadius: 10,
              color: 'var(--text-secondary)',
            }}
          >
            {t(`type_${(c.type || '').replace(/-/g, '_')}` as Parameters<typeof t>[0]) || c.name}
          </span>
        ))}
      </div>

      {/* Unlock callout — toggled */}
      <button
        onClick={() => setExpanded((v) => !v)}
        style={{
          background: 'none',
          border: '1px solid var(--border)',
          borderRadius: 6,
          padding: '6px 12px',
          color: 'var(--accent-blue)',
          fontSize: 12,
          cursor: 'pointer',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>{t('scenarios_what_unlocks')}</span>
        <span style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', fontSize: 10 }}>▼</span>
      </button>
      {expanded && <UnlockCallout types={presentTypes} />}

      {/* Load button */}
      <button
        onClick={onLoad}
        disabled={isActive}
        style={{
          padding: '10px 16px',
          background: isActive ? 'var(--border)' : 'var(--accent-blue)',
          border: 'none',
          borderRadius: 8,
          color: isActive ? 'var(--text-dim)' : 'var(--bg-primary)',
          fontWeight: 700,
          fontSize: 14,
          cursor: isActive ? 'default' : 'pointer',
          transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => {
          if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = 'color-mix(in srgb, var(--accent-blue) 80%, white)';
        }}
        onMouseLeave={(e) => {
          if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = 'var(--accent-blue)';
        }}
      >
        {isActive ? t('scenarios_currently_loaded') : t('scenarios_load')}
      </button>
    </div>
  );
}

export default function ScenariosSection() {
  const { t } = useTranslation();
  const activeScenarioId = useEnergyStore((s) => s.activeScenarioId);
  const loadScenario = useEnergyStore((s) => s.loadScenario);

  return (
    <div style={{ padding: '0 4px' }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ margin: '0 0 6px', fontSize: 20, fontWeight: 700, color: 'var(--text-heading)' }}>
          {t('scenarios_title')}
        </h2>
        <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>
          {t('scenarios_description')}
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

      <div style={{ marginTop: 24, padding: '14px 18px', background: 'var(--bg-card)', borderRadius: 8, borderLeft: '3px solid var(--accent-blue)', fontSize: 13, color: 'var(--text-label)', lineHeight: 1.7 }}>
        <strong style={{ color: 'var(--accent-blue)' }}>{t('scenarios_tip_label')}</strong> <span dangerouslySetInnerHTML={{ __html: t('scenarios_tip') }} />
      </div>
    </div>
  );
}
