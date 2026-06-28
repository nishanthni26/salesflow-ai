import {
  Bot,
  MessageCircle,
  Database,
  Clock,
  Sparkles,
  BarChart3,
  FileText,
  Users,
  Radio,
  Zap,
  Headphones,
  Target,
  Globe,
  ChevronRight,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const FEATURES = [
  {
    icon: Bot,
    title: 'AI Lead Qualification',
    desc: 'AI scores and qualifies every lead in real time using intent signals, firmographics, and behavioral data — so your team only talks to ready-to-buy prospects.',
    accent: 'from-brand-500 to-brand-700',
    stat: '3x faster',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Automation',
    desc: 'Send broadcasts, trigger sequences, and run two-way AI conversations on WhatsApp Business API at scale — without lifting a finger.',
    accent: 'from-mint-500 to-accent-500',
    stat: '42% reply rate',
  },
  {
    icon: Database,
    title: 'Smart CRM',
    desc: 'A unified CRM that auto-enriches records, tracks every touchpoint, and surfaces the next best action for every deal in your pipeline.',
    accent: 'from-accent-500 to-brand-600',
    stat: 'Zero manual entry',
  },
  {
    icon: Clock,
    title: 'Automated Follow-ups',
    desc: 'Multi-step follow-up sequences across email, WhatsApp, and SMS that adapt based on recipient behavior and engagement.',
    accent: 'from-gold-500 to-brand-500',
    stat: '80% recovery',
  },
  {
    icon: Sparkles,
    title: 'AI Sales Assistant',
    desc: 'A 24/7 AI agent that answers prospect questions, handles objections, books meetings, and nudges deals forward — autonomously.',
    accent: 'from-brand-400 to-accent-400',
    stat: '24/7 coverage',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Real-time revenue analytics, funnel conversion, cohort retention, and rep performance — with AI-generated insights and forecasts.',
    accent: 'from-accent-400 to-mint-500',
    stat: '95% accuracy',
  },
  {
    icon: FileText,
    title: 'AI Quotation Generator',
    desc: 'Generate branded, accurate quotations in seconds. AI recommends pricing, discounts, and terms based on deal context and win-rate data.',
    accent: 'from-brand-600 to-accent-600',
    stat: '30 sec avg',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'Shared pipelines, handoff notes, mention notifications, and role-based permissions keep your entire revenue team in perfect sync.',
    accent: 'from-brand-500 to-accent-500',
    stat: 'Unlimited seats',
  },
  {
    icon: Radio,
    title: 'Multi-channel Communication',
    desc: 'Email, WhatsApp, SMS, web chat, and social DMs — all unified in one inbox with a single conversation history per contact.',
    accent: 'from-accent-500 to-brand-500',
    stat: '5 channels',
  },
  {
    icon: Headphones,
    title: 'AI Voice Agents',
    desc: 'AI-powered voice agents that make sales calls, handle objections, and close deals over the phone — coming Q1 2026.',
    accent: 'from-purple-500 to-brand-600',
    stat: 'Beta Access',
    soon: true,
  },
  {
    icon: Target,
    title: 'AI Ad Optimization',
    desc: 'AI creates, targets, and optimizes ads across Instagram, Facebook, and Google — automatically shifting budget to the best performers.',
    accent: 'from-pink-500 to-brand-500',
    stat: '3.2x ROAS',
  },
  {
    icon: Globe,
    title: 'API-First Platform',
    desc: 'Comprehensive REST API with webhooks, GraphQL, and Zapier integration — build custom workflows on top of our AI infrastructure.',
    accent: 'from-accent-500 to-mint-500',
    stat: '50+ integrations',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/8 blur-[140px]" />
      </div>

      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Everything you need to{' '}
              <span className="gradient-text-brand">close more deals</span>
            </>
          }
          description="One AI platform that handles your entire sales pipeline — from capturing leads to closing deals. No other tools needed."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {FEATURES.map((f, i) => (
            <article
              key={f.title}
              className="reveal glass-card glass-hover group relative overflow-hidden p-7 lg:p-8"
              data-reveal-delay={(i % 3) * 80}
            >
              {/* Hover glow */}
              <div
                className={`pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-gradient-to-br ${f.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25`}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div
                    className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${f.accent} shadow-glow`}
                  >
                    <f.icon className="h-6 w-6 text-white" />
                    {f.soon && (
                      <span className="absolute -right-2 -top-2 rounded-full bg-gradient-to-r from-purple-500 to-brand-500 px-2 py-0.5 text-[9px] font-bold text-white shadow-glow">
                        SOON
                      </span>
                    )}
                  </div>
                  <span className="chip text-xs font-medium text-ink-400 group-hover:text-brand-300 transition-colors">
                    {f.stat}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white group-hover:text-brand-200 transition-colors">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-300 lg:text-base">
                  {f.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-300 opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
