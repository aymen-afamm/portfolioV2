'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';

export function Footer() {
  const { dict } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { href: '/#about', label: dict.nav.about },
    { href: '/#expertise', label: dict.nav.expertise },
    { href: '/#work', label: dict.nav.work },
    { href: '/#experience', label: dict.nav.experience },
    { href: '/#contact', label: dict.nav.contact },
  ];

  const socials = [
    { href: 'mailto:aymenzagnouni@gmail.com', label: 'Email', Icon: Mail },
    { href: 'https://wa.me/212609139119', label: 'WhatsApp', Icon: MessageCircle },
    { href: 'https://www.linkedin.com/in/aymenzagnouni', label: 'LinkedIn', Icon: Linkedin },
    { href: 'https://github.com/aymen-afamm', label: 'GitHub', Icon: Github },
  ];

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div>
            <Link href="/" className="font-display font-semibold text-xl tracking-tight text-paper">
              Aymen Zagnouni
            </Link>
            <p className="mt-3 max-w-xs text-sm text-fog">{dict.hero.subtitle}</p>
          </div>

          <div className="flex gap-16">
            <nav aria-label={dict.footer.nav}>
              <h3 className="text-sm font-semibold text-paper mb-3">{dict.footer.nav}</h3>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-fog hover:text-brass transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="text-sm font-semibold text-paper mb-3">{dict.footer.connect}</h3>
              <ul className="space-y-2">
                {socials.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-fog hover:text-brass transition-colors"
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-fog">© {year} Aymen Zagnouni. {dict.footer.rights}</p>
          <p className="text-xs text-fog">{dict.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
