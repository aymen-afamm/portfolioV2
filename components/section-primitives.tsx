import React from 'react';
import { cn } from '@/lib/utils';

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-brass',
        className
      )}
    >
      <span className="h-px w-8 bg-brass/60" aria-hidden />
      {children}
    </span>
  );
}

export function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        'font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-paper leading-tight',
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SkillChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-fog">
      {children}
    </span>
  );
}
