import { useEffect, useRef, useState } from 'react';
import {
  Search,
  BrainCircuit,
  MessageSquare,
  FileText,
  CreditCard,
  PartyPopper,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Bot,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const STEPS = [
  {
    num: '01',
    icon: Search,
    title: 'AI Captures Your Leads',
    desc: 'AI automatically collects leads from every channel — website forms, ads, WhatsApp, social media, and email. No manual data entry, no leads slipping through the cracks.',
    features: ['Multi-channel capture', 'Real-time enrichment', 'Duplicate detection'],
    color: 'from-brand-500 to-brand-700',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    num: '02',
    icon: BrainCircuit,
    title: 'AI Qualifies & Scores',
    desc: 'Every lead is instantly analyzed. AI scores intent, enriches firmographic data, and prioritizes the hottest prospects so your team focuses on deals that close.',
    features: ['Intent scoring', 'Firmographic data', 'Auto-prioritization'],
    color: 'from-accent-500 to-brand-600',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    num: '03',
    icon: MessageSquare,
    title: 'AI Engages Automatically',
    desc: 'AI agents start conversations, answer questions, handle objections, and book meetings across WhatsApp, email, and SMS — 24/7 without breaks.',
    features: ['Multi-channel chat', 'Objection handling', 'Auto-booking'],
    color: 'from-mint-500 to-accent-500',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    num: '04',
    icon: FileText,
    title: 'AI Generates Proposals',
    desc: 'When a lead is ready, AI instantly creates personalized, branded quotations with optimal pricing, discounts, and terms — sent automatically.',
    features: ['Dynamic pricing', 'Brand templates', 'E-signature ready'],
    color: 'from-gold-500 to-brand-500',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    num: '05',
    icon: CreditCard,
    title: 'AI Collects Payment',
    desc: 'AI handles payment collection, invoice generation, and reminders. Multiple payment methods supported. Deals close without a single rep lifting a finger.',
    features: ['Auto-invoicing', 'Payment reminders', 'Multi-gateway'],
    color: 'from-brand-500 to-accent-500',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    num: '06',
    icon: PartyPopper,
    title: 'Deal Closed — Celebrate!',
    desc: 'The entire cycle from lead to payment is fully automated. You get real-time notifications, analytics, and insights while AI handles the next deal.',
    features: ['Real-time alerts', 'Revenue analytics', 'Auto-next-deal'],
    color: 'from-mint-500 to-accent-500',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

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
    observerRef.current = observer;

    const cards = document.querySelectorAll('.step-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-20 sm:py-28 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/8 blur-[140px]" />
      </div>

      <div className="container-px-wide">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              See how AI closes deals{' '}
              <span className="gradient-text-brand">step by step</span>
            </>
          }
          description="From the first lead to the closed deal — watch how AI handles every step automatically. No manual work, no missed opportunities."
        />

        {/* Step-by-step cards */}
        <div className="mt-16 space-y-6">
          {STEPS.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <div
                key={step.num}
                data-step-index={i}
                className={`step-card reveal glass-card group overflow-hidden transition-all duration-700 ${
                  isActive ? 'border-brand-400/30 shadow-glow' : 'border-white/10'
                }`}
                data-reveal-delay={i * 60}
              >
                <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
                  {/* Left: Content */}
                  <div className={`lg:col-span-7 p-6 lg:p-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${step.color} shadow-glow`}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-brand-300 tracking-wider">STEP {step.num}</span>
                        <h3 className="font-display text-xl font-bold text-white lg:text-2xl">{step.title}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-ink-300 lg:text-lg">
                      {step.desc}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {step.features.map((f) => (
                        <span key={f} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-ink-200">
                          <CheckCircle2 className="h-3 w-3 text-mint-400" />
                          {f}
                        </span>
                      ))}
                    </div>
                    {/* Animated progress indicator */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${step.color} transition-all duration-1000 ${isActive ? 'w-full' : 'w-0'}`}
                        />
                      </div>
                      <span className="text-xs text-ink-400 font-mono">{step.num}/06</span>
                    </div>
                  </div>

                  {/* Right: Visual */}
                  <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative h-56 lg:h-72 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* AI visual representation */}
                        <div className="relative">
                          {/* Orbiting particles */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            {[0, 1, 2, 3].map((p) => (
                              <div
                                key={p}
                                className="absolute h-3 w-3 rounded-full bg-brand-400 animate-pulse"
                                style={{
                                  animationDelay: `${p * 250}ms`,
                                  transform: `rotate(${p * 90}deg) translateX(60px)`,
                                }}
                              />
                            ))}
                          </div>
                          {/* Central icon */}
                          <div className={`grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br ${step.color} shadow-glow animate-float`}>
                            {i === 0 && <Bot className="h-10 w-10 text-white" />}
                            {i === 1 && <BrainCircuit className="h-10 w-10 text-white" />}
                            {i === 2 && <MessageSquare className="h-10 w-10 text-white" />}
                            {i === 3 && <FileText className="h-10 w-10 text-white" />}
                            {i === 4 && <CreditCard className="h-10 w-10 text-white" />}
                            {i === 5 && <PartyPopper className="h-10 w-10 text-white" />}
                          </div>
                          {/* Pulse ring */}
                          <div className={`absolute inset-0 grid h-20 w-20 place-items-center rounded-2xl border-2 border-brand-400/40 animate-pulse-ring`} />
                        </div>
                      </div>
                      {/* Connecting line to next step */}
                      {i < STEPS.length - 1 && (
                        <div className={`absolute bottom-0 left-1/2 h-6 w-px -translate-x-1/2 bg-gradient-to-b ${step.color}`}>
                          <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-400 animate-bounce" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-lg text-ink-300">
            See the full AI workflow in action — from lead to closed deal in under 2 minutes.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf-demo-form-link/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <Zap className="h-4 w-4" />
            Get a Demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
