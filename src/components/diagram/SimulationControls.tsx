import { useEffect, useRef, useCallback } from 'react';
import { Play, Pause, Sun, Moon, Cloud } from 'lucide-react';
import { useEnergyStore } from '../../store/energyStore';
import type { SimulationState } from '../../types/energy';

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
  background: '#1a1a2e',
  borderRadius: 12,
  padding: '16px 20px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 20,
  alignItems: 'center',
  color: '#e2e8f0',
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
  color: '#94a3b8',
  fontWeight: 600,
};

const sliderStyle: React.CSSProperties = {
  width: 140,
  accentColor: '#3b82f6',
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
            background: simulation.isRunning ? '#ef4444' : '#22c55e',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            padding: '8px 14px',
          }}
        >
          {simulation.isRunning ? <Pause size={14} /> : <Play size={14} />}
          {simulation.isRunning ? 'Pause' : 'Play'}
        </button>
      </div>

      {/* Speed */}
      <div style={sectionStyle}>
        <span style={labelStyle}>Speed</span>
        <div style={{ display: 'flex', gap: 4 }}>
          {SPEED_OPTIONS.map((speed) => (
            <button
              key={speed}
              onClick={() => setSimulation({ speedMultiplier: speed })}
              style={{
                ...buttonBase,
                background: simulation.speedMultiplier === speed ? '#3b82f6' : '#2d2d44',
                color: simulation.speedMultiplier === speed ? '#fff' : '#94a3b8',
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
          Time: {formatTime(simulation.timeOfDay)}
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
          Clouds: {Math.round(simulation.cloudCover * 100)}%
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
        <span style={labelStyle}>Season</span>
        <div style={{ display: 'flex', gap: 4 }}>
          {SEASONS.map((s) => (
            <button
              key={s.value}
              onClick={() => setSimulation({ season: s.value })}
              style={{
                ...buttonBase,
                background: simulation.season === s.value ? '#3b82f6' : '#2d2d44',
                color: simulation.season === s.value ? '#fff' : '#94a3b8',
                padding: '4px 8px',
                fontSize: 11,
              }}
              title={s.label}
            >
              {s.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Temperature */}
      <div style={sectionStyle}>
        <span style={labelStyle}>Temperature</span>
        <span style={{ fontSize: 16, fontWeight: 700, color: '#f0f0f0' }}>
          {simulation.temperature}°C
        </span>
      </div>
    </div>
  );
}
