'use client';

import { PROOF_BAR_ITEMS } from '@/lib/constants';

const DOUBLED = [...PROOF_BAR_ITEMS, ...PROOF_BAR_ITEMS];

export default function ProofBar() {
  return (
    <section
      id="proof"
      className="overflow-hidden py-3 sm:py-4 border-y"
      style={{
        background: 'var(--forge-dark)',
        borderColor: 'var(--forge-border)',
      }}
    >
      <div className="marquee-track flex items-center whitespace-nowrap">
        {DOUBLED.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span
              className="font-medium px-5 sm:px-8"
              style={{
                color: 'var(--forge-text)',
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.7rem, 2vw, 0.875rem)',
              }}
            >
              {item}
            </span>
            <span
              className="w-px h-4 shrink-0"
              style={{ background: 'var(--forge-orange)', opacity: 0.4 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
