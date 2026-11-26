'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { SectionLabel, SectionTitle } from '@/components/section-primitives';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/motion';
import { cn } from '@/lib/utils';

/* ── Flagship project card ──────────────────────────── */
interface FlagshipCardProps {
  href: string;
  eyebrow: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  cta: string;
  identity: 'domfix' | 'powertracker';
  images: { src: string; alt: string }[];
  reverse?: boolean;
}

function FlagshipCard({
  href,
  eyebrow,
  name,
  category,
  tagline,
  description,
  cta,
  identity,
  images,
  reverse,
}: FlagshipCardProps) {
  const isDomfix = identity === 'domfix';

  return (
    <Reveal>
      <div
        className={cn(
          'rounded-3xl border overflow-hidden',
          isDomfix
            ? 'bg-domfix-bg border-domfix-lime/20'
            : 'border-pt-primary/20'
        )}
        style={
          !isDomfix
            ? { background: 'linear-gradient(135deg, #0D2137 0%, #1B3A52 100%)' }
            : undefined
        }
      >
        <div
          className={cn(
            'grid lg:grid-cols-2 gap-0 items-stretch min-h-[420px]',
            reverse && 'lg:direction-rtl'
          )}
        >
          {/* Text side */}
          <div className={cn('p-8 sm:p-12 flex flex-col justify-center', reverse && 'lg:order-2')}>
            <p className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: isDomfix ? '#CDF200' : '#2DA8C9' }}>
              {eyebrow}
            </p>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-paper tracking-tight">
              {name}
            </h3>
            <p className="mt-1 text-sm font-medium"
              style={{ color: isDomfix ? '#CDF200' : '#4FC3E8' }}>
              {category}
            </p>
            <p className="mt-5 text-lg text-fog leading-relaxed">{tagline}</p>
            <p className="mt-3 text-sm text-fog/80 leading-relaxed max-w-sm">{description}</p>
            <Link
              href={href}
              className="group mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors w-fit"
              style={{
                background: isDomfix ? '#CDF200' : '#2DA8C9',
                color: isDomfix ? '#121212' : '#fff',
              }}
            >
              {cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:scale-x-[-1]" aria-hidden />
            </Link>
          </div>

          {/* Screenshots side */}
          <div className={cn('relative flex items-end justify-center px-8 pb-0 pt-8 overflow-hidden', reverse && 'lg:order-1')}>
            <div className="flex gap-4 items-end">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={cn(
                    'relative rounded-2xl overflow-hidden border shadow-2xl',
                    isDomfix ? 'border-domfix-lime/20' : 'border-pt-primary/20',
                    i === 0 ? 'w-36 sm:w-44 h-72 sm:h-80' : 'w-32 sm:w-40 h-64 sm:h-72 mb-4',
                    i === 0 ? 'rotate-[-3deg]' : 'rotate-[3deg]'
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-top"
                    sizes="200px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ── Additional compact project card ───────────────── */
interface AdditionalProject {
  name: string;
  description: string;
  tech: string[];
  github?: string;
}

function AdditionalCard({ project }: { project: AdditionalProject }) {
  const { dict } = useLanguage();
  return (
    <div className="rounded-2xl border border-white/10 bg-panel p-6 hover:border-brass/30 transition-colors flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-display font-semibold text-paper">{project.name}</h4>
          <p className="mt-2 text-sm text-fog leading-relaxed">{project.description}</p>
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="shrink-0 p-2 rounded-lg border border-white/10 text-fog hover:text-paper hover:border-white/30 transition-colors"
          >
            <Github className="h-4 w-4" aria-hidden />
          </a>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tech.map((t, i) => (
          <span key={i} className="rounded-md bg-surface px-2 py-0.5 text-xs text-fog border border-white/8">
            {t}
          </span>
        ))}
      </div>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-brass hover:text-brass-soft transition-colors"
        >
          <ExternalLink className="h-3 w-3" aria-hidden />
          {dict.projects.viewGithub}
        </a>
      )}
    </div>
  );
}

/* ── Main Work section ──────────────────────────────── */
export function Work() {
  const { dict } = useLanguage();
  const p = dict.projects;

  const additionalProjects: AdditionalProject[] = [
    {
      name: p.additional.moltaxi.name,
      description: p.additional.moltaxi.description,
      tech: p.additional.moltaxi.tech,
      github: 'https://github.com/aymen-afamm/MolTaxii_V3',
    },
    {
      name: p.additional.salsabil.name,
      description: p.additional.salsabil.description,
      tech: p.additional.salsabil.tech,
      github: 'https://github.com/aymen-afamm/Salsabil-V1',
    },
    {
      name: p.additional.revora.name,
      description: p.additional.revora.description,
      tech: p.additional.revora.tech,
      // No confirmed repo for REVORA
    },
    {
      name: p.additional.dashcam.name,
      description: p.additional.dashcam.description,
      tech: p.additional.dashcam.tech,
      github: 'https://github.com/aymen-afamm/DashCam',
    },
  ];

  return (
    <section id="work" className="py-24 sm:py-32 bg-ink">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>{p.label}</SectionLabel>
          <SectionTitle className="mt-6 max-w-2xl">{p.title}</SectionTitle>
          <p className="mt-4 max-w-xl text-fog">{p.subtitle}</p>
        </Reveal>

        {/* Flagship cards */}
        <div className="mt-14 space-y-8">
          <FlagshipCard
            href="/projects/domfix"
            eyebrow={p.featured}
            name={p.domfix.name}
            category={p.domfix.category}
            tagline={p.domfix.tagline}
            description={p.domfix.description}
            cta={p.viewCase}
            identity="domfix"
            images={[
              { src: '/images/projects/domfix/splash.png', alt: 'DOMFIX splash screen' },
              { src: '/images/projects/domfix/booking-flow-1.png', alt: 'DOMFIX booking flow' },
            ]}
          />

          <FlagshipCard
            href="/projects/powertracker"
            eyebrow={p.featured}
            name={p.powertracker.name}
            category={p.powertracker.category}
            tagline={p.powertracker.tagline}
            description={p.powertracker.description}
            cta={p.viewCase}
            identity="powertracker"
            images={[
              { src: '/images/projects/powertracker/dashboard.jpg', alt: 'PowerTracker dashboard' },
              { src: '/images/projects/powertracker/goals.jpg', alt: 'PowerTracker goals' },
            ]}
            reverse
          />
        </div>

        {/* Additional projects */}
        <Reveal delay={0.1}>
          <div className="mt-16">
            <h3 className="font-display text-2xl font-semibold text-paper">{p.additional.label}</h3>
            <p className="mt-2 text-fog text-sm">{p.additional.subtitle}</p>
            <StaggerContainer className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {additionalProjects.map((proj, i) => (
                <StaggerItem key={i}>
                  <AdditionalCard project={proj} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Reveal>

        {/* Technical initiatives */}
        <Reveal delay={0.15}>
          <div className="mt-16 rounded-3xl border border-white/10 bg-panel p-8 sm:p-10">
            <SectionTitle className="text-2xl">{p.initiatives.title}</SectionTitle>
            <p className="mt-2 text-sm text-fog">{p.initiatives.subtitle}</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {p.initiatives.items.map((item, i) => (
                <div key={i} className="border-t border-brass/20 pt-5">
                  <h4 className="font-semibold text-paper text-sm">{item.title}</h4>
                  <p className="mt-2 text-xs text-fog leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
