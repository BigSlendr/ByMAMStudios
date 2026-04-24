import SEOHead from '../components/SEOHead.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import GoldRule from '../components/GoldRule.jsx'
import CTABanner from '../components/CTABanner.jsx'

const VENTURES = [
  { name: "Avédon Collection", category: 'Streetwear', desc: 'Modern streetwear with bold design language and brand-led storytelling.' },
  { name: 'MT Mug', category: 'Coffee / Lifestyle', desc: 'NYC borough-inspired coffee brand and lifestyle storefront.' },
  { name: 'Staten News', category: 'Media / Substack', desc: 'Weekly coverage across sports, tech, and finance — built for clarity and momentum.' },
  { name: 'Virelian', category: 'Press Credentialing', desc: 'Press credentialing platform for independent journalists and content creators.' },
  { name: 'Card Safe HQ', category: 'TCG Platform', desc: 'Card collection platform for trading card game enthusiasts and collectors.' },
  { name: 'By MAM Studio', category: 'Brand + Web Consultancy', desc: 'AI systems consulting, brand architecture, and productized website builds.' },
]

export default function About() {
  return (
    <>
      <SEOHead
        title="About By MAM Studio — AI Systems & Brand Consulting"
        description="By MAM Studio is the consulting and products practice of Michael A. Marino — AI systems architect, HR COE leader at New York Life, and multi-venture founder based in Staten Island, New York."
        canonical="https://bymamstudio.com/about"
      />

      <div className="bg-navy border-b border-border py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>ABOUT THE STUDIO</SectionLabel>
          <h1 className="font-display text-white font-semibold mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            About By MAM Studio
          </h1>
          <h2 className="font-display text-stone font-normal" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}>
            Built by a practitioner. Not a theorist.
          </h2>
        </div>
      </div>

      {/* BRAND STORY */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-body text-stone leading-relaxed mb-5">
              By MAM Studio is the consulting and products practice of Michael A. Marino — a multi-venture founder, systems architect, and budgeting and accounting professional based in Staten Island, New York.
            </p>
            <p className="font-body text-stone leading-relaxed mb-5">
              Michael's day job is at New York Life Insurance Company, where he leads the HR Coda Standardization and CI Support program across seven Centers of Excellence — a role that produced the governance frameworks, COE deployment models, and knowledge hub architecture that appear in the By MAM Studio product catalog.
            </p>
            <p className="font-body text-stone leading-relaxed mb-5">
              The Avoren Group is Michael's holding structure — spanning ventures in streetwear (Avédon Collection), coffee (MT Mug), media (Staten News), press credentialing (Virelian), and the Card Safe HQ card collection platform. The AI systems, brand infrastructure, and operational architecture built across those ventures became the source material for every product and service By MAM Studio offers.
            </p>
            <p className="font-body text-stone leading-relaxed">
              Nothing in this catalog is theoretical. Every framework has been deployed. Every system has been tested in an operating environment.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                tag: 'SYSTEMS FIRST',
                body: 'We build operating systems, not tactics. Every product and engagement is designed to run repeatedly and compound over time.',
              },
              {
                tag: 'EARNED AUTHORITY',
                body: 'No credentials theater. Every claim is backed by deployment in real operating environments. We show the work.',
              },
              {
                tag: 'OPERATOR TRANSFER',
                body: 'Every system we build gets handed to a trained internal operator with full documentation. You own it completely.',
              },
            ].map((card) => (
              <div key={card.tag} className="bg-card border-l-4 border-gold px-6 py-5 rounded-r-lg">
                <p className="font-mono text-gold uppercase mb-2" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>
                  {card.tag}
                </p>
                <p className="font-body text-stone text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldRule />

      {/* VENTURES */}
      <section className="py-24 px-6 md:px-12 bg-surface/40">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>THE AVOREN GROUP ECOSYSTEM</SectionLabel>
          <h2 className="font-display text-white font-semibold mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            The Operating Lab
          </h2>
          <p className="font-body text-stone mb-12 max-w-xl leading-relaxed">
            By MAM Studio's methodologies are stress-tested across the Avoren Group's active ventures before they become products or services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VENTURES.map((venture) => (
              <div key={venture.name} className="bg-card border border-border rounded-lg p-6">
                <span className="font-mono text-gold border border-gold/30 px-2 py-0.5 rounded text-xs mb-3 inline-block" style={{ fontSize: '10px' }}>
                  {venture.category}
                </span>
                <h3 className="font-display text-warm text-lg font-semibold mb-2">{venture.name}</h3>
                <p className="font-body text-stone text-sm leading-relaxed">{venture.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to work with the studio?"
        subheading="Start with a free AI assessment or book a discovery call to discuss your project."
        ctaText="Book a Discovery Call"
        ctaHref="mailto:hello@bymamstudio.com?subject=Discovery Call Request"
      />
    </>
  )
}
