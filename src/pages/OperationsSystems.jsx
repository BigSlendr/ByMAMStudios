import { Link } from 'react-router-dom'
import { TableCellsIcon } from '@heroicons/react/24/outline'
import SEOHead from '../components/SEOHead.jsx'
import GoldRule from '../components/GoldRule.jsx'
import SectionLabel from '../components/SectionLabel.jsx'

const SERVICE_COLOR = '#3E9B7B'

const PAIN_POINTS = [
  'Nobody knows where the most recent version of anything is',
  'New hires take weeks to find their footing',
  'Tasks live in emails, Slack, and spreadsheets simultaneously',
  'Every team member has their own system and nobody else can navigate it',
  'Work gets duplicated constantly',
]

const DELIVERABLES = [
  'Hub-and-spoke workspace architecture',
  'Role-based permissions and document ownership',
  'Template libraries and naming conventions',
  'Cross-department governance frameworks',
  'Onboarding documentation for new team members',
  'Training session included',
]

const PRICING_TIERS = [
  {
    name: 'Systems Audit',
    price: '$1,500',
    sub: null,
    items: [
      '90-minute discovery session',
      'Full review of your current doc and tool stack',
      'Gap analysis and governance recommendations',
      'Written roadmap for a structured buildout',
      'Delivered within 5 business days',
    ],
  },
  {
    name: 'Foundation Buildout',
    price: 'Starting at $4,000',
    sub: null,
    featured: true,
    items: [
      'Everything in the Systems Audit',
      'Custom Coda workspace architecture',
      'Template library, role permissions, naming standards',
      'Two weeks of async support post-launch',
      'Team training session included',
    ],
  },
  {
    name: 'Governance Retainer',
    price: '$750–$1,200',
    sub: 'per month',
    items: [
      'Monthly workspace hygiene review',
      'New template builds as your team grows',
      'Quarterly governance audit',
      'Ongoing async access',
    ],
  },
]

export default function OperationsSystems() {
  return (
    <>
      <SEOHead
        title="Operations Systems | By MAM Studio"
        description="We introduce and set up Coda for growing teams — replacing scattered docs, spreadsheets, and Slack threads with one governed system. Free discovery call for teams already using Coda."
        canonical="https://bymamstudio.com/services/operations-systems"
      />

      {/* HERO */}
      <section className="bg-navy border-b border-border py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 font-mono text-slate mb-8" style={{ fontSize: '11px' }}>
            <Link to="/" className="hover:text-stone transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-stone transition-colors">Services</Link>
            <span>/</span>
            <span className="text-stone">Operations Systems</span>
          </div>

          <span
            className="font-mono text-xs border px-2 py-0.5 rounded mb-4 inline-flex items-center gap-1.5"
            style={{ color: SERVICE_COLOR, borderColor: `${SERVICE_COLOR}50`, fontSize: '10px' }}
          >
            <TableCellsIcon className="w-3 h-3" />
            OPERATIONS
          </span>

          <h1
            className="font-display text-white font-semibold mb-4 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            One place for everything your team{' '}
            <span style={{ color: SERVICE_COLOR }}>thinks, tracks, and builds.</span>
          </h1>

          <p className="font-body text-stone text-lg leading-relaxed max-w-2xl mb-8">
            We introduce and set up Coda for growing teams — replacing scattered docs, spreadsheets,
            and Slack threads with one governed system.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@bymamstudio.com?subject=Operations Systems — Book a Free Call"
              className="font-body font-semibold px-7 py-3 rounded transition-all duration-200 text-ink"
              style={{ backgroundColor: SERVICE_COLOR }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Book a Free Call
            </a>
            <a
              href="#pricing"
              className="border border-border text-stone font-body px-7 py-3 rounded transition-all duration-200 hover:border-stone/50 hover:text-warm"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionLabel>THE PROBLEM</SectionLabel>
        <h2
          className="font-display text-white font-semibold mb-12"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.625rem)' }}
        >
          Sound familiar?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAIN_POINTS.map((point, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg px-6 py-5 flex items-start gap-4"
            >
              <span
                className="font-mono text-xs font-bold mt-0.5 flex-shrink-0"
                style={{ color: SERVICE_COLOR }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-body text-stone text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-24 px-6 md:px-12 bg-surface/50">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>DELIVERABLES</SectionLabel>
          <h2
            className="font-display text-white font-semibold mb-12"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.625rem)' }}
          >
            What a governed Coda system looks like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {DELIVERABLES.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-card border border-border rounded-lg px-5 py-4"
              >
                <span className="mt-0.5 flex-shrink-0" style={{ color: SERVICE_COLOR }}>✓</span>
                <p className="font-body text-stone text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO-TRACK SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionLabel>TWO TRACKS</SectionLabel>
        <h2
          className="font-display text-white font-semibold mb-12"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.625rem)' }}
        >
          New to Coda or already using it — we cover both
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="bg-card rounded-lg p-8 flex flex-col gap-4"
            style={{ border: `1px solid ${SERVICE_COLOR}40`, borderTopWidth: '3px', borderTopColor: SERVICE_COLOR }}
          >
            <span
              className="font-mono text-xs font-bold uppercase tracking-widest"
              style={{ color: SERVICE_COLOR, fontSize: '10px' }}
            >
              New to Coda
            </span>
            <h3 className="font-display text-warm text-xl font-semibold">Start fresh, built right.</h3>
            <p className="font-body text-stone text-sm leading-relaxed">
              We start from scratch. One intro call, a custom-built workspace tailored to how your
              team works, and a live walkthrough so your team can use it from day one.
            </p>
            <a
              href="mailto:hello@bymamstudio.com?subject=Operations Systems — New to Coda"
              className="font-mono text-xs mt-auto inline-block transition-colors"
              style={{ color: SERVICE_COLOR, fontSize: '11px' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Get Started →
            </a>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 flex flex-col gap-4">
            <span
              className="font-mono text-xs font-bold uppercase tracking-widest text-gold"
              style={{ fontSize: '10px' }}
            >
              Already Using Coda
            </span>
            <h3 className="font-display text-warm text-xl font-semibold">Free discovery call first.</h3>
            <p className="font-body text-stone text-sm leading-relaxed">
              Book a free discovery call. We assess your current setup, identify structural gaps,
              and give you a clear picture of what can be improved before any commitment.
            </p>
            <a
              href="mailto:hello@bymamstudio.com?subject=Operations Systems — Coda Discovery Call"
              className="font-mono text-gold hover:text-goldlt transition-colors text-xs mt-auto inline-block"
              style={{ fontSize: '11px' }}
            >
              Book Free Call →
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 md:px-12 bg-surface/50">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>PRICING</SectionLabel>
          <h2
            className="font-display text-white font-semibold mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.625rem)' }}
          >
            How we work
          </h2>
          <p className="font-body text-stone mb-12 max-w-xl leading-relaxed">
            Three engagement tiers — from a standalone audit to a full buildout to ongoing governance support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className="bg-card rounded-lg p-6 flex flex-col gap-4"
                style={{
                  border: tier.featured ? `1px solid ${SERVICE_COLOR}` : '1px solid #1E3060',
                  borderTopWidth: '3px',
                  borderTopColor: tier.featured ? SERVICE_COLOR : '#1E3060',
                  boxShadow: tier.featured ? `0 8px 32px ${SERVICE_COLOR}18` : undefined,
                }}
              >
                {tier.featured && (
                  <span
                    className="font-mono text-xs font-bold uppercase tracking-widest self-start px-2 py-0.5 rounded"
                    style={{ color: SERVICE_COLOR, backgroundColor: `${SERVICE_COLOR}18`, fontSize: '9px' }}
                  >
                    Most Popular
                  </span>
                )}
                <div>
                  <p className="font-mono text-slate mb-1" style={{ fontSize: '10px', letterSpacing: '0.12em' }}>
                    {tier.name.toUpperCase()}
                  </p>
                  <p
                    className="font-display font-semibold text-2xl"
                    style={{ color: tier.featured ? SERVICE_COLOR : '#C9A84C' }}
                  >
                    {tier.price}
                  </p>
                  {tier.sub && (
                    <p className="font-mono text-slate" style={{ fontSize: '10px' }}>{tier.sub}</p>
                  )}
                </div>

                <GoldRule />

                <ul className="space-y-2 flex-1">
                  {tier.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-stone text-xs leading-relaxed">
                      <span className="mt-0.5 flex-shrink-0" style={{ color: tier.featured ? SERVICE_COLOR : '#C9A84C' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:hello@bymamstudio.com?subject=Operations Systems — ${tier.name}`}
                  className="block w-full text-center font-body text-sm font-semibold py-3 rounded transition-all duration-200 mt-2"
                  style={
                    tier.featured
                      ? { backgroundColor: SERVICE_COLOR, color: '#0A0C10' }
                      : { border: '1px solid #1E3060', color: '#7A7570' }
                  }
                  onMouseEnter={(e) => {
                    if (tier.featured) e.currentTarget.style.opacity = '0.85'
                    else { e.currentTarget.style.borderColor = '#C8C0B4'; e.currentTarget.style.color = '#C8C0B4' }
                  }}
                  onMouseLeave={(e) => {
                    if (tier.featured) e.currentTarget.style.opacity = '1'
                    else { e.currentTarget.style.borderColor = '#1E3060'; e.currentTarget.style.color = '#7A7570' }
                  }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIAL BAR */}
      <section className="py-12 px-6 md:px-12 border-t border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4 max-w-3xl">
            <div
              className="w-1 self-stretch rounded flex-shrink-0"
              style={{ backgroundColor: SERVICE_COLOR, minHeight: '100%' }}
              aria-hidden="true"
            />
            <p className="font-body text-stone text-sm leading-relaxed">
              <span className="text-warm font-semibold">Our framework comes directly from co-leading a Coda standardization program</span>{' '}
              across 7 departments at a Fortune 500 financial services company.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>GET STARTED</SectionLabel>
          <h2
            className="font-display text-white font-semibold mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.375rem)' }}
          >
            Not sure where to start?
          </h2>
          <p className="font-body text-stone text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Book a free 20-minute intro call. We'll tell you exactly what we'd build for your team
            and what it would cost.
          </p>
          <a
            href="mailto:hello@bymamstudio.com?subject=Operations Systems — Book a Free Call"
            className="inline-block font-body font-semibold px-10 py-4 rounded text-lg transition-all duration-200 mb-4 text-ink"
            style={{ backgroundColor: SERVICE_COLOR }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Book a Free Call
          </a>
          <p className="font-mono text-slate block" style={{ fontSize: '10px' }}>
            Free · No commitment · 20 minutes
          </p>
        </div>
      </section>
    </>
  )
}
