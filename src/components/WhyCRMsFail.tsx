import { useRef, useEffect, useState } from 'react';
import {
  Keyboard,
  AlertTriangle,
  Unlink,
  Hourglass,
  TrendingDown,
  XCircle,
  CheckCircle2,
  Zap,
  ArrowRight,
  Bot,
  Sparkles,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const FAILS = [
  {
    icon: Keyboard,
    title: 'Manual Data Entry',
    desc: 'Your reps spend 30% of their day on data entry. Every meeting, every email, every call needs to be logged by hand.',
    stat: '30% of sales time',
  },
  {
    icon: AlertTriangle,
    title: 'Missed Follow-ups',
    desc: 'Leads fall through the cracks. 80% of sales require 5+ follow-ups, but most reps give up after 1.',
    stat: '80% of leads lost',
  },
  {
    icon: Unlink,
    title: 'Disconnected Tools',
    desc: 'CRM, email, WhatsApp, calendar, analytics — all living in different silos. Data is scattered, context is lost.',
    stat: '6+ tools needed',
  },
  {
    icon: Hourglass,
    title: 'Slow Sales Cycles',
    desc: 'Average deal takes 30-60 days to close. Manual handoffs, approval delays, and slow responses kill momentum.',
    stat: '45 days average',
  },
  {
    icon: TrendingDown,
    title: 'Low Sales Productivity',
    desc: 'Reps spend 60% of their time on non-selling activities. Less time with customers = less revenue.',
    stat: '60% non-selling',
  },
  {
    icon: XCircle,
    title: 'No AI Intelligence',
    desc: 'Traditional CRMs are dumb databases. They cannot score leads, predict outcomes, or automate decisions.',
    stat: '0% automation',
  },
];

export default function WhyCRMsFail() {
  const [activeFail, setActiveFail] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.failIndex);
            setActiveFail(idx);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
    );
    const cards = document.querySelectorAll('.fail-card');
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem" ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-red-500/6 blur-[140px]" />
      </div>

      <div className="container-px-wide">
        <SectionHeading
          eyebrow="The Problem"
          title={
            <>
              Why{' '}
              <span className="text-red-400">traditional CRMs fail</span>
            </>
          }
          description="Legacy tools were designed for data storage — not for selling. Here is why sales teams are still struggling despite the technology."
        />

        {/* Problem cards grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FAILS.map((f, i) => {
            const isActive = activeFail === i;
            return (
              <div
                key={f.title}
                data-fail-index={i}
                className={`fail-card reveal glass-card group overflow-hidden transition-all duration-700 ${
                  isActive ? 'border-red-400/20 bg-red-500/[0.04]' : 'border-white/10'
                }`}
                data-reveal-delay={i * 60}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className={`grid h-12 w-12 place-items-center rounded-xl transition-all duration-300 ${
                      isActive ? 'bg-red-500/20 shadow-glow-red' : 'bg-white/[0.04] border border-white/10'
                    }`}>
                      <f.icon className={`h-5 w-5 transition-colors ${isActive ? 'text-red-400' : 'text-ink-400'}`} />
                    </div>
                    <span className={`text-xs font-bold transition-colors ${isActive ? 'text-red-400' : 'text-ink-500'}`}>
                      {f.stat}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{f.desc}</p>
                </div>
                {/* Animated bottom bar */}
                <div className="h-1 w-full bg-white/5">
                  <div className={`h-full rounded-full bg-red-500/60 transition-all duration-1000 ${isActive ? 'w-full' : 'w-0'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* The solution positioning */}
        <div className="reveal mt-16 lg:mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-brand-400/20 bg-gradient-to-br from-brand-500/10 via-ink-900/60 to-accent-500/10 p-8 sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-grid-fine opacity-20" />
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-[100px]" />
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-accent-500/20 blur-[100px]" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-300">The Solution</span>
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
                  The AI Operating System for{' '}
                  <span className="gradient-text-brand">Sales Teams</span>
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-ink-300">
                  Nexora AI is not just a CRM — it is an AI operating system that automates your entire sales lifecycle from lead capture to deal closure.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    'Autonomous AI agents that sell without human intervention',
                    'Unified platform replacing 6+ disconnected tools',
                    'Zero manual data entry — everything is AI-captured',
                    'Real-time revenue intelligence and forecasting',
                    'Enterprise-grade security and scalability',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-ink-200">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-mint-400" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#workflow" className="btn-primary">
                    <Zap className="h-4 w-4" />
                    See the AI Workflow
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#dashboard" className="btn-ghost">
                    <Sparkles className="h-4 w-4" />
                    Explore Dashboard
                  </a>
                </div>
              </div>

              {/* Visual representation */}
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-72 w-72 rounded-full border border-brand-400/20 animate-spin-slow" />
                  <div className="absolute h-56 w-56 rounded-full border border-accent-400/20 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                </div>
                <div className="relative grid h-36 w-36 place-items-center rounded-full bg-brand-gradient shadow-glow animate-breathe">
                  <Sparkles className="h-14 w-14 text-white" />
                </div>
                {/* Orbiting particles */}
                {[0, 1, 2, 3, 4].map((p) => (
                  <div
                    key={p}
                    className="absolute h-3 w-3 rounded-full bg-brand-400 animate-orbit"
                    style={{ animationDelay: `${p * 2.4}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
