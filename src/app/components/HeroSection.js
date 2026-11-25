'use client';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/data/portfolio';
import IllustrationFreelancing from './illustrations/IllustrationFreelancing';
import IllustrationScript from './illustrations/IllustrationScript';
import IllustrationRelatable from './illustrations/IllustrationRelatable';

const illus = { freelancing: IllustrationFreelancing, script: IllustrationScript, relatable: IllustrationRelatable };

function PhoneFrame({ illustrationKey, rotation = 0, style = {} }) {
  const Illus = illus[illustrationKey] || IllustrationFreelancing;
  return (
    <div style={{
      width: 160,
      aspectRatio: '9/16',
      borderRadius: 24,
      border: '2px solid #111',
      overflow: 'hidden',
      position: 'absolute',
      background: '#E8E3DA',
      transform: `rotate(${rotation}deg)`,
      boxShadow: '0 20px 60px rgba(17,17,17,0.18)',
      transition: 'transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275), box-shadow 0.3s',
      ...style,
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = `rotate(${rotation * 0.3}deg) translateY(-8px) scale(1.03)`; e.currentTarget.style.boxShadow = '0 30px 80px rgba(17,17,17,0.22)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = `rotate(${rotation}deg)`; e.currentTarget.style.boxShadow = '0 20px 60px rgba(17,17,17,0.18)'; }}
    >
      <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 48, height: 8, background: '#111', borderRadius: 100, zIndex: 2 }} />
      <Illus />
    </div>
  );
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);

  const lines = siteConfig.heroHeadline;

  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        paddingTop: 'calc(var(--nav-h) + 56px)',
        paddingBottom: 80,
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: -60, right: -60, width: 320, height: 320, borderRadius: '50%', background: 'var(--accent)', opacity: 0.08, pointerEvents: 'none' }} aria-hidden="true" />

      <div className="container" style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 48 }}>

          {/* Left — text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Available badge */}
            <div style={{ marginBottom: 28, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: 'opacity 0.5s, transform 0.5s' }}>
              {siteConfig.availableForWork && (
                <span className="status-badge">
                  <span className="status-dot" />
                  Available for Producer &amp; Strategist roles
                </span>
              )}
            </div>

            {/* Headline */}
            <h1
              className="display-xl"
              style={{ marginBottom: 32, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'opacity 0.65s 0.1s, transform 0.65s 0.1s' }}
            >
              {lines.map((line, i) => (
                <span key={i} style={{ display: 'block' }}>
                  {i === 1 ? <><em className="accent">{line.split(' ')[0]}</em>{' ' + line.split(' ').slice(1).join(' ')}</> : line}
                </span>
              ))}
            </h1>

            {/* Sub */}
            <p
              className="body-lg"
              style={{ maxWidth: 540, marginBottom: 20, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'opacity 0.65s 0.2s, transform 0.65s 0.2s' }}
            >
              {siteConfig.heroSub}
            </p>

            <p
              style={{
                fontSize: '15px',
                color: 'var(--text-faint)',
                maxWidth: 500,
                marginBottom: 36,
                lineHeight: 1.6,
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.65s 0.25s',
              }}
            >
              Behind the lens &amp; behind the strategy — not an on-screen influencer. I handle concept ideation, on-location shooting, framing, editing, and distribution.
            </p>

            {/* CTAs */}
            <div
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: 'opacity 0.65s 0.3s, transform 0.65s 0.3s' }}
            >
              <a href="#work" className="btn-primary">
                View productions
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a
                href="/resume.pdf"
                download="Ghanishtha_Kapoor_Resume.pdf"
                className="btn-outline"
              >
                Download CV (PDF)
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3v7M5 8l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>

          {/* Right — phones cluster */}
          <div
            className="phones-cluster"
            aria-hidden="true"
            style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.8s 0.3s' }}
          >
            <PhoneFrame
              illustrationKey="freelancing"
              rotation={-8}
              style={{ left: 0, top: 20, zIndex: 3 }}
            />
            <PhoneFrame
              illustrationKey="script"
              rotation={4}
              style={{ left: 100, top: 60, zIndex: 2 }}
            />
            <PhoneFrame
              illustrationKey="relatable"
              rotation={-3}
              style={{ left: 200, top: 110, zIndex: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', opacity: 0.35, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        aria-hidden="true"
      >
        <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <svg width="1" height="40" viewBox="0 0 1 40"><line x1="0.5" y1="0" x2="0.5" y2="40" stroke="#111" strokeWidth="1" strokeDasharray="3 4"/></svg>
      </div>
    </section>
  );
}
