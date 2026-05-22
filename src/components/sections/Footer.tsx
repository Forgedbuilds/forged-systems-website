'use client';

import { ExternalLink } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="py-12 border-t"
      style={{ background: 'var(--forge-dark)', borderColor: 'var(--forge-border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo + tagline */}
          <div>
            <div
              className="text-2xl tracking-widest mb-2"
              style={{
                fontFamily: 'var(--font-display)',
                background: 'linear-gradient(90deg, var(--forge-orange), var(--forge-gold))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              FORGED SYSTEMS
            </div>
            <p
              className="text-xs tracking-widest"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--forge-muted)' }}
            >
              Built to win.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm transition-colors duration-200"
                style={{ color: 'var(--forge-muted)', fontFamily: 'var(--font-body)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--forge-text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--forge-muted)')}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Contact + LinkedIn */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="mailto:raeez@forged-system.co.za"
              className="text-sm transition-colors duration-200"
              style={{ color: 'var(--forge-muted)', fontFamily: 'var(--font-body)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--forge-orange)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--forge-muted)')}
            >
              raeez@forged-system.co.za
            </a>
            <a
              href="https://linkedin.com/company/forged-systems"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: 'var(--forge-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--forge-orange)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--forge-muted)')}
              aria-label="Forged Systems on LinkedIn"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Legal */}
        <div
          className="mt-10 pt-6 text-center text-xs border-t"
          style={{
            borderColor: 'var(--forge-border)',
            color: 'var(--forge-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          © {year} Forged Systems (Pty) Ltd · Cape Town, South Africa · All rights reserved
        </div>
      </div>
    </footer>
  );
}
