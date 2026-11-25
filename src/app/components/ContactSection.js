'use client';
import { useEffect, useRef } from 'react';
import { siteConfig } from '@/data/portfolio';

export default function ContactSection() {
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
    <section id="contact" className="section dark-section" ref={ref} style={{ padding: '140px 0' }}>
      <div className="container">
        <div style={{ maxWidth: 960, marginBottom: 72 }}>
          <span className="section-label reveal">Get in Touch</span>
          <h2 className="display-xl reveal" style={{ marginTop: 12 }}>
            Let&apos;s build something <em className="accent">worth watching.</em>
          </h2>
          <p className="body-lg reveal" style={{ color: 'rgba(245,242,236,0.65)', marginTop: 24, maxWidth: 640 }}>
            Available for full-time Digital Media Strategist &amp; Content Producer roles, video shoot directions, and end-to-end content contracts.
          </p>
        </div>

        {/* Direct Contact Grid - No Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '64px',
            alignItems: 'flex-start',
            borderTop: '1px solid rgba(245,242,236,0.15)',
            paddingTop: '64px',
          }}
          className="contact-grid"
        >
          {/* Email & Phone */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
                Email Directly
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(20px, 3.2vw, 36px)',
                  fontWeight: 700,
                  color: '#F5F2EC',
                  textDecoration: 'none',
                  borderBottom: '2px solid rgba(245,242,236,0.2)',
                  paddingBottom: 4,
                  display: 'inline-block',
                  wordBreak: 'break-all',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderBottomColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderBottomColor = 'rgba(245,242,236,0.2)'; e.currentTarget.style.color = '#F5F2EC'; }}
              >
                {siteConfig.email}
              </a>
            </div>

            <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                  Phone
                </p>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                  style={{ fontSize: '20px', fontWeight: 600, color: '#F5F2EC', textDecoration: 'none' }}
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                  Location
                </p>
                <p style={{ fontSize: '18px', fontWeight: 500, color: 'rgba(245,242,236,0.85)', margin: 0 }}>
                  {siteConfig.location}
                </p>
              </div>
            </div>

            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                Professional Network
              </p>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#F5F2EC',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = '#F5F2EC'}
              >
                linkedin.com/in/ghanishtha-kapoor ↗
              </a>
            </div>
          </div>

          {/* Download CV Callout Box */}
          <div
            className="reveal"
            style={{
              background: 'rgba(245,242,236,0.04)',
              border: '1px solid rgba(245,242,236,0.12)',
              borderRadius: '24px',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>
              Curriculum Vitae
            </span>
            <h3 className="display-md" style={{ color: '#F5F2EC', fontSize: 'clamp(24px, 2.5vw, 36px)', lineHeight: 1.15 }}>
              Ready for hiring review.
            </h3>
            <p style={{ color: 'rgba(245,242,236,0.65)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
              Complete breakdown of core competencies, video shooting capabilities, social strategy campaigns at Dawa Bazaar, software engineering background, and academic credentials.
            </p>

            <a
              href="/resume.pdf"
              download="Ghanishtha_Kapoor_Resume.pdf"
              className="btn-primary"
              style={{
                background: 'var(--accent)',
                color: '#ffffff',
                alignSelf: 'flex-start',
                padding: '16px 36px',
                fontSize: '16px',
                marginTop: 8,
              }}
            >
              Download CV (PDF) ↓
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
