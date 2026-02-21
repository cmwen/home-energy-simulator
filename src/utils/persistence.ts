/**
 * persistence.ts
 *
 * Handles serialisation / deserialisation of the simulator setup for:
 *  1. Local Storage auto-save / restore
 *  2. JSON file download / upload
 *  3. Shareable URL encoding (lz-string base64 compressed)
 */

import LZString from 'lz-string';
import type { EnergyComponent, SimulationState } from '../types/energy';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SetupSnapshot {
  version: number;
  components: EnergyComponent[];
  simulation: SimulationState;
}

const CURRENT_VERSION = 1;
const LS_KEY = 'home-energy-simulator:setup';
const URL_PARAM = 's';

// ─── Serialise / Deserialise ──────────────────────────────────────────────────

/**
 * Produce a clean snapshot from store state.
 * We strip live fields (currentPowerW stays — it's part of config for homeLoad)
 * but reset evSessionKwh so imported setups always start fresh.
 */
export function buildSnapshot(
  components: EnergyComponent[],
  simulation: SimulationState
): SetupSnapshot {
  const cleanComponents = components.map((c) => ({
    ...c,
    config: {
      ...c.config,
      evSessionKwh: 0, // always reset session kwh on save/share
    },
  }));
  return {
    version: CURRENT_VERSION,
    components: cleanComponents,
    simulation: { ...simulation, isRunning: false }, // never auto-start on load
  };
}

function migrateSnapshot(raw: unknown): SetupSnapshot | null {
  try {
    const obj = raw as Record<string, unknown>;
    if (!obj || typeof obj !== 'object') return null;
    if (!Array.isArray(obj.components) || typeof obj.simulation !== 'object') return null;

    // v1 — no migration needed yet; future versions add steps here
    return {
      version: CURRENT_VERSION,
      components: obj.components as EnergyComponent[],
      simulation: obj.simulation as SimulationState,
    };
  } catch {
    return null;
  }
}

// ─── Local Storage ────────────────────────────────────────────────────────────

export function saveToLocalStorage(snapshot: SetupSnapshot): void {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(snapshot));
  } catch {
    // Quota exceeded or private-browsing — silently ignore
  }
}

export function loadFromLocalStorage(): SetupSnapshot | null {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    return migrateSnapshot(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function clearLocalStorage(): void {
  try {
    localStorage.removeItem(LS_KEY);
  } catch {
    // ignore
  }
}

// ─── JSON File Download ───────────────────────────────────────────────────────

export function downloadSetupJson(snapshot: SetupSnapshot): void {
  const json = JSON.stringify(snapshot, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const ts = new Date().toISOString().slice(0, 16).replace('T', '_').replace(':', '-');
  a.href = url;
  a.download = `energy-setup-${ts}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function parseSetupJson(jsonText: string): SetupSnapshot | null {
  try {
    return migrateSnapshot(JSON.parse(jsonText));
  } catch {
    return null;
  }
}

// ─── URL Encoding ─────────────────────────────────────────────────────────────

/**
 * Encode the snapshot into a URL-safe base64-compressed string and return
 * the full shareable URL.
 */
export function encodeSetupToUrl(snapshot: SetupSnapshot): string {
  const json = JSON.stringify(snapshot);
  const compressed = LZString.compressToEncodedURIComponent(json);
  const base = window.location.origin + window.location.pathname;
  return `${base}?${URL_PARAM}=${compressed}`;
}

/**
 * Try to parse a setup snapshot from the current page URL.
 * Returns null if no ?s= param is present or if it cannot be decoded.
 */
export function decodeSetupFromUrl(): SetupSnapshot | null {
  try {
    const params = new URLSearchParams(window.location.search);
    const compressed = params.get(URL_PARAM);
    if (!compressed) return null;
    const json = LZString.decompressFromEncodedURIComponent(compressed);
    if (!json) return null;
    return migrateSnapshot(JSON.parse(json));
  } catch {
    return null;
  }
}

/**
 * Remove the ?s= param from the browser URL bar without a page reload,
 * so the user can edit the setup without the URL becoming stale.
 */
export function clearUrlParam(): void {
  const params = new URLSearchParams(window.location.search);
  if (!params.has(URL_PARAM)) return;
  params.delete(URL_PARAM);
  const newSearch = params.toString();
  const newUrl =
    window.location.pathname + (newSearch ? `?${newSearch}` : '') + window.location.hash;
  window.history.replaceState(null, '', newUrl);
}
