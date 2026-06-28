import { useEffect, useState } from 'react';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Why CRMs Fail', href: '#problem' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'AI Ads', href: '#ads' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Enterprise', href: '#enterprise' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-px-wide flex h-[var(--header-h)] items-center justify-between">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient shadow-glow">
            <Sparkles className="h-5 w-5 text-white" />
            <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Nexora<span className="text-brand-400"> AI</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.slice(0, 6).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#enterprise"
            className="ml-1 inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-ink-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            More <ChevronDown className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 xl:flex">
          <a href="#" className="text-sm font-semibold text-ink-200 transition-colors hover:text-white">
            Sign in
          </a>
          <a href="#pricing" className="btn-primary">
            Start Free Trial
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`xl:hidden overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-px flex flex-col gap-1 py-5">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-ink-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <a href="#" className="btn-ghost w-full" onClick={() => setOpen(false)}>
              Sign in
            </a>
            <a href="#pricing" className="btn-primary w-full" onClick={() => setOpen(false)}>
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
