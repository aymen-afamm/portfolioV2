'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Info } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/components/language-provider';
import { SectionLabel } from '@/components/section-primitives';

export interface CaseBlock {
  title: string;
  body?: string;
  list?: string[];
}

export type CaseIdentity = 'powertracker' | 'domfix' | 'edutech';

const identityStyles: Record<CaseIdentity, { text: string; heroBg: string; heroBorder: string; chip: string; productBg: string }> = {
  powertracker: {
    text: 'text-pt-lime',
    heroBg: 'bg-pt-bg',
    heroBorder: 'border-white/10',
    chip: 'border-pt-lime/30 bg-pt-lime/10 text-pt-lime',
    productBg: 'bg-pt-bg',
  },
  domfix: {
    text: 'text-domfix-green',
    heroBg: 'bg-domfix-deep',
    heroBorder: 'border-domfix-green/20',
    chip: 'border-domfix-green/30 bg-domfix-green/10 text-domfix-green',
    productBg: 'bg-domfix-deep',
  },
  edutech: {
    text: 'text-edutech-blue',
    heroBg: 'bg-panel',
    heroBorder: 'border-edutech-blue/20',
    chip: 'border-edutech-blue/30 bg-edutech-blue/10 text-edutech-blue',
    productBg: 'bg-panel',
  },
};

export function CaseStudyShell({
  identity,
  eyebrow,
  name,
  tagline,
  hero,
  blocks,
  stackGroups,
  nextProject,
  mockup,
  mockupNote,
}: {
  identity: CaseIdentity;
  eyebrow: string;
  name: string;
  tagline: string;
  hero: React.ReactNode;
  blocks: CaseBlock[];
  stackGroups?: { group: string; items: string[] }[];
  nextProject: { href: string; name: string };
  mockup: React.ReactNode;
  mockupNote: string;
}) {
  const { dict } = useLanguage();
  const cs = dict.caseStudies;
  const s = identityStyles[identity];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className={`border-b ${s.heroBorder} ${s.heroBg}`}>
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-fog hover:text-brass transition-colors"
            >
              <ArrowLeft className="h-4 w-4 rtl:flip-rtl" aria-hidden />
              {cs.back}
            </Link>

            <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
              <div>
                <SectionLabel>{eyebrow}</SectionLabel>
                <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper">
                  {name}
                </h1>
                <p className={`mt-4 font-display text-xl ${s.text}`}>{tagline}</p>
                <div className="mt-8">{hero}</div>
              </div>
              <div>
                {mockup}
                <p className="mt-4 flex items-start gap-2 text-xs text-fog">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                  {mockupNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-6 space-y-14">
            {blocks.map((block) => (
              <div key={block.title} className="grid lg:grid-cols-[240px_1fr] gap-6 lg:gap-12">
                <h2 className="font-display text-xl font-semibold text-paper lg:text-right lg:sticky lg:top-24 self-start">
                  {block.title}
                </h2>
                <div>
                  {block.body && <p className="max-w-3xl leading-relaxed text-fog text-base sm:text-lg">{block.body}</p>}
                  {block.list && (
                    <ul className="mt-2 grid sm:grid-cols-2 gap-3 max-w-3xl">
                      {block.list.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-panel p-3.5 text-sm text-paper/90"
                        >
                          <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${s.text}`} aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}

            {stackGroups && (
              <div className="grid lg:grid-cols-[240px_1fr] gap-6 lg:gap-12">
                <h2 className="font-display text-xl font-semibold text-paper lg:text-right lg:sticky lg:top-24 self-start">
                  {cs.stack}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl">
                  {stackGroups.map((g) => (
                    <div key={g.group} className="rounded-2xl border border-white/10 bg-panel p-5">
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-fog">{g.group}</h3>
                      <ul className="mt-3 space-y-1.5">
                        {g.items.map((item) => (
                          <li key={item} className="text-sm text-paper/90">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <Link
              href={nextProject.href}
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-panel p-6 sm:p-8 hover:border-brass/50 transition-colors"
            >
              <span>
                <span className="block text-xs uppercase tracking-widest text-fog">{cs.nextProject}</span>
                <span className="mt-1 block font-display text-2xl font-medium text-paper group-hover:text-brass transition-colors">
                  {nextProject.name}
                </span>
              </span>
              <ArrowRight className="h-6 w-6 text-brass transition-transform group-hover:translate-x-1 rtl:flip-rtl" aria-hidden />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
