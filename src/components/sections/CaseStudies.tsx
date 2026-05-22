'use client';

import { motion } from 'framer-motion';
import { CASE_STUDIES } from '@/lib/constants';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-16 lg:py-32"
      style={{ background: 'var(--forge-black)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-10 lg:mb-16"
        >
          <motion.p variants={fadeUpVariant} className="section-label mb-4">
            // RESULTS IN THE FIELD
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 5vw, 4rem)',
              color: 'var(--forge-text)',
            }}
          >
            REAL SYSTEMS. REAL NUMBERS.
          </motion.h2>
        </motion.div>

        {/* Cards — single column always, 2-col on lg */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariant}
              transition={{ delay: i * 0.12 }}
              className="glass-panel rounded-lg p-6 sm:p-8 flex flex-col"
              style={{ border: '1px solid var(--forge-border)' }}
            >
              {/* Company + badge — stack on very small screens */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 sm:mb-8 gap-3">
                <h3
                  className="text-xl sm:text-2xl leading-tight"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--forge-text)' }}
                >
                  {cs.company}
                </h3>
                <span
                  className="self-start px-3 py-1 rounded text-xs shrink-0"
                  style={{
                    background: 'var(--forge-glow)',
                    border: '1px solid var(--forge-orange)',
                    color: 'var(--forge-orange)',
                    fontFamily: 'var(--font-mono)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cs.industry}
                </span>
              </div>

              {/* Rows */}
              {[
                { label: 'PROBLEM', text: cs.problem },
                { label: 'SOLUTION', text: cs.solution },
                { label: 'RESULT', text: cs.result },
              ].map((row) => (
                <div key={row.label} className="border-accent pl-4 mb-5">
                  <p
                    className="text-xs tracking-widest mb-2 uppercase"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--forge-orange)' }}
                  >
                    {row.label}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: row.label === 'RESULT' ? 'var(--forge-success)' : 'var(--forge-muted)',
                      fontWeight: row.label === 'RESULT' ? 500 : 400,
                    }}
                  >
                    {row.text}
                  </p>
                </div>
              ))}

              {/* Quote */}
              <blockquote
                className="mt-auto pt-5 text-sm italic leading-relaxed"
                style={{
                  color: 'var(--forge-muted)',
                  borderTop: '1px solid var(--forge-border)',
                }}
              >
                {cs.quote}
              </blockquote>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="text-center mt-10 sm:mt-12"
        >
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-4 rounded font-medium text-white text-sm sm:text-base"
            style={{
              background: 'linear-gradient(90deg, var(--forge-orange), var(--forge-gold))',
              fontFamily: 'var(--font-body)',
            }}
          >
            Get Your Own Case Study →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
