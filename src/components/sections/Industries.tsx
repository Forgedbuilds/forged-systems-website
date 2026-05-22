'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Briefcase,
  TrendingUp,
  ShoppingBag,
  Stethoscope,
  Globe,
} from 'lucide-react';
import { INDUSTRIES } from '@/lib/constants';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Building2,
  Briefcase,
  TrendingUp,
  ShoppingBag,
  Stethoscope,
  Globe,
};

function IndustryCard({
  industry,
  index,
}: {
  industry: (typeof INDUSTRIES)[0];
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const Icon = ICON_MAP[industry.icon];

  return (
    <motion.div
      variants={fadeUpVariant}
      transition={{ delay: index * 0.08 }}
      // 2-col on mobile (h-44), 3-col md+ (h-52)
      className="flip-card h-44 sm:h-52 cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div
          className="flip-card-front glass-panel rounded-lg flex flex-col items-center justify-center gap-3 p-4"
          style={{ border: '1px solid var(--forge-border)' }}
        >
          {Icon && <Icon size={28} color="var(--forge-orange)" />}
          <span
            className="text-center leading-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              color: 'var(--forge-text)',
            }}
          >
            {industry.name}
          </span>
        </div>

        {/* Back */}
        <div
          className="flip-card-back rounded-lg p-4 sm:p-6 flex flex-col justify-between"
          style={{
            background: 'var(--forge-panel)',
            border: '2px solid var(--forge-orange)',
          }}
        >
          <div>
            <p
              className="text-xs tracking-widest mb-2 uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--forge-orange)' }}
            >
              THE FIX:
            </p>
            <p
              className="leading-relaxed mb-3"
              style={{ color: 'var(--forge-text)', fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}
            >
              {industry.fix}
            </p>
          </div>
          <div
            className="text-xs sm:text-sm font-medium"
            style={{ color: 'var(--forge-gold)', fontFamily: 'var(--font-mono)' }}
          >
            ↑ {industry.result}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-16 lg:py-32"
      style={{ background: 'var(--forge-dark)' }}
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
            // INDUSTRIES WE SERVE
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 5vw, 4rem)',
              color: 'var(--forge-text)',
            }}
          >
            YOUR INDUSTRY. YOUR PROBLEM. OUR AI.
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="mt-3 text-xs sm:text-sm"
            style={{ color: 'var(--forge-muted)', fontFamily: 'var(--font-mono)' }}
          >
            Tap to reveal the fix ↓
          </motion.p>
        </motion.div>

        {/* Grid — 2 col on mobile, 3 col on lg */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5"
        >
          {INDUSTRIES.map((industry, i) => (
            <IndustryCard key={i} industry={industry} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
