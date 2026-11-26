'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { LanguageSwitcher } from '@/components/language-switcher';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { dict } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/#about', label: dict.nav.about },
    { href: '/#expertise', label: dict.nav.expertise },
    { href: '/#work', label: dict.nav.work },
    { href: '/#experience', label: dict.nav.experience },
    { href: '/#cv', label: dict.nav.cv },
    { href: '/#contact', label: dict.nav.contact },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-ink/90 backdrop-blur border-b border-white/10' : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between" aria-label="Main">
        <Link href="/" className="font-display font-semibold tracking-tight text-lg text-paper hover:text-brass transition-colors">
          Aymen Zagnouni
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-fog hover:text-paper transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            href="/#contact"
            className="rounded-full border border-brass/60 px-4 py-2 text-sm font-medium text-brass hover:bg-brass hover:text-ink transition-colors"
          >
            {dict.hero.ctaSecondary}
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="p-2 text-paper"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-b border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-fog hover:text-paper transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
