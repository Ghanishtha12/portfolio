'use client';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/data/portfolio';

const NAV_LINKS = [
  { label: 'Work',       href: '#work' },
  { label: 'Process',    href: '#process' },
  { label: 'Services',   href: '#services' },
  { label: 'About',      href: '#about' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 100) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        aria-label="Primary navigation"
      >
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" aria-label="Ghanishtha Kapoor — home" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.03em', color: 'var(--text)' }}>
            GK<span style={{ color: 'var(--accent)' }}>.</span>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desk-nav">
            {NAV_LINKS.map(l => {
              const isActive = active === l.href.slice(1);
              return (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    fontSize: 14, fontWeight: 500,
                    color: isActive ? 'var(--text)' : 'var(--text-mid)',
                    transition: 'color 0.2s',
                    position: 'relative',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                  onMouseLeave={e => e.currentTarget.style.color = isActive ? 'var(--text)' : 'var(--text-mid)'}
                >
                  {l.label}
                  {isActive && (
                    <span style={{ position: 'absolute', bottom: -4, left: 0, right: 0, height: 1.5, background: 'var(--accent)', borderRadius: 2 }} />
                  )}
                </a>
              );
            })}
            <a href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: 14 }}>Hire me</a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="hamburger"
            style={{ display: 'none', background: 'none', border: 'none', padding: 8, cursor: 'pointer' }}
          >
            <div style={{ width: 24, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ display: 'block', height: 1.5, background: 'var(--text)', transition: 'transform 0.2s, opacity 0.2s', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', height: 1.5, background: 'var(--text)', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
              <span style={{ display: 'block', height: 1.5, background: 'var(--text)', transition: 'transform 0.2s, opacity 0.2s', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 8vw, 56px)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: 'var(--text)',
                padding: '10px 0',
                borderBottom: '1px solid rgba(17,17,17,0.08)',
                transition: 'color 0.2s',
                animationDelay: `${i * 0.07}s`,
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ marginTop: 32, alignSelf: 'flex-start', fontSize: 16, padding: '15px 36px' }}
          >
            Hire me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desk-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
