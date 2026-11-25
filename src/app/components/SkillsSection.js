'use client';
import { useEffect, useRef } from 'react';
import { services } from '@/data/portfolio';

export default function SkillsSection() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="section" ref={ref} style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ marginBottom: 64 }}>
          <span className="section-label reveal">Services</span>
          <h2 className="display-lg reveal" style={{ marginTop: 8 }}>
            End-to-end <em className="accent">capabilities.</em>
          </h2>
          <p className="body-lg reveal" style={{ maxWidth: 540, marginTop: 16 }}>
            From single high-impact reels to multi-platform editorial calendars and performance reporting.
          </p>
        </div>

        {/* Large-type list with full-width rows */}
        <div style={{ borderBottom: '1px solid rgba(17,17,17,0.12)' }}>
          {services.map((svc, idx) => (
            <div
              key={svc.title}
              className="service-row reveal"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em' }}>
                  [0{idx + 1}]
                </span>
                <h3 className="display-md" style={{ color: 'var(--text)' }}>
                  {svc.title}
                </h3>
              </div>
              <p className="service-desc">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
