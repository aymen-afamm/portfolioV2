'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Github } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/components/language-provider';
import { powerTrackerContent } from '@/lib/projects';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/motion';

function PTBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-pt-primary/30 bg-white/5 px-3 py-1 text-xs font-medium text-pt-light">
      {children}
    </span>
  );
}

export default function PowerTrackerPage() {
  const { locale, dict } = useLanguage();
  const content = powerTrackerContent[locale];
  const cs = dict.caseStudies;

  const screenshots = [
    { src: '/images/projects/powertracker/dashboard.jpg', alt: 'PowerTracker Dashboard' },
    { src: '/images/projects/powertracker/consumption.jpg', alt: 'PowerTracker Consumption' },
    { src: '/images/projects/powertracker/goals.jpg', alt: 'PowerTracker Goals' },
    { src: '/images/projects/powertracker/settings.jpg', alt: 'PowerTracker Settings' },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ background: 'linear-gradient(180deg, #0D1F2D 0%, #0A1520 100%)', color: '#F2F0EA' }}
    >
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 mx-auto max-w-6xl">
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-fog hover:text-pt-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {cs.back}
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-pt-primary">
              {dict.projects.featured}
            </span>
            <span className="text-xs text-fog">· Kotlin · Android · Firebase · ML Kit</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.08]">
            PowerTracker
          </h1>
          <p className="mt-4 text-xl text-fog max-w-2xl leading-relaxed">
            {dict.projects.powertracker.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/aymen-afamm/Compteur_Track"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-pt-primary/40 px-5 py-2.5 text-sm font-semibold text-pt-primary hover:bg-pt-primary hover:text-white transition-colors"
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </a>
          </div>
        </Reveal>
      </section>

      {/* Overview */}
      <section className="px-6 mx-auto max-w-6xl mb-16">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-pt-light mb-4">{cs.overview}</h2>
          <p className="text-fog leading-relaxed max-w-3xl">{content.overview}</p>
        </Reveal>
      </section>

      {/* Screenshots */}
      <section className="px-6 mx-auto max-w-6xl mb-16">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-pt-light mb-6">{cs.screens}</h2>
        </Reveal>
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {screenshots.map((img, i) => (
            <StaggerItem key={i}>
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top"
                  sizes="300px"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Challenge / Solution */}
      <section className="px-6 mx-auto max-w-6xl mb-16 grid md:grid-cols-2 gap-8">
        <Reveal>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="font-display text-lg font-semibold text-pt-light mb-3">{cs.challenge}</h2>
            <p className="text-fog leading-relaxed text-sm">{content.challenge}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="font-display text-lg font-semibold text-pt-light mb-3">{cs.solution}</h2>
            <p className="text-fog leading-relaxed text-sm">{content.solution}</p>
          </div>
        </Reveal>
      </section>

      {/* Features */}
      <section className="px-6 mx-auto max-w-6xl mb-16">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-pt-light mb-6">{cs.features}</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {content.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4">
                <span className="mt-0.5 h-2 w-2 rounded-full bg-pt-primary shrink-0" aria-hidden />
                <span className="text-sm text-fog">{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Architecture + Stack */}
      <section className="px-6 mx-auto max-w-6xl mb-16 grid md:grid-cols-2 gap-8">
        <Reveal>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="font-display text-lg font-semibold text-pt-light mb-4">{cs.architecture}</h2>
            <ul className="space-y-2">
              {content.architecture.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-fog">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-pt-primary shrink-0" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="font-display text-lg font-semibold text-pt-light mb-4">{cs.stack}</h2>
            <div className="space-y-5">
              {content.stack.map((group, i) => (
                <div key={i}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-pt-primary mb-2">{group.group}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, j) => <PTBadge key={j}>{item}</PTBadge>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Hurdles */}
      <section className="px-6 mx-auto max-w-6xl mb-16">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-pt-light mb-6">{cs.hurdles}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {content.hurdles.map((h, i) => (
              <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="font-display text-2xl font-semibold text-pt-primary/40 mb-3">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-sm text-fog leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Status + Vision */}
      <section className="px-6 mx-auto max-w-6xl mb-16 grid md:grid-cols-2 gap-8">
        <Reveal>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="font-display text-lg font-semibold text-pt-light mb-3">{cs.status}</h2>
            <p className="text-fog text-sm leading-relaxed">{content.status}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="font-display text-lg font-semibold text-pt-light mb-3">{cs.vision}</h2>
            <p className="text-fog text-sm leading-relaxed">{content.vision}</p>
          </div>
        </Reveal>
      </section>

      {/* Next project */}
      <section className="px-6 mx-auto max-w-6xl mb-20">
        <Reveal>
          <Link
            href="/projects/domfix"
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-pt-primary/30 transition-colors"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-fog">{cs.nextProject}</p>
              <p className="font-display text-xl font-semibold mt-1">DOMFIX</p>
            </div>
            <ArrowRight className="h-5 w-5 text-pt-primary group-hover:translate-x-1 transition-transform" aria-hidden />
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
