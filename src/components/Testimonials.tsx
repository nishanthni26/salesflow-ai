import { Star, Quote, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';

const TESTIMONIALS = [
  {
    quote:
      'Nexora AI replaced three tools and an SDR. We closed 42% more deals in the first quarter — the AI assistant handles qualification better than most humans on our team.',
    name: 'Sarah Chen',
    role: 'VP Sales, Nebula',
    initials: 'SC',
    color: 'from-brand-500 to-brand-700',
    company: 'Nebula',
    revenue: '+42%',
  },
  {
    quote:
      'The WhatsApp automation alone paid for the platform in week one. Reply rates jumped from 8% to 39%. It feels like having a 24/7 sales floor.',
    name: 'Marcus Reid',
    role: 'Head of Growth, Quantix',
    initials: 'MR',
    color: 'from-accent-500 to-brand-600',
    company: 'Quantix',
    revenue: '+39%',
  },
  {
    quote:
      'We went from 12 days to 2 days average deal cycle. The quotation agent turns what used to be an hour of work into a 30-second task.',
    name: 'Priya Nair',
    role: 'CRO, Vertex Labs',
    initials: 'PN',
    color: 'from-mint-500 to-accent-500',
    company: 'Vertex Labs',
    revenue: '-83%',
  },
  {
    quote:
      'Our reps finally focus on closing instead of data entry. The CRM auto-enriches everything and tells them exactly who to call next. Game changer.',
    name: 'David Okafor',
    role: 'Sales Director, Lumen',
    initials: 'DO',
    color: 'from-gold-500 to-brand-500',
    company: 'Lumen',
    revenue: '+65%',
  },
  {
    quote:
      'The AI insights are scary good. It flagged three stalled deals I had no idea about — we recovered $96K in revenue in a single afternoon.',
    name: 'Elena Vasquez',
    role: 'Founder, Cobalt',
    initials: 'EV',
    color: 'from-brand-600 to-accent-600',
    company: 'Cobalt',
    revenue: '+$96K',
  },
  {
    quote:
      'Onboarding took an afternoon. By the next morning the AI had already qualified 40 inbound leads and booked 7 demos. Unreal.',
    name: 'James Park',
    role: 'COO, Northwind',
    initials: 'JP',
    color: 'from-accent-500 to-mint-500',
    company: 'Northwind',
    revenue: '+40 leads',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/6 blur-[140px]" />
      </div>

      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved by revenue teams{' '}
              <span className="gradient-text-brand">at every scale</span>
            </>
          }
          description="From scrappy startups to enterprise sales floors — teams use Nexora AI to close more, faster."
        />

        {/* Rating bar */}
        <div className="reveal mx-auto mt-8 flex max-w-lg items-center justify-center gap-8">
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-white lg:text-base">4.9/5</span>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-lg font-bold text-white lg:text-xl">4,000+</div>
            <div className="text-xs text-ink-400">teams onboard</div>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-lg font-bold text-white lg:text-xl">2.4M+</div>
            <div className="text-xs text-ink-400">deals closed</div>
          </div>
        </div>

        {/* Cards - masonry-style */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="reveal glass-card glass-hover break-inside-avoid p-6 lg:p-7"
              data-reveal-delay={(i % 3) * 80}
            >
              <Quote className="h-7 w-7 text-brand-400/40" />
              <blockquote className="mt-3 text-sm leading-relaxed text-ink-200 lg:text-base">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white shadow-glow`}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-ink-400">{t.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-mint-500/10 px-2 py-1 text-xs font-medium text-mint-400">
                  <TrendingUp className="h-3 w-3" />
                  {t.revenue}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Bottom stats bar */}
        <div className="reveal mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { value: '4.9/5', label: 'G2 Rating', icon: Star },
            { value: '$4.8M', label: 'Revenue Recovered', icon: TrendingUp },
            { value: '3.2x', label: 'Avg ROI', icon: Zap },
            { value: '98%', label: 'Satisfaction', icon: Users },
          ].map((s) => (
            <div key={s.label} className="glass-card glass-hover p-5 text-center">
              <s.icon className="mx-auto h-5 w-5 text-brand-300 mb-2" />
              <div className="font-display text-2xl font-extrabold text-white">{s.value}</div>
              <div className="mt-1 text-xs text-ink-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
