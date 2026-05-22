'use client';

import { PROOF_BAR_ITEMS } from '@/lib/constants';

const DOUBLED = [...PROOF_BAR_ITEMS, ...PROOF_BAR_ITEMS];

export default function ProofBar() {
  return (
    <section
      id="proof"
      className="overflow-hidden py-4 border-y"
      style={{
        background: 'var(--forge-dark)',
        borderColor: 'var(--forge-border)',
      }}
    >
      <div className="marquee-track flex items-center gap-0 whitespace-nowrap">
        {DOUBLED.map((item, i) => (
          <div key={i} className="flex items-center">
            <span
              className="text-sm font-medium px-8"
              style={{ color: 'var(--forge-text)', fontFamily: 'var(--font-body)' }}
            >
              {item}
            </span>
            <span
              className="w-px h-5 shrink-0"
              style={{ background: 'var(--forge-orange)', opacity: 0.5 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
