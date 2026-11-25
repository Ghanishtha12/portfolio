'use client';
import { useEffect, useRef } from 'react';
import { stats } from '@/data/portfolio';

export default function NumbersSection() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.2 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: 'var(--bg)', padding: '0' }}>
      <div className="container">
        <div className="numbers-strip">
          {stats.map((s, i) => (
            <div
              key={i}
              className="reveal"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(40px, 5vw, 72px)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  marginBottom: 10,
                  color: 'var(--text)',
                }}
              >
                {s.value.includes('+') ? (
                  <>{s.value.replace('+', '')}<span style={{ color: 'var(--accent)' }}>+</span></>
                ) : s.value}
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-mid)', letterSpacing: '0.01em', lineHeight: 1.4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
