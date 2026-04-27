import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../data/navigation.js'

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/30 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="font-display text-gold text-xl font-semibold mb-2">By MAM Studio</p>
            <p className="font-mono text-stone text-xs tracking-wide mb-4">
              AI Systems & Brand Consulting · NYC
            </p>
            <p className="font-body text-stone text-sm leading-relaxed">
              © {new Date().getFullYear()} By MAM Studio. All rights reserved.
            </p>
            <p className="font-body text-slate text-xs mt-2">
              A venture under the{' '}
              <a
                href="https://avorengroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-gold transition-colors"
              >
                Avoren Group
              </a>
            </p>
          </div>

          <div>
            <p className="font-mono text-gold text-xs tracking-widest uppercase mb-4">Navigation</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-stone text-sm hover:text-warm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/assessment"
                  className="font-body text-stone text-sm hover:text-warm transition-colors"
                >
                  Assessment
                </Link>
              </li>
              <li>
                <Link
                  to="/services/operations-systems"
                  className="font-body text-stone text-sm hover:text-warm transition-colors"
                >
                  Operations Systems
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-gold text-xs tracking-widest uppercase mb-4">Contact</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@bymamstudio.com"
                  className="font-body text-stone text-sm hover:text-warm transition-colors"
                >
                  hello@bymamstudio.com
                </a>
              </li>
              <li>
                <a
                  href="https://bymamstudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-stone text-sm hover:text-warm transition-colors"
                >
                  bymamstudio.com
                </a>
              </li>
              <li>
                <a
                  href="https://avorengroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-stone text-sm hover:text-warm transition-colors"
                >
                  AvorenGroup.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MMStudioCreations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-stone text-sm hover:text-warm transition-colors"
                >
                  github.com/MMStudioCreations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
