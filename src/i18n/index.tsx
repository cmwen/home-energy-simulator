import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Translations } from './types';
import { en } from './en';

export type LangCode = 'en' | 'zh-TW' | 'es' | 'ja' | 'ko' | 'vi';

export const LANGUAGES: { code: LangCode; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'es', label: 'Español' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'vi', label: 'Tiếng Việt' },
];

// Lazy-load translations to reduce bundle size
const translationLoaders: Record<LangCode, () => Promise<{ default: Translations }>> = {
  en: () => Promise.resolve({ default: en }),
  'zh-TW': () => import('./zh-TW'),
  es: () => import('./es'),
  ja: () => import('./ja'),
  ko: () => import('./ko'),
  vi: () => import('./vi'),
};

// Cache loaded translations
const translationCache: Partial<Record<LangCode, Translations>> = { en };

interface LanguageContextValue {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  t: (key: string) => string;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
  translations: en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(() => {
    try {
      const saved = localStorage.getItem('lang') as LangCode;
      if (LANGUAGES.some((l) => l.code === saved)) return saved;
    } catch {}
    return 'en';
  });

  const [translations, setTranslations] = useState<Translations>(() => {
    return translationCache[lang] || en;
  });

  const setLang = useCallback((l: LangCode) => {
    setLangState(l);
    try {
      localStorage.setItem('lang', l);
    } catch {}

    if (translationCache[l]) {
      setTranslations(translationCache[l]!);
    } else {
      translationLoaders[l]().then((mod) => {
        translationCache[l] = mod.default;
        setTranslations(mod.default);
      });
    }
  }, []);

  // Load initial language if not English
  React.useEffect(() => {
    if (lang !== 'en' && !translationCache[lang]) {
      translationLoaders[lang]().then((mod) => {
        translationCache[lang] = mod.default;
        setTranslations(mod.default);
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const t = useCallback(
    (key: string): string => {
      return (translations as unknown as Record<string, unknown>)[key] as string ?? (en as unknown as Record<string, unknown>)[key] as string ?? key;
    },
    [translations]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
