'use client';
import { marqueeItems } from '@/data/portfolio';

const items = [...marqueeItems, ...marqueeItems]; // duplicate for seamless loop

export default function MarqueeSection() {
  return (
    <div
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid rgba(17,17,17,0.1)',
        borderBottom: '1px solid rgba(17,17,17,0.1)',
        padding: '20px 0',
        overflow: 'hidden',
        userSelect: 'none',
      }}
      aria-hidden="true"
    >
      <div style={{ display: 'flex', gap: 0 }}>
        <div className="marquee-track">
          {items.map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-mid)',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: 64,
              }}
            >
              {item}
              {i < items.length - 1 && (
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', marginLeft: -32 }} />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
