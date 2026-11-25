'use client';
import { useEffect, useRef } from 'react';
import { processSteps } from '@/data/portfolio';

export default function HowIThinkSection() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" className="section" ref={ref} style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ marginBottom: 64 }}>
          <span className="section-label reveal">How I Work</span>
          <h2 className="display-lg reveal" style={{ marginTop: 8 }}>
            A disciplined <em className="accent">viral loop.</em>
          </h2>
          <p className="body-lg reveal" style={{ maxWidth: 540, marginTop: 16 }}>
            No guesswork. Every piece follows a predictable four-stage engine designed for retention and organic distribution.
          </p>
        </div>

        {/* 4 steps horizontal/vertical editorial list */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {processSteps.map((step, idx) => (
            <div
              key={step.num}
              className="process-row reveal"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>
                /{step.num}
              </div>
              <div>
                <h3 className="display-md" style={{ marginBottom: 12 }}>
                  {step.title}
                </h3>
                <p className="body-lg" style={{ maxWidth: 640 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
