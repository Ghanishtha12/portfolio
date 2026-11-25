'use client';
import { siteConfig } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem' }}>
            {siteConfig.name}
          </span>
          <span style={{ fontSize: '13px', color: 'var(--text-faint)' }}>
            · Digital Media Strategist &amp; Content Producer · © {currentYear}
          </span>
        </div>

        <div style={{ display: 'flex', gap: 24, fontSize: '14px', fontWeight: 500, color: 'var(--text-mid)', flexWrap: 'wrap' }}>
          <a href="#work" style={{ transition: 'color 0.2s' }}>Work</a>
          <a href="#process" style={{ transition: 'color 0.2s' }}>Process</a>
          <a href="#services" style={{ transition: 'color 0.2s' }}>Services</a>
          <a href="#about" style={{ transition: 'color 0.2s' }}>About</a>
          <a href="#experience" style={{ transition: 'color 0.2s' }}>Experience</a>
          <a href="#contact" style={{ transition: 'color 0.2s' }}>Contact</a>
          <a
            href="/resume.pdf"
            download="Ghanishtha_Kapoor_Resume.pdf"
            style={{ color: 'var(--accent)', fontWeight: 700 }}
          >
            CV (PDF) ↓
          </a>
        </div>
      </div>
    </footer>
  );
}
