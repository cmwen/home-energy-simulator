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
import {
  buildSnapshot,
  downloadSetupJson,
  parseSetupJson,
  encodeSetupToUrl,
} from '../../utils/persistence';

type Feedback = { message: string; ok: boolean } | null;

export default function SetupToolbar() {
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
    flash('Setup downloaded');
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
        flash('Invalid setup file — could not parse JSON', false);
      } else {
        importSetup(snapshot);
        flash(`Loaded: ${file.name}`);
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
      flash('Share URL copied to clipboard');
    } catch {
      // Clipboard API not available (non-HTTPS dev env) — show the URL in a prompt
      window.prompt('Copy this share URL:', url);
    }
  }

  // ── Reset ──────────────────────────────────────────────────────────────────
  function handleReset() {
    if (!window.confirm('Reset to default system? This will discard your current setup.')) return;
    resetToDefault();
    flash('Reset to default');
  }

  // ── Styles ─────────────────────────────────────────────────────────────────
  const barStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    backgroundColor: '#16162a',
    borderRadius: '8px',
    marginBottom: '10px',
    border: '1px solid #2a2a4a',
    flexWrap: 'wrap',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#8888aa',
    marginRight: '4px',
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  };

  function btn(
    label: string,
    icon: string,
    onClick: () => void,
    accent = '#7aa2f7'
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
          border: `1px solid ${accent}44`,
          borderRadius: '6px',
          backgroundColor: `${accent}18`,
          color: accent,
          fontSize: '13px',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'background 0.15s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = `${accent}30`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = `${accent}18`;
        }}
      >
        <span>{icon}</span>
        {label}
      </button>
    );
  }

  return (
    <div style={barStyle}>
      <span style={labelStyle}>Setup</span>

      {btn('Save JSON', '💾', handleSave, '#9ece6a')}
      {btn('Load JSON', '📂', handleLoadClick, '#7aa2f7')}
      {btn('Share URL', '🔗', handleShare, '#bb9af7')}
      {btn('Reset', '↺', handleReset, '#f7768e')}

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
            color: feedback.ok ? '#9ece6a' : '#f7768e',
            padding: '4px 10px',
            backgroundColor: feedback.ok ? '#9ece6a18' : '#f7768e18',
            borderRadius: '4px',
            border: `1px solid ${feedback.ok ? '#9ece6a44' : '#f7768e44'}`,
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
          color: '#555577',
        }}
        title="Your setup is automatically saved to this browser's local storage"
      >
        Auto-saved locally
      </span>
    </div>
  );
}
