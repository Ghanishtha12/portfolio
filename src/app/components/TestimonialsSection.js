'use client';
import { useEffect, useRef } from 'react';
import { testimonials } from '@/data/portfolio';

function QuoteIcon() {
  return (
    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" aria-hidden="true">
      <path d="M0 20V12.4C0 9.6 0.6 7.267 1.8 5.4 3 3.467 4.733 1.8 7 .4L9 2.8C7.267 3.8 5.933 5 5 6.4 4.067 7.733 3.6 9.333 3.6 11.2H7.2V20H0ZM13.2 20V12.4C13.2 9.6 13.8 7.267 15 5.4 16.2 3.467 17.933 1.8 20.2.4L22.2 2.8C20.467 3.8 19.133 5 18.2 6.4 17.267 7.733 16.8 9.333 16.8 11.2H20.4V20H13.2Z" fill="currentColor"/>
    </svg>
  );
}

export default function TestimonialsSection() {
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

  const hasTestimonials = testimonials && testimonials.length > 0;

  return (
    <section id="testimonials" className="section" ref={ref}>
      <div className="divider" style={{ marginBottom: 96 }} />
      <div className="container">
        <span className="section-label reveal">Social Proof</span>
        <h2
          className="font-display reveal delay-100"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 48,
          }}
        >
          What people say
        </h2>

        {hasTestimonials ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 24,
            }}
          >
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="testimonial-card reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div style={{ color: 'var(--accent)', opacity: 0.6 }}>
                  <QuoteIcon />
                </div>
                <blockquote style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                  "{t.quote}"
                </blockquote>
                <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        background: 'var(--accent-light)',
                        border: '1px solid rgba(124,58,237,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        color: 'var(--accent-mid)',
                      }}
                    >
                      {t.name[0]}
                    </div>
                  )}
                  <div>
                    <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>{t.name}</p>
                    <p style={{ color: 'var(--text-faint)', fontSize: '0.78rem', margin: 0 }}>{t.title}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          /* Placeholder state */
          <div
            className="reveal"
            style={{
              padding: '48px 40px',
              border: '1px dashed rgba(255,255,255,0.08)',
              borderRadius: 'var(--r-2xl)',
              textAlign: 'center',
              maxWidth: 600,
            }}
          >
            <div style={{ color: 'var(--accent)', opacity: 0.3, marginBottom: 16, display: 'flex', justifyContent: 'center' }}>
              <QuoteIcon />
            </div>
            <p style={{ color: 'var(--text-faint)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 12 }}>
              Testimonials coming soon.
            </p>
            <p style={{ color: 'var(--text-faint)', fontSize: '0.8rem' }}>
              [ADD: quotes from clients, collaborators, or mentors in <code style={{ color: 'var(--accent-mid)', background: 'var(--accent-light)', padding: '1px 6px', borderRadius: 4 }}>data/portfolio.js</code>]
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
