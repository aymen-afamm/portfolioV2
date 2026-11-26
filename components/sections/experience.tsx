'use client';

import React from 'react';
import { useLanguage } from '@/components/language-provider';
import { SectionLabel, SectionTitle } from '@/components/section-primitives';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/motion';

export function Experience() {
  const { dict } = useLanguage();

  return (
    <section id="experience" className="py-24 sm:py-32 bg-panel">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>{dict.experience.label}</SectionLabel>
          <SectionTitle className="mt-6 max-w-2xl">{dict.experience.title}</SectionTitle>
        </Reveal>

        {/* Experience timeline */}
        <ol className="mt-14 relative border-s border-white/15 ms-3 space-y-12">
          {dict.experience.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <li className="ms-8 relative">
                <span
                  className="absolute -start-[38px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-brass/70 bg-panel"
                  aria-hidden
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brass" />
                </span>
                <p className="text-xs font-medium uppercase tracking-widest text-brass">{item.period}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-paper">{item.role}</h3>
                {item.org && (
                  <p className="mt-0.5 text-sm font-medium text-fog">{item.org}</p>
                )}
                <p className="mt-3 max-w-2xl leading-relaxed text-fog">{item.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        {/* Education */}
        <Reveal delay={0.2}>
          <div className="mt-20">
            <SectionLabel>{dict.education.label}</SectionLabel>
            <SectionTitle className="mt-4 text-2xl">{dict.education.title}</SectionTitle>
            <StaggerContainer className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {dict.education.items.map((e, i) => (
                <StaggerItem key={i}>
                  <div className="rounded-2xl border border-white/10 bg-ink p-5 hover:border-brass/40 transition-colors h-full">
                    {e.period ? (
                      <span className="text-xs font-medium uppercase tracking-widest text-brass">{e.period}</span>
                    ) : (
                      <span className="inline-block text-xs text-fog">&nbsp;</span>
                    )}
                    <h3 className="mt-4 font-display font-semibold text-paper leading-snug">{e.title}</h3>
                    <p className="mt-2 text-sm text-fog leading-relaxed">{e.detail}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
