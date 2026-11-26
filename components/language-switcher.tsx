'use client';

import React from 'react';
import { useLanguage } from '@/components/language-provider';
import { locales, type Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const labels: Record<Locale, string> = { fr: 'FR', en: 'EN', ar: 'ع' };

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-white/15 p-0.5" role="group" aria-label="Language">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={cn(
            'rounded-full px-2.5 py-1 text-xs font-semibold transition-colors',
            locale === l ? 'bg-brass text-ink' : 'text-fog hover:text-paper'
          )}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
