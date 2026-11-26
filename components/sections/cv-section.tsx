'use client';

import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { SectionLabel, SectionTitle } from '@/components/section-primitives';
import { Reveal } from '@/components/motion';

const CV_PATH = '/documents/Aymen-Zagnouni-CV.pdf';
const CV_PREVIEW_URL = `${CV_PATH}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

export function CvSection() {
  const { dict } = useLanguage();
  const c = dict.cv;

  return (
    <section id="cv" className="py-24 sm:py-32 bg-ink">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>{c.label}</SectionLabel>
          <SectionTitle className="mt-6 max-w-xl">{c.title}</SectionTitle>
          <p className="mt-4 text-fog">{c.subtitle}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brass/50 px-6 py-3 text-sm font-semibold text-brass hover:bg-brass hover:text-ink transition-colors"
            >
              <Eye className="h-4 w-4" aria-hidden />
              {c.view}
            </a>
            <a
              href={CV_PATH}
              download="Aymen-Zagnouni-CV.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-6 py-3 text-sm font-semibold hover:bg-brass transition-colors"
            >
              <Download className="h-4 w-4" aria-hidden />
              {c.download}
            </a>
          </div>
        </Reveal>

        {/* PDF preview */}
        <Reveal delay={0.15}>
          <div className="mt-10 rounded-3xl overflow-hidden border border-white/10 bg-panel">
            <div className="flex items-center gap-3 px-5 py-3 border-b border-white/10">
              <FileText className="h-4 w-4 text-brass" aria-hidden />
              <span className="text-sm text-fog">{c.preview}</span>
            </div>
            <iframe
              src={CV_PREVIEW_URL}
              className="w-full h-[650px] sm:h-[800px] md:h-[950px] border-0 bg-white"
              title={c.title}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
