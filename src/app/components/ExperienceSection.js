'use client';
import { useEffect, useRef } from 'react';
import { experiences, education } from '@/data/portfolio';

export default function ExperienceSection() {
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
    <section id="experience" className="section" ref={ref} style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ marginBottom: 64 }}>
          <span className="section-label reveal">Professional Experience</span>
          <h2 className="display-lg reveal" style={{ marginTop: 8 }}>
            Proven <em className="accent">industry record.</em>
          </h2>
        </div>

        {/* Clean editorial timeline list — real experiences */}
        <div style={{ borderBottom: '1px solid rgba(17,17,17,0.12)' }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="exp-row reveal"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div>
                <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {exp.period}
                </p>
                <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-mid)', marginTop: 4 }}>
                  {exp.company}
                </p>
              </div>

              <div>
                <h3 className="display-md" style={{ marginBottom: 16, fontSize: 'clamp(24px, 3vw, 36px)' }}>
                  {exp.role}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {exp.bullets.map((b, bIdx) => (
                    <li
                      key={bIdx}
                      style={{
                        display: 'flex',
                        gap: 12,
                        alignItems: 'flex-start',
                        fontSize: '17px',
                        color: 'var(--text-mid)',
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: 'var(--accent)', fontWeight: 800, marginTop: '-2px' }}>—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education Sub-section */}
        <div style={{ marginTop: 64 }}>
          <span className="section-label reveal">Academic Credentials</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginTop: 24 }}>
            {education.map((edu, eIdx) => (
              <div key={eIdx} className="reveal" style={{ borderLeft: '2px solid rgba(17,17,17,0.15)', paddingLeft: 18 }}>
                <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {edu.period}
                </p>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, marginTop: 4, marginBottom: 4 }}>
                  {edu.degree}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-mid)', margin: 0 }}>
                  {edu.institution}
                </p>
                {edu.detail && (
                  <p style={{ fontSize: '13px', color: 'var(--text-faint)', marginTop: 4, fontWeight: 500 }}>
                    {edu.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
