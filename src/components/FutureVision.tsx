import { useRef, useEffect, useState } from 'react';
import {
  Headphones,
  Users,
  Brain,
  Target,
  ArrowRight,
  Sparkles,
  Rocket,
  ChevronRight,
  Zap,
  Radio,
  LineChart,
  Handshake,
  Globe,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const VISIONS = [
  {
    icon: Headphones,
    title: 'AI Voice Agents',
    desc: 'AI voice agents that make calls, handle objections, and close deals over the phone — indistinguishable from human sales reps.',
    status: 'Coming Q1 2026',
    color: 'from-purple-500 to-brand-500',
  },
  {
    icon: Users,
    title: 'Autonomous AI Sales Teams',
    desc: 'Deploy entire AI sales teams that coordinate, collaborate, and hand off deals between AI agents — just like a real team.',
    status: 'In Development',
    color: 'from-brand-500 to-accent-500',
  },
  {
    icon: LineChart,
    title: 'Predictive Revenue Intelligence',
    desc: 'AI predicts your next quarter revenue with 95%+ accuracy, identifies pipeline risks, and suggests corrective actions.',
    status: 'Beta Access',
    color: 'from-accent-500 to-mint-500',
  },
  {
    icon: Handshake,
    title: 'AI Negotiation Assistance',
    desc: 'AI analyzes deal patterns, suggests optimal pricing, and drafts counter-offers in real-time during negotiations.',
    status: 'Coming Q2 2026',
    color: 'from-mint-500 to-gold-500',
  },
  {
    icon: Globe,
    title: 'End-to-End Sales Automation',
    desc: 'The complete sales lifecycle automated — from market discovery and prospecting to contract renewal and upsell.',
    status: 'Now Available',
    color: 'from-gold-500 to-brand-500',
  },
  {
    icon: Brain,
    title: 'Self-Improving AI Models',
    desc: 'AI that learns from every deal, conversation, and outcome — continuously improving without manual retraining.',
    status: 'In Development',
    color: 'from-brand-500 to-purple-500',
  },
];

export default function FutureVision() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.visionIndex);
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
    );
    const cards = document.querySelectorAll('.vision-card');
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision" ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/6 blur-[160px]" />
      </div>

      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Future Vision"
          title={
            <>
              Building the{' '}
              <span className="gradient-text-brand">AI Operating System</span>
              <br />
              for Sales
            </>
          }
          description="Nexora AI is not just a product — it is a platform. Here is the roadmap of what we are building to redefine the future of sales."
        />

        {/* Vision timeline */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {VISIONS.map((v, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={v.title}
                data-vision-index={i}
                className={`vision-card reveal glass-card group overflow-hidden transition-all duration-700 ${
                  isActive ? 'border-brand-400/20 shadow-glow' : 'border-white/10'
                }`}
                data-reveal-delay={i * 60}
              >
                <div className="p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${v.color} shadow-glow`}>
                        <v.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white group-hover:text-brand-200 transition-colors">
                          {v.title}
                        </h3>
                        <span className={`text-xs font-medium ${isActive ? 'text-brand-300' : 'text-ink-400'}`}>
                          {v.status}
                        </span>
                      </div>
                    </div>
                    {isActive && (
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-500/20 animate-pulse">
                        <Sparkles className="h-4 w-4 text-brand-300" />
                      </div>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-300">{v.desc}</p>
                </div>
                {/* Animated progress bar */}
                <div className="h-1 w-full bg-white/5">
                  <div className={`h-full rounded-full bg-gradient-to-r ${v.color} transition-all duration-1000 ${isActive ? 'w-full' : 'w-0'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Big CTA */}
        <div className="reveal mt-16 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 rounded-full bg-brand-500/10 blur-2xl animate-pulse" />
            <div className="relative inline-flex items-center gap-3 rounded-full border border-brand-400/30 bg-gradient-to-r from-brand-500/15 to-accent-500/15 px-8 py-4">
              <Rocket className="h-5 w-5 text-brand-300" />
              <span className="text-sm font-semibold text-white">Ready to transform your sales? Join 4,000+ teams already using AI.</span>
              <a href="#pricing" className="btn-primary ml-2">
                <Zap className="h-4 w-4" />
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
