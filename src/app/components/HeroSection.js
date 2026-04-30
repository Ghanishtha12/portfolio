'use client';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [typed, setTyped] = useState('');
  const roles = [
    'Software Developer',
    'Creative Strategist & Video Editor',
    'Algorithm Decoder'
  ];
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setTyped(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 2000);
        } else {
          setCharIdx(charIdx + 1);
        }
      } else {
        setTyped(current.slice(0, charIdx));
        if (charIdx === 0) {
          setDeleting(false);
          setRoleIdx((roleIdx + 1) % roles.length);
        } else {
          setCharIdx(charIdx - 1);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', padding: '120px 40px 80px', overflow: 'hidden',
    }}>
      <div className="grid-bg" />
      <div className="orb orb-cyan" style={{ width: 500, height: 500, top: '-10%', right: '-5%' }} />
      <div className="orb orb-pink" style={{ width: 400, height: 400, bottom: '5%', left: '-10%' }} />
      <div className="orb orb-purple" style={{ width: 350, height: 350, top: '40%', left: '50%' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 900, textAlign: 'center' }}>
        {/* Status */}
        <div className="animate-fade-up" style={{ marginBottom: 32 }}>
          <div className="status-badge" style={{ margin: '0 auto' }}>
            <div className="status-dot" />
            available for work
          </div>
        </div>

        {/* Greeting */}
        <p className="font-mono animate-fade-up delay-100" style={{
          fontSize: '0.9rem', color: 'var(--neon-cyan)', marginBottom: 16, letterSpacing: '0.05em', opacity: 0,
        }}>
          {' Hey, I\'m'}
        </p>

        {/* Name */}
        <h1 className="font-display animate-fade-up delay-200" style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800, lineHeight: 1,
          letterSpacing: '-0.04em', marginBottom: 20, opacity: 0,
        }}>
          <span className="gradient-text">Ghanishtha</span>{' '}
          <span style={{ color: '#fff' }}>Kapoor</span>
        </h1>

        {/* Typing Role */}
        <div className="font-mono animate-fade-up delay-300" style={{
          fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: 'rgba(255,255,255,0.6)',
          marginBottom: 32, height: 36, opacity: 0,
        }}>
          <span style={{ color: 'var(--neon-purple)' }}>const</span>{' '}
          <span style={{ color: 'var(--neon-lime)' }}>role</span>{' '}
          <span style={{ color: 'var(--neon-pink)' }}>=</span>{' '}
          <span style={{ color: 'var(--neon-orange)' }}>&quot;{typed}</span>
          <span className="cursor-blink" style={{ color: 'var(--neon-cyan)' }}>|</span>
          <span style={{ color: 'var(--neon-orange)' }}>&quot;</span>
        </div>

        {/* Bio */}
        <div className="animate-fade-up delay-400" style={{
          fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: 'rgba(255,255,255,0.5)',
          lineHeight: 1.7, maxWidth: 700, margin: '0 auto 40px', opacity: 0,
        }}>
          <p style={{ marginBottom: '1rem' }}>
            I use my engineering brain to <span style={{ color: 'var(--neon-cyan)', fontWeight: 800 }}>decode the algorithm</span> — a total win-win situation. Slayyy.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            I don’t just follow trends. I analyze them with a technical lens to build hooks, shape narratives, and engineer attention.
          </p>
          <p>
            Content that works — <span style={{ color: 'var(--neon-pink)', fontStyle: 'italic' }}>engineered for the viral loop.</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="animate-fade-up delay-500" style={{
          display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', opacity: 0,
        }}>
          <a href="#projects" className="btn-solid">
            View My Work ↗
          </a>
          <a href="#contact" className="btn-neon">
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-up delay-700" style={{
          marginTop: 80, opacity: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 8,
        }}>
          <span className="font-mono" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em' }}>
            SCROLL DOWN
          </span>
          <div style={{
            width: 20, height: 34, border: '1.5px solid rgba(255,255,255,0.2)',
            borderRadius: 12, display: 'flex', justifyContent: 'center', paddingTop: 6,
          }}>
            <div style={{
              width: 3, height: 8, borderRadius: 3,
              background: 'var(--neon-cyan)', animation: 'fadeInUp 1.5s ease-in-out infinite',
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
