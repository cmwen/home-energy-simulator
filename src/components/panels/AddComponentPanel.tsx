import React from 'react';
import { useEnergyStore } from '../../store/energyStore';
import type { ComponentType } from '../../types/energy';

interface ComponentOption {
  type: ComponentType;
  icon: string;
  label: string;
  singletonOnly: boolean;
}

const componentOptions: ComponentOption[] = [
  { type: 'grid', icon: '⚡', label: 'Power Grid', singletonOnly: true },
  { type: 'gridMeter', icon: '🔌', label: 'Grid Meter (NMI)', singletonOnly: true },
  { type: 'mainSwitchboard', icon: '🔧', label: 'Switchboard', singletonOnly: true },
  { type: 'energyMonitor', icon: '📡', label: 'Energy Monitor', singletonOnly: true },
  { type: 'solarPanel', icon: '☀️', label: 'Solar Panels', singletonOnly: false },
  { type: 'inverter', icon: '🔄', label: 'Inverter', singletonOnly: false },
  { type: 'battery', icon: '🔋', label: 'Battery', singletonOnly: false },
  { type: 'evCharger', icon: '🚗', label: 'EV Charger', singletonOnly: false },
  { type: 'homeLoad', icon: '🏠', label: 'Home Load', singletonOnly: false },
  { type: 'heatPump', icon: '♨️', label: 'Heat Pump', singletonOnly: false },
];

const panelStyle: React.CSSProperties = {
  background: '#1a1a2e',
  borderRadius: 12,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
};

const titleStyle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  color: '#e0e0e0',
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
    background: disabled ? '#1e1e2e' : '#242440',
    border: '1px solid',
    borderColor: disabled ? '#2a2a3e' : '#3a3a5e',
    borderRadius: 10,
    color: disabled ? '#4b5563' : '#d1d5db',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: 12,
    opacity: disabled ? 0.5 : 1,
    transition: 'background 0.15s, border-color 0.15s',
  };
}

const countBadgeStyle: React.CSSProperties = {
  fontSize: 10,
  color: '#9ca3af',
  background: '#1e1e2e',
  borderRadius: 8,
  padding: '1px 6px',
};

export function AddComponentPanel() {
  const components = useEnergyStore((s) => s.components);
  const addComponent = useEnergyStore((s) => s.addComponent);

  const countByType = (type: ComponentType): number => {
    return components.filter((c) => c.type === type).length;
  };

  return (
    <div style={panelStyle}>
      <h3 style={titleStyle}>Add Component</h3>
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
                  (e.currentTarget as HTMLButtonElement).style.background = '#2e2e50';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#7c3aed';
                }
              }}
              onMouseLeave={(e) => {
                if (!disabled) {
                  (e.currentTarget as HTMLButtonElement).style.background = '#242440';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#3a3a5e';
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
