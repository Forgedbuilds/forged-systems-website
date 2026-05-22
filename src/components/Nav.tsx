'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(6,6,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--forge-border)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 group"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span
              className="text-2xl tracking-widest"
              style={{
                background: 'linear-gradient(90deg, var(--forge-orange), var(--forge-gold))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              FORGED SYSTEMS
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--forge-muted)', fontFamily: 'var(--font-body)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--forge-text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--forge-muted)')}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('#booking')}
              className="shimmer-btn px-5 py-2 rounded text-sm font-medium text-white transition-all duration-300"
              style={{
                background:
                  'linear-gradient(90deg, var(--forge-orange), var(--forge-gold), var(--forge-orange))',
                backgroundSize: '200% auto',
                fontFamily: 'var(--font-body)',
              }}
            >
              Book a Call
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded"
            style={{ color: 'var(--forge-text)' }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 flex flex-col gap-1 p-6"
            style={{
              background: 'rgba(6,6,8,0.97)',
              borderBottom: '1px solid var(--forge-border)',
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-3 text-lg font-medium transition-colors duration-200"
                style={{ color: 'var(--forge-text)', fontFamily: 'var(--font-body)' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#booking')}
              className="mt-4 w-full py-3 rounded text-white font-medium text-center"
              style={{
                background: 'linear-gradient(90deg, var(--forge-orange), var(--forge-gold))',
              }}
            >
              Book a Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
