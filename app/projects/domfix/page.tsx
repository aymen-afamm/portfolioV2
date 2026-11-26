'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/components/language-provider';
import { domfixContent } from '@/lib/projects';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/motion';

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-domfix-lime/30 bg-domfix-surface px-3 py-1 text-xs font-medium text-domfix-lime">
      {children}
    </span>
  );
}

function NumberedList({ items, color = '#CDF200' }: { items: string[]; color?: string }) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="font-display text-xs font-semibold mt-0.5 shrink-0" style={{ color }}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="text-sm text-fog leading-relaxed">{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function DomfixPage() {
  const { locale, dict } = useLanguage();
  const content = domfixContent[locale];
  const cs = dict.caseStudies;

  const availableImages = [
    { src: '/images/projects/domfix/splash.png', alt: 'DOMFIX Splash Screen' },
    { src: '/images/projects/domfix/booking-flow-1.png', alt: 'DOMFIX Booking Flow 1' },
    { src: '/images/projects/domfix/booking-flow-2.png', alt: 'DOMFIX Booking Flow 2' },
    { src: '/images/projects/domfix/auth.jpg', alt: 'DOMFIX Auth' },
    { src: '/images/projects/domfix/technician-profile.jpg', alt: 'DOMFIX Technician Profile' },
  ];

  return (
    <div className="min-h-screen" style={{ background: '#121212', color: '#F2F0EA' }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 mx-auto max-w-6xl">
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-fog hover:text-domfix-lime transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {cs.back}
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-domfix-lime">
              {dict.projects.featured}
            </span>
            <span className="text-xs text-fog">· Flutter · Firebase · Smart Home</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.08]">
            DOMFIX
          </h1>
          <p className="mt-4 text-xl text-fog max-w-2xl leading-relaxed">
            {dict.projects.domfix.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/aymen-afamm/DomFix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-domfix-lime/40 px-5 py-2.5 text-sm font-semibold text-domfix-lime hover:bg-domfix-lime hover:text-black transition-colors"
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </a>
          </div>
        </Reveal>
      </section>

      {/* Personal idea callout */}
      <section className="px-6 mx-auto max-w-6xl mb-12">
        <Reveal>
          <div className="rounded-2xl border border-domfix-lime/30 bg-domfix-surface p-6">
            <h2 className="font-display text-lg font-semibold text-domfix-lime mb-2">
              💡 {cs.idea}
            </h2>
            <p className="text-fog leading-relaxed">{content.idea}</p>
          </div>
        </Reveal>
      </section>

      {/* Overview */}
      <section className="px-6 mx-auto max-w-6xl mb-16">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-domfix-lime mb-4">{cs.overview}</h2>
          <p className="text-fog leading-relaxed max-w-3xl">{content.overview}</p>
        </Reveal>
      </section>

      {/* Screenshots grid */}
      <section className="px-6 mx-auto max-w-6xl mb-16">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-domfix-lime mb-6">{cs.screens}</h2>
        </Reveal>
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {availableImages.map((img, i) => (
            <StaggerItem key={i}>
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top"
                  sizes="200px"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Problem / Solution */}
      <section className="px-6 mx-auto max-w-6xl mb-16 grid md:grid-cols-2 gap-8">
        <Reveal>
          <div className="rounded-2xl bg-domfix-surface border border-white/10 p-6">
            <h2 className="font-display text-lg font-semibold text-domfix-lime mb-3">{cs.challenge}</h2>
            <p className="text-fog leading-relaxed text-sm">{content.problem}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-domfix-surface border border-white/10 p-6">
            <h2 className="font-display text-lg font-semibold text-domfix-lime mb-3">{cs.solution}</h2>
            <p className="text-fog leading-relaxed text-sm">{content.solution}</p>
          </div>
        </Reveal>
      </section>

      {/* User journeys */}
      <section className="px-6 mx-auto max-w-6xl mb-16 grid md:grid-cols-2 gap-8">
        <Reveal>
          <div className="rounded-2xl bg-domfix-surface border border-white/10 p-6">
            <h2 className="font-display text-lg font-semibold text-domfix-lime mb-4">{cs.customerJourney}</h2>
            <NumberedList items={content.customerJourney} />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-domfix-surface border border-white/10 p-6">
            <h2 className="font-display text-lg font-semibold text-domfix-lime mb-4">{cs.technicianJourney}</h2>
            <NumberedList items={content.technicianJourney} />
          </div>
        </Reveal>
      </section>

      {/* Smart home */}
      <section className="px-6 mx-auto max-w-6xl mb-16">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-domfix-lime mb-4">{cs.smartHome}</h2>
          <p className="text-fog leading-relaxed max-w-3xl">{content.smartHome}</p>
        </Reveal>
      </section>

      {/* Tech + Contribution */}
      <section className="px-6 mx-auto max-w-6xl mb-16 grid md:grid-cols-2 gap-8">
        <Reveal>
          <div className="rounded-2xl bg-domfix-surface border border-white/10 p-6">
            <h2 className="font-display text-lg font-semibold text-domfix-lime mb-4">{cs.tech}</h2>
            <div className="flex flex-wrap gap-2">
              {content.tech.map((t, i) => <Badge key={i}>{t}</Badge>)}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-domfix-surface border border-white/10 p-6">
            <h2 className="font-display text-lg font-semibold text-domfix-lime mb-4">{cs.contribution}</h2>
            <NumberedList items={content.contribution} />
          </div>
        </Reveal>
      </section>

      {/* Limitations */}
      <section className="px-6 mx-auto max-w-6xl mb-20">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-domfix-muted p-6">
            <h2 className="font-display text-sm font-semibold text-fog uppercase tracking-widest mb-2">
              {cs.limitations}
            </h2>
            <p className="text-fog text-sm leading-relaxed">{content.limitations}</p>
          </div>
        </Reveal>
      </section>

      {/* Next project */}
      <section className="px-6 mx-auto max-w-6xl mb-20">
        <Reveal>
          <Link
            href="/projects/powertracker"
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-domfix-surface p-6 hover:border-domfix-lime/30 transition-colors"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-fog">{cs.nextProject}</p>
              <p className="font-display text-xl font-semibold mt-1">PowerTracker</p>
            </div>
            <ArrowRight className="h-5 w-5 text-domfix-lime group-hover:translate-x-1 transition-transform" aria-hidden />
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
