'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PRICING_TIERS } from '@/lib/constants';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 lg:py-32"
      style={{ background: 'var(--forge-dark)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUpVariant} className="section-label mb-4">
            // INVESTMENT
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: 'var(--forge-text)',
            }}
          >
            PICK YOUR WEAPON
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: 'var(--forge-muted)' }}
          >
            Every engagement is a fixed-scope project. No retainers. No bloat. You pay for a
            system that generates revenue — not hours.
          </motion.p>
        </motion.div>

        {/* Tier cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {PRICING_TIERS.map((tier, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariant}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-lg p-8 flex flex-col"
              style={{
                background: tier.popular ? 'var(--forge-panel)' : 'rgba(18,18,26,0.5)',
                border: tier.popular
                  ? '2px solid var(--forge-orange)'
                  : '1px solid var(--forge-border)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = tier.popular
                  ? '0 0 50px rgba(255,107,26,0.25)'
                  : '0 0 30px rgba(255,107,26,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded text-xs font-medium"
                  style={{
                    background: 'var(--forge-orange)',
                    color: '#fff',
                    fontFamily: 'var(--font-mono)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              {/* Tier name */}
              <div
                className="mb-2 text-3xl tracking-wider"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--forge-text)' }}
              >
                {tier.name}
              </div>

              {/* Price */}
              <div className="mb-1 flex items-baseline gap-1">
                <span
                  className="text-xs"
                  style={{ color: 'var(--forge-muted)', fontFamily: 'var(--font-mono)' }}
                >
                  From
                </span>
                <span
                  className="text-4xl font-light"
                  style={{ color: 'var(--forge-orange)', fontFamily: 'var(--font-display)' }}
                >
                  {tier.price}
                </span>
              </div>

              {/* Tagline */}
              <p
                className="mb-8 text-xs tracking-widest"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--forge-muted)' }}
              >
                {tier.tagline}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {tier.features.map((feat, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0"
                      style={{ color: 'var(--forge-orange)' }}
                    />
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--forge-text)' }}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-center py-3 rounded font-medium text-sm transition-all duration-300"
                style={{
                  background: tier.popular
                    ? 'linear-gradient(90deg, var(--forge-orange), var(--forge-gold))'
                    : 'transparent',
                  border: tier.popular ? 'none' : '1px solid var(--forge-border)',
                  color: tier.popular ? '#fff' : 'var(--forge-text)',
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={(e) => {
                  if (!tier.popular) {
                    e.currentTarget.style.borderColor = 'var(--forge-orange)';
                    e.currentTarget.style.color = 'var(--forge-orange)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!tier.popular) {
                    e.currentTarget.style.borderColor = 'var(--forge-border)';
                    e.currentTarget.style.color = 'var(--forge-text)';
                  }
                }}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="text-center mt-10 text-xs"
          style={{ color: 'var(--forge-muted)', fontFamily: 'var(--font-mono)' }}
        >
          All prices in USD. Custom scopes available. Book a call to discuss your requirements.
        </motion.p>
      </div>
    </section>
  );
}
