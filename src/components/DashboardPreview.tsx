import { useState } from 'react';
import {
  LayoutDashboard,
  TrendingUp,
  Users,
  Bot,
  Bell,
  DollarSign,
  ArrowUpRight,
  Sparkles,
  Filter,
  Search,
  MoreHorizontal,
  MessageSquare,
  FileText,
  Calendar,
  Phone,
  Target,
  Zap,
  CheckCircle2,
  Clock,
  ChevronRight,
  Star,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const PIPELINE = [
  { name: 'Acme Corp', value: '$48,000', stage: 'Negotiation', prob: 80, color: 'bg-mint-400', ai: 'AI drafting counter-offer' },
  { name: 'Globex Inc', value: '$32,500', stage: 'Proposal', prob: 60, color: 'bg-brand-400', ai: 'AI sent quotation #1284' },
  { name: 'Initech', value: '$21,000', stage: 'Qualified', prob: 40, color: 'bg-gold-400', ai: 'AI qualifying intent' },
  { name: 'Umbrella Co', value: '$15,800', stage: 'Discovery', prob: 25, color: 'bg-ink-400', ai: 'AI scheduled demo' },
  { name: 'Stark Industries', value: '$67,200', stage: 'Closed Won', prob: 100, color: 'bg-mint-500', ai: 'Deal closed by AI' },
];

const NOTIFICATIONS = [
  { text: 'Acme Corp replied — high intent detected', time: '2m ago', type: 'hot', icon: Zap },
  { text: 'Quotation #1284 sent to Globex Inc', time: '18m ago', type: 'info', icon: FileText },
  { text: '3 leads qualified by AI overnight', time: '1h ago', type: 'success', icon: CheckCircle2 },
  { text: 'Deal with Stark Industries moved to Negotiation', time: '3h ago', type: 'info', icon: TrendingUp },
  { text: 'AI Voice Agent: Call completed with Initech', time: '5h ago', type: 'success', icon: Phone },
];

const TABS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'pipeline', label: 'Pipeline', icon: Target },
  { id: 'conversations', label: 'Conversations', icon: MessageSquare },
  { id: 'ai-agents', label: 'AI Agents', icon: Bot },
];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="dashboard" className="relative py-24 sm:py-32 lg:py-40">
      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Dashboard"
          title={
            <>
              Your entire revenue engine,{' '}
              <span className="gradient-text-brand">in one view</span>
            </>
          }
          description="Watch AI work in real time: leads pouring in, conversations handled, deals advancing, and revenue climbing — all on autopilot."
        />

        <div className="reveal relative mt-14">
          <div className="absolute -inset-x-8 -top-6 -z-10 h-full rounded-[2rem] bg-brand-gradient opacity-8 blur-3xl" />
          <div className="absolute -inset-x-4 -bottom-4 -z-10 rounded-[2rem] bg-accent-500/8 blur-3xl" />

          <div className="glass-card overflow-hidden rounded-2xl border border-white/10 shadow-glow">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-5 py-3.5">
              <div className="flex items-center gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient">
                  <LayoutDashboard className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-white">Nexora Dashboard</span>
                <span className="flex items-center gap-1.5 rounded-full border border-mint-400/20 bg-mint-500/10 px-2 py-0.5 text-[10px] font-bold text-mint-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint-400 animate-pulse" />
                  Live
                </span>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-ink-400">
                  <Search className="h-3.5 w-3.5" />
                  Search deals, contacts...
                </div>
                <button className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-ink-300 hover:bg-white/10 transition-colors">
                  <Filter className="h-3.5 w-3.5" />
                </button>
                <button className="relative grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-ink-300 hover:bg-white/10 transition-colors">
                  <Bell className="h-3.5 w-3.5" />
                  <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-mint-400 animate-pulse" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-0 border-b border-white/10 bg-white/[0.02] px-4">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === t.id
                      ? 'text-white border-b-2 border-brand-400'
                      : 'text-ink-400 hover:text-ink-200'
                  }`}
                >
                  <t.icon className="h-4 w-4" />
                  {t.label}
                  {t.id === 'conversations' && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/20 text-[10px] font-bold text-brand-300">3</span>
                  )}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Sidebar */}
              <aside className="hidden border-r border-white/10 bg-white/[0.02] p-4 lg:col-span-2 lg:block">
                <nav className="space-y-0.5">
                  {[
                    { label: 'Overview', active: true },
                    { label: 'Leads', badge: '12 new' },
                    { label: 'Pipeline', badge: '5 hot' },
                    { label: 'Conversations', badge: '3 active' },
                    { label: 'Quotations', badge: '2 pending' },
                    { label: 'Analytics', active: false },
                    { label: 'Team', active: false },
                    { label: 'Settings', active: false },
                  ].map((n) => (
                    <div
                      key={n.label}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors cursor-pointer ${
                        n.active ? 'bg-brand-500/15 text-brand-200' : 'text-ink-400 hover:bg-white/5 hover:text-ink-200'
                      }`}
                    >
                      <span>{n.label}</span>
                      {n.badge && (
                        <span className="rounded-full bg-brand-500/20 px-2 py-0.5 text-[10px] font-medium text-brand-300">{n.badge}</span>
                      )}
                    </div>
                  ))}
                </nav>
              </aside>

              {/* Main content */}
              <div className="p-5 lg:col-span-10 lg:p-6">
                {/* KPI row */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { label: 'Total Revenue', value: '$284,920', delta: '+18.2%', icon: DollarSign, spark: true },
                    { label: 'Active Leads', value: '1,284', delta: '+32%', icon: Users, spark: true },
                    { label: 'Win Rate', value: '34.8%', delta: '+4.1%', icon: TrendingUp, spark: true },
                    { label: 'AI Interactions', value: '8,240', delta: '+56%', icon: Bot, spark: true },
                  ].map((k) => (
                    <div key={k.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:bg-white/[0.05] hover:border-white/15">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-ink-400">{k.label}</span>
                        <k.icon className="h-4 w-4 text-brand-300" />
                      </div>
                      <div className="mt-2 text-2xl font-bold text-white">{k.value}</div>
                      <div className="mt-1 flex items-center gap-1 text-xs font-medium text-mint-400">
                        <ArrowUpRight className="h-3 w-3" />
                        {k.delta}
                        <span className="text-ink-500 ml-1">vs last month</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart + Pipeline */}
                <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-5">
                  {/* Revenue chart */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 xl:col-span-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-white">Revenue Analytics</h4>
                        <p className="text-xs text-ink-400">Monthly recurring + one-time</p>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="inline-flex items-center gap-1.5 text-ink-300">
                          <span className="h-2 w-2 rounded-full bg-brand-400" /> Recurring
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-ink-300">
                          <span className="h-2 w-2 rounded-full bg-accent-400" /> One-time
                        </span>
                      </div>
                    </div>
                    <RevenueChart />
                    {/* AI insight overlay */}
                    <div className="mt-3 flex items-center gap-2 rounded-xl border border-accent-400/20 bg-gradient-to-r from-accent-500/10 to-brand-500/10 px-3 py-2">
                      <Sparkles className="h-4 w-4 text-accent-300 shrink-0" />
                      <span className="text-xs text-ink-200">AI predicts <span className="text-white font-semibold">$340K</span> revenue next month — 19% above target</span>
                    </div>
                  </div>

                  {/* Pipeline */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 xl:col-span-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-white">Lead Pipeline</h4>
                      <MoreHorizontal className="h-4 w-4 text-ink-400" />
                    </div>
                    <div className="mt-4 space-y-3">
                      {PIPELINE.map((p) => (
                        <div key={p.name}>
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium text-ink-100">{p.name}</span>
                            <span className="font-semibold text-white">{p.value}</span>
                          </div>
                          <div className="mt-1.5 flex items-center gap-2">
                            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                              <div
                                className={`h-full rounded-full ${p.color} transition-all duration-1000`}
                                style={{ width: `${p.prob}%` }}
                              />
                            </div>
                            <span className="text-xs text-ink-400">{p.stage}</span>
                          </div>
                          {p.ai && (
                            <div className="mt-1 flex items-center gap-1 text-[10px] text-brand-300">
                              <Bot className="h-3 w-3" />
                              {p.ai}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Insights + Notifications + Tasks */}
                <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
                  <div className="relative overflow-hidden rounded-xl border border-accent-400/20 bg-gradient-to-br from-accent-500/10 to-brand-500/10 p-5">
                    <div className="flex items-center gap-2">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient">
                        <Bot className="h-4 w-4 text-white" />
                      </span>
                      <h4 className="text-sm font-semibold text-white">AI Insights</h4>
                      <span className="chip ml-auto text-xs">
                        <Sparkles className="h-3 w-3 text-brand-300" /> Updated 2m ago
                      </span>
                    </div>
                    <div className="mt-4 space-y-2.5">
                      {[
                        'Revenue is trending 18% above forecast — all 3 deals in this batch were AI-qualified, AI-conversed, and AI-closed.',
                        '3 deals worth $96K are stalled in Negotiation. AI has drafted follow-up messages and sent them automatically.',
                        'Best-performing channel this week: WhatsApp (42% reply rate). AI handles all inbound replies instantly.',
                      ].map((t, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-ink-200">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-white">Notifications</h4>
                      <span className="text-xs text-ink-400">5 new</span>
                    </div>
                    <div className="mt-4 space-y-2.5">
                      {NOTIFICATIONS.map((n, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span
                            className={`mt-1.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                              n.type === 'hot'
                                ? 'bg-red-500/15'
                                : n.type === 'success'
                                  ? 'bg-mint-500/15'
                                  : 'bg-brand-500/15'
                            }`}
                          >
                            <n.icon className={`h-3 w-3 ${
                              n.type === 'hot'
                                ? 'text-red-400'
                                : n.type === 'success'
                                  ? 'text-mint-400'
                                  : 'text-brand-400'
                            }`} />
                          </span>
                          <div className="flex-1">
                            <p className="text-sm text-ink-200">{n.text}</p>
                            <p className="text-xs text-ink-500">{n.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-white">AI Tasks</h4>
                      <span className="text-xs text-ink-400">3 pending</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      {[
                        { task: 'Follow up with Acme Corp', due: '10 min', type: 'AI auto', priority: 'high' },
                        { task: 'Send proposal to Globex', due: '1 hr', type: 'AI drafting', priority: 'medium' },
                        { task: 'Qualify new leads from Meta Ads', due: '2 hrs', type: 'AI processing', priority: 'low' },
                      ].map((t, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`mt-0.5 h-4 w-4 rounded-full border-2 ${
                            t.priority === 'high' ? 'border-red-400/50' : t.priority === 'medium' ? 'border-yellow-400/50' : 'border-mint-400/50'
                          }`} />
                          <div className="flex-1">
                            <p className="text-sm text-ink-200">{t.task}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-xs text-ink-500">{t.due}</span>
                              <span className="inline-flex items-center gap-1 rounded-md bg-brand-500/10 px-1.5 py-0.5 text-[10px] text-brand-300">
                                <Bot className="h-3 w-3" />
                                {t.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RevenueChart() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const recurring = [42, 48, 55, 52, 64, 72, 88];
  const onetime = [28, 35, 30, 44, 38, 52, 60];
  const max = 100;

  return (
    <div className="mt-5">
      <div className="flex h-44 items-end gap-2">
        {months.map((m, i) => (
          <div key={m} className="flex flex-1 flex-col items-center gap-1.5">
            <div className="flex h-36 w-full items-end justify-center gap-1">
              <div
                className="w-1/2 origin-bottom rounded-t-md bg-gradient-to-t from-brand-600 to-brand-400"
                style={{ height: `${(recurring[i] / max) * 100}%`, animation: 'bar-grow 1.2s cubic-bezier(0.22, 1, 0.36, 1) both', animationDelay: `${i * 80}ms` }}
              />
              <div
                className="w-1/2 origin-bottom rounded-t-md bg-gradient-to-t from-accent-600 to-accent-400"
                style={{ height: `${(onetime[i] / max) * 100}%`, animation: 'bar-grow 1.2s cubic-bezier(0.22, 1, 0.36, 1) both', animationDelay: `${i * 80 + 60}ms` }}
              />
            </div>
            <span className="text-xs text-ink-400">{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
