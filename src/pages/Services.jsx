import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTABanner from '../components/CTABanner.jsx'
import { SERVICES } from '../data/services.js'

const GROUPS = ['All', 'AI Systems', 'Brand', 'Web', 'Operations', 'Retainer']

const PROCESS_PHASES = [
  { step: '01', title: 'Discovery', desc: 'We map your current state — workflows, tools, gaps, and goals. No assumptions.' },
  { step: '02', title: 'Foundation', desc: 'Governance first. Every engagement installs the charter, ownership matrix, and policy before building anything.' },
  { step: '03', title: 'Implementation', desc: 'We build, test, and refine each system against your real content, context, and standards.' },
  { step: '04', title: 'Handoff', desc: 'One trained internal operator, full documentation, and a maintenance protocol. You own it completely.' },
]

export default function Services() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.group === filter)

  return (
    <>
      <SEOHead
        title="Services | By MAM Studio | NYC"
        description="AI implementation, brand systems, digital experiences, and service website modernization. Fixed scope, fixed deliverables, trained internal operator included."
        canonical="https://bymamstudio.com/services"
      />

      <div className="bg-navy border-b border-border py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 font-mono text-slate mb-4" style={{ fontSize: '11px' }}>
            <Link to="/" className="hover:text-stone transition-colors">Home</Link>
            <span>/</span>
            <span className="text-stone">Services</span>
          </div>
          <SectionLabel>OUR SERVICES</SectionLabel>
          <h1 className="font-display text-white font-semibold" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Our Services
          </h1>
          <p className="font-body text-stone mt-4 max-w-2xl leading-relaxed">
            Three practice areas — AI Systems, Brand & Web, and Operations Systems — with a consistent standard: every engagement delivers a reusable system with a trained internal operator and full documentation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex gap-2 flex-wrap">
          {GROUPS.map((g) => (
            <button
              key={g}
              onClick={() => setFilter(g)}
              className={`font-mono px-4 py-1.5 rounded border transition-all ${
                filter === g
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-border/60 text-slate hover:text-stone hover:border-stone/50'
              }`}
              style={{ fontSize: '11px' }}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-surface/50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>HOW WE WORK</SectionLabel>
          <h2 className="font-display text-white font-semibold mb-12" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            Every Engagement Follows the Same Four Phases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROCESS_PHASES.map((phase) => (
              <div key={phase.step} className="bg-card border border-border rounded-lg p-6">
                <span className="font-mono text-gold text-2xl font-bold block mb-3">{phase.step}</span>
                <h3 className="font-body text-warm font-semibold mb-2">{phase.title}</h3>
                <p className="font-body text-stone text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Not sure which service fits?"
        subheading="Take the free AI Assessment — 18 questions, a Claude-powered analysis, and specific service recommendations matched to your situation."
        ctaText="Take the Free Assessment"
        ctaHref="/assessment"
      />
    </>
  )
}
