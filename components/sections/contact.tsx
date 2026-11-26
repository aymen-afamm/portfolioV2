'use client';

import React, { useState } from 'react';
import { Mail, MessageCircle, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { SectionLabel, SectionTitle } from '@/components/section-primitives';
import { Reveal } from '@/components/motion';

export function Contact() {
  const { dict } = useLanguage();
  const c = dict.contact;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError(c.error);
      setSuccess('');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? c.errorServer);
        setLoading(false);
        return;
      }

      if (data.method === 'mailto' && data.mailto) {
        window.location.href = data.mailto;
        setSuccess(c.success);
      } else {
        setSuccess(c.success);
      }
      setName(''); setEmail(''); setSubject(''); setMessage('');
    } catch {
      setError(c.errorServer);
    }
    setLoading(false);
  };

  const channels = [
    { label: c.emailLabel, value: 'aymenzagnouni@gmail.com', href: 'mailto:aymenzagnouni@gmail.com', Icon: Mail },
    { label: c.whatsappLabel, value: '+212 609 139 119', href: 'https://wa.me/212609139119', Icon: MessageCircle },
    { label: c.linkedinLabel, value: 'in/aymenzagnouni', href: 'https://www.linkedin.com/in/aymenzagnouni', Icon: Linkedin },
    { label: c.githubLabel, value: 'github.com/aymen-afamm', href: 'https://github.com/aymen-afamm', Icon: Github },
  ];

  const inputClass =
    'w-full rounded-xl border border-white/15 bg-panel px-4 py-3 text-sm text-paper placeholder:text-fog/60 focus:outline-none focus:ring-1 focus:ring-brass focus:border-brass transition';

  return (
    <section id="contact" className="py-24 sm:py-32 bg-panel border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>{c.label}</SectionLabel>
          <SectionTitle className="mt-6 max-w-2xl">{c.title}</SectionTitle>
          <p className="mt-4 max-w-xl text-fog leading-relaxed">{c.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1.2fr_1fr] gap-12">
          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-ink p-6 sm:p-8" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-paper">
                    {c.name}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    autoComplete="name"
                    placeholder="Aymen"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-paper">
                    {c.email}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-paper">
                  {c.subject}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={inputClass}
                  placeholder="Collaboration, mission…"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-paper">
                  {c.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={inputClass + ' resize-none'}
                  placeholder="…"
                />
              </div>

              {error && (
                <p role="alert" className="mt-4 rounded-lg bg-destructive/15 px-4 py-2 text-sm text-red-400">
                  {error}
                </p>
              )}
              {success && (
                <p role="status" className="mt-4 rounded-lg bg-green-500/10 px-4 py-2 text-sm text-green-400">
                  {success}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brass text-ink px-6 py-3 text-sm font-semibold hover:bg-brass-soft disabled:opacity-60 transition-colors"
              >
                {loading ? (
                  <><Loader2 className="h-4 w-4 animate-spin" aria-hidden />{c.sending}</>
                ) : (
                  <><Send className="h-4 w-4" aria-hidden />{c.send}</>
                )}
              </button>
            </form>
          </Reveal>

          {/* Direct channels */}
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-5">
              <p className="text-sm font-medium text-fog">{c.orUse}</p>
              {channels.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-ink p-5 hover:border-brass/40 transition-colors"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface border border-white/10 group-hover:border-brass/30 transition-colors">
                    <Icon className="h-5 w-5 text-brass" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-fog uppercase tracking-wider">{label}</p>
                    <p className="text-sm text-paper">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
