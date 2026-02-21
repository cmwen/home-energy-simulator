import { useEffect, useRef, useCallback } from 'react';
import { Play, Pause, Sun, Moon, Cloud } from 'lucide-react';
import { useEnergyStore } from '../../store/energyStore';
import type { SimulationState } from '../../types/energy';
import { useTranslation } from '../../i18n';

type Season = SimulationState['season'];


const SEASONS: { value: Season; label: string; icon: string }[] = [
  { value: 'spring', label: 'Spring', icon: '🌱' },
  { value: 'summer', label: 'Summer', icon: '☀️' },
  { value: 'autumn', label: 'Autumn', icon: '🍂' },
  { value: 'winter', label: 'Winter', icon: '❄️' },
];

const SPEED_OPTIONS = [1, 2, 5, 10] as const;

function formatTime(hours: number): string {
  const h = Math.floor(hours) % 24;
  const m = Math.floor((hours % 1) * 60);
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

const containerStyle: React.CSSProperties = {
  background: 'var(--bg-secondary)',
  borderRadius: 12,
  padding: '16px 20px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 20,
  alignItems: 'center',
  color: 'var(--text-primary)',
  fontFamily: 'system-ui, -apple-system, sans-serif',
  fontSize: 13,
};

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
};

const labelStyle: React.CSSProperties = {
  fontSize: 10,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: 'var(--text-label)',
  fontWeight: 600,
};

const sliderStyle: React.CSSProperties = {
  width: 140,
  accentColor: 'var(--accent-blue)',
  cursor: 'pointer',
};

const buttonBase: React.CSSProperties = {
  border: 'none',
  borderRadius: 8,
  padding: '6px 12px',
  cursor: 'pointer',
  fontSize: 12,
  fontWeight: 600,
  transition: 'background 0.15s',
};

export default function SimulationControls() {
  const { t } = useTranslation();
  const simulation = useEnergyStore((s) => s.simulation);
  const setSimulation = useEnergyStore((s) => s.setSimulation);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const simulationRef = useRef(simulation);
  simulationRef.current = simulation;

  const tick = useCallback(() => {
    const sim = simulationRef.current;
    const next = sim.timeOfDay + 0.05 * sim.speedMultiplier;
    setSimulation({ timeOfDay: next >= 24 ? next - 24 : next });
  }, [setSimulation]);

  useEffect(() => {
    if (simulation.isRunning) {
      intervalRef.current = setInterval(tick, 100);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [simulation.isRunning, tick]);

  const isDaytime = simulation.timeOfDay >= 6 && simulation.timeOfDay < 20;
  const TimeIcon = isDaytime ? Sun : Moon;

  return (
    <div style={containerStyle}>
      {/* Play / Pause */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button
          onClick={() => setSimulation({ isRunning: !simulation.isRunning })}
          style={{
            ...buttonBase,
            background: simulation.isRunning ? 'var(--accent-red)' : 'var(--accent-green)',
            color: 'var(--bg-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            padding: '8px 14px',
          }}
        >
          {simulation.isRunning ? <Pause size={14} /> : <Play size={14} />}
          {simulation.isRunning ? t('sim_pause') : t('sim_play')}
        </button>
      </div>

      {/* Speed */}
      <div style={sectionStyle}>
        <span style={labelStyle}>{t('sim_speed')}</span>
        <div style={{ display: 'flex', gap: 4 }}>
          {SPEED_OPTIONS.map((speed) => (
            <button
              key={speed}
              onClick={() => setSimulation({ speedMultiplier: speed })}
              style={{
                ...buttonBase,
                background: simulation.speedMultiplier === speed ? 'var(--accent-blue)' : 'var(--bg-card)',
                color: simulation.speedMultiplier === speed ? 'var(--bg-primary)' : 'var(--text-label)',
                padding: '4px 10px',
                fontSize: 11,
              }}
            >
              {speed}x
            </button>
          ))}
        </div>
      </div>

      {/* Time of Day */}
      <div style={sectionStyle}>
        <span style={labelStyle}>
          <TimeIcon size={10} style={{ marginRight: 4, verticalAlign: 'middle' }} />
          {t('sim_time')}: {formatTime(simulation.timeOfDay)}
        </span>
        <input
          type="range"
          min={0}
          max={24}
          step={0.25}
          value={simulation.timeOfDay}
          onChange={(e) => setSimulation({ timeOfDay: parseFloat(e.target.value) })}
          style={sliderStyle}
        />
      </div>

      {/* Cloud Cover */}
      <div style={sectionStyle}>
        <span style={labelStyle}>
          <Cloud size={10} style={{ marginRight: 4, verticalAlign: 'middle' }} />
          {t('sim_clouds')}: {Math.round(simulation.cloudCover * 100)}%
        </span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={simulation.cloudCover}
          onChange={(e) => setSimulation({ cloudCover: parseFloat(e.target.value) })}
          style={sliderStyle}
        />
      </div>

      {/* Season */}
      <div style={sectionStyle}>
        <span style={labelStyle}>{t('sim_season')}</span>
        <div style={{ display: 'flex', gap: 4 }}>
          {SEASONS.map((s) => (
            <button
              key={s.value}
              onClick={() => setSimulation({ season: s.value })}
              style={{
                ...buttonBase,
                background: simulation.season === s.value ? 'var(--accent-blue)' : 'var(--bg-card)',
                color: simulation.season === s.value ? 'var(--bg-primary)' : 'var(--text-label)',
                padding: '4px 8px',
                fontSize: 11,
              }}
              title={t(`sim_${s.value}` as Parameters<typeof t>[0])}
            >
              {s.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Temperature */}
      <div style={sectionStyle}>
        <span style={labelStyle}>{t('sim_temperature')}</span>
        <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-heading)' }}>
          {simulation.temperature}°C
        </span>
      </div>
    </div>
  );
}
