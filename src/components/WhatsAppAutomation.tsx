import { useState, useEffect } from 'react';
import {
  MessageCircle,
  Send,
  Check,
  CheckCheck,
  Phone,
  Video,
  MoreVertical,
  Zap,
  Bot,
  Sparkles,
  TrendingUp,
  Users,
  Clock,
  ArrowRight,
  Star,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const CHAT = [
  { from: 'ai', text: 'Hi there! I noticed you visited our pricing page. Do you have questions about our AI sales platform?', time: '09:41' },
  { from: 'lead', text: 'Hi, yes! Do you support annual billing? We have about 25 sales reps.', time: '09:41' },
  { from: 'ai', text: 'Yes! Annual billing comes with a 20% discount. For 25 seats on Growth, that is $2,975/month. Would you like me to generate a custom quote?', time: '09:42' },
  { from: 'lead', text: 'Yes please! And can we also integrate with WhatsApp for our support team?', time: '09:42' },
  { from: 'ai', text: 'Absolutely! WhatsApp Business API is included. Green-badge verification, broadcast campaigns, and 2-way AI conversations are all available. I have sent the quote and a WhatsApp integration guide to your email.', time: '09:43' },
  { from: 'lead', text: 'That is amazing! Can we schedule a demo for tomorrow?', time: '09:43' },
  { from: 'ai', text: 'Done! I have booked a demo for tomorrow at 2 PM with our Head of Sales. I have also added a calendar invite and a WhatsApp reminder for 30 minutes before the call. Looking forward to seeing you!', time: '09:43' },
];

const STATS = [
  { value: '3.2x', label: 'Higher Reply Rate', icon: TrendingUp },
  { value: '42%', label: 'Avg. Conversion', icon: Star },
  { value: '<8s', label: 'AI Response Time', icon: Clock },
  { value: '24/7', label: 'Always On', icon: Zap },
];

const FEATURES = [
  'WhatsApp Business API with green-badge verification',
  'AI-powered two-way conversations at scale',
  'Broadcast campaigns with smart personalization',
  'Multi-agent handoff and team inbox',
  'Auto-qualification and meeting booking',
  'CRM integration with real-time sync',
];

export default function WhatsAppAutomation() {
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => (prev < CHAT.length ? prev + 1 : CHAT.length));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-mint-500/8 blur-[140px]" />
      </div>

      <div className="container-px-wide">
        <SectionHeading
          eyebrow="WhatsApp-First"
          title={
            <>
              Turn WhatsApp into your{' '}
              <span className="gradient-text-brand">#1 revenue channel</span>
            </>
          }
          description="AI agents hold natural, two-way conversations on WhatsApp at scale — answering questions, qualifying leads, sending quotations, and booking meetings without human intervention."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Stats + Features */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="glass-card glass-hover p-5 text-center transition-all duration-300"
                >
                  <s.icon className="mx-auto h-5 w-5 text-brand-300 mb-2" />
                  <div className="font-display text-3xl font-extrabold gradient-text-brand">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-ink-400">{s.label}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                AI-Powered WhatsApp Features
              </h3>
              <div className="space-y-3">
                {FEATURES.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm text-ink-200">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint-500/15">
                      <Check className="h-3.5 w-3.5 text-mint-400" />
                    </span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a href="#pricing" className="btn-primary">
                <Sparkles className="h-4 w-4" />
                Start WhatsApp AI
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="reveal relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-mint-500/8 blur-3xl animate-pulse" />
            <div className="glass-card overflow-hidden rounded-[2.5rem] p-2 shadow-glow">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1014]">
                {/* Chat header */}
                <div className="flex items-center gap-3 border-b border-white/10 bg-mint-500/10 px-5 py-3.5">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-mint-500/20 text-mint-300">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-white">Nexora AI</div>
                    <div className="flex items-center gap-1 text-xs text-mint-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-mint-400 animate-pulse" />
                      online · AI-powered
                    </div>
                  </div>
                  <Phone className="h-4 w-4 text-ink-400" />
                  <Video className="h-4 w-4 text-ink-400" />
                  <MoreVertical className="h-4 w-4 text-ink-400" />
                </div>

                {/* Chat body */}
                <div className="space-y-3 bg-[#0a1014] px-4 py-5" style={{ minHeight: '420px' }}>
                  {CHAT.slice(0, visibleMessages).map((m, i) => (
                    <div
                      key={i}
                      className={`flex ${m.from === 'ai' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                          m.from === 'ai'
                            ? 'rounded-tl-sm bg-white/10 text-ink-100 border border-white/5'
                            : 'rounded-tr-sm bg-mint-600/90 text-white'
                        }`}
                        style={{ animation: 'fade-up 0.5s ease both' }}
                      >
                        <p className="leading-relaxed">{m.text}</p>
                        <div
                          className={`mt-1 flex items-center justify-end gap-1 text-[10px] ${
                            m.from === 'ai' ? 'text-ink-500' : 'text-white/70'
                          }`}
                        >
                          {m.time}
                          {m.from === 'lead' && <CheckCheck className="h-3 w-3" />}
                          {m.from === 'ai' && (
                            <span className="flex items-center gap-0.5 ml-1">
                              <CheckCheck className="h-3 w-3 text-mint-400" />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Typing indicator */}
                  <div className="flex justify-start">
                    <div className="rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3 border border-white/5">
                      <div className="flex gap-1">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-400" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-400 [animation-delay:200ms]" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-400 [animation-delay:400ms]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input bar */}
                <div className="flex items-center gap-2 border-t border-white/10 bg-[#0d1418] px-3 py-3">
                  <div className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-ink-500">
                    Type a message...
                  </div>
                  <button className="grid h-10 w-10 place-items-center rounded-full bg-mint-500 text-white transition-transform hover:scale-105">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
