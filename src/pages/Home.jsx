import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead.jsx'
import DotGrid from '../components/DotGrid.jsx'
import GoldRule from '../components/GoldRule.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import ProductCard from '../components/ProductCard.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTABanner from '../components/CTABanner.jsx'
import { PRODUCTS } from '../data/products.js'
import { SERVICES } from '../data/services.js'
import { WORK } from '../data/work.js'

const WORK_PREVIEW = WORK.filter((p) => !p.comingSoon).slice(0, 3)

export default function Home() {
  return (
    <>
      <SEOHead
        title="By MAM Studio — AI Systems & Brand Consulting | NYC"
        description="By MAM Studio is an AI systems and brand consulting studio based in NYC. We build AI implementation programs, productized websites, and brand infrastructure for small businesses and operators."
        canonical="https://bymamstudio.com"
      />

      {/* HERO */}
      <section className="relative min-h-screen bg-navy overflow-hidden flex items-center">
        <DotGrid opacity={0.04} />
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-40"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, #0F1423 40%)',
            clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)',
            backgroundColor: '#141C28',
          }}
          aria-hidden="true"
        />
        <div className="absolute left-0 top-1/4 w-1 bg-gold opacity-60" style={{ height: '60%' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full">
          <div
            className="max-w-2xl"
            style={{
              animation: 'fadeInUp 0.6s ease both',
            }}
          >
            <SectionLabel>BY MAM STUDIO · AVOREN GROUP · NYC</SectionLabel>

            <h1 className="font-display font-semibold text-white leading-tight mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
              <span
                className="block"
                style={{ animationDelay: '0.2s', animation: 'fadeInUp 0.5s ease both 0.2s' }}
              >
                AI Systems &
              </span>
              <span
                className="block text-gold"
                style={{ animationDelay: '0.3s', animation: 'fadeInUp 0.5s ease both 0.3s' }}
              >
                Brand Consulting
              </span>
            </h1>

            <GoldRule width="280px" className="mb-6" />

            <p
              className="font-body text-stone text-lg leading-relaxed mb-8 max-w-lg"
              style={{ animation: 'fadeInUp 0.5s ease both 0.5s' }}
            >
              We implement AI infrastructure for businesses that are serious about operating differently — and build the brand systems to support it.
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={{ animation: 'fadeInUp 0.5s ease both 0.7s' }}
            >
              <Link
                to="/services"
                className="bg-gold text-ink font-body font-semibold px-7 py-3 rounded transition-all duration-200 hover:bg-goldlt"
              >
                View Our Services
              </Link>
              <Link
                to="/assessment"
                className="border border-gold text-gold font-body px-7 py-3 rounded transition-all duration-200 hover:bg-gold/10"
              >
                Take the AI Assessment
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* STATS BAR */}
      <div className="bg-surface border-t border-gold/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '5', label: 'Service Tiers' },
              { num: '4', label: 'Playbooks' },
              { num: 'NYC-Based', label: 'Staten Island, NY' },
              { num: 'Remote', label: 'Ready' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-gold font-semibold text-2xl">{stat.num}</p>
                <p className="font-mono text-slate mt-1" style={{ fontSize: '11px' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT WE DO */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionLabel>WHAT WE BUILD</SectionLabel>
        <h2 className="font-display text-white font-semibold mb-12" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.625rem)' }}>
          AI Infrastructure. Brand Systems. Built to Run.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              tag: 'SYSTEMS OVER TASKS',
              body: 'Every engagement produces a reusable operating system, not a one-time deliverable. Built to run without us.',
            },
            {
              tag: 'GOVERNANCE FIRST',
              body: 'AI without governance is liability. Every implementation starts with a charter, ownership matrix, and usage policy.',
            },
            {
              tag: 'OPERATOR TRAINING INCLUDED',
              body: 'Every system we build gets handed to a trained internal operator. You own it. We document everything.',
            },
          ].map((pillar) => (
            <div key={pillar.tag} className="bg-card border-l-4 border-gold px-6 py-5 rounded-r-lg">
              <p className="font-mono text-gold uppercase mb-3" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>
                {pillar.tag}
              </p>
              <p className="font-body text-stone text-sm leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 px-6 md:px-12 bg-surface/50">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>SERVICES</SectionLabel>
          <h2 className="font-display text-white font-semibold mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.625rem)' }}>
            How We Work Together
          </h2>
          <p className="font-body text-stone mb-12 max-w-xl leading-relaxed">
            Three practice areas. One standard: every engagement delivers a reusable system with a trained internal operator.
          </p>

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-gold uppercase" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>AI SYSTEMS</span>
              <div className="h-px bg-gold/20 flex-1" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.filter((s) => s.group === 'AI Systems').map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-gold uppercase" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>BRAND & WEB</span>
              <div className="h-px bg-gold/20 flex-1" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.filter((s) => s.group === 'Brand' || s.group === 'Web').map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-gold uppercase" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>OPERATIONS SYSTEMS</span>
              <div className="h-px bg-gold/20 flex-1" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.filter((s) => s.group === 'Operations').map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>

          <Link to="/services" className="font-body text-gold hover:text-goldlt transition-colors text-sm">
            View All Services →
          </Link>
        </div>
      </section>

      {/* WORK PREVIEW */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionLabel>PORTFOLIO</SectionLabel>
        <h2 className="font-display text-white font-semibold mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.625rem)' }}>
          Active Work
        </h2>
        <p className="font-body text-stone mb-12 max-w-xl leading-relaxed">
          Select engagements across brand systems, digital experiences, and infrastructure design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {WORK_PREVIEW.map((project) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className="bg-card border border-border rounded-lg p-6 flex flex-col gap-4 hover:border-gold/40 transition-colors group"
            >
              <span
                className="font-mono border w-fit px-2 py-0.5 rounded"
                style={{ fontSize: '10px', color: project.color, borderColor: `${project.color}44` }}
              >
                {project.category}
              </span>
              <h3 className="font-display text-warm text-lg font-semibold leading-snug group-hover:text-white transition-colors">
                {project.name}
              </h3>
              <p className="font-body text-stone text-sm leading-relaxed flex-1">{project.subtitle}</p>
              <span className="font-mono text-gold group-hover:text-goldlt transition-colors" style={{ fontSize: '11px' }}>
                View Case →
              </span>
            </Link>
          ))}
        </div>
        <Link to="/work" className="font-body text-gold hover:text-goldlt transition-colors text-sm">
          View Full Portfolio →
        </Link>
      </section>

      {/* PRODUCT CATALOG */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionLabel>CATALOG</SectionLabel>
        <h2 className="font-display text-white font-semibold mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.625rem)' }}>
          Self-Implement with Our Playbooks
        </h2>
        <p className="font-body text-stone mb-12 max-w-xl leading-relaxed">
          Every service methodology is available as a standalone product — professionally designed PDFs you can implement yourself.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
        <Link to="/products" className="font-body text-gold hover:text-goldlt transition-colors text-sm">
          Browse Full Catalog →
        </Link>
      </section>

      {/* ASSESSMENT CTA */}
      <section className="relative bg-ink py-24 px-6 md:px-12 overflow-hidden" style={{ borderTop: '1px solid #C9A84C33', borderBottom: '1px solid #C9A84C33' }}>
        <DotGrid opacity={0.05} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-white font-semibold mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.375rem)' }}>
            Not Sure Where to Start?
          </h2>
          <p className="font-body text-stone text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Take the free AI Readiness Assessment. 18 questions. A Claude-powered personalized plan specific to your role, your gaps, and your 90-day goals.
          </p>
          <Link
            to="/assessment"
            className="inline-block bg-gold text-ink font-body font-semibold px-10 py-4 rounded text-lg transition-all duration-200 hover:bg-goldlt mb-4"
          >
            Take the Free Assessment
          </Link>
          <p className="font-mono text-slate" style={{ fontSize: '10px' }}>
            Free · No account required · Powered by Claude AI
          </p>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionLabel>WHO THIS IS FOR</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Marketing Directors & Growth Leads',
              body: 'You need AI-powered marketing systems that produce copy, campaigns, and conversion work at scale — without additional headcount.',
            },
            {
              title: 'HR Leaders & People Operations',
              body: 'You are being asked to standardize, automate, and govern HR processes. Our frameworks have been deployed in enterprise COE environments.',
            },
            {
              title: 'Operators, Founders & Consultants',
              body: 'You build things and run things. AI should be operational infrastructure, not a productivity trick. We build it that way.',
            },
          ].map((card) => (
            <div key={card.title} className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-warm text-lg font-semibold mb-3">{card.title}</h3>
              <p className="font-body text-stone text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NYC + REMOTE */}
      <section className="py-24 px-6 md:px-12 bg-surface/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-white font-semibold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              Based in NYC. Working Everywhere.
            </h2>
            <p className="font-body text-stone leading-relaxed">
              By MAM Studio is founded and operated in the New York City metro area, with remote delivery across the US. We work with local businesses in NYC and NJ for in-person engagements and with clients nationally for full remote programs.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { stat: 'NYC Metro', label: 'In-person available' },
              { stat: 'Remote US', label: 'Full delivery' },
              { stat: 'Staten Island', label: 'NY · HQ location' },
            ].map((item) => (
              <div key={item.stat} className="text-center bg-card border border-border rounded-lg p-5">
                <p className="font-display text-gold font-semibold text-lg">{item.stat}</p>
                <p className="font-mono text-slate mt-1" style={{ fontSize: '10px' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to build your AI infrastructure?"
        subheading="Start with a free assessment or book a discovery call."
        ctaText="Book a Discovery Call"
        ctaHref="mailto:hello@bymamstudio.com?subject=Discovery Call Request"
      />
    </>
  )
}
