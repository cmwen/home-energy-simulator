import React from 'react';
import { X, Trash2, Power } from 'lucide-react';
import { useEnergyStore } from '../../store/energyStore';
import type { ComponentType, ChargingStandard, ChargingMode } from '../../types/energy';

const typeIcons: Record<ComponentType, string> = {
  grid: '🔌',
  smartMeter: '📊',
  gridMeter: '🔌',
  energyMonitor: '📡',
  mainSwitchboard: '🔧',
  solarPanel: '☀️',
  inverter: '🔄',
  battery: '🔋',
  evCharger: '🚗',
  homeLoad: '🏠',
  heatPump: '♨️',
};

const typeLabels: Record<ComponentType, string> = {
  grid: 'Power Grid',
  smartMeter: 'Smart Meter',
  gridMeter: 'Grid Meter (NMI)',
  energyMonitor: 'Energy Monitor (CT)',
  mainSwitchboard: 'Main Switchboard',
  solarPanel: 'Solar Panels',
  inverter: 'Inverter',
  battery: 'Battery',
  evCharger: 'EV Charger',
  homeLoad: 'Home Load',
  heatPump: 'Heat Pump',
};

const panelStyle: React.CSSProperties = {
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  width: 340,
  background: '#1e1e2e',
  color: '#e0e0e0',
  padding: 20,
  overflowY: 'auto',
  zIndex: 100,
  boxShadow: '-4px 0 20px rgba(0,0,0,0.4)',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  color: '#9ca3af',
  marginBottom: 4,
  display: 'block',
};

const sliderContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
};

const sliderLabelRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const sliderStyle: React.CSSProperties = {
  width: '100%',
  accentColor: '#7c3aed',
  cursor: 'pointer',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '6px 10px',
  background: '#2a2a3e',
  border: '1px solid #3a3a5e',
  borderRadius: 6,
  color: '#e0e0e0',
  fontSize: 14,
  boxSizing: 'border-box',
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  cursor: 'pointer',
};

const toggleContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const sectionStyle: React.CSSProperties = {
  borderTop: '1px solid #2a2a3e',
  paddingTop: 12,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
};

const removeButtonStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  width: '100%',
  padding: '10px 16px',
  background: 'transparent',
  border: '1px solid #ef4444',
  borderRadius: 8,
  color: '#ef4444',
  fontSize: 14,
  cursor: 'pointer',
  marginTop: 'auto',
};

const iconButtonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: '#9ca3af',
  cursor: 'pointer',
  padding: 4,
  display: 'flex',
  alignItems: 'center',
};

function ToggleButton({ value, onChange, label }: { value: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <div style={toggleContainerStyle}>
      <span style={{ fontSize: 13, color: '#c0c0d0' }}>{label}</span>
      <button
        onClick={() => onChange(!value)}
        style={{
          width: 44,
          height: 24,
          borderRadius: 12,
          border: 'none',
          background: value ? '#7c3aed' : '#3a3a5e',
          cursor: 'pointer',
          position: 'relative',
          transition: 'background 0.2s',
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: '#fff',
            position: 'absolute',
            top: 3,
            left: value ? 22 : 4,
            transition: 'left 0.2s',
          }}
        />
      </button>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (v: number) => void;
}) {
  return (
    <div style={sliderContainerStyle}>
      <div style={sliderLabelRow}>
        <span style={labelStyle}>{label}</span>
        <span style={{ fontSize: 13, color: '#a78bfa', fontWeight: 600 }}>
          {value}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={sliderStyle}
      />
    </div>
  );
}

function NumberInput({
  label,
  value,
  unit,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  unit: string;
  min?: number;
  max?: number;
  step?: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <span style={labelStyle}>
        {label} ({unit})
      </span>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        style={inputStyle}
      />
    </div>
  );
}

export function ComponentEditor() {
  const components = useEnergyStore((s) => s.components);
  const selectedComponentId = useEnergyStore((s) => s.selectedComponentId);
  const selectComponent = useEnergyStore((s) => s.selectComponent);
  const toggleComponent = useEnergyStore((s) => s.toggleComponent);
  const updateComponentConfig = useEnergyStore((s) => s.updateComponentConfig);
  const updateComponentPower = useEnergyStore((s) => s.updateComponentPower);
  const removeComponent = useEnergyStore((s) => s.removeComponent);

  const component = components.find((c) => c.id === selectedComponentId);

  if (!component) return null;

  const { type, config } = component;

  const renderTypeFields = () => {
    switch (type) {
      case 'solarPanel':
        return (
          <>
            <NumberInput
              label="Panel Count"
              value={config.panelCount ?? 20}
              unit="panels"
              min={1}
              max={100}
              step={1}
              onChange={(v) => updateComponentConfig(component.id, { panelCount: v })}
            />
            <NumberInput
              label="Panel Wattage"
              value={config.panelWattage ?? 500}
              unit="W"
              min={100}
              max={800}
              step={10}
              onChange={(v) => updateComponentConfig(component.id, { panelWattage: v })}
            />
            <Slider
              label="Roof Angle"
              value={config.roofAngle ?? 30}
              min={0}
              max={90}
              step={1}
              unit="°"
              onChange={(v) => updateComponentConfig(component.id, { roofAngle: v })}
            />
          </>
        );

      case 'battery':
        return (
          <>
            <NumberInput
              label="Capacity"
              value={config.capacityKwh ?? 10}
              unit="kWh"
              min={1}
              max={100}
              step={0.5}
              onChange={(v) => updateComponentConfig(component.id, { capacityKwh: v })}
            />
            <Slider
              label="Current SOC"
              value={config.currentSocPercent ?? 50}
              min={0}
              max={100}
              step={1}
              unit="%"
              onChange={(v) => updateComponentConfig(component.id, { currentSocPercent: v })}
            />
            <NumberInput
              label="Max Charge Rate"
              value={config.maxChargeRateW ?? 5000}
              unit="W"
              min={500}
              max={25000}
              step={100}
              onChange={(v) => updateComponentConfig(component.id, { maxChargeRateW: v })}
            />
            <NumberInput
              label="Max Discharge Rate"
              value={config.maxDischargeRateW ?? 5000}
              unit="W"
              min={500}
              max={25000}
              step={100}
              onChange={(v) => updateComponentConfig(component.id, { maxDischargeRateW: v })}
            />
          </>
        );

      case 'evCharger':
        return (
          <>
            <NumberInput
              label="Max Current"
              value={config.maxCurrentA ?? 32}
              unit="A"
              min={6}
              max={80}
              step={1}
              onChange={(v) => updateComponentConfig(component.id, { maxCurrentA: v })}
            />
            <ToggleButton
              label={`Phases: ${config.phases === 3 ? '3-Phase' : '1-Phase'}`}
              value={config.phases === 3}
              onChange={(v) => updateComponentConfig(component.id, { phases: v ? 3 : 1 })}
            />
            <NumberInput
              label="Voltage"
              value={config.voltage ?? 230}
              unit="V"
              min={110}
              max={400}
              step={1}
              onChange={(v) => updateComponentConfig(component.id, { voltage: v })}
            />
            <div>
              <span style={labelStyle}>Charging Standard</span>
              <select
                value={config.chargingStandard ?? 'ocpp201'}
                onChange={(e) =>
                  updateComponentConfig(component.id, {
                    chargingStandard: e.target.value as ChargingStandard,
                  })
                }
                style={selectStyle}
              >
                <option value="ocpp16">OCPP 1.6</option>
                <option value="ocpp201">OCPP 2.0.1</option>
                <option value="modbus">Modbus</option>
              </select>
            </div>
            <div>
              <span style={labelStyle}>Charging Mode</span>
              <select
                value={config.chargingMode ?? 'eco'}
                onChange={(e) =>
                  updateComponentConfig(component.id, {
                    chargingMode: e.target.value as ChargingMode,
                  })
                }
                style={selectStyle}
              >
                <option value="fast">Fast</option>
                <option value="eco">Eco</option>
                <option value="solar_only">Solar Only</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>
            <ToggleButton
              label="Is Charging"
              value={config.isCharging ?? false}
              onChange={(v) => updateComponentConfig(component.id, { isCharging: v })}
            />
            <Slider
              label="EV Battery (start %)"
              value={Math.round(config.evBatteryPercent ?? 40)}
              min={0}
              max={100}
              step={1}
              unit="%"
              onChange={(v) => updateComponentConfig(component.id, { evBatteryPercent: v })}
            />
            <NumberInput
              label="EV Capacity"
              value={config.evCapacityKwh ?? 60}
              unit="kWh"
              min={10}
              max={200}
              step={5}
              onChange={(v) => updateComponentConfig(component.id, { evCapacityKwh: v })}
            />
            <NumberInput
              label="Efficiency"
              value={config.evEfficiencyKmPerKwh ?? 6}
              unit="km/kWh"
              min={3}
              max={12}
              step={0.5}
              onChange={(v) => updateComponentConfig(component.id, { evEfficiencyKmPerKwh: v })}
            />
          </>
        );

      case 'inverter':
        return (
          <>
            <NumberInput
              label="Max Output"
              value={config.maxOutputW ?? 10000}
              unit="W"
              min={1000}
              max={50000}
              step={500}
              onChange={(v) => updateComponentConfig(component.id, { maxOutputW: v })}
            />
            <Slider
              label="Efficiency"
              value={Math.round((config.efficiency ?? 0.97) * 100)}
              min={80}
              max={100}
              step={1}
              unit="%"
              onChange={(v) => updateComponentConfig(component.id, { efficiency: v / 100 })}
            />
            <ToggleButton
              label="Hybrid Mode"
              value={config.hybridMode ?? true}
              onChange={(v) => updateComponentConfig(component.id, { hybridMode: v })}
            />
          </>
        );

      case 'smartMeter':
      case 'gridMeter':
        return (
          <>
            <div style={{ padding: '8px 10px', background: '#16213e', borderRadius: 6, fontSize: 12, color: '#7aa2f7', marginBottom: 4 }}>
              📋 This is the Ausgrid/DNSP NMI meter at the property boundary. It records import/export for billing and sets the export limit rule. You cannot read or control it directly.
            </div>
            <NumberInput
              label="Grid Export Limit"
              value={config.gridExportLimitW ?? 5000}
              unit="W"
              min={0}
              max={50000}
              step={500}
              onChange={(v) => updateComponentConfig(component.id, { gridExportLimitW: v })}
            />
            <NumberInput
              label="Feed-in Tariff"
              value={config.feedInTariff ?? 0.05}
              unit="$/kWh"
              min={0}
              max={1}
              step={0.01}
              onChange={(v) => updateComponentConfig(component.id, { feedInTariff: v })}
            />
            <NumberInput
              label="Import Tariff"
              value={config.importTariff ?? 0.32}
              unit="$/kWh"
              min={0}
              max={1}
              step={0.01}
              onChange={(v) => updateComponentConfig(component.id, { importTariff: v })}
            />
          </>
        );

      case 'energyMonitor':
        return (
          <div style={{ padding: '8px 10px', background: '#16213e', borderRadius: 6, fontSize: 12, color: '#ec4899' }}>
            📡 Consumer-side CT clamp monitor (e.g. Shelly EM, Emporia Vue) — installed at your main switchboard. Enables real-time solar surplus measurement, required for solar-only EV charging and inverter zero-export throttling.
          </div>
        );

      case 'mainSwitchboard':
        return (
          <div style={{ padding: '8px 10px', background: '#16213e', borderRadius: 6, fontSize: 12, color: '#ca8a04' }}>
            🔧 The main AC distribution board inside your home. Every AC load (home circuits, EV charger, heat pump) connects here. The inverter AC output and the grid connection both feed into this board.
          </div>
        );

      case 'homeLoad':
        return (
          <Slider
            label="Base Load"
            value={config.baseLoadW ?? 1500}
            min={100}
            max={15000}
            step={100}
            unit=" W"
            onChange={(v) => updateComponentConfig(component.id, { baseLoadW: v })}
          />
        );

      case 'heatPump':
        return (
          <Slider
            label="COP Rating"
            value={config.copRating ?? 3.5}
            min={1}
            max={6}
            step={0.1}
            unit=""
            onChange={(v) => updateComponentConfig(component.id, { copRating: v })}
          />
        );

      default:
        return null;
    }
  };

  const showPowerSlider = type === 'homeLoad' || type === 'heatPump';

  return (
    <div style={panelStyle}>
      <div style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 24 }}>{typeIcons[type]}</span>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>{component.name}</div>
            <div style={{ fontSize: 12, color: '#6b7280' }}>{typeLabels[type]}</div>
          </div>
        </div>
        <button style={iconButtonStyle} onClick={() => selectComponent(null)}>
          <X size={20} />
        </button>
      </div>

      <div style={toggleContainerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Power size={14} color={component.enabled ? '#22c55e' : '#6b7280'} />
          <span style={{ fontSize: 13 }}>{component.enabled ? 'Enabled' : 'Disabled'}</span>
        </div>
        <button
          onClick={() => toggleComponent(component.id)}
          style={{
            width: 44,
            height: 24,
            borderRadius: 12,
            border: 'none',
            background: component.enabled ? '#22c55e' : '#3a3a5e',
            cursor: 'pointer',
            position: 'relative',
            transition: 'background 0.2s',
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: '#fff',
              position: 'absolute',
              top: 3,
              left: component.enabled ? 22 : 4,
              transition: 'left 0.2s',
            }}
          />
        </button>
      </div>

      {showPowerSlider && (
        <Slider
          label="Power Override"
          value={Math.abs(component.currentPowerW)}
          min={0}
          max={component.maxPowerW}
          step={100}
          unit=" W"
          onChange={(v) => updateComponentPower(component.id, -v)}
        />
      )}

      <div style={sectionStyle}>{renderTypeFields()}</div>

      <button
        style={removeButtonStyle}
        onClick={() => {
          removeComponent(component.id);
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = '#ef44441a';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
        }}
      >
        <Trash2 size={16} />
        Remove Component
      </button>
    </div>
  );
}

export default ComponentEditor;
