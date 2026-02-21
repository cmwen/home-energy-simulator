import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type ThemeMode = 'light' | 'dark' | 'auto';

interface ThemeContextValue {
  theme: ThemeMode;
  resolved: 'light' | 'dark';
  setTheme: (t: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  resolved: 'dark',
  setTheme: () => {},
});

const darkVars: Record<string, string> = {
  '--bg-primary': '#0f0f1a',
  '--bg-secondary': '#1a1a2e',
  '--bg-card': '#242440',
  '--bg-card-hover': '#2e2e50',
  '--bg-input': '#2a2a3e',
  '--bg-input-border': '#3a3a5e',
  '--bg-tab': '#16162a',
  '--bg-diagram': '#0f172a',
  '--bg-diagram-grad-top': '#1e293b',
  '--bg-diagram-grad-bottom': '#0f172a',
  '--bg-code': '#16161e',
  '--bg-info': '#16213e',
  '--bg-info-border': '#1e3a5f',
  '--bg-tip': '#1a2e1a',
  '--bg-tip-border': '#2a3e2a',
  '--bg-warning': '#2e2a1a',
  '--bg-warning-border': '#3e3a2a',
  '--bg-note': '#1a1a2e',
  '--bg-note-border': '#2a2a3e',
  '--text-primary': '#e0e0e0',
  '--text-secondary': '#c0c0d0',
  '--text-muted': '#8888aa',
  '--text-heading': '#c0caf5',
  '--text-label': '#9ca3af',
  '--text-dim': '#6b7280',
  '--text-footer': '#555',
  '--border': '#2a2a4a',
  '--border-card': '#2a2a3e',
  '--border-input': '#3a3a5e',
  '--accent-blue': '#7aa2f7',
  '--accent-purple': '#bb9af7',
  '--accent-green': '#9ece6a',
  '--accent-yellow': '#e0af68',
  '--accent-red': '#f7768e',
  '--accent-teal': '#73daca',
  '--accent-cyan': '#2dd4bf',
  '--code-text': '#a9b1d6',
  '--flow-text': '#9ece6a',
  '--nav-active-text': '#0f0f1a',
  '--badge-bg': '#1e1e2e',
  '--shadow-panel': 'rgba(0,0,0,0.4)',
};

const lightVars: Record<string, string> = {
  '--bg-primary': '#f5f5f5',
  '--bg-secondary': '#ffffff',
  '--bg-card': '#f0f0f5',
  '--bg-card-hover': '#e8e8f0',
  '--bg-input': '#ffffff',
  '--bg-input-border': '#d0d0e0',
  '--bg-tab': '#e8e8f0',
  '--bg-diagram': '#e9ecef',
  '--bg-diagram-grad-top': '#dee2e6',
  '--bg-diagram-grad-bottom': '#e9ecef',
  '--bg-code': '#f0f0f5',
  '--bg-info': '#e8f0fe',
  '--bg-info-border': '#b0c8f0',
  '--bg-tip': '#e8f5e8',
  '--bg-tip-border': '#b0d8b0',
  '--bg-warning': '#fef3e0',
  '--bg-warning-border': '#e8d0a0',
  '--bg-note': '#f0f0ff',
  '--bg-note-border': '#d0d0e8',
  '--text-primary': '#1a1a2e',
  '--text-secondary': '#333355',
  '--text-muted': '#555577',
  '--text-heading': '#1a1a3e',
  '--text-label': '#555577',
  '--text-dim': '#777799',
  '--text-footer': '#888',
  '--border': '#d0d0e0',
  '--border-card': '#d0d0e0',
  '--border-input': '#c0c0d8',
  '--accent-blue': '#3b6fd4',
  '--accent-purple': '#8b5fbf',
  '--accent-green': '#5a8a2a',
  '--accent-yellow': '#b8862e',
  '--accent-red': '#d4445a',
  '--accent-teal': '#2a8a7a',
  '--accent-cyan': '#1a9a8a',
  '--code-text': '#3a3a5e',
  '--flow-text': '#3a7a1a',
  '--nav-active-text': '#ffffff',
  '--badge-bg': '#e0e0f0',
  '--shadow-panel': 'rgba(0,0,0,0.1)',
};

function applyVars(vars: Record<string, string>) {
  const root = document.documentElement;
  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value);
  }
}

function getSystemPreference(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark' || saved === 'auto') return saved;
    } catch {}
    return 'dark';
  });

  const [systemPref, setSystemPref] = useState<'light' | 'dark'>(getSystemPreference);
  const resolved = theme === 'auto' ? systemPref : theme;

  const setTheme = useCallback((t: ThemeMode) => {
    setThemeState(t);
    try {
      localStorage.setItem('theme', t);
    } catch {}
  }, []);

  // Listen for OS preference changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setSystemPref(e.matches ? 'dark' : 'light');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Apply CSS vars whenever resolved theme changes
  useEffect(() => {
    applyVars(resolved === 'dark' ? darkVars : lightVars);
    document.documentElement.setAttribute('data-theme', resolved);
  }, [resolved]);

  return (
    <ThemeContext.Provider value={{ theme, resolved, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
