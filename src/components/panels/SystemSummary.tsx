import React from 'react';
import { Sun, Home, ArrowDownToLine, ArrowUpFromLine, Battery, Zap } from 'lucide-react';
import { useEnergyStore } from '../../store/energyStore';

const barStyle: React.CSSProperties = {
  display: 'flex',
  gap: 10,
  padding: '12px 16px',
  background: '#1a1a2e',
  borderRadius: 12,
  overflowX: 'auto',
  alignItems: 'stretch',
};

const cardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 6,
  padding: '10px 14px',
  background: '#242440',
  borderRadius: 10,
  minWidth: 110,
  flex: 1,
};

const cardLabelStyle: React.CSSProperties = {
  fontSize: 11,
  color: '#9ca3af',
  textAlign: 'center',
  whiteSpace: 'nowrap',
};

const cardValueStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  color: '#e0e0e0',
};

const progressBarOuter: React.CSSProperties = {
  width: '100%',
  height: 6,
  background: '#1e1e2e',
  borderRadius: 3,
  overflow: 'hidden',
  marginTop: 2,
};

function formatKW(watts: number): string {
  if (Math.abs(watts) >= 1000) {
    return `${(watts / 1000).toFixed(1)} kW`;
  }
  return `${Math.round(watts)} W`;
}

function ProgressBar({ percent, color }: { percent: number; color: string }) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div style={progressBarOuter}>
      <div
        style={{
          width: `${clamped}%`,
          height: '100%',
          background: color,
          borderRadius: 3,
          transition: 'width 0.3s ease',
        }}
      />
    </div>
  );
}

export function SystemSummary() {
  const summary = useEnergyStore((s) => s.summary);
  const components = useEnergyStore((s) => s.components);

  const batteryComponent = components.find((c) => c.type === 'battery' && c.enabled);
  const batterySoc = batteryComponent?.config.currentSocPercent ?? 0;
  const batteryCharging = summary.batteryPowerW > 0;
  const batteryDischarging = summary.batteryPowerW < 0;

  let batteryStatusText = 'Idle';
  let batteryColor = '#6b7280';
  if (batteryCharging) {
    batteryStatusText = `Charging ${formatKW(summary.batteryPowerW)}`;
    batteryColor = '#22c55e';
  } else if (batteryDischarging) {
    batteryStatusText = `Discharging ${formatKW(Math.abs(summary.batteryPowerW))}`;
    batteryColor = '#f59e0b';
  }

  return (
    <div style={barStyle}>
      <div style={cardStyle}>
        <Sun size={20} color="#facc15" />
        <span style={cardLabelStyle}>Solar Generation</span>
        <span style={cardValueStyle}>{formatKW(summary.totalSolarGenerationW)}</span>
      </div>

      <div style={cardStyle}>
        <Home size={20} color="#f97316" />
        <span style={cardLabelStyle}>Home Consumption</span>
        <span style={cardValueStyle}>{formatKW(summary.totalConsumptionW)}</span>
      </div>

      <div style={cardStyle}>
        <ArrowDownToLine size={20} color="#3b82f6" />
        <span style={cardLabelStyle}>Grid Import</span>
        <span style={cardValueStyle}>{formatKW(summary.gridImportW)}</span>
      </div>

      <div style={cardStyle}>
        <ArrowUpFromLine size={20} color="#22c55e" />
        <span style={cardLabelStyle}>Grid Export</span>
        <span style={cardValueStyle}>{formatKW(summary.gridExportW)}</span>
      </div>

      <div style={cardStyle}>
        <Battery size={20} color={batteryColor} />
        <span style={cardLabelStyle}>Battery {batterySoc}%</span>
        <span style={{ ...cardValueStyle, fontSize: 13, color: batteryColor }}>{batteryStatusText}</span>
        <ProgressBar percent={batterySoc} color={batteryColor} />
      </div>

      <div style={cardStyle}>
        <Zap size={20} color="#a78bfa" />
        <span style={cardLabelStyle}>Self-Consumption</span>
        <span style={cardValueStyle}>{Math.round(summary.selfConsumptionPercent)}%</span>
        <ProgressBar percent={summary.selfConsumptionPercent} color="#a78bfa" />
      </div>

      <div style={cardStyle}>
        <Zap size={20} color="#2dd4bf" />
        <span style={cardLabelStyle}>Self-Sufficiency</span>
        <span style={cardValueStyle}>{Math.round(summary.autarkyPercent)}%</span>
        <ProgressBar percent={summary.autarkyPercent} color="#2dd4bf" />
      </div>
    </div>
  );
}

export default SystemSummary;
