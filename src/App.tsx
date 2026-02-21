import { useEffect } from 'react';
import { useEnergyStore } from './store/energyStore';
import { useTranslation, LANGUAGES, type LangCode } from './i18n';
import { useTheme } from './theme';
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
import SetupToolbar from './components/toolbar/SetupToolbar';
import { decodeSetupFromUrl, loadFromLocalStorage, clearUrlParam } from './utils/persistence';

function App() {
  const { activeTab, setActiveTab, userLevel, setUserLevel, selectedComponentId, recalculate, importSetup } = useEnergyStore();
  const { lang, setLang, t } = useTranslation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Priority 1: URL share param — load and clean the URL
    const urlSnapshot = decodeSetupFromUrl();
    if (urlSnapshot) {
      importSetup(urlSnapshot);
      clearUrlParam();
      return;
    }
    // Priority 2: Auto-saved localStorage
    const lsSnapshot = loadFromLocalStorage();
    if (lsSnapshot) {
      importSetup(lsSnapshot);
      return;
    }
    // Priority 3: Default system
    recalculate();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif" }}>
      {/* Top Navigation */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px', backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>⚡</span>
          <h1 style={{ fontSize: '20px', fontWeight: 700, margin: 0, background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {t('nav_title')}
          </h1>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '4px', backgroundColor: 'var(--bg-tab)', borderRadius: '8px', padding: '4px' }}>
          {([
            { key: 'simulator' as const, label: t('nav_simulator') },
            { key: 'scenarios' as const, label: t('nav_scenarios') },
            { key: 'learn' as const, label: t('nav_learn') },
            { key: 'protocols' as const, label: t('nav_protocols') },
            { key: 'strategies' as const, label: t('nav_strategies') },
          ]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: activeTab === tab.key ? 'var(--accent-blue)' : 'transparent',
                color: activeTab === tab.key ? 'var(--nav-active-text)' : 'var(--text-muted)',
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

        {/* Controls Container */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* User Level Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{t('nav_level')}</span>
            <div style={{ display: 'flex', gap: '2px', backgroundColor: 'var(--bg-tab)', borderRadius: '6px', padding: '2px' }}>
              {(['beginner', 'advanced'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setUserLevel(level)}
                  style={{
                    padding: '6px 12px',
                    border: 'none',
                    borderRadius: '4px',
                    backgroundColor: userLevel === level ? (level === 'beginner' ? 'var(--accent-green)' : 'var(--accent-purple)') : 'transparent',
                    color: userLevel === level ? 'var(--nav-active-text)' : 'var(--text-muted)',
                    fontWeight: userLevel === level ? 600 : 400,
                    cursor: 'pointer',
                    fontSize: '12px',
                    textTransform: 'capitalize',
                  }}
                >
                  {t(`nav_level_${level}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as any)}
            style={{
              padding: '6px 8px',
              borderRadius: '6px',
              backgroundColor: 'var(--bg-tab)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            <option value="auto">{t('theme_auto')}</option>
            <option value="light">{t('theme_light')}</option>
            <option value="dark">{t('theme_dark')}</option>
          </select>

          {/* Language Dropdown */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as LangCode)}
            style={{
              padding: '6px 8px',
              borderRadius: '6px',
              backgroundColor: 'var(--bg-tab)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            {LANGUAGES.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>
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
                <SetupToolbar />
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
      <footer style={{ textAlign: 'center', padding: '24px', color: 'var(--text-footer)', fontSize: '13px', borderTop: '1px solid var(--border)' }}>
        {t('footer_text')}
      </footer>
    </div>
  );
}

export default App;
