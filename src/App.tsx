import { useEffect } from 'react';
import { useEnergyStore } from './store/energyStore';
import SystemDiagram from './components/diagram/SystemDiagram';
import SimulationControls from './components/diagram/SimulationControls';
import SystemSummary from './components/panels/SystemSummary';
import SessionStatsPanel from './components/panels/SessionStatsPanel';
import ComponentEditor from './components/panels/ComponentEditor';
import AddComponentPanel from './components/panels/AddComponentPanel';
import LearnSection from './components/education/LearnSection';
import ProtocolsSection from './components/education/ProtocolsSection';
import StrategiesSection from './components/education/StrategiesSection';
import ScenariosSection from './components/scenarios/ScenariosSection';

function App() {
  const { activeTab, setActiveTab, userLevel, setUserLevel, selectedComponentId, recalculate } = useEnergyStore();

  useEffect(() => {
    recalculate();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f0f1a', color: '#e0e0e0', fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif" }}>
      {/* Top Navigation */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px', backgroundColor: '#1a1a2e', borderBottom: '1px solid #2a2a4a' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>⚡</span>
          <h1 style={{ fontSize: '20px', fontWeight: 700, margin: 0, background: 'linear-gradient(135deg, #7aa2f7, #bb9af7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Home Energy Simulator
          </h1>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '4px', backgroundColor: '#16162a', borderRadius: '8px', padding: '4px' }}>
          {([
            { key: 'simulator' as const, label: 'Simulator' },
            { key: 'scenarios' as const, label: 'Scenarios' },
            { key: 'learn' as const, label: 'Learn' },
            { key: 'protocols' as const, label: 'Protocols' },
            { key: 'strategies' as const, label: 'Strategies' },
          ]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: activeTab === tab.key ? '#7aa2f7' : 'transparent',
                color: activeTab === tab.key ? '#0f0f1a' : '#8888aa',
                fontWeight: activeTab === tab.key ? 600 : 400,
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* User Level Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '13px', color: '#8888aa' }}>Level:</span>
          <div style={{ display: 'flex', gap: '2px', backgroundColor: '#16162a', borderRadius: '6px', padding: '2px' }}>
            {(['beginner', 'advanced'] as const).map((level) => (
              <button
                key={level}
                onClick={() => setUserLevel(level)}
                style={{
                  padding: '6px 12px',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: userLevel === level ? (level === 'beginner' ? '#9ece6a' : '#bb9af7') : 'transparent',
                  color: userLevel === level ? '#0f0f1a' : '#8888aa',
                  fontWeight: userLevel === level ? 600 : 400,
                  cursor: 'pointer',
                  fontSize: '12px',
                  textTransform: 'capitalize',
                }}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: '16px 24px', maxWidth: '1400px', margin: '0 auto' }}>
        {activeTab === 'simulator' && (
          <div>
            <SystemSummary />
            <SessionStatsPanel />
            <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <SystemDiagram />
                <SimulationControls />
                <AddComponentPanel />
              </div>
              {selectedComponentId && (
                <div style={{ width: '360px', flexShrink: 0 }}>
                  <ComponentEditor />
                </div>
              )}
            </div>
          </div>
        )}
        {activeTab === 'learn' && <LearnSection />}
        {activeTab === 'scenarios' && <ScenariosSection />}
        {activeTab === 'protocols' && <ProtocolsSection />}
        {activeTab === 'strategies' && <StrategiesSection />}
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '24px', color: '#555', fontSize: '13px', borderTop: '1px solid #1a1a2e' }}>
        Home Energy Simulator — Interactive learning tool for residential energy systems
      </footer>
    </div>
  );
}

export default App;
