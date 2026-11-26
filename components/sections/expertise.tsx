'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/components/language-provider';
import { SectionLabel, SectionTitle } from '@/components/section-primitives';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/motion';

export function Expertise() {
  const { dict } = useLanguage();
  const e = dict.expertise;
  const [active, setActive] = useState(0);

  return (
    <section id="expertise" className="py-24 sm:py-32 bg-ink">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>{e.label}</SectionLabel>
          <SectionTitle className="mt-6 max-w-2xl">{e.title}</SectionTitle>
          <p className="mt-4 max-w-xl text-fog">{e.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[260px_1fr] gap-8">
          {/* Tab list */}
          <Reveal delay={0.1}>
            <nav className="flex flex-col gap-1" aria-label="Expertise categories">
              {e.categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-start rounded-xl px-4 py-3 text-sm transition-all ${
                    active === i
                      ? 'bg-surface border border-brass/40 text-paper font-semibold'
                      : 'text-fog hover:text-paper hover:bg-surface/50'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </nav>
          </Reveal>

          {/* Active category panel */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-white/10 bg-panel p-8 min-h-[320px]">
              <h3 className="font-display text-xl font-semibold text-paper">
                {e.categories[active].title}
              </h3>
              <p className="mt-2 text-sm text-fog leading-relaxed">
                {e.categories[active].description}
              </p>
              <StaggerContainer className="mt-6 flex flex-wrap gap-2">
                {e.categories[active].skills.map((skill, j) => (
                  <StaggerItem key={j}>
                    <span className="rounded-lg border border-white/10 bg-surface px-3 py-1.5 text-sm text-fog hover:border-brass/30 hover:text-paper transition-colors">
                      {skill}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </Reveal>
        </div>

        {/* Certification note */}
        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-fog">
            <span className="text-brass font-medium">{e.other}:</span>{' '}
            {e.otherValue}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
