import { useRef, useEffect, useState } from 'react';
import {
  UserPlus,
  BrainCircuit,
  Database,
  Clock,
  FileText,
  CreditCard,
  Trophy,
  ArrowRight,
  Sparkles,
  Zap,
  Bot,
  CheckCircle2,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const STEPS = [
  { num: '01', icon: UserPlus, label: 'Lead Capture', desc: 'AI collects from every channel', color: 'from-brand-500 to-brand-700', detail: 'Web forms, ads, WhatsApp, social, email — all captured automatically.' },
  { num: '02', icon: BrainCircuit, label: 'AI Qualification', desc: 'AI scores and ranks every lead', color: 'from-accent-500 to-brand-600', detail: 'Intent scoring, firmographic enrichment, and behavioral analysis.' },
  { num: '03', icon: Database, label: 'Smart CRM', desc: 'AI organizes and advances the deal', color: 'from-brand-600 to-accent-600', detail: 'Auto-enriched records, deal tracking, and next-best-action suggestions.' },
  { num: '04', icon: Clock, label: 'Follow-up', desc: 'AI chases the prospect automatically', color: 'from-gold-500 to-brand-500', detail: 'Multi-channel sequences across email, WhatsApp, and SMS.' },
  { num: '05', icon: FileText, label: 'AI Proposal', desc: 'AI writes and sends the quote', color: 'from-accent-500 to-mint-500', detail: 'Dynamic pricing, brand templates, and e-signature.' },
  { num: '06', icon: CreditCard, label: 'Payment', desc: 'AI collects and finalizes payment', color: 'from-mint-500 to-accent-500', detail: 'Multiple payment gateways, auto-invoicing, and reminders.' },
  { num: '07', icon: Trophy, label: 'Deal Closed', desc: 'Deal won — fully by AI', color: 'from-brand-500 to-accent-500', detail: 'Real-time notifications, analytics, and auto-next-deal.' },
];

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.stepIndex);
            setActiveStep(idx);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
    );
    const cards = document.querySelectorAll('.workflow-step');
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="workflow" className="relative py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/8 blur-[140px]" />
      </div>

      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Workflow"
          title={
            <>
              The AI does it all —{' '}
              <span className="gradient-text-brand">lead to closed deal</span>
            </>
          }
          description="Watch the AI work through every stage of your sales cycle. From capturing leads to closing deals — fully autonomous, end-to-end."
        />

        {/* Animated workflow — desktop */}
        <div className="reveal mt-16 hidden lg:block">
          <div className="relative flex items-start justify-between">
            {/* Connector line */}
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-brand-500/30 via-brand-400/50 to-accent-400/30" />
            {/* Flowing animation on the line */}
            <div className="absolute left-0 right-0 top-8 h-0.5 overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-brand-400 to-transparent animate-gradient-shift" />
            </div>
            {STEPS.map((s, i) => {
              const isActive = activeStep === i;
              return (
                <div
                  key={s.label}
                  data-step-index={i}
                  className="workflow-step relative z-10 flex w-[12%] flex-col items-center text-center"
                >
                  <div className="relative">
                    <div
                      className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${s.color} shadow-glow transition-all duration-500 ${
                        isActive ? 'scale-110 ring-4 ring-brand-400/30' : ''
                      }`}
                    >
                      <s.icon className="h-6 w-6 text-white" />
                    </div>
                    <span
                      className={`absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold transition-all duration-300 ${
                        isActive ? 'bg-brand-gradient text-white ring-2 ring-brand-400/30' : 'bg-ink-900 text-ink-400 ring-1 ring-white/10'
                      }`}
                    >
                      {s.num}
                    </span>
                  </div>
                  <h4 className={`mt-4 text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-ink-300'}`}>
                    {s.label}
                  </h4>
                  <p className="mt-1 text-xs text-ink-400">{s.desc}</p>
                  {i < STEPS.length - 1 && (
                    <ArrowRight className="absolute -right-[4%] top-5 h-4 w-4 text-brand-400/40" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical flow */}
        <div className="mt-12 space-y-4 lg:hidden">
          {STEPS.map((s, i) => {
            const isActive = activeStep === i;
            return (
              <div
                key={s.label}
                data-step-index={i}
                className={`workflow-step reveal flex items-center gap-4 rounded-2xl border p-4 transition-all duration-500 ${
                  isActive ? 'border-brand-400/20 bg-brand-500/[0.04] shadow-glow' : 'border-white/10 bg-white/[0.03]'
                }`}
                data-reveal-delay={i * 60}
              >
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${s.color} shadow-glow`}>
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold ${isActive ? 'text-brand-300' : 'text-ink-500'}`}>{s.num}</span>
                    <h4 className="text-sm font-bold text-white">{s.label}</h4>
                  </div>
                  <p className="mt-0.5 text-xs text-ink-400">{s.desc}</p>
                </div>
                <div className={`flex h-6 w-6 items-center justify-center rounded-full transition-all ${isActive ? 'bg-brand-500/20' : ''}`}>
                  {isActive ? (
                    <Sparkles className="h-4 w-4 text-brand-300 animate-pulse" />
                  ) : (
                    <CheckCircle2 className="h-4 w-4 text-ink-500" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom summary */}
        <div className="reveal mt-16 flex items-center justify-center">
          <div className="flex items-center gap-3 rounded-full border border-brand-400/20 bg-gradient-to-r from-brand-500/10 to-accent-500/10 px-6 py-3">
            <Bot className="h-5 w-5 text-brand-300" />
            <span className="text-sm font-medium text-ink-200">
              Average deal cycle: <span className="text-white font-bold">45 days</span> with AI
            </span>
            <span className="text-ink-400">→</span>
            <Zap className="h-5 w-5 text-accent-300" />
            <span className="text-sm font-medium text-white font-bold">
              8 days with Nexora AI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
