'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PAIN_POINTS } from '@/lib/constants';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

function CounterNumber({ target, inView }: { target: string; inView: boolean }) {
  const [display, setDisplay] = useState('0');
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    const isPercent = target.endsWith('%');
    const isDollar = target.startsWith('$');
    const isMultiplier = target.endsWith('x');

    let numStr = target.replace(/[^0-9.]/g, '');
    const num = parseFloat(numStr);

    let start = 0;
    const duration = 1500;
    const step = 16;
    const steps = duration / step;
    const increment = num / steps;

    const interval = setInterval(() => {
      start = Math.min(start + increment, num);
      let formatted = Number.isInteger(num) ? Math.round(start).toString() : start.toFixed(1);
      if (isDollar) formatted = '$' + formatted + 'K';
      else if (isPercent) formatted = Math.round(start) + '%';
      else if (isMultiplier) formatted = formatted + 'x';
      setDisplay(formatted);
      if (start >= num) clearInterval(interval);
    }, step);

    return () => clearInterval(interval);
  }, [inView, target]);

  return <span>{display}</span>;
}

export default function Problem() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: 'var(--forge-black)' }}>
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
            // THE PROBLEM
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            className="leading-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: 'var(--forge-text)',
            }}
          >
            EVERY DAY WITHOUT AI IS A DAY YOUR COMPETITORS GAIN GROUND
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariant}
              transition={{ delay: i * 0.1 }}
              className="glass-panel border-accent rounded-lg p-8 group cursor-default"
              style={{ transition: 'box-shadow 0.3s ease, transform 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(255,107,26,0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Stat */}
              <div
                className="mb-1 leading-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '4rem',
                  color: 'var(--forge-orange)',
                }}
              >
                <CounterNumber target={point.stat} inView={inView} />
              </div>
              <div
                className="mb-6 text-xs tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--forge-muted)' }}
              >
                {point.statLabel}
              </div>

              <h3
                className="mb-3 text-lg font-medium leading-snug"
                style={{ color: 'var(--forge-text)', fontFamily: 'var(--font-body)' }}
              >
                {point.headline}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--forge-muted)' }}>
                {point.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
