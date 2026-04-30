'use client';

export default function HowIThinkSection() {
  const caseStudies = [
    {
      title: "Reel: Freelancing POV",
      hook: "“POV: you thought freelancing = freedom…”",
      analysis: [
        { label: "Immediate relatability", result: "stops scroll", icon: "🖱️" },
        { label: "Fast pacing", result: "keeps retention high", icon: "⚡" },
        { label: "Loop ending", result: "boosts rewatch", icon: "🔁" }
      ],
      color: "var(--neon-cyan)"
    },
    {
      title: "Reel: Story-based content",
      hook: "“Things nobody tells you about starting…”",
      analysis: [
        { label: "Curiosity gap", result: "hooked from start", icon: "🤔" },
        { label: "Emotional + real tone", result: "builds trust", icon: "❤️" },
        { label: "Strong payoff", result: "high shareability", icon: "🎁" }
      ],
      color: "var(--neon-pink)"
    }
  ];

  return (
    <section id="strategy" style={{ padding: '80px 40px', position: 'relative' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ marginBottom: 50, textAlign: 'center' }}>
          <span className="section-label" style={{ justifyContent: 'center', marginBottom: 12 }}>Strategy</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.04em' }}>
            🧠 How I <span className="gradient-text">Think.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: 12, fontFamily: 'JetBrains Mono' }}>
            {`// Decoding the viral loop`}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {caseStudies.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: 60, borderLeft: `4px solid ${item.color}` }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
                <div>
                  <h3 className="font-display" style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 24, color: item.color }}>
                    {item.title}
                  </h3>
                  <div style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: 16, border: '1px dashed rgba(255,255,255,0.1)' }}>
                    <span className="font-mono" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>The Hook</span>
                    <p style={{ fontSize: '1.2rem', fontWeight: 500, fontStyle: 'italic', color: '#fff' }}>{item.hook}</p>
                  </div>
                </div>

                <div>
                  <span className="font-mono" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', display: 'block', marginBottom: 24 }}>why this worked</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {item.analysis.map((point, pIdx) => (
                      <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                          {point.icon}
                        </div>
                        <div>
                          <p style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 500 }}>{point.label}</p>
                          <p style={{ fontSize: '0.85rem', color: item.color, fontFamily: 'JetBrains Mono' }}>→ {point.result}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 80, padding: 40, textAlign: 'center', background: 'linear-gradient(135deg, rgba(0,245,255,0.05), rgba(191,0,255,0.05))', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="font-display" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 12 }}>
            👉 This is my <span className="gradient-text-warm">unfair advantage.</span>
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 600, margin: '0 auto' }}>
            I don&apos;t just edit for aesthetics. I engineer content to perform within the specific constraints and opportunities of the algorithm.
          </p>
        </div>
      </div>
    </section>
  );
}
