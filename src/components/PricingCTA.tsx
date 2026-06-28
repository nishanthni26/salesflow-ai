import { ArrowRight, Sparkles, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function PricingCTA() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[150px]" />
        <div className="absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-accent-500/8 blur-[120px]" />
      </div>

      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Get a{' '}
              <span className="gradient-text-brand">custom quote</span>
            </>
          }
          description="Every business is different. Tell us about your needs and our team will get back to you within 24 hours with a tailored pricing plan."
        />

        <div className="reveal mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Benefits */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-display text-xl font-bold text-white">Why request a custom quote?</h3>
              <p className="mt-3 text-sm text-ink-300">
                We believe in pricing that fits your business — not a one-size-fits-all plan. Our team analyzes your sales volume, team size, and growth goals to build the perfect plan.
              </p>
              <div className="mt-5 space-y-3">
                {[
                  'Personalized pricing based on your needs',
                  'Flexible monthly or annual billing',
                  'No hidden fees — transparent pricing',
                  'Free onboarding and setup support',
                  '14-day free trial included',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-ink-200">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-mint-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-white">Need help right now?</h4>
                  <p className="text-sm text-ink-300">Call us directly at +91 70220 04954</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Google Form CTA */}
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand-gradient opacity-15 blur-3xl animate-pulse" />
            <div className="glass-card overflow-hidden rounded-2xl border border-brand-400/20">
              <div className="border-b border-white/10 bg-gradient-to-r from-brand-500/10 to-accent-500/10 p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">Request Pricing</h3>
                    <p className="text-sm text-ink-300">Get a tailored plan in 24 hours</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-ink-300">
                  Fill out a quick form with your business details and our sales team will contact you with a personalized pricing proposal.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <MessageSquare className="h-5 w-5 text-brand-300" />
                    <div>
                      <div className="text-sm font-semibold text-white">Quick Response</div>
                      <div className="text-xs text-ink-400">We reply within 24 business hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <CheckCircle2 className="h-5 w-5 text-mint-400" />
                    <div>
                      <div className="text-sm font-semibold text-white">No Obligation</div>
                      <div className="text-xs text-ink-400">Free quote, no commitment required</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <Sparkles className="h-5 w-5 text-accent-300" />
                    <div>
                      <div className="text-sm font-semibold text-white">Custom Plan</div>
                      <div className="text-xs text-ink-400">Tailored to your team size and goals</div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf-demo-form-link/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full inline-flex justify-center mt-2"
                >
                  <Mail className="h-4 w-4" />
                  Get Pricing via Google Form
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
