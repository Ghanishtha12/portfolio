'use client';

export default function AboutSection() {
  const stats = [
    { value: '1+', label: 'Experience' },
    { value: '30+', label: 'Reels Created' },
    { value: '200K+', label: 'Views Generated' },
    { value: '∞', label: 'Ideas Tested' },
  ];

  return (
    <section id="about" style={{
      padding: '80px 40px', position: 'relative', maxWidth: 1200, margin: '0 auto',
    }}>
      <div className="neon-divider" style={{ width: '60%', marginBottom: 60 }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        {/* Left — Photo Area */}
        <div style={{ position: 'relative' }}>
          <div className="glass-card" style={{
            width: '100%', aspectRatio: '4/5', position: 'relative', overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {/* Abstract avatar placeholder */}
            <div style={{ position: 'relative', width: '70%', height: '70%' }}>
              <div className="blob" style={{
                width: '100%', height: '100%', position: 'absolute',
                background: 'linear-gradient(135deg, rgba(0,245,255,0.15), rgba(191,0,255,0.15))',
                border: '1px solid rgba(0,245,255,0.2)',
              }} />
              <div style={{
                position: 'absolute', inset: '15%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '4rem',
              }}>
                🎬
              </div>
            </div>
            {/* Floating stickers */}
            <div style={{
              position: 'absolute', top: 20, right: 20,
              padding: '6px 14px', background: 'rgba(184,255,0,0.15)',
              borderRadius: 100, fontSize: '0.75rem', fontWeight: 600,
              color: 'var(--neon-lime)', border: '1px solid rgba(184,255,0,0.3)',
              transform: 'rotate(8deg)', zIndex: 3
            }}>
              it hits different 💎
            </div>
            <div style={{
              position: 'absolute', bottom: 30, left: 20,
              padding: '6px 14px', background: 'rgba(255,45,120,0.15)',
              borderRadius: 100, fontSize: '0.75rem', fontWeight: 600,
              color: 'var(--neon-pink)', border: '1px solid rgba(255,45,120,0.3)',
              transform: 'rotate(-5deg)', zIndex: 3
            }}>
              viral behavior ✨
            </div>
            <div style={{
              position: 'absolute', top: '40%', left: -10,
              padding: '6px 14px', background: 'rgba(191,0,255,0.15)',
              borderRadius: 100, fontSize: '0.75rem', fontWeight: 600,
              color: 'var(--neon-purple)', border: '1px solid rgba(191,0,255,0.3)',
              transform: 'rotate(-12deg)', zIndex: 3
            }}>
              rent free 🧠
            </div>
            <div style={{
              position: 'absolute', bottom: '15%', right: -15,
              padding: '6px 14px', background: 'rgba(0,245,255,0.15)',
              borderRadius: 100, fontSize: '0.75rem', fontWeight: 600,
              color: 'var(--neon-cyan)', border: '1px solid rgba(0,245,255,0.3)',
              transform: 'rotate(15deg)', zIndex: 3
            }}>
              main character energy ✨
            </div>
          </div>

          {/* Decoration */}
          <div style={{
            position: 'absolute', top: -15, left: -15, width: 60, height: 60,
            border: '2px solid var(--neon-cyan)', borderRadius: '12px 0 0 0',
            borderRight: 'none', borderBottom: 'none', opacity: 0.3,
          }} />
          <div style={{
            position: 'absolute', bottom: -15, right: -15, width: 60, height: 60,
            border: '2px solid var(--neon-pink)', borderRadius: '0 0 12px 0',
            borderLeft: 'none', borderTop: 'none', opacity: 0.3,
          }} />
        </div>

        {/* Right — Content */}
        <div>
          <span className="section-label" style={{ marginBottom: 16, display: 'flex' }}>About Me</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
            lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: 24,
          }}>
            Building the <span className="gradient-text-warm">future</span>,<br />
            one frame at a time<span style={{ color: 'var(--neon-cyan)' }}>.</span>
          </h2>

          <div style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 32, fontSize: '1rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              I’m a content-first creative with a <span style={{ color: '#fff', fontWeight: 600 }}>Software Engineering background</span>. I understand what makes people stop scrolling because I know how the systems behind them work.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              I work at the intersection of <span style={{ color: 'var(--neon-cyan)', fontWeight: 600 }}>technical logic</span> and <span style={{ color: 'var(--neon-pink)', fontWeight: 600 }}>creative storytelling</span>. My engineering brain helps me decode internet culture and rebuild trends into something sharper, faster, and more engaging.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              From videography to scriptwriting, I apply an analytical lens to every frame. It&apos;s a total win-win situation.
            </p>
            <p className="font-mono" style={{ color: 'var(--neon-cyan)', fontSize: '0.9rem' }}>
              {'Living rent-free in the algorithm. Slay.'}
            </p>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: 16,
          }}>
            {stats.map(s => (
              <div key={s.label} className="glass-card" style={{
                padding: '20px 12px', textAlign: 'center', borderRadius: 14,
              }}>
                <div className="font-display gradient-text" style={{
                  fontSize: '1.5rem', fontWeight: 800, marginBottom: 4,
                }}>
                  {s.value}
                </div>
                <div className="font-mono" style={{
                  fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.05em', textTransform: 'uppercase',
                  lineHeight: 1.2
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive override */}
      <style jsx>{`
        @media (max-width: 768px) {
          #about > div > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
