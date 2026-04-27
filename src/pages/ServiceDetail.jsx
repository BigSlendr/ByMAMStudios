import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead.jsx'
import GoldRule from '../components/GoldRule.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import NotFound from './NotFound.jsx'
import { SERVICES } from '../data/services.js'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICES.find((s) => s.slug === slug)
  const [activeTab, setActiveTab] = useState('overview')

  if (!service) return <NotFound />

  const mailtoSubject = encodeURIComponent(`Discovery Call: ${service.name}`)

  const TABS = [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'Our Process' },
    { id: 'deliverables', label: 'Deliverables' },
    { id: 'whofrom', label: "Who It's For" },
    { id: 'faq', label: 'FAQ' },
  ]

  return (
    <>
      <SEOHead
        title={service.seoTitle || `${service.name} | By MAM Studio`}
        description={service.seoDescription || service.description}
        canonical={`https://bymamstudio.com/services/${service.slug}`}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex items-center gap-2 font-mono text-slate mb-8" style={{ fontSize: '11px' }}>
          <Link to="/" className="hover:text-stone transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-stone transition-colors">Services</Link>
          <span>/</span>
          <span className="text-stone">{service.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* LEFT */}
          <div className="lg:col-span-3">
            <span
              className="font-mono text-xs border px-2 py-0.5 rounded mb-4 inline-block"
              style={{ color: service.color, borderColor: `${service.color}50`, fontSize: '10px' }}
            >
              {service.category}
            </span>
            <h1 className="font-display text-white font-semibold mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
              {service.name}
            </h1>
            <p className="font-body text-stone text-lg mb-6">{service.subtitle}</p>
            <p className="font-body text-stone leading-relaxed mb-8">{service.description}</p>

            <h2 className="font-body text-warm font-semibold mb-4">Key Deliverables</h2>
            <ul className="space-y-2 mb-8">
              {service.deliverables.slice(0, 3).map((d, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-stone text-sm leading-relaxed">
                  <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                  {d}
                </li>
              ))}
              {service.deliverables.length > 3 && (
                <li className="font-mono text-slate text-xs pl-5">+ {service.deliverables.length - 3} more — see Deliverables tab</li>
              )}
            </ul>
          </div>

          {/* RIGHT — STICKY CONTACT CARD */}
          <div className="lg:col-span-2">
            <div
              className="bg-card rounded-lg p-6 sticky top-24"
              style={{ border: `1px solid #1E3060`, borderTopWidth: '2px', borderTopColor: service.color }}
            >
              <p className="font-display font-semibold mb-1 text-2xl" style={{ color: service.color }}>
                {service.priceRange}
              </p>
              <p className="font-mono text-slate mb-2" style={{ fontSize: '11px' }}>{service.duration}</p>

              <GoldRule className="my-4" />

              <a
                href={`mailto:hello@bymamstudio.com?subject=${mailtoSubject}`}
                className="block w-full text-center bg-gold text-ink font-body font-semibold py-3 rounded mb-3 hover:bg-goldlt transition-all"
              >
                {service.ctaText || 'Book a Discovery Call'}
              </a>
              <Link
                to="/assessment"
                className="block w-full text-center border border-border text-slate font-body text-sm py-3 rounded hover:text-stone hover:border-stone/50 transition-all"
              >
                Or take the free AI assessment first
              </Link>

              <GoldRule className="my-4" />

              <p className="font-mono text-slate text-center" style={{ fontSize: '11px' }}>
                Questions?{' '}
                <a href="mailto:hello@bymamstudio.com" className="text-gold hover:text-goldlt transition-colors">
                  hello@bymamstudio.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="mt-20">
          <div className="flex gap-1 border-b border-border mb-8 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-mono px-5 py-3 whitespace-nowrap border-b-2 -mb-px transition-colors ${
                  activeTab === tab.id
                    ? 'border-gold text-gold'
                    : 'border-transparent text-slate hover:text-stone'
                }`}
                style={{ fontSize: '12px' }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div className="max-w-2xl">
              <p className="font-body text-stone leading-relaxed mb-6">{service.longDescription}</p>
              <p className="font-body text-stone leading-relaxed">
                Every By MAM Studio engagement ends with a trained internal operator, full documentation, and a maintenance protocol. You don't need us to keep the system running — that's by design.
              </p>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="space-y-4 max-w-2xl">
              {service.process.map((step) => (
                <div key={step.step} className="flex gap-5 bg-card border border-border rounded-lg p-5">
                  <span
                    className="font-mono text-ink text-sm font-bold w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: service.color }}
                  >
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-body text-warm font-semibold text-sm mb-1">{step.title}</h3>
                    <p className="font-body text-stone text-xs leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'deliverables' && (
            <div className="max-w-2xl">
              <ul className="space-y-3">
                {service.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-stone text-sm leading-relaxed bg-card border border-border rounded-lg px-5 py-4">
                    <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'whofrom' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
              {service.whoFor.map((wf) => (
                <div key={wf.title} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-body text-warm font-semibold text-sm mb-3">{wf.title}</h3>
                  <p className="font-body text-stone text-xs leading-relaxed">{wf.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="space-y-4 max-w-2xl">
              {service.faq.map((item) => (
                <details key={item.q} className="bg-card border border-border rounded-lg px-5 py-4 group">
                  <summary className="font-body text-warm font-medium text-sm cursor-pointer list-none flex items-center justify-between">
                    {item.q}
                    <span className="font-mono text-gold group-open:rotate-45 transition-transform text-lg ml-4 flex-shrink-0">+</span>
                  </summary>
                  <p className="font-body text-stone text-sm mt-3 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
