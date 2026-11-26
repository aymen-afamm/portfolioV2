'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/motion';

export function Hero() {
  const { dict } = useLanguage();
  const h = dict.hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink"
    >
      {/* Editorial column guide */}
      <div className="absolute inset-0 bg-editorial pointer-events-none" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left: text */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brass/30 px-3 py-1 text-xs font-medium text-brass uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-brass animate-pulse" aria-hidden />
                {h.available}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-sm font-medium text-fog uppercase tracking-widest">
                {h.greeting}
              </p>
              <h1 className="mt-2 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-paper leading-[1.08] tracking-tight">
                {h.name}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 font-display text-3xl sm:text-4xl text-fog font-light leading-snug max-w-xl">
                {h.title1} <span className="text-gradient-brass">{h.title2}</span>
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-6 max-w-lg text-fog leading-relaxed">
                {h.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/#work"
                  className="rounded-full bg-paper text-ink px-6 py-3 text-sm font-semibold hover:bg-brass hover:text-ink transition-colors"
                >
                  {h.ctaPrimary}
                </Link>
                <Link
                  href="/#contact"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-fog hover:text-paper hover:border-white/40 transition-colors"
                >
                  {h.ctaSecondary}
                </Link>
              </div>
            </Reveal>

            {/* Discipline list */}
            <StaggerContainer className="mt-12 flex flex-wrap gap-2" delay={0.5}>
              {h.disciplines.map((d, i) => (
                <StaggerItem key={i}>
                  <span className="rounded-md bg-surface px-3 py-1 text-xs text-fog border border-white/8">
                    {d}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right: profile image */}
          <Reveal delay={0.3} className="hidden lg:block">
            <div className="relative w-72 xl:w-80 aspect-[3/4] rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/images/profile/aymen-zagnouni.png"
                alt="Aymen Zagnouni"
                fill
                sizes="(max-width: 1024px) 0px, 320px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
