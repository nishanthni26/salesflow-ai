import { useEffect, useRef, useState } from 'react';
import { Target, Instagram, Facebook, Globe, TrendingUp, Megaphone, BarChart3, Zap, ArrowRight, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';

const PLATFORMS = [
  { name: 'Instagram', icon: Instagram, color: 'from-pink-500 via-purple-500 to-orange-500', label: 'Stories, Reels, Feed', stat: '3.2x engagement' },
  { name: 'Facebook', icon: Facebook, color: 'from-blue-600 to-blue-400', label: 'Feed, Groups, Marketplace', stat: '2.8x reach' },
  { name: 'Google', icon: Globe, color: 'from-red-500 via-yellow-500 to-green-500', label: 'Search, Display, YouTube', stat: '4.1x conversions' },
];

const AD_STEPS = [
  { icon: Target, title: 'AI Audience Targeting', desc: 'AI analyzes your best customers and builds lookalike audiences automatically across all platforms.' },
  { icon: Megaphone, title: 'Auto Ad Creation', desc: 'Generate high-converting ad creatives, copy, and headlines with AI — no designer needed.' },
  { icon: Zap, title: 'Smart Budget Allocation', desc: 'AI shifts budget in real-time to the best-performing channels and campaigns.' },
  { icon: BarChart3, title: 'Cross-Platform Analytics', desc: 'Unified analytics showing ROI, CPA, and revenue attribution across all ad platforms.' },
];

export default function AdsAutomation() {
  const [activePlatform, setActivePlatform] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActivePlatform((prev) => (prev + 1) % PLATFORMS.length);
    }, 3500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <section id="ads" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-pink-500/8 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/8 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/5 blur-[150px]" />
      </div>

      <div className="container-px-wide">
        <SectionHeading
          eyebrow="AI Ads"
          title={
            <>
              Run smarter ads on{' '}
              <span className="gradient-text-brand">Instagram, Facebook & Google</span>
            </>
          }
          description="AI creates, targets, optimizes, and scales your ads across all major platforms — automatically. One dashboard, every platform, zero guesswork."
        />

        {/* Platform tabs with animated indicator */}
        <div className="reveal mt-14 flex justify-center">
          <div className="relative flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl">
            {PLATFORMS.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActivePlatform(i)}
                className={`relative z-10 flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-300 ${
                  activePlatform === i ? 'text-white' : 'text-ink-400 hover:text-ink-200'
                }`}
              >
                <p.icon className={`h-5 w-5 ${activePlatform === i ? 'text-white' : 'text-ink-500'}`} />
                {p.name}
              </button>
            ))}
            {/* Sliding background pill */}
            <div
              className="absolute top-2 h-[calc(100%-16px)] rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-500 ease-out"
              style={{
                width: `${100 / PLATFORMS.length}%`,
                left: `${(activePlatform * 100) / PLATFORMS.length + 1}%`,
                transform: 'translateX(-2%)',
              }}
            />
          </div>
        </div>

        {/* Active platform showcase */}
        <div className="reveal mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Animated card */}
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/15 to-accent-500/10 blur-3xl animate-pulse" />
            <div className="glass-card overflow-hidden rounded-2xl">
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                <div className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${PLATFORMS[activePlatform].color}`}>
                  {(() => {
                    const Icon = PLATFORMS[activePlatform].icon;
                    return <Icon className="h-5 w-5 text-white" />;
                  })()}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{PLATFORMS[activePlatform].name} Ads</div>
                  <div className="text-xs text-ink-400">{PLATFORMS[activePlatform].label}</div>
                </div>
                <span className="ml-auto chip text-xs text-mint-300">
                  <TrendingUp className="h-3 w-3" /> {PLATFORMS[activePlatform].stat}
                </span>
              </div>
              <div className="p-5 space-y-4">
                {/* Simulated ad preview */}
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-500 to-accent-500" />
                    <div>
                      <div className="text-sm font-semibold text-white">Nexora AI</div>
                      <div className="text-xs text-ink-400">Sponsored</div>
                    </div>
                  </div>
                  <p className="text-sm text-ink-200 mb-3">
                    {activePlatform === 0 && "Transform your sales with AI automation. Our customers see 3x more conversions in 30 days. 🚀"}
                    {activePlatform === 1 && "Stop losing leads. Start closing deals with AI-powered sales automation. Free 14-day trial!"}
                    {activePlatform === 2 && "AI Sales Platform — Automated lead capture, qualification, and closing. 4,000+ teams trust us."}
                  </p>
                  <div className="h-32 rounded-lg bg-gradient-to-br from-brand-500/20 to-accent-500/20 flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-brand-300 animate-pulse" />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-ink-400">
                      <span className="flex items-center gap-1"><Target className="h-3 w-3" /> CTR: 4.2%</span>
                      <span className="flex items-center gap-1"><Zap className="h-3 w-3" /> AI Optimized</span>
                    </div>
                    <span className="text-xs text-mint-400 font-semibold">Live Campaign</span>
                  </div>
                </div>
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Impressions', value: '284K', delta: '+18%' },
                    { label: 'Clicks', value: '12.4K', delta: '+32%' },
                    { label: 'Conversions', value: '342', delta: '+45%' },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
                      <div className="text-xs text-ink-400">{m.label}</div>
                      <div className="mt-1 text-lg font-bold text-white">{m.value}</div>
                      <div className="text-xs text-mint-400">{m.delta}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feature list */}
          <div className="space-y-4">
            {AD_STEPS.map((step, i) => (
              <div
                key={step.title}
                className="reveal glass-card glass-hover group flex items-start gap-4 p-5 transition-all duration-300"
                data-reveal-delay={i * 100}
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-glow">
                  <step.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white group-hover:text-brand-200 transition-colors">{step.title}</h3>
                  <p className="mt-1 text-sm text-ink-300">{step.desc}</p>
                </div>
              </div>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf-demo-form-link/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto inline-flex mt-4"
            >
              Get Custom Ad Strategy
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
