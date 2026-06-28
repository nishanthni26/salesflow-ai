import { Shield, Server, Clock, Network, Lock, Users, Fingerprint, FileCheck, Globe, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const TRUSTS = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'SOC 2 Type II certified, ISO 27001 compliant, GDPR-ready, and end-to-end encryption for all data.',
    tags: ['SOC 2', 'ISO 27001', 'GDPR'],
  },
  {
    icon: Server,
    title: '99.9% Uptime SLA',
    desc: 'Multi-region deployment with automatic failover, daily backups, and sub-50ms response times globally.',
    tags: ['Multi-region', 'Auto-failover', 'SLA-backed'],
  },
  {
    icon: Network,
    title: 'API-First Architecture',
    desc: 'RESTful API with comprehensive webhooks, GraphQL support, and OpenAPI documentation for developers.',
    tags: ['REST API', 'Webhooks', 'GraphQL'],
  },
  {
    icon: Lock,
    title: 'Role-Based Access Control',
    desc: 'Granular permissions at every level — from user to department to enterprise. Full audit trail.',
    tags: ['RBAC', 'Audit Trail', 'SSO/SAML'],
  },
  {
    icon: Users,
    title: 'Multi-Tenant Architecture',
    desc: 'Complete data isolation between tenants. Each organization gets dedicated encryption keys.',
    tags: ['Data Isolation', 'Encryption Keys', 'Tenant Vault'],
  },
  {
    icon: Globe,
    title: 'Enterprise Scalability',
    desc: 'Auto-scaling infrastructure that handles millions of leads without a single performance dip.',
    tags: ['Auto-scale', 'Millions of leads', 'Zero latency'],
  },
];

export default function EnterpriseTrust() {
  return (
    <section id="enterprise" className="relative py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-500/8 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-accent-500/8 blur-[140px]" />
      </div>

      <div className="container-px-wide">
        <SectionHeading
          eyebrow="Enterprise Trust"
          title={
            <>
              Built for{' '}
              <span className="gradient-text-brand">enterprise scale</span>
            </>
          }
          description="Enterprise-grade infrastructure, security, and compliance that meets the demands of the world's largest organizations."
        />

        {/* Trust grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRUSTS.map((t, i) => (
            <div
              key={t.title}
              className="reveal glass-card glass-hover group relative overflow-hidden p-7"
              data-reveal-delay={i * 80}
            >
              {/* Hover gradient */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-brand-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 border border-brand-400/20">
                    <t.icon className="h-5 w-5 text-brand-300" />
                  </div>
                  <div className="flex gap-1.5">
                    {t.tags.map((tag) => (
                      <span key={tag} className="chip text-[10px] text-ink-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white group-hover:text-brand-200 transition-colors">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{t.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-brand-300 group-hover:gap-2 transition-all">
                  Learn more
                  <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div className="reveal mt-16 flex flex-wrap items-center justify-center gap-4">
          {[
            'SOC 2 Type II',
            'ISO 27001',
            'GDPR Compliant',
            'HIPAA Ready',
            'PCI DSS',
            'CCPA Compliant',
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-ink-300"
            >
              <FileCheck className="h-4 w-4 text-mint-400" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
