'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Shield, Clock, Star, Zap } from 'lucide-react';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const Cal = dynamic(
  () => import('@calcom/embed-react').then((mod) => mod.default),
  { ssr: false }
);

const TRUST_SIGNALS = [
  { icon: Shield, text: 'No fluff. No retainers. Fixed-scope builds.' },
  { icon: Clock, text: 'First results in 14 days, guaranteed.' },
  { icon: Star, text: 'Built by operators who\'ve been in your seat.' },
  { icon: Zap, text: 'Live systems — not slide decks.' },
];

export default function Booking() {
  return (
    <section
      id="booking"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'var(--forge-black)' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,107,26,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUpVariant} className="section-label mb-4">
            // BOOK YOUR CALL
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: 'var(--forge-text)',
            }}
          >
            LET'S BUILD YOUR REVENUE MACHINE
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: 'var(--forge-muted)' }}
          >
            30-minute discovery call. No sales pitch. We map your biggest revenue leak and tell you
            exactly what we'd build to fix it — on the call, for free.
          </motion.p>
        </motion.div>

        {/* Cal.com embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-lg overflow-hidden mb-12"
          style={{ border: '1px solid var(--forge-border)', minHeight: '500px' }}
        >
          <Cal
            calLink="raeez-webber-lioqur/discovery-call-event"
            style={{ width: '100%', height: '100%', minHeight: '500px' }}
            config={{ theme: 'dark' }}
          />
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {TRUST_SIGNALS.map((signal, i) => {
            const Icon = signal.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{
                  background: 'var(--forge-panel)',
                  border: '1px solid var(--forge-border)',
                }}
              >
                <Icon size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--forge-orange)' }} />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--forge-muted)' }}>
                  {signal.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
