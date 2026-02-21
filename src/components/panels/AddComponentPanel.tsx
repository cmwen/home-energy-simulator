import React from 'react';
import { useEnergyStore } from '../../store/energyStore';
import { useTranslation } from '../../i18n';
import type { ComponentType } from '../../types/energy';

interface ComponentOption {
  type: ComponentType;
  icon: string;
  label: string;
  singletonOnly: boolean;
}


const panelStyle: React.CSSProperties = {
  background: 'var(--bg-secondary)',
  borderRadius: 12,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
};

const titleStyle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  color: 'var(--text-heading)',
  margin: 0,
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: 8,
};

function getButtonStyle(disabled: boolean): React.CSSProperties {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
    padding: '12px 8px',
    background: disabled ? 'var(--badge-bg)' : 'var(--bg-card)',
    border: '1px solid',
    borderColor: disabled ? 'var(--border-card)' : 'var(--border-input)',
    borderRadius: 10,
    color: disabled ? 'var(--text-muted)' : 'var(--text-primary)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: 12,
    opacity: disabled ? 0.5 : 1,
    transition: 'background 0.15s, border-color 0.15s',
  };
}

const countBadgeStyle: React.CSSProperties = {
  fontSize: 10,
  color: 'var(--text-label)',
  background: 'var(--badge-bg)',
  borderRadius: 8,
  padding: '1px 6px',
};

export function AddComponentPanel() {
  const { t } = useTranslation();

  const componentOptions: ComponentOption[] = [
    { type: 'grid', icon: '⚡', label: t('type_grid'), singletonOnly: true },
    { type: 'gridMeter', icon: '🔌', label: t('type_grid_meter'), singletonOnly: true },
    { type: 'mainSwitchboard', icon: '🔧', label: t('add_switchboard'), singletonOnly: true },
    { type: 'energyMonitor', icon: '📡', label: t('type_energy_monitor'), singletonOnly: true },
    { type: 'solarPanel', icon: '☀️', label: t('type_solar_panels'), singletonOnly: false },
    { type: 'inverter', icon: '🔄', label: t('type_inverter'), singletonOnly: false },
    { type: 'battery', icon: '🔋', label: t('type_battery'), singletonOnly: false },
    { type: 'evCharger', icon: '🚗', label: t('type_ev_charger'), singletonOnly: false },
    { type: 'homeLoad', icon: '🏠', label: t('type_home_load'), singletonOnly: false },
    { type: 'heatPump', icon: '♨️', label: t('type_heat_pump'), singletonOnly: false },
  ];
  const components = useEnergyStore((s) => s.components);
  const addComponent = useEnergyStore((s) => s.addComponent);

  const countByType = (type: ComponentType): number => {
    return components.filter((c) => c.type === type).length;
  };

  return (
    <div style={panelStyle}>
      <h3 style={titleStyle}>{t('add_component')}</h3>
      <div style={gridStyle}>
        {componentOptions.map((option) => {
          const count = countByType(option.type);
          const disabled = option.singletonOnly && count > 0;

          return (
            <button
              key={option.type}
              style={getButtonStyle(disabled)}
              disabled={disabled}
              onClick={() => {
                if (!disabled) addComponent(option.type);
              }}
              onMouseEnter={(e) => {
                if (!disabled) {
                  (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg-card-hover)';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent-purple)';
                }
              }}
              onMouseLeave={(e) => {
                if (!disabled) {
                  (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg-card)';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-input)';
                }
              }}
            >
              <span style={{ fontSize: 24 }}>{option.icon}</span>
              <span>{option.label}</span>
              {count > 0 && <span style={countBadgeStyle}>x{count}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default AddComponentPanel;
