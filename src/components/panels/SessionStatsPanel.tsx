import React from 'react';
import { useEnergyStore } from '../../store/energyStore';
import { TrendingUp, TrendingDown, DollarSign, Zap, RotateCcw } from 'lucide-react';
import { useTranslation } from '../../i18n';

const panelStyle: React.CSSProperties = {
  background: 'var(--bg-secondary)',
  borderRadius: 12,
  padding: '14px 16px',
  marginTop: 10,
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 12,
};

const titleStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
  gap: 10,
};

const statCardStyle: React.CSSProperties = {
  background: 'var(--bg-card)',
  borderRadius: 10,
  padding: '10px 14px',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
};

const statLabelStyle: React.CSSProperties = {
  fontSize: 10,
  color: 'var(--text-label)',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  whiteSpace: 'nowrap',
};

const statValueStyle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  color: 'var(--text-primary)',
  lineHeight: 1.1,
};

const statSubStyle: React.CSSProperties = {
  fontSize: 11,
  color: 'var(--text-dim)',
};

const resetButtonStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  background: 'none',
  border: '1px solid var(--border)',
  borderRadius: 6,
  padding: '4px 10px',
  cursor: 'pointer',
  color: 'var(--text-dim)',
  fontSize: 11,
  fontWeight: 600,
};

function fmt(kwh: number): string {
  if (kwh < 0.1) return `${(kwh * 1000).toFixed(0)} Wh`;
  return `${kwh.toFixed(2)} kWh`;
}

function fmtDollar(dollars: number): string {
  if (Math.abs(dollars) < 0.01) return '$0.00';
  return `$${dollars.toFixed(2)}`;
}

export default function SessionStatsPanel() {
  const { t } = useTranslation();
  const stats = useEnergyStore((s) => s.sessionStats);
  const components = useEnergyStore((s) => s.components);
  const simulation = useEnergyStore((s) => s.simulation);
  const resetSessionStats = useEnergyStore((s) => s.resetSessionStats);

  const meter = components.find(
    (c) => (c.type === 'gridMeter' || c.type === 'smartMeter') && c.enabled
  );
  const importTariff = meter?.config.importTariff ?? 0.32;
  const feedInTariff = meter?.config.feedInTariff ?? 0.05;

  // Energy the solar system consumed on-site (not exported)
  const selfConsumedKwh = Math.max(0, stats.solarKwh - stats.exportKwh);

  // Dollar value of solar: self-consumed avoids buying from grid, exported earns FiT
  const solarSavings = selfConsumedKwh * importTariff + stats.exportKwh * feedInTariff;

  // Actual grid import cost
  const importCost = stats.importKwh * importTariff;

  // Net cost (positive = net spend, negative = net earnings)
  const netCost = importCost - stats.exportKwh * feedInTariff;

  // Effective cost per day would need a time reference; instead show cumulative simulated time
  // Each tick = 0.05 * speedMultiplier simulated hours, but we don't track elapsed sim-hours here.
  // Show the stats as accumulated since last reset, labelled clearly.

  const hasData = stats.solarKwh > 0.0001 || stats.importKwh > 0.0001;

  return (
    <div style={panelStyle}>
      <div style={headerStyle}>
        <span style={titleStyle}>
          {t('stats_session_totals')} {!simulation.isRunning && !hasData && ` — ${t('stats_press_play')}`}
        </span>
        {hasData && (
          <button style={resetButtonStyle} onClick={resetSessionStats} title={t('stats_reset')}>
            <RotateCcw size={11} />
            {t('stats_reset')}
          </button>
        )}
      </div>

      <div style={gridStyle}>
        {/* Solar generated */}
        <div style={{ ...statCardStyle, borderLeft: '3px solid var(--accent-yellow)' }}>
          <Zap size={14} color="var(--accent-yellow)" />
          <span style={statLabelStyle}>{t('stats_solar_generated')}</span>
          <span style={statValueStyle}>{fmt(stats.solarKwh)}</span>
          <span style={statSubStyle}>
            {fmt(selfConsumedKwh)} {t('stats_self_used')} · {fmt(stats.exportKwh)} {t('stats_exported')}
          </span>
        </div>

        {/* Grid import */}
        <div style={{ ...statCardStyle, borderLeft: '3px solid var(--accent-blue)' }}>
          <TrendingDown size={14} color="var(--accent-blue)" />
          <span style={statLabelStyle}>{t('stats_grid_imported')}</span>
          <span style={statValueStyle}>{fmt(stats.importKwh)}</span>
          <span style={statSubStyle} title={`at ${(importTariff * 100).toFixed(0)}¢/kWh`}>
            {t('stats_cost')}: {fmtDollar(importCost)} @ {(importTariff * 100).toFixed(0)}¢
          </span>
        </div>

        {/* Grid export */}
        <div style={{ ...statCardStyle, borderLeft: '3px solid var(--accent-green)' }}>
          <TrendingUp size={14} color="var(--accent-green)" />
          <span style={statLabelStyle}>{t('stats_grid_exported')}</span>
          <span style={statValueStyle}>{fmt(stats.exportKwh)}</span>
          <span style={statSubStyle} title={`at ${(feedInTariff * 100).toFixed(0)}¢/kWh ${t('stats_fit')}`}>
            {t('stats_earned')}: {fmtDollar(stats.exportKwh * feedInTariff)} @ {(feedInTariff * 100).toFixed(0)}¢ {t('stats_fit')}
          </span>
        </div>

        {/* Solar savings */}
        <div style={{ ...statCardStyle, borderLeft: '3px solid var(--accent-purple)' }}>
          <DollarSign size={14} color="var(--accent-purple)" />
          <span style={statLabelStyle}>{t('stats_solar_value')}</span>
          <span style={{ ...statValueStyle, color: 'var(--accent-purple)' }}>{fmtDollar(solarSavings)}</span>
          <span style={statSubStyle}>{t('stats_avoided_import_fit')}</span>
        </div>

        {/* Net cost */}
        <div style={{ ...statCardStyle, borderLeft: `3px solid ${netCost <= 0 ? 'var(--accent-green)' : 'var(--accent-red)'}` }}>
          <DollarSign size={14} color={netCost <= 0 ? 'var(--accent-green)' : 'var(--accent-red)'} />
          <span style={statLabelStyle}>{t('stats_net_grid_cost')}</span>
          <span style={{ ...statValueStyle, color: netCost <= 0 ? 'var(--accent-green)' : 'var(--accent-red)' }}>
            {netCost <= 0 ? '+' : ''}{fmtDollar(-netCost)}
          </span>
          <span style={statSubStyle}>
            {netCost <= 0 ? t('stats_net_credit') : t('stats_import_minus_fit')}
          </span>
        </div>

        {/* Home consumption */}
        <div style={{ ...statCardStyle, borderLeft: '3px solid var(--accent-red)' }}>
          <Zap size={14} color="var(--accent-red)" />
          <span style={statLabelStyle}>{t('stats_home_consumed')}</span>
          <span style={statValueStyle}>{fmt(stats.homeKwh)}</span>
          <span style={statSubStyle}>{t('stats_total_load')}</span>
        </div>
      </div>
    </div>
  );
}
