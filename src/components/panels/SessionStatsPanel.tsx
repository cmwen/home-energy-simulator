import React from 'react';
import { useEnergyStore } from '../../store/energyStore';
import { TrendingUp, TrendingDown, DollarSign, Zap, RotateCcw } from 'lucide-react';

const panelStyle: React.CSSProperties = {
  background: '#1a1a2e',
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
  color: '#94a3b8',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
  gap: 10,
};

const statCardStyle: React.CSSProperties = {
  background: '#242440',
  borderRadius: 10,
  padding: '10px 14px',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
};

const statLabelStyle: React.CSSProperties = {
  fontSize: 10,
  color: '#9ca3af',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  whiteSpace: 'nowrap',
};

const statValueStyle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  color: '#e0e0e0',
  lineHeight: 1.1,
};

const statSubStyle: React.CSSProperties = {
  fontSize: 11,
  color: '#6b7280',
};

const resetButtonStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  background: 'none',
  border: '1px solid #2a2a4e',
  borderRadius: 6,
  padding: '4px 10px',
  cursor: 'pointer',
  color: '#6b7280',
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
          Session Totals {!simulation.isRunning && !hasData && '— press Play to accumulate'}
        </span>
        {hasData && (
          <button style={resetButtonStyle} onClick={resetSessionStats} title="Reset session totals">
            <RotateCcw size={11} />
            Reset
          </button>
        )}
      </div>

      <div style={gridStyle}>
        {/* Solar generated */}
        <div style={{ ...statCardStyle, borderLeft: '3px solid #facc15' }}>
          <Zap size={14} color="#facc15" />
          <span style={statLabelStyle}>Solar Generated</span>
          <span style={statValueStyle}>{fmt(stats.solarKwh)}</span>
          <span style={statSubStyle}>
            {fmt(selfConsumedKwh)} self-used · {fmt(stats.exportKwh)} exported
          </span>
        </div>

        {/* Grid import */}
        <div style={{ ...statCardStyle, borderLeft: '3px solid #3b82f6' }}>
          <TrendingDown size={14} color="#3b82f6" />
          <span style={statLabelStyle}>Grid Imported</span>
          <span style={statValueStyle}>{fmt(stats.importKwh)}</span>
          <span style={statSubStyle} title={`at ${(importTariff * 100).toFixed(0)}¢/kWh`}>
            Cost: {fmtDollar(importCost)} @ {(importTariff * 100).toFixed(0)}¢
          </span>
        </div>

        {/* Grid export */}
        <div style={{ ...statCardStyle, borderLeft: '3px solid #22c55e' }}>
          <TrendingUp size={14} color="#22c55e" />
          <span style={statLabelStyle}>Grid Exported</span>
          <span style={statValueStyle}>{fmt(stats.exportKwh)}</span>
          <span style={statSubStyle} title={`at ${(feedInTariff * 100).toFixed(0)}¢/kWh FiT`}>
            Earned: {fmtDollar(stats.exportKwh * feedInTariff)} @ {(feedInTariff * 100).toFixed(0)}¢ FiT
          </span>
        </div>

        {/* Solar savings */}
        <div style={{ ...statCardStyle, borderLeft: '3px solid #a78bfa' }}>
          <DollarSign size={14} color="#a78bfa" />
          <span style={statLabelStyle}>Solar Value</span>
          <span style={{ ...statValueStyle, color: '#a78bfa' }}>{fmtDollar(solarSavings)}</span>
          <span style={statSubStyle}>avoided import + FiT earned</span>
        </div>

        {/* Net cost */}
        <div style={{ ...statCardStyle, borderLeft: `3px solid ${netCost <= 0 ? '#22c55e' : '#f97316'}` }}>
          <DollarSign size={14} color={netCost <= 0 ? '#22c55e' : '#f97316'} />
          <span style={statLabelStyle}>Net Grid Cost</span>
          <span style={{ ...statValueStyle, color: netCost <= 0 ? '#22c55e' : '#f97316' }}>
            {netCost <= 0 ? '+' : ''}{fmtDollar(-netCost)}
          </span>
          <span style={statSubStyle}>
            {netCost <= 0 ? 'net credit (exported more than cost)' : 'import spend minus FiT'}
          </span>
        </div>

        {/* Home consumption */}
        <div style={{ ...statCardStyle, borderLeft: '3px solid #f97316' }}>
          <Zap size={14} color="#f97316" />
          <span style={statLabelStyle}>Home Consumed</span>
          <span style={statValueStyle}>{fmt(stats.homeKwh)}</span>
          <span style={statSubStyle}>total load (incl. EV)</span>
        </div>
      </div>
    </div>
  );
}
