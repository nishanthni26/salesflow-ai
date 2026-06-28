import { Sparkles, Twitter, Linkedin, Github, Youtube, Mail, MapPin, Phone, ArrowRight, Zap, Star, Globe, Shield } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Product',
    links: ['AI Lead Qualification', 'AI Sales Assistant', 'WhatsApp Automation', 'Quotation Generator', 'Smart CRM', 'Analytics Dashboard', 'AI Voice Agents'],
  },
  {
    title: 'Solutions',
    links: ['For Startups', 'For SMBs', 'For Enterprise', 'For Agencies', 'For E-commerce', 'For SaaS', 'For Real Estate'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API Reference', 'Help Center', 'Community', 'Webinars', 'Templates', 'Status'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security', 'DPA'],
  },
];

const SOCIALS = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950/80">
      {/* CTA banner */}
      <div className="container-px-wide">
        <div className="relative -translate-y-1/2 overflow-hidden rounded-3xl border border-brand-400/30 bg-gradient-to-br from-brand-600/20 via-ink-900/40 to-accent-600/20 p-8 shadow-glow sm:p-12">
          <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-20" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl animate-pulse" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl animate-pulse" />
          <div className="relative flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl text-balance">
                Ready to transform your sales?
              </h2>
              <p className="mt-2 text-ink-300 text-balance">
                Join 4,000+ revenue teams closing more deals with AI. Start your 14-day free trial.
              </p>
              <div className="mt-4 flex items-center justify-center gap-4 text-sm text-ink-400 lg:justify-start">
                <span className="inline-flex items-center gap-1.5">
                  <Shield className="h-4 w-4 text-mint-400" /> SOC 2 Certified
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-gold-400" /> 4.9/5 G2 Rating
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Globe className="h-4 w-4 text-brand-300" /> 99.9% Uptime
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf-demo-form-link/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Zap className="h-4 w-4" />
                Get Pricing
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#dashboard" className="btn-ghost">
                Book Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-px -mt-16 pb-10">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Nexora<span className="text-brand-400"> AI</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              The AI Operating System for Sales. From lead capture to deal closure — fully autonomous.
            </p>

            <div className="mt-6 space-y-3">
              <a href="mailto:hello@nexora.ai" className="flex items-center gap-3 text-sm text-ink-300 transition-colors hover:text-white">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5">
                  <Mail className="h-4 w-4 text-brand-300" />
                </span>
                hello@nexora.ai
              </a>
              <a href="tel:+917022004954" className="flex items-center gap-3 text-sm text-ink-300 transition-colors hover:text-white">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5">
                  <Phone className="h-4 w-4 text-brand-300" />
                </span>
                +91 70220 04954
              </a>
              <div className="flex items-center gap-3 text-sm text-ink-300">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5">
                  <MapPin className="h-4 w-4 text-brand-300" />
                </span>
                22 Anruthnagar, 4th Cross, A Sector, Bangalore 560092
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-300">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5">
                  <Sparkles className="h-4 w-4 text-brand-300" />
                </span>
                CEO: Nishanth
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-ink-300 transition-all hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-white">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-ink-400 transition-colors hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Nexora AI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-ink-500">
            <a href="#" className="transition-colors hover:text-ink-300">Privacy</a>
            <a href="#" className="transition-colors hover:text-ink-300">Terms</a>
            <a href="#" className="transition-colors hover:text-ink-300">Cookies</a>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-mint-400 animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
