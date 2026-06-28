import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Play,
  Sparkles,
  TrendingUp,
  Zap,
  Bot,
  MessageSquare,
  CheckCircle2,
  Activity,
  BarChart3,
  Users,
  Clock,
} from 'lucide-react';

const HERO_STATS = [
  { value: '4,000+', label: 'Teams Onboarded', icon: Users, color: 'from-brand-400 to-brand-600' },
  { value: '2.4M+', label: 'Deals Closed by AI', icon: TrendingUp, color: 'from-accent-400 to-accent-600' },
  { value: '94%', label: 'Revenue Growth', icon: BarChart3, color: 'from-mint-400 to-mint-600' },
];

export default function Hero() {
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setCursorPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    const el = heroRef.current;
    if (el) el.addEventListener('mousemove', onMouse);
    return () => { if (el) el.removeEventListener('mousemove', onMouse); };
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative overflow-hidden pt-[calc(var(--header-h)+3rem)] pb-16 lg:pt-[calc(var(--header-h)+4rem)] lg:pb-24"
    >
      {/* Radial gradient follows cursor */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(600px 600px at ${cursorPos.x}% ${cursorPos.y}%, rgba(51,102,255,0.18), transparent 60%)`,
        }}
      />
      {/* Base backgrounds */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-fine opacity-20" />
        <div className="absolute left-1/3 top-0 h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-brand-500/12 blur-[130px]" />
        <div className="absolute right-[5%] top-20 h-[380px] w-[380px] rounded-full bg-accent-500/10 blur-[100px]" />
        <div className="absolute left-[5%] top-60 h-[320px] w-[320px] rounded-full bg-brand-700/15 blur-[100px]" />
      </div>

      <div className="container-px-wide">
        {/* Announcement chip */}
        <div className="flex justify-center">
          <a
            href="#features"
            className="chip-brand reveal group hover:border-brand-400/50 hover:bg-brand-500/15 transition-all"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-gradient">
              <Sparkles className="h-3 w-3 text-white" />
            </span>
            <span className="text-ink-100">Nexora AI 2.0 — Autonomous AI Agents are here</span>
            <ArrowRight className="h-3.5 w-3.5 text-ink-400 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Hero headline */}
        <div className="mt-8 text-center lg:mt-10">
          <h1 className="reveal font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem] text-balance">
            Automate Your
            <br />
            Entire <span className="gradient-text-brand">Sales Process</span>
            <br />
            with <span className="gradient-text">AI</span>
          </h1>
          <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-300 sm:text-xl text-balance">
            From the first lead to the closed deal — AI agents handle your entire pipeline
            automatically. No manual handoffs. No missed follow-ups. No lost revenue.
          </p>
        </div>

        {/* CTAs */}
        <div className="reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#workflow" className="btn-primary">
            <Sparkles className="h-4 w-4" />
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#dashboard" className="btn-ghost">
            <Play className="h-4 w-4" />
            Book Demo
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf-demo-form-link/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Bot className="h-4 w-4" />
            Try AI Assistant
          </a>
        </div>

        {/* Micro trust */}
        <div className="reveal mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-400">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-mint-400" /> No credit card required
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-mint-400" /> 14-day free trial
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-mint-400" /> Cancel anytime
          </span>
        </div>

        {/* Dashboard preview */}
        <div className="reveal mt-14 relative lg:mt-20">
          <div className="absolute -inset-x-10 -top-10 -bottom-6 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-12 blur-[80px]" />
          <div className="absolute -inset-x-4 -top-4 -bottom-2 -z-10 rounded-[2rem] bg-accent-500/8 blur-[60px]" />
          <HeroDashboard />
        </div>

        {/* Stats row */}
        <div className="reveal mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
          {HERO_STATS.map((s) => (
            <div
              key={s.label}
              className="glass-card flex items-center gap-4 p-5 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${s.color} shadow-glow`}>
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-sm text-ink-400">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="glass-card overflow-hidden rounded-2xl border border-white/10 shadow-glow">
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.02] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
        <span className="h-3 w-3 rounded-full bg-green-400/70" />
        <div className="ml-3 flex flex-1 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-ink-400">
          <span className="h-2 w-2 rounded-full bg-mint-400 animate-pulse" />
          app.nexora.ai/dashboard
          <span className="ml-auto text-[10px] text-ink-500">Live</span>
        </div>
      </div>

      <div className="grid gap-0 sm:grid-cols-12">
        {/* Sidebar */}
        <aside className="hidden flex-col gap-0.5 border-r border-white/10 bg-white/[0.02] p-4 sm:col-span-3 lg:flex">
          <div className="flex items-center gap-2 px-2 py-2 mb-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-gradient">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="text-sm font-bold text-white">Nexora</span>
          </div>
          {['Dashboard', 'Leads', 'Pipeline', 'Conversations', 'AI Agents', 'Analytics', 'Settings'].map(
            (item, i) => (
              <div
                key={item}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                  i === 0
                    ? 'bg-brand-500/15 text-brand-200 border border-brand-400/20'
                    : 'text-ink-400 hover:bg-white/5 hover:text-ink-200'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                {item}
                {i === 3 && (
                  <span className="ml-auto h-5 w-5 rounded-full bg-mint-500/20 flex items-center justify-center text-[10px] text-mint-400 font-bold">3</span>
                )}
              </div>
            ),
          )}
        </aside>

        {/* Main */}
        <div className="p-4 sm:col-span-9 lg:col-span-9 lg:p-5">
          {/* Stat cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { label: 'Revenue', value: '$284K', delta: '+18.2%', icon: TrendingUp, sub: 'vs last month' },
              { label: 'New Leads', value: '1,284', delta: '+32%', icon: Zap, sub: 'AI-captured' },
              { label: 'Deals Closed', value: '342', delta: '+12%', icon: CheckCircle2, sub: 'by AI agents' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all hover:bg-white/[0.05] hover:border-white/15">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-ink-400">{s.label}</span>
                  <s.icon className="h-3.5 w-3.5 text-brand-300" />
                </div>
                <div className="mt-2 text-xl font-bold text-white">{s.value}</div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs font-medium text-mint-400">{s.delta}</span>
                  <span className="text-[10px] text-ink-500">{s.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Chart + side panel */}
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-5">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:col-span-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white">Revenue Overview</span>
                <span className="chip text-[10px]">Last 7 months</span>
              </div>
              <MiniChart />
            </div>
            <div className="space-y-3 sm:col-span-2">
              <div className="rounded-xl border border-accent-400/20 bg-gradient-to-br from-accent-500/10 to-brand-500/10 p-4">
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-accent-300" />
                  <span className="text-sm font-semibold text-white">AI Agent Active</span>
                  <span className="ml-auto h-2 w-2 rounded-full bg-mint-400 animate-pulse" />
                </div>
                <p className="mt-2 text-xs text-ink-400">
                  3 high-intent leads ready. Auto-drafting follow-ups...
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-brand-gradient px-2 py-1 text-[10px] font-semibold text-white">
                    <Sparkles className="h-3 w-3" /> Auto-draft
                  </span>
                  <span className="text-[10px] text-ink-500">2 min ago</span>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-mint-400" />
                  <span className="text-sm font-semibold text-white">Live Conversations</span>
                  <span className="ml-auto text-[10px] text-mint-400 font-semibold">5 active</span>
                </div>
                <div className="mt-2 space-y-1.5">
                  {[
                    { name: 'Acme Corp', status: 'AI negotiating', color: 'text-mint-400' },
                    { name: 'Globex Inc', status: 'Proposal sent', color: 'text-brand-300' },
                    { name: 'Initech', status: 'Qualifying', color: 'text-accent-300' },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center justify-between text-xs">
                      <span className="text-ink-200 font-medium">{c.name}</span>
                      <span className={`${c.color} text-[10px]`}>{c.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniChart() {
  const bars = [38, 52, 44, 68, 58, 82, 96];
  return (
    <div className="mt-4 flex h-28 items-end gap-2">
      {bars.map((h, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
          <div
            className="w-full origin-bottom rounded-t-md bg-gradient-to-t from-brand-600 to-accent-400 transition-all duration-1000 hover:from-brand-400 hover:to-accent-300"
            style={{
              height: `${h}%`,
              animation: `bar-grow 1.2s cubic-bezier(0.22, 1, 0.36, 1) both`,
              animationDelay: `${i * 120}ms`,
            }}
          />
          <span className="text-[10px] text-ink-500">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][i]}</span>
        </div>
      ))}
    </div>
  );
}
