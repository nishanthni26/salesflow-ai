import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from './SectionHeading';

const FAQS = [
  {
    q: 'How does AI handle the entire sales process from leads to deals?',
    a: 'Nexora AI is an end-to-end autonomous sales engine. The AI captures leads from any source (forms, ads, WhatsApp, web chat), qualifies them by scoring intent and behavior, initiates conversations through AI agents, handles objections, generates and sends quotations automatically, collects payment, and closes the deal — all without human intervention. You can monitor everything in real time from the dashboard.',
  },
  {
    q: 'How do I get pricing for my business?',
    a: 'Every business is unique. Fill out our quick Google Form and our team will analyze your sales volume, team size, and goals to create a personalized pricing plan. We typically respond within 24 hours with a tailored proposal.',
  },
  {
    q: 'How does AI lead qualification work?',
    a: 'Every inbound lead is instantly analyzed by AI across three dimensions: intent signals (page behavior, time on site), firmographic data (company size, industry, revenue), and engagement patterns. The AI assigns a real-time score (0–100) and auto-enriches the record with verified contact details. High-scoring leads are immediately engaged by AI agents; lower-scoring leads enter automated nurturing sequences.',
  },
  {
    q: 'Can the AI really handle sales conversations from start to close?',
    a: 'Yes. The AI Sales Assistant is trained on your product knowledge, pricing, and FAQ. It handles initial discovery, answers questions, addresses objections, qualifies budget and timeline, generates accurate quotations, sends proposals, and collects e-signatures and payments. When a lead asks something complex or the AI detects a high-value deal, it seamlessly hands off to a human rep with full conversation context.',
  },
  {
    q: 'How does the AI quotation generator work?',
    a: 'When a lead signals buying intent, the AI instantly generates a branded, personalized quotation based on your pricing rules, product configuration, and historical win-rate data. It recommends optimal pricing, applies discounts within your policy, and includes terms and conditions. The AI then sends the proposal via email or WhatsApp, tracks engagement, and follows up automatically until the deal closes.',
  },
  {
    q: 'What happens after my 14-day free trial?',
    a: 'Nothing happens automatically — we do not charge you without action. At the end of your trial, you can choose a plan that fits your team. If you do nothing, your account simply reverts to read-only mode. No surprise charges, ever.',
  },
  {
    q: 'Is my data secure?',
    a: 'Security is our top priority. We are SOC 2 Type II certified and GDPR compliant. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We never train shared AI models on your private data, and you can export or delete your data at any time.',
  },
  {
    q: 'Can I use Nexora AI with my existing CRM?',
    a: 'Yes. Nexora AI integrates natively with HubSpot, Salesforce, Pipedrive, and Zoho. We also offer a REST API and Zapier connectors for custom integrations. You can use Nexora as your primary CRM or as an AI automation layer on top of your existing stack.',
  },
  {
    q: 'Do you offer custom enterprise plans?',
    a: 'Yes. Our Enterprise plan includes unlimited leads and AI conversations, unlimited seats, custom AI model training, SSO, advanced permissions, white-label options, dedicated infrastructure, a 99.99% uptime SLA, and a dedicated success manager. Contact our sales team for a tailored quote.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container-px-wide">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions?{' '}
              <span className="gradient-text-brand">We have answers</span>
            </>
          }
          description="Everything you need to know about Nexora AI. Can't find what you're looking for? Reach out to our team."
        />

        <div className="reveal mx-auto mt-12 max-w-3xl">
          <div className="space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`glass-card overflow-hidden transition-colors ${
                    isOpen ? 'border-brand-400/30' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-white sm:text-base">{f.q}</span>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg border transition-colors ${
                        isOpen
                          ? 'border-brand-400/40 bg-brand-500/15 text-brand-300'
                          : 'border-white/10 bg-white/5 text-ink-300'
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink-300">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still have questions */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row">
            <div>
              <h3 className="font-display text-base font-bold text-white">Still have questions?</h3>
              <p className="text-sm text-ink-400">Our team is here to help, 24/7.</p>
            </div>
            <a href="#" className="btn-ghost shrink-0">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
