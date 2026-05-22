'use client';

import { motion } from 'framer-motion';
import { SOLUTION_COMPONENTS } from '@/lib/constants';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

export default function Solution() {
  return (
    <section id="solution" className="py-24 lg:py-32" style={{ background: 'var(--forge-dark)' }}>
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
            // THE FORGE SYSTEM
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            className="leading-tight max-w-3xl mx-auto"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: 'var(--forge-text)',
            }}
          >
            FIVE COMPONENTS. ONE REVENUE MACHINE.
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: 'var(--forge-muted)' }}
          >
            Every Forged Systems deployment is built from the same five battle-tested components,
            customised to your business, your ICP, and your growth goals.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SOLUTION_COMPONENTS.map((comp, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariant}
              transition={{ delay: i * 0.1 }}
              className="glass-panel rounded-lg p-8 group"
              style={{
                border: '1px solid var(--forge-border)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                gridColumn: i === 3 ? 'span 1' : undefined,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--forge-orange)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(255,107,26,0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--forge-border)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                className="mb-4 text-xs tracking-widest"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--forge-orange)' }}
              >
                {comp.number}
              </div>
              <h3
                className="mb-4 text-2xl tracking-wide"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--forge-text)' }}
              >
                {comp.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--forge-muted)' }}>
                {comp.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Flow diagram — simplified SVG */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <svg
            viewBox="0 0 600 80"
            className="w-full max-w-2xl"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.line
                key={i}
                x1={60 + i * 120}
                y1="40"
                x2={140 + i * 120}
                y2="40"
                stroke="#ff6b1a"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
              />
            ))}
            {[0, 1, 2, 3, 4].map((i) => (
              <g key={i}>
                <circle
                  cx={60 + i * 120}
                  cy="40"
                  r="8"
                  fill="var(--forge-panel)"
                  stroke="#ff6b1a"
                  strokeWidth="1.5"
                />
                <text
                  x={60 + i * 120}
                  y="44"
                  textAnchor="middle"
                  fontSize="8"
                  fill="#ff6b1a"
                  fontFamily="monospace"
                >
                  {String(i + 1).padStart(2, '0')}
                </text>
              </g>
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
