import React from 'react';
import { Sun, Home, ArrowDownToLine, ArrowUpFromLine, Battery, Zap, Car } from 'lucide-react';
import { useEnergyStore } from '../../store/energyStore';
import { useTranslation } from '../../i18n';

const barStyle: React.CSSProperties = {
  display: 'flex',
  gap: 10,
  padding: '12px 16px',
  background: 'var(--bg-secondary)',
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
  background: 'var(--bg-card)',
  borderRadius: 10,
  minWidth: 110,
  flex: 1,
};

const cardLabelStyle: React.CSSProperties = {
  fontSize: 11,
  color: 'var(--text-label)',
  textAlign: 'center',
  whiteSpace: 'nowrap',
};

const cardValueStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  color: 'var(--text-primary)',
};

const progressBarOuter: React.CSSProperties = {
  width: '100%',
  height: 6,
  background: 'var(--badge-bg)',
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
  const { t } = useTranslation();
  const summary = useEnergyStore((s) => s.summary);
  const components = useEnergyStore((s) => s.components);

  const batteryComponent = components.find((c) => c.type === 'battery' && c.enabled);
  const batterySoc = batteryComponent?.config.currentSocPercent ?? 0;
  const batteryCharging = summary.batteryPowerW > 0;
  const batteryDischarging = summary.batteryPowerW < 0;

  let batteryStatusText = t('summary_battery_idle');
  let batteryColor = 'var(--text-dim)';
  if (batteryCharging) {
    batteryStatusText = `${t('summary_battery_charging')} ${formatKW(summary.batteryPowerW)}`;
    batteryColor = 'var(--accent-green)';
  } else if (batteryDischarging) {
    batteryStatusText = `${t('summary_battery_discharging')} ${formatKW(Math.abs(summary.batteryPowerW))}`;
    batteryColor = 'var(--accent-yellow)';
  }

  const evComponent = components.find((c) => c.type === 'evCharger' && c.enabled);
  const evSoc = evComponent?.config.evBatteryPercent ?? 0;
  const evSessionKwh = evComponent?.config.evSessionKwh ?? 0;
  const evEfficiency = evComponent?.config.evEfficiencyKmPerKwh ?? 6;
  const evKmAdded = evSessionKwh * evEfficiency;
  const evPowerW = evComponent ? Math.abs(evComponent.currentPowerW) : 0;
  const evIsCharging = evPowerW > 0;
  const evColor = evIsCharging ? 'var(--accent-blue)' : 'var(--text-dim)';

  return (
    <div style={barStyle}>
      <div style={cardStyle}>
        <Sun size={20} color="var(--accent-yellow)" />
        <span style={cardLabelStyle}>{t('summary_solar_generation')}</span>
        <span style={cardValueStyle}>{formatKW(summary.totalSolarGenerationW)}</span>
      </div>

      <div style={cardStyle}>
        <Home size={20} color="var(--accent-red)" />
        <span style={cardLabelStyle}>{t('summary_home_consumption')}</span>
        <span style={cardValueStyle}>{formatKW(summary.totalConsumptionW)}</span>
      </div>

      <div style={cardStyle}>
        <ArrowDownToLine size={20} color="var(--accent-blue)" />
        <span style={cardLabelStyle}>{t('summary_grid_import')}</span>
        <span style={cardValueStyle}>{formatKW(summary.gridImportW)}</span>
      </div>

      <div style={cardStyle}>
        <ArrowUpFromLine size={20} color="var(--accent-green)" />
        <span style={cardLabelStyle}>{t('summary_grid_export')}</span>
        <span style={cardValueStyle}>{formatKW(summary.gridExportW)}</span>
      </div>

      <div style={cardStyle}>
        <Battery size={20} color={batteryColor} />
        <span style={cardLabelStyle}>{t('summary_battery')} {Math.round(batterySoc)}%</span>
        <span style={{ ...cardValueStyle, fontSize: 13, color: batteryColor }}>{batteryStatusText}</span>
        <ProgressBar percent={batterySoc} color={batteryColor} />
      </div>

      {evComponent && (
        <div style={cardStyle}>
          <Car size={20} color={evColor} />
          <span style={cardLabelStyle}>{t('summary_ev')} {Math.round(evSoc)}%</span>
          <span style={{ ...cardValueStyle, fontSize: 13, color: evColor }}>
            {evIsCharging ? formatKW(evPowerW) : (evSoc >= 100 ? t('summary_ev_full') : t('summary_ev_not_charging'))}
          </span>
          <ProgressBar percent={evSoc} color={evColor} />
          {evSessionKwh > 0 && (
            <span style={{ fontSize: 11, color: 'var(--text-label)', marginTop: 2 }}>
              +{evKmAdded.toFixed(0)} km ({evSessionKwh.toFixed(1)} kWh)
            </span>
          )}
        </div>
      )}

      <div style={cardStyle}>
        <Zap size={20} color="var(--accent-purple)" />
        <span style={cardLabelStyle}>{t('summary_self_consumption')}</span>
        <span style={cardValueStyle}>{Math.round(summary.selfConsumptionPercent)}%</span>
        <ProgressBar percent={summary.selfConsumptionPercent} color="var(--accent-purple)" />
      </div>

      <div style={cardStyle}>
        <Zap size={20} color="var(--accent-cyan)" />
        <span style={cardLabelStyle}>{t('summary_self_sufficiency')}</span>
        <span style={cardValueStyle}>{Math.round(summary.autarkyPercent)}%</span>
        <ProgressBar percent={summary.autarkyPercent} color="var(--accent-cyan)" />
      </div>
    </div>
  );
}

export default SystemSummary;
