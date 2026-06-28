import { useEffect, useRef, useState } from 'react';
import {
  Bot,
  Brain,
  Workflow,
  Zap,
  Mail,
  MessageCircle,
  Calendar,
  FileText,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Cpu,
  Target,
  Clock,
  TrendingUp,
  ChevronRight,
  Radio,
  Shield,
  BarChart3,
  Headphones,
  Handshake,
  LineChart,
  Users,
  Globe,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const AGENTS = [
  {
    icon: Brain,
    name: 'Lead Qualification Agent',
    desc: 'AI reads and scores every incoming lead — no one gets missed',
    tasks: ['Intent scoring', 'Firmographic enrichment', 'Auto-routing'],
    color: 'from-brand-500 to-brand-700',
  },
  {
    icon: MessageCircle,
    name: 'Conversation Agent',
    desc: 'AI talks to prospects, answers questions, and books meetings',
    tasks: ['Objection handling', 'FAQ answers', 'Meeting booking'],
    color: 'from-accent-500 to-brand-600',
  },
  {
    icon: Mail,
    name: 'Follow-up Agent',
    desc: 'AI keeps the conversation alive across every channel',
    tasks: ['Email + WhatsApp + SMS', 'Behavior triggers', 'Auto-pause on reply'],
    color: 'from-mint-500 to-accent-500',
  },
  {
    icon: FileText,
    name: 'Quotation Agent',
    desc: 'AI writes, sends, and e-signs the deal — no rep involved',
    tasks: ['Price recommendations', 'Discount logic', 'E-signature'],
    color: 'from-gold-500 to-brand-500',
  },
  {
    icon: Brain,
    name: 'AI Scoring Engine',
    desc: 'Predictive lead scoring with 95%+ accuracy',
    tasks: ['Predictive modeling', 'Behavioral analysis', 'Win probability'],
    color: 'from-purple-500 to-brand-600',
  },
  {
    icon: Target,
    name: 'AI Follow-up Engine',
    desc: 'Smart, multi-channel sequences that adapt to each lead',
    tasks: ['Smart timing', 'Channel optimization', 'A/B testing'],
    color: 'from-brand-500 to-accent-500',
  },
  {
    icon: BarChart3,
    name: 'AI Customer Insights',
    desc: 'Deep analytics that reveal buying patterns and revenue signals',
    tasks: ['Cohort analysis', 'Revenue forecasting', 'Churn prediction'],
    color: 'from-accent-500 to-mint-500',
  },
  {
    icon: Headphones,
    name: 'AI Voice Agent',
    desc: 'AI-powered voice calls that sound human — coming soon',
    tasks: ['Voice synthesis', 'Call handling', 'Recording & analysis'],
    color: 'from-purple-500 to-accent-500',
    soon: true,
  },
];

const FLOW = [
  { icon: Zap, label: 'Lead', desc: 'AI captures', color: 'bg-brand-500' },
  { icon: Brain, label: 'Qualify', desc: 'AI scores', color: 'bg-accent-500' },
  { icon: MessageCircle, label: 'Engage', desc: 'AI talks', color: 'bg-mint-500' },
  { icon: Calendar, label: 'Book', desc: 'AI schedules', color: 'bg-gold-500' },
  { icon: FileText, label: 'Quote', desc: 'AI sends', color: 'bg-brand-500' },
  { icon: CheckCircle2, label: 'Close', desc: 'AI wins', color: 'bg-mint-500' },
];

export default function AIAutomation() {
  const [activeAgent, setActiveAgent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveAgent((prev) => (prev + 1) % AGENTS.length);
    }, 4000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent-500/8 blur-[130px]" />
      </div>

      <div className="container-px-wide">
        <SectionHeading
          eyebrow="AI Automation"
          title={
            <>
              AI agents that{' '}
              <span className="gradient-text-brand">sell from start to finish</span>
            </>
          }
          description="Deploy specialized AI agents that handle every stage of the sales cycle — collecting leads, qualifying, conversing, following up, quoting, and closing — without human intervention."
        />

        {/* Autonomous workflow strip */}
        <div className="reveal mt-14">
          <div className="glass-card flex flex-col items-center gap-4 p-4 sm:p-6 sm:flex-row sm:gap-2">
            <div className="flex items-center gap-2 self-start sm:self-center">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-gradient">
                <Workflow className="h-4 w-4 text-white" />
              </span>
              <span className="text-sm font-bold text-white">Autonomous Workflow</span>
            </div>
            <div className="flex flex-1 flex-wrap items-center justify-center gap-2 sm:gap-1">
              {FLOW.map((s, i) => (
                <div key={s.label} className="flex items-center gap-2 sm:gap-1">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 transition-all hover:bg-white/[0.06]">
                    <s.icon className={`h-4 w-4 text-white ${s.color}`} />
                    <div>
                      <div className="text-xs font-bold text-white">{s.label}</div>
                      <div className="text-[10px] text-ink-400">{s.desc}</div>
                    </div>
                  </div>
                  {i < FLOW.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 text-brand-400/50 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Agent cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AGENTS.map((a, i) => (
            <article
              key={a.name}
              className={`reveal glass-card glass-hover group relative overflow-hidden p-6 transition-all duration-300 ${
                activeAgent === i ? 'border-brand-400/20 shadow-glow' : ''
              }`}
              data-reveal-delay={(i % 4) * 80}
              onMouseEnter={() => setActiveAgent(i)}
            >
              <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${a.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-xl border border-accent-400/20 bg-gradient-to-br ${a.color}`}>
                  <a.icon className="h-5 w-5 text-white" />
                </span>
                <span className="chip text-xs">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint-400" />
                  Active
                </span>
                {a.soon && (
                  <span className="ml-auto rounded-full bg-purple-500/20 px-2 py-0.5 text-[9px] font-bold text-purple-300">
                    SOON
                  </span>
                )}
              </div>
              <h3 className="relative mt-4 font-display text-base font-bold text-white group-hover:text-brand-200 transition-colors">{a.name}</h3>
              <p className="relative mt-1.5 text-sm text-ink-300">{a.desc}</p>
              <div className="relative mt-4 space-y-2">
                {a.tasks.map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs text-ink-200">
                    <CheckCircle2 className="h-3.5 w-3.5 text-mint-400" />
                    {t}
                  </div>
                ))}
              </div>
              {/* Active indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5">
                <div className={`h-full rounded-full bg-gradient-to-r ${a.color} transition-all duration-500 ${activeAgent === i ? 'w-full' : 'w-0'}`} />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand-400/20 bg-gradient-to-r from-brand-500/10 to-accent-500/10 p-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient shadow-glow">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white">Build your own AI agent</h3>
              <p className="text-sm text-ink-300">No-code agent builder with 50+ pre-built templates.</p>
            </div>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf-demo-form-link/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            Explore Agents
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
