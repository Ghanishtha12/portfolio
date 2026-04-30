'use client';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Content & Strategy",
      skills: [
        { name: "Hook Writing", level: "95%", tagClass: "" },
        { name: "Reel Scripting", level: "90%", tagClass: "skill-tag-pink" },
        { name: "Storytelling", level: "85%", tagClass: "skill-tag-purple" },
        { name: "Trend Analysis", level: "92%", tagClass: "skill-tag-lime" }
      ]
    },
    {
      title: "Execution",
      skills: [
        { name: "Video Editing", level: "90%", tagClass: "skill-tag-purple" },
        { name: "Sound Sync & Pacing", level: "88%", tagClass: "" },
        { name: "Meme Integration", level: "85%", tagClass: "skill-tag-pink" },
        { name: "Visual Storytelling", level: "87%", tagClass: "skill-tag-lime" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Premiere Pro / CapCut", level: "90%", tagClass: "skill-tag-pink" },
        { name: "Canva", level: "85%", tagClass: "skill-tag-purple" },
        { name: "Instagram Insights", level: "88%", tagClass: "" },
        { name: "AI Tools (Used smartly 😉)", level: "100%", tagClass: "skill-tag-lime" }
      ]
    }
  ];

  return (
    <section id="skills" style={{ padding: '80px 40px', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 50, textAlign: 'center' }}>
          <span className="section-label" style={{ justifyContent: 'center', marginBottom: 12 }}>Skills & Tools</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            My <span className="gradient-text">Creative Stack</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: 12, fontFamily: 'JetBrains Mono' }}>
            {`Things I actually use to make content work`}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-card" style={{ padding: 40 }}>
              <h3 className="font-display" style={{ fontSize: '1.5rem', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--neon-cyan)', boxShadow: '0 0 10px var(--neon-cyan)' }} />
                {cat.title}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, alignItems: 'center' }}>
                      <span className={`skill-tag ${skill.tagClass}`}>{skill.name}</span>
                      <span className="font-mono" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>{skill.level}</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: skill.level }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee effect for tools */}
        <div style={{ marginTop: 60, overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative' }}>
          <div className="animate-marquee" style={{ display: 'inline-block' }}>
            <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
              {["SOFTWARE ENGINEERING", "ALGORITHMS", "PREMIERE PRO", "CAPCUT", "CANVA", "AFTER EFFECTS", "GPT-4", "STORYTELLING", "HOOKS", "ENGAGEMENT"].map((tool, i) => (
                <span key={i} className="font-display" style={{ 
                  fontSize: '4rem', fontWeight: 800, opacity: 0.05, 
                  WebkitTextStroke: '1px rgba(255,255,255,0.5)', 
                  color: 'transparent' 
                }}>
                  {tool}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {["SOFTWARE ENGINEERING", "ALGORITHMS", "PREMIERE PRO", "CAPCUT", "CANVA", "AFTER EFFECTS", "GPT-4", "STORYTELLING", "HOOKS", "ENGAGEMENT"].map((tool, i) => (
                <span key={i+'dup'} className="font-display" style={{ 
                  fontSize: '4rem', fontWeight: 800, opacity: 0.05, 
                  WebkitTextStroke: '1px rgba(255,255,255,0.5)', 
                  color: 'transparent' 
                }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
