'use client';

export default function Footer() {
  return (
    <footer style={{ padding: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        <div className="font-display" style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>
          ghanishtha<span style={{ color: 'var(--neon-cyan)' }}>.</span>
        </div>

        <div style={{ display: 'flex', gap: 24 }}>
          {[
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ghanishtha-kapoor' },
            { name: 'Instagram', url: 'https://www.instagram.com/ghanishtha.kapoor.12?igsh=MWNmeW90eG5rZHc5cQ%3D%3D&utm_source=qr' }
          ].map(social => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="hover-link">{social.name}</a>
          ))}
        </div>

        <div className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>
          © {new Date().getFullYear()} — Built with logic & soul.
        </div>
      </div>
    </footer>
  );
}
