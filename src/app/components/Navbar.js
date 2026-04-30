'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{ animation: 'slideDown 0.6s ease' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1rem', color: 'var(--dark-bg)',
          }}>
            G
          </div>
          <span className="font-display" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
            ghanishtha<span style={{ color: 'var(--neon-cyan)' }}>.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              textDecoration: 'none', color: 'rgba(255,255,255,0.6)',
              fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.02em',
              transition: 'color 0.3s', cursor: 'none',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--neon-cyan)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-neon" style={{ padding: '10px 22px', fontSize: '0.8rem' }}>
            <span>Let&apos;s Talk</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none', color: 'white',
          fontSize: '1.5rem', cursor: 'none',
        }} className="mobile-toggle">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(5,5,9,0.95)', backdropFilter: 'blur(20px)',
          padding: '20px 40px', borderBottom: '1px solid rgba(0,245,255,0.1)',
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '1rem', fontWeight: 500 }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
