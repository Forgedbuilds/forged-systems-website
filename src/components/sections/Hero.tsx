'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const ParticleField = dynamic(() => import('@/components/effects/ParticleField'), { ssr: false });

const HEADLINE = 'YOUR BUSINESS IS LEAKING REVENUE. WE BUILD THE AI THAT STOPS IT.';
const WORDS = HEADLINE.split(' ');

function Typewriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span className="typewriter-cursor">
      {displayed}
    </span>
  );
}

export default function Hero() {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-overlay"
      style={{ background: 'var(--forge-black)' }}
    >
      {/* Particles */}
      <ParticleField />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Orange radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255,107,26,0.08) 0%, transparent 70%)',
        }}
      />

      {/* HUD — top left */}
      <div className="absolute top-20 left-6 lg:left-10 hidden md:flex flex-col gap-1">
        <div className="hud-text">SYSTEM: <span style={{ color: 'var(--forge-success)' }}>ONLINE</span></div>
        <div className="hud-text">AGENTS: <span style={{ color: 'var(--forge-success)' }}>6 ACTIVE</span></div>
        <div className="hud-text">UPTIME: 99.97%</div>
      </div>

      {/* HUD — top right */}
      <div className="absolute top-20 right-6 lg:right-10 hidden md:flex flex-col items-end gap-1">
        <div className="hud-text">RESPONSE TIME: &lt;60s</div>
        <div className="hud-text">LEADS PROCESSED: 24/7</div>
      </div>

      {/* Main content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center"
      >
        {/* Pre-headline */}
        <motion.div
          variants={fadeUpVariant}
          className="mb-6"
          transition={{ delay: 0.6 }}
        >
          <p
            className="hud-text text-xs tracking-[0.25em]"
            style={{ color: 'var(--forge-orange)' }}
          >
            <Typewriter text="FORGED SYSTEMS — AI REVENUE SYSTEMS" delay={0.6} />
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mb-6 leading-none"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 8vw, 7rem)',
            color: 'var(--forge-text)',
          }}
        >
          {WORDS.map((word, i) => (
            <motion.span
              key={i}
              variants={fadeUpVariant}
              transition={{ delay: 1.0 + i * 0.04 }}
              className="inline-block mr-[0.2em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUpVariant}
          transition={{ delay: 1.4 }}
          className="mb-10 max-w-2xl text-lg md:text-xl leading-relaxed"
          style={{ color: 'var(--forge-muted)' }}
        >
          Every slow response, missed follow-up, and manual process is money walking out the door.
          We build AI revenue systems that respond in seconds, follow up forever, and hand off warm —
          so your team only speaks to buyers who are ready.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUpVariant}
          transition={{ delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shimmer-btn group flex items-center gap-2 px-8 py-4 rounded text-white font-medium text-base transition-all duration-300"
            style={{
              background:
                'linear-gradient(90deg, var(--forge-orange), var(--forge-gold), var(--forge-orange))',
              backgroundSize: '200% auto',
              fontFamily: 'var(--font-body)',
            }}
            data-cursor="cta"
          >
            Book a Discovery Call
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#solution"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#solution')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-8 py-4 rounded font-medium text-base transition-all duration-300 border"
            style={{
              color: 'var(--forge-text)',
              borderColor: 'var(--forge-border)',
              fontFamily: 'var(--font-body)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--forge-orange)';
              e.currentTarget.style.color = 'var(--forge-orange)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--forge-border)';
              e.currentTarget.style.color = 'var(--forge-text)';
            }}
          >
            See How It Works
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        ref={scrollIndicatorRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.querySelector('#proof')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="hud-text" style={{ fontSize: '0.6rem' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} style={{ color: 'var(--forge-orange)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
