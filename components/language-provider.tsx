'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { defaultLocale, getDict, isLocale, type Locale } from '@/lib/i18n';
import type { Dict } from '@/lib/i18n';

interface LanguageContextValue {
  locale: Locale;
  dict: Dict;
  setLocale: (l: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: defaultLocale,
  dict: getDict(defaultLocale),
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem('az-locale');
    if (stored && isLocale(stored)) {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = locale;
    html.dir = locale === 'ar' ? 'rtl' : 'ltr';
    window.localStorage.setItem('az-locale', locale);
  }, [locale]);

  const setLocale = (l: Locale) => setLocaleState(l);

  return (
    <LanguageContext.Provider value={{ locale, dict: getDict(locale), setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
