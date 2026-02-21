/**
 * SetupToolbar
 *
 * A compact toolbar strip rendered above the system diagram.
 * Provides four actions:
 *   1. Save JSON  — download current setup as a .json file
 *   2. Load JSON  — import a setup from a .json file (also suitable for LLM-generated configs)
 *   3. Share URL  — encode setup into the URL and copy it to clipboard
 *   4. Reset      — clear back to the default system
 *
 * Auto-save to localStorage happens automatically via the store subscription
 * (see energyStore.ts); this toolbar just exposes manual controls.
 */

import { useRef, useState } from 'react';
import { useEnergyStore } from '../../store/energyStore';
import { useTranslation } from '../../i18n';
import {
  buildSnapshot,
  downloadSetupJson,
  parseSetupJson,
  encodeSetupToUrl,
} from '../../utils/persistence';

type Feedback = { message: string; ok: boolean } | null;

export default function SetupToolbar() {
  const { t } = useTranslation();
  const { components, simulation, importSetup, resetToDefault } = useEnergyStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [feedback, setFeedback] = useState<Feedback>(null);

  function flash(message: string, ok = true) {
    setFeedback({ message, ok });
    setTimeout(() => setFeedback(null), 2500);
  }

  // ── Save JSON ──────────────────────────────────────────────────────────────
  function handleSave() {
    const snapshot = buildSnapshot(components, simulation);
    downloadSetupJson(snapshot);
    flash(t('setup_downloaded'));
  }

  // ── Load JSON ──────────────────────────────────────────────────────────────
  function handleLoadClick() {
    fileInputRef.current?.click();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      const snapshot = parseSetupJson(text);
      if (!snapshot) {
        flash(t('setup_invalid_file'), false);
      } else {
        importSetup(snapshot);
        flash(`${t('setup_loaded')}: ${file.name}`);
      }
    };
    reader.readAsText(file);
    // Reset input so the same file can be re-loaded if needed
    e.target.value = '';
  }

  // ── Share URL ──────────────────────────────────────────────────────────────
  async function handleShare() {
    const snapshot = buildSnapshot(components, simulation);
    const url = encodeSetupToUrl(snapshot);
    try {
      await navigator.clipboard.writeText(url);
      flash(t('setup_url_copied'));
    } catch {
      // Clipboard API not available (non-HTTPS dev env) — show the URL in a prompt
      window.prompt('Copy this share URL:', url);
    }
  }

  // ── Reset ──────────────────────────────────────────────────────────────────
  function handleReset() {
    if (!window.confirm(t('setup_reset_confirm'))) return;
    resetToDefault();
    flash(t('setup_reset_done'));
  }

  // ── Styles ─────────────────────────────────────────────────────────────────
  const barStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    backgroundColor: 'var(--bg-tab)',
    borderRadius: '8px',
    marginBottom: '10px',
    border: '1px solid var(--border)',
    flexWrap: 'wrap',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '12px',
    color: 'var(--text-muted)',
    marginRight: '4px',
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  };

  function btn(
    label: string,
    icon: string,
    onClick: () => void,
    accent = 'var(--accent-blue)'
  ): React.ReactNode {
    return (
      <button
        onClick={onClick}
        title={label}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          padding: '6px 12px',
          border: `1px solid color-mix(in srgb, ${accent} 27%, transparent)`,
          borderRadius: '6px',
          backgroundColor: `color-mix(in srgb, ${accent} 9%, transparent)`,
          color: accent,
          fontSize: '13px',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'background 0.15s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = `color-mix(in srgb, ${accent} 19%, transparent)`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = `color-mix(in srgb, ${accent} 9%, transparent)`;
        }}
      >
        <span>{icon}</span>
        {label}
      </button>
    );
  }

  return (
    <div style={barStyle}>
      <span style={labelStyle}>{t('setup_label')}</span>

      {btn(t('setup_save_json'), '💾', handleSave, 'var(--accent-green)')}
      {btn(t('setup_load_json'), '📂', handleLoadClick, 'var(--accent-blue)')}
      {btn(t('setup_share_url'), '🔗', handleShare, 'var(--accent-purple)')}
      {btn(t('setup_reset'), '↺', handleReset, 'var(--accent-red)')}

      {/* Hidden file input for JSON import */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json,application/json"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {/* Inline feedback toast */}
      {feedback && (
        <span
          style={{
            marginLeft: 'auto',
            fontSize: '12px',
            color: feedback.ok ? 'var(--accent-green)' : 'var(--accent-red)',
            padding: '4px 10px',
            backgroundColor: feedback.ok ? 'color-mix(in srgb, var(--accent-green) 9%, transparent)' : 'color-mix(in srgb, var(--accent-red) 9%, transparent)',
            borderRadius: '4px',
            border: `1px solid color-mix(in srgb, ${feedback.ok ? 'var(--accent-green)' : 'var(--accent-red)'} 27%, transparent)`,
          }}
        >
          {feedback.ok ? '✓' : '✗'} {feedback.message}
        </span>
      )}

      {/* Auto-save indicator */}
      <span
        style={{
          marginLeft: feedback ? '0' : 'auto',
          fontSize: '11px',
          color: 'var(--text-dim)',
        }}
        title={t('setup_auto_saved_tooltip')}
      >
        {t('setup_auto_saved')}
      </span>
    </div>
  );
}
