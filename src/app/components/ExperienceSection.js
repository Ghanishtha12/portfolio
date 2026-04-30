'use client';

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Freelance / Personal Projects",
      role: "Content Creator & Video Editor",
      period: "2023 — Present",
      desc: "Created high-engagement Instagram reels focused on storytelling, trends, and audience retention. Achieved up to 225K+ organic views through strong hooks and structured content. Worked on scripting, editing, and concept development end-to-end.",
      tags: ["Storytelling", "Virality", "Reel Strategy"]
    }
  ];

  return (
    <section id="experience" style={{ padding: '80px 40px', position: 'relative' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 50 }}>
          <span className="section-label" style={{ marginBottom: 12 }}>The Journey</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Work <span className="gradient-text-lime">History</span>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          <div className="timeline-line" />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
            {experiences.map((exp, idx) => (
              <div key={idx} className="animate-fade-up" style={{ position: 'relative', paddingLeft: 40, opacity: 0, animationDelay: `${idx * 0.2}s` }}>
                <div className="timeline-dot" />
                
                <div className="glass-card" style={{ padding: 40 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
                    <div>
                      <h3 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 4 }}>{exp.role}</h3>
                      <p style={{ color: 'var(--neon-cyan)', fontFamily: 'JetBrains Mono', fontSize: '0.9rem' }}>{exp.company}</p>
                    </div>
                    <div className="skill-tag" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      {exp.period}
                    </div>
                  </div>
                  
                  <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24 }}>
                    {exp.desc}
                  </p>
                  
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {exp.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="font-mono" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
