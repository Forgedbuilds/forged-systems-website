'use client';

import { useEffect, useRef, useState } from 'react';

export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [hoverCTA, setHoverCTA] = useState(false);
  const [hoverInteractive, setHoverInteractive] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('ontouchstart' in window) {
      setIsTouch(true);
      return;
    }

    let ringX = 0;
    let ringY = 0;
    let dotX = 0;
    let dotY = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;

      const target = e.target as HTMLElement;
      const isCTA =
        target.closest('button') !== null || target.closest('a') !== null;
      const isInput =
        target.closest('input') !== null || target.closest('textarea') !== null;

      const isCTABtn =
        target.closest('[data-cursor="cta"]') !== null ||
        (target.closest('button') !== null &&
          (target.closest('button')?.style.background?.includes('ff6b1a') ||
           target.closest('button')?.className?.includes('shimmer')));

      setHoverCTA(!!isCTABtn);
      setHoverInteractive(!!isCTA && !isInput);
    };

    const animate = () => {
      const lag = 0.12;
      ringX += (dotX - ringX) * lag;
      ringY += (dotY - ringY) * lag;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX - 4}px, ${dotY - 4}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
      }

      raf = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isTouch) return null;

  const ringSize = hoverInteractive ? 56 : 36;
  const offset = ringSize / 2;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          width: 8,
          height: 8,
          background: 'var(--forge-orange)',
          willChange: 'transform',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full transition-all duration-150"
        style={{
          width: ringSize,
          height: ringSize,
          marginTop: -offset + 4,
          marginLeft: -offset + 4,
          border: '1px solid var(--forge-orange)',
          background: hoverCTA ? 'rgba(255,107,26,0.15)' : 'transparent',
          willChange: 'transform',
        }}
      />
    </>
  );
}
