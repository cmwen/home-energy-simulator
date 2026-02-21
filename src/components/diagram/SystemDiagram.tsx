import { useEnergyStore } from '../../store/energyStore';
import type { ComponentType, EnergyComponent, PowerFlow } from '../../types/energy';

const COMPONENT_COLORS: Record<ComponentType, { fill: string; stroke: string; text: string }> = {
  solarPanel: { fill: '#fef3c7', stroke: '#f59e0b', text: '#92400e' },
  grid: { fill: '#dbeafe', stroke: '#3b82f6', text: '#1e3a8a' },
  battery: { fill: '#d1fae5', stroke: '#10b981', text: '#065f46' },
  evCharger: { fill: '#ede9fe', stroke: '#8b5cf6', text: '#5b21b6' },
  homeLoad: { fill: '#ffedd5', stroke: '#f97316', text: '#9a3412' },
  smartMeter: { fill: '#f3f4f6', stroke: '#6b7280', text: '#1f2937' },
  gridMeter: { fill: '#e0e7ff', stroke: '#6366f1', text: '#312e81' },
  energyMonitor: { fill: '#fce7f3', stroke: '#ec4899', text: '#831843' },
  mainSwitchboard: { fill: '#fef9c3', stroke: '#ca8a04', text: '#713f12' },
  inverter: { fill: '#ccfbf1', stroke: '#14b8a6', text: '#134e4a' },
  heatPump: { fill: '#fee2e2', stroke: '#ef4444', text: '#991b1b' },
};

const COMPONENT_ICONS: Record<ComponentType, string> = {
  grid: '⚡',
  smartMeter: '📊',
  gridMeter: '🔌',
  energyMonitor: '📡',
  mainSwitchboard: '🔧',
  solarPanel: '☀️',
  inverter: '🔄',
  battery: '🔋',
  evCharger: '🚗',
  homeLoad: '🏠',
  heatPump: '🌡️',
};

function formatPowerKw(watts: number): string {
  const kw = Math.abs(watts) / 1000;
  if (kw < 0.01) return '0 W';
  if (kw < 1) return `${Math.round(watts)} W`;
  return `${kw.toFixed(2)} kW`;
}

function getFlowColor(flow: PowerFlow, components: EnergyComponent[]): string {
  const source = components.find((c) => c.id === flow.fromId);
  if (!source) return '#6b7280';
  switch (source.type) {
    case 'solarPanel':
    case 'inverter':
      return '#22c55e';
    case 'grid':
    case 'smartMeter':
    case 'gridMeter':
      return '#3b82f6';
    case 'battery':
      return '#f97316';
    case 'mainSwitchboard':
      return '#a78bfa';
    default:
      return '#6b7280';
  }
}

function ComponentNode({
  component,
  isSelected,
  onSelect,
}: {
  component: EnergyComponent;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const colors = COMPONENT_COLORS[component.type];
  const icon = COMPONENT_ICONS[component.type];
  const nodeWidth = 120;
  const nodeHeight = 80;
  const x = component.position.x;
  const y = component.position.y;

  return (
    <g
      onClick={onSelect}
      style={{ cursor: 'pointer', opacity: component.enabled ? 1 : 0.4 }}
    >
      {isSelected && (
        <rect
          x={x - nodeWidth / 2 - 4}
          y={y - nodeHeight / 2 - 4}
          width={nodeWidth + 8}
          height={nodeHeight + 8}
          rx={14}
          ry={14}
          fill="none"
          stroke="#fbbf24"
          strokeWidth={3}
          strokeDasharray="6 3"
        />
      )}
      <rect
        x={x - nodeWidth / 2}
        y={y - nodeHeight / 2}
        width={nodeWidth}
        height={nodeHeight}
        rx={12}
        ry={12}
        fill={colors.fill}
        stroke={colors.stroke}
        strokeWidth={2}
      />
      <text
        x={x}
        y={y - 18}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={22}
      >
        {icon}
      </text>
      <text
        x={x}
        y={y + 8}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={10}
        fontWeight={600}
        fill={colors.text}
      >
        {component.name}
      </text>
      <text
        x={x}
        y={y + 24}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={9}
        fill={colors.text}
        opacity={0.8}
      >
        {formatPowerKw(component.currentPowerW)}
      </text>
    </g>
  );
}

function FlowLine({
  flow,
  components,
}: {
  flow: PowerFlow;
  components: EnergyComponent[];
}) {
  const fromComp = components.find((c) => c.id === flow.fromId);
  const toComp = components.find((c) => c.id === flow.toId);

  if (!fromComp || !toComp || flow.powerW === 0) return null;

  const x1 = fromComp.position.x;
  const y1 = fromComp.position.y;
  const x2 = toComp.position.x;
  const y2 = toComp.position.y;
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  const color = getFlowColor(flow, components);
  const strokeWidth = Math.max(1.5, Math.min(5, Math.abs(flow.powerW) / 2000));

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray="8 4"
        className="power-flow-line"
        markerEnd="url(#arrowhead)"
        opacity={0.7}
      />
      <rect
        x={midX - 28}
        y={midY - 10}
        width={56}
        height={18}
        rx={4}
        fill="rgba(0,0,0,0.7)"
      />
      <text
        x={midX}
        y={midY}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={9}
        fill="#fff"
        fontWeight={500}
      >
        {formatPowerKw(flow.powerW)}
      </text>
    </g>
  );
}

export default function SystemDiagram() {
  const components = useEnergyStore((s) => s.components);
  const powerFlows = useEnergyStore((s) => s.powerFlows);
  const selectedComponentId = useEnergyStore((s) => s.selectedComponentId);
  const selectComponent = useEnergyStore((s) => s.selectComponent);

  return (
    <div style={{ width: '100%', background: '#0f172a', borderRadius: 12, overflow: 'hidden' }}>
      <svg
        viewBox="0 0 800 550"
        width="100%"
        height="100%"
        style={{ display: 'block' }}
      >
        <style>{`
          @keyframes flowDash {
            to { stroke-dashoffset: -24; }
          }
          .power-flow-line {
            animation: flowDash 1s linear infinite;
          }
        `}</style>

        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <polygon points="0 0, 8 3, 0 6" fill="#94a3b8" />
          </marker>
          <linearGradient id="bg-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        <rect width="800" height="550" fill="url(#bg-gradient)" />

        {powerFlows.map((flow) => (
          <FlowLine
            key={`${flow.fromId}-${flow.toId}`}
            flow={flow}
            components={components}
          />
        ))}

        {components.map((comp) => (
          <ComponentNode
            key={comp.id}
            component={comp}
            isSelected={selectedComponentId === comp.id}
            onSelect={() => selectComponent(comp.id)}
          />
        ))}
      </svg>
    </div>
  );
}
