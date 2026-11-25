'use client';
import { useState, useEffect, useRef } from 'react';
import { projects } from '@/data/portfolio';
import IllustrationFreelancing from './illustrations/IllustrationFreelancing';
import IllustrationScript from './illustrations/IllustrationScript';
import IllustrationRelatable from './illustrations/IllustrationRelatable';

const illusMap = {
  freelancing: IllustrationFreelancing,
  script: IllustrationScript,
  relatable: IllustrationRelatable,
};

export default function ProjectsSection() {
  const [activeModal, setActiveModal] = useState(null);
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
    <section id="work" className="section" ref={ref} style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ marginBottom: 64 }}>
          <span className="section-label reveal">Selected Work</span>
          <h2 className="display-lg reveal" style={{ marginTop: 8 }}>
            Content that <em className="accent">earns</em> attention.
          </h2>
        </div>

        {/* Full-width alternating rows */}
        <div style={{ borderBottom: '1px solid rgba(17,17,17,0.12)' }}>
          {projects.map((proj, idx) => {
            const isReversed = idx % 2 === 1;
            const Illus = illusMap[proj.illustrationKey] || IllustrationFreelancing;

            return (
              <div
                key={proj.id}
                className={`work-row reveal ${isReversed ? 'reversed' : ''}`}
                style={{ padding: '72px 0', alignItems: 'center' }}
              >
                {/* Visual / Phone Mockup */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px' }}>
                  <div
                    className="phone-frame"
                    style={{
                      transform: isReversed ? 'rotate(2deg)' : 'rotate(-2deg)',
                      transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                      boxShadow: '0 24px 60px rgba(17,17,17,0.12)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03) rotate(0deg)'}
                    onMouseLeave={e => e.currentTarget.style.transform = isReversed ? 'rotate(2deg)' : 'rotate(-2deg)'}
                  >
                    <div className="phone-notch" />
                    <Illus />
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px 48px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800, color: 'var(--accent)' }}>
                      /{proj.id}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
                      {proj.platform} · {proj.format}
                    </span>
                  </div>

                  <h3 className="display-md" style={{ color: 'var(--text)' }}>
                    {proj.title}
                  </h3>

                  <p className="body-lg" style={{ maxWidth: 520 }}>
                    {proj.desc}
                  </p>

                  {proj.result && (
                    <div style={{ margin: '8px 0', display: 'flex', alignItems: 'baseline', gap: 10 }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>
                        {proj.result}
                      </span>
                      <span style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>
                        {proj.resultLabel}
                      </span>
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: 16, marginTop: 12, flexWrap: 'wrap' }}>
                    <a
                      href={proj.reelLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Watch Reel ↗
                    </a>
                    <button
                      type="button"
                      onClick={() => setActiveModal(proj)}
                      className="btn-outline"
                    >
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal Drawer */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(17,17,17,0.7)',
            backdropFilter: 'blur(8px)',
            zIndex: 300,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
          onClick={() => setActiveModal(null)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '680px',
              height: '100%',
              background: '#F5F2EC',
              padding: 'clamp(32px, 5vw, 64px)',
              overflowY: 'auto',
              boxShadow: '-10px 0 50px rgba(0,0,0,0.25)',
              display: 'flex',
              flexDirection: 'column',
              gap: 32,
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                Case Study /{activeModal.id}
              </span>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                style={{
                  background: 'none',
                  border: '1px solid rgba(17,17,17,0.2)',
                  borderRadius: '50%',
                  width: 36,
                  height: 36,
                  fontSize: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ✕
              </button>
            </div>

            <h3 className="display-md" style={{ lineHeight: 1.1 }}>
              {activeModal.title}
            </h3>

            <div className="divider" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                  01. Goal
                </p>
                <p className="body-lg" style={{ color: 'var(--text)' }}>
                  {activeModal.caseStudy.goal}
                </p>
              </div>

              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                  02. Strategy &amp; Hook
                </p>
                <p className="body-lg" style={{ color: 'var(--text)' }}>
                  {activeModal.caseStudy.strategy}
                </p>
              </div>

              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                  03. Execution
                </p>
                <p className="body-lg" style={{ color: 'var(--text)' }}>
                  {activeModal.caseStudy.execution}
                </p>
              </div>

              {activeModal.caseStudy.results && activeModal.caseStudy.results.length > 0 && (
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                    04. Results
                  </p>
                  <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 8 }}>
                    {activeModal.caseStudy.results.map((r, i) => (
                      <div key={i} style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 12 }}>
                        <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-display)' }}>{r.value}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-faint)', textTransform: 'uppercase' }}>{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                  05. Learnings
                </p>
                <p className="body-lg" style={{ color: 'var(--text)' }}>
                  {activeModal.caseStudy.learnings}
                </p>
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: 24 }}>
              <a
                href={activeModal.reelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Watch Reel on Instagram ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
