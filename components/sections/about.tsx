'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/language-provider';
import { SectionLabel, SectionTitle } from '@/components/section-primitives';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/motion';

export function About() {
  const { dict } = useLanguage();
  const a = dict.about;

  return (
    <section id="about" className="py-24 sm:py-32 bg-panel">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Left: image + stats */}
          <Reveal>
            <div className="space-y-8">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 max-w-sm">
                <Image
                  src="/images/profile/aymen-zagnouni.png"
                  alt="Aymen Zagnouni"
                  fill
                  sizes="(max-width: 1024px) 100vw, 384px"
                  className="object-cover object-top"
                />
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {a.stats.map((stat, i) => (
                  <div key={i} className="rounded-2xl bg-surface border border-white/10 p-4 text-center">
                    <p className="font-display text-2xl font-semibold text-brass">{stat.value}</p>
                    <p className="mt-1 text-xs text-fog leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: content */}
          <div>
            <Reveal>
              <SectionLabel>{a.label}</SectionLabel>
              <SectionTitle className="mt-6 max-w-xl">{a.title}</SectionTitle>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4">
                {a.paragraphs.map((p, i) => (
                  <p key={i} className="text-fog leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Principles */}
            <StaggerContainer className="mt-10 grid sm:grid-cols-3 gap-5" delay={0.2}>
              {a.principles.map((pr, i) => (
                <StaggerItem key={i}>
                  <div className="rounded-2xl bg-surface border border-white/10 p-5 hover:border-brass/30 transition-colors h-full">
                    <div className="h-1 w-8 rounded-full bg-brass mb-4" />
                    <h3 className="font-display font-semibold text-paper text-sm">{pr.title}</h3>
                    <p className="mt-2 text-xs text-fog leading-relaxed">{pr.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
