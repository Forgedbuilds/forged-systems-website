'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

export default function CustomBuild() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'var(--forge-dark)' }}
    >
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,26,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          <motion.p variants={fadeUpVariant} className="section-label mb-6">
            // HOW WE PRICE
          </motion.p>

          <motion.h2
            variants={fadeUpVariant}
            className="mb-6 leading-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: 'var(--forge-text)',
            }}
          >
            EVERY SYSTEM IS CUSTOM-BUILT.
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            className="mb-12 max-w-2xl text-lg leading-relaxed"
            style={{ color: 'var(--forge-muted)' }}
          >
            We don't sell packages. We diagnose your specific revenue leak and build the exact
            system to fix it. Pricing is scoped per engagement based on complexity and revenue
            impact.
          </motion.p>

          <motion.div variants={fadeUpVariant}>
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="shimmer-btn group inline-flex items-center gap-3 px-10 py-5 rounded text-white font-medium text-base"
              style={{
                background:
                  'linear-gradient(90deg, var(--forge-orange), var(--forge-gold), var(--forge-orange))',
                backgroundSize: '200% auto',
                fontFamily: 'var(--font-body)',
              }}
              data-cursor="cta"
            >
              Book a Discovery Call — we'll map your revenue leak and tell you exactly what it
              would cost to fix it.
              <ArrowRight
                size={16}
                className="shrink-0 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
