'use client';

import { motion } from 'framer-motion';
import { AGENTS } from '@/lib/constants';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

export default function Agents() {
  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--forge-black)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.p variants={fadeUpVariant} className="section-label mb-4">
            // THE AGENTS
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: 'var(--forge-text)',
            }}
          >
            SIX AI AGENTS. WORKING AROUND THE CLOCK.
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="mt-4 max-w-xl text-base leading-relaxed"
            style={{ color: 'var(--forge-muted)' }}
          >
            Each agent is purpose-built for a specific revenue function. Together, they cover your
            entire pipeline — from first touch to invoice paid.
          </motion.p>
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="overflow-x-auto no-scrollbar -mx-6 px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex gap-5 pb-4"
            style={{ width: 'max-content' }}
          >
            {AGENTS.map((agent, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                transition={{ delay: i * 0.08 }}
                className="glass-panel circuit-bg rounded-lg p-7 flex flex-col group shrink-0"
                style={{
                  width: '280px',
                  border: '1px solid var(--forge-border)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--forge-orange)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(255,107,26,0.15)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--forge-border)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Agent name */}
                <div
                  className="mb-1 leading-none"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    color: 'var(--forge-orange)',
                  }}
                >
                  {agent.name}
                </div>

                {/* Role */}
                <div
                  className="mb-5 text-xs tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--forge-muted)' }}
                >
                  {agent.role}
                </div>

                {/* Status badge */}
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="pulse-dot w-2 h-2 rounded-full shrink-0"
                    style={{ background: 'var(--forge-success)' }}
                  />
                  <span
                    className="text-xs tracking-widest"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--forge-success)' }}
                  >
                    ACTIVE
                  </span>
                </div>

                {/* Capability */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--forge-muted)' }}>
                  {agent.capability}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint on mobile */}
        <p
          className="mt-4 text-xs text-center md:hidden"
          style={{ color: 'var(--forge-muted)', fontFamily: 'var(--font-mono)' }}
        >
          ← scroll to see all agents →
        </p>
      </div>
    </section>
  );
}
