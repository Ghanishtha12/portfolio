'use client';

export default function Footer() {
  return (
    <footer style={{ padding: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        <div className="font-display" style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>
          ghanishtha<span style={{ color: 'var(--neon-cyan)' }}>.</span>
        </div>

        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { name: 'Email', url: 'mailto:kapoorghanishtha2005@gmail.com', type: 'email' },
            { name: 'Phone', url: 'tel:+91-8837827095', type: 'phone' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ghanishtha-kapoor', type: 'social' },
            { name: 'Instagram', url: 'https://www.instagram.com/ghanishtha.kapoor.12?igsh=MWNmeW90eG5rZHc5cQ%3D%3D&utm_source=qr', type: 'social' }
          ].map(contact => (
            <a key={contact.name} href={contact.url} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--neon-cyan)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.3)'}>{contact.name}</a>
          ))}
        </div>

        <div className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>
          © {new Date().getFullYear()} — Built with logic & soul.
        </div>
      </div>
    </footer>
  );
}
