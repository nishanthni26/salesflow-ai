import { ShieldCheck, Lock, Globe2, Award } from 'lucide-react';

const LOGOS = [
  'Nebula',
  'Quantix',
  'Vertex',
  'Lumen',
  'Cobalt',
  'Northwind',
  'Apex',
  'Stratos',
  'Helios',
  'Monarch',
];

const TRUST = [
  { icon: ShieldCheck, label: 'SOC 2 Type II' },
  { icon: Lock, label: 'GDPR Compliant' },
  { icon: Globe2, label: '99.99% Uptime' },
  { icon: Award, label: 'G2 Leader 2025' },
];

export default function TrustedBy() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="container-px-wide">
        <p className="reveal text-center text-sm font-medium uppercase tracking-widest text-ink-400">
          Trusted by 4,000+ revenue teams worldwide
        </p>

        {/* Logo marquee */}
        <div className="reveal relative mt-8 overflow-hidden mask-fade-x">
          <div className="flex w-max animate-marquee items-center gap-16">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-2.5 text-2xl font-bold text-ink-400/70 transition-colors hover:text-ink-200 xl:text-3xl"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <span className="h-3 w-3 rounded-sm bg-gradient-to-br from-brand-400 to-accent-400" />
                </span>
                <span className="font-display tracking-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="reveal mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          {TRUST.map((t) => (
            <div
              key={t.label}
              className="glass-card glass-hover flex items-center gap-3 px-4 py-3.5 lg:px-6 lg:py-4"
            >
              <t.icon className="h-5 w-5 text-brand-300 lg:h-6 lg:w-6" />
              <span className="text-sm font-medium text-ink-200 lg:text-base">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
