import { useState } from 'react';
import { Check, Sparkles, ArrowRight, Building2, Rocket, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';

const PLANS = [
  {
    name: 'Starter',
    icon: Zap,
    tagline: 'Small teams just getting started with AI',
    monthly: 49,
    yearly: 39,
    leadCap: '1,000',
    aiConv: '2,000',
    seats: 3,
    features: [
      'AI Lead Qualification',
      'AI Sales Assistant',
      'Smart CRM',
      'Automated Follow-ups',
      'WhatsApp Automation',
      'Basic Analytics Dashboard',
      'Standard Support',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Growth',
    icon: Rocket,
    tagline: 'Scaling teams that need full AI automation',
    monthly: 149,
    yearly: 119,
    leadCap: '10,000',
    aiConv: '15,000',
    seats: 10,
    features: [
      'Everything in Starter',
      'AI Quotation Generator',
      'Multi-channel Communication',
      'Advanced Analytics + AI Insights',
      'Team Collaboration',
      'Custom AI Workflows',
      'Priority Support',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    icon: Building2,
    tagline: 'Large teams with advanced AI requirements',
    monthly: null,
    yearly: null,
    leadCap: 'Unlimited',
    aiConv: 'Unlimited',
    seats: 'Unlimited',
    features: [
      'Everything in Growth',
      'Custom AI Agent Training',
      'Custom AI Model Tuning',
      'White-label & Custom Branding',
      'SSO, SCIM & Advanced Permissions',
      'Dedicated Success Manager',
      'Custom Integrations & API',
      '99.99% Uptime SLA',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-700/15 blur-[130px]" />
      </div>

      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Simple, transparent{' '}
              <span className="gradient-text-brand">pricing</span>
            </>
          }
          description="Start free for 14 days. No credit card required. Upgrade or cancel anytime."
        />

        {/* Billing toggle */}
        <div className="reveal mt-8 flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${!yearly ? 'text-white' : 'text-ink-400'}`}>
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            onClick={() => setYearly((v) => !v)}
            className={`relative h-7 w-14 rounded-full transition-colors ${
              yearly ? 'bg-brand-gradient' : 'bg-white/10'
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-md transition-transform ${
                yearly ? 'translate-x-8' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${yearly ? 'text-white' : 'text-ink-400'}`}>
            Yearly
          </span>
          <span className="chip text-xs text-mint-300">
            <Sparkles className="h-3 w-3" /> Save 20%
          </span>
        </div>

        {/* Plans */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3 xl:gap-8">
          {PLANS.map((p, i) => (
            <div
              key={p.name}
              className={`reveal relative flex flex-col rounded-2xl p-7 ${
                p.highlighted
                  ? 'border border-brand-400/40 bg-gradient-to-b from-brand-500/10 to-accent-500/5 shadow-glow lg:-translate-y-4'
                  : 'glass-card'
              }`}
              data-reveal-delay={i * 90}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold text-white shadow-glow">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-xl ${
                    p.highlighted ? 'bg-brand-gradient' : 'border border-white/10 bg-white/5'
                  }`}
                >
                  <p.icon className={`h-5 w-5 ${p.highlighted ? 'text-white' : 'text-brand-300'}`} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{p.name}</h3>
                </div>
              </div>

              <p className="mt-3 text-sm text-ink-400">{p.tagline}</p>

              {/* Price */}
              <div className="mt-5 flex items-end gap-1.5">
                {p.monthly !== null ? (
                  <>
                    <span className="font-display text-4xl font-extrabold text-white">
                      ${yearly ? p.yearly : p.monthly}
                    </span>
                    <span className="mb-1 text-sm text-ink-400">/seat / month</span>
                  </>
                ) : (
                  <span className="font-display text-4xl font-extrabold text-white">Custom</span>
                )}
              </div>
              {p.monthly !== null && yearly && (
                <p className="mt-1 text-xs text-mint-400">Billed annually — save 20%</p>
              )}
              {p.monthly !== null && !yearly && <p className="mt-1 text-xs text-ink-500">Billed monthly</p>}
              {p.monthly === null && <p className="mt-1 text-xs text-ink-500">Tailored to your needs</p>}

              {/* CTA */}
              <a
                href="#"
                className={`mt-6 w-full ${p.highlighted ? 'btn-primary' : 'btn-ghost'}`}
              >
                {p.cta}
                <ArrowRight className="h-4 w-4" />
              </a>

              {/* Usage limits */}
              <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <div className="text-center">
                  <div className="text-xs text-ink-500">Leads / mo</div>
                  <div className="text-sm font-bold text-white">{p.leadCap}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-ink-500">AI Conversations</div>
                  <div className="text-sm font-bold text-white">{p.aiConv}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-ink-500">Seats</div>
                  <div className="text-sm font-bold text-white">{p.seats}</div>
                </div>
              </div>

              {/* Features */}
              <ul className="mt-5 space-y-2.5">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-ink-200">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        p.highlighted ? 'text-brand-300' : 'text-mint-400'
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-sm text-ink-400">
          All plans include a 14-day free trial. No credit card required. Need something custom?{' '}
          <a href="#" className="font-semibold text-brand-300 hover:text-brand-200">
            Talk to our team
          </a>
        </p>
      </div>
    </section>
  );
}
