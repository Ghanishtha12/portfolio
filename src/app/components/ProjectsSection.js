'use client';

export default function ProjectsSection() {
  const projects = [
    {
      id: "01",
      title: "Viral Freelancing Reel",
      desc: "Relatable storytelling reel built around freelancer expectations vs reality. Focused on strong hook, meme timing, and retention loops. \n\n → Reached 225K+ organic views",
      tags: ["Reels", "Storytelling", "Meme"],
      color: "var(--neon-cyan)",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
      btnText: "View Reel",
      link: "https://www.instagram.com/reel/DWEA_UWEUI-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: "02",
      title: "Script-Based Engagement Reel",
      desc: "Script-driven reel designed to hold attention till payoff. Balanced storytelling with meme pacing for higher retention.",
      tags: ["Script", "Narrative", "Hooks"],
      color: "var(--neon-pink)",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      btnText: "View Reel",
      link: "https://www.instagram.com/reel/DTz3M_5kYuB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: "03",
      title: "Relatable Content Reel",
      desc: "Audience-first content designed to trigger “this is so me” reactions. Optimized for engagement, shares, and rewatchability.",
      tags: ["POV", "Relatable", "Social"],
      color: "var(--neon-lime)",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
      btnText: "View Reel",
      link: "https://www.instagram.com/reel/DVLJsp7kbyp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    }
  ];

  return (
    <section id="projects" style={{ padding: '80px 40px', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 50 }}>
          <span className="section-label" style={{ marginBottom: 12 }}>Featured Work</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.04em' }}>
            Content that <span className="gradient-text">stops the scroll.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 60 }}>
          {projects.map((project, idx) => (
            <div key={idx} className="glass-card" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              overflow: 'hidden',
              minHeight: 450
            }}>
              {/* Project Image/Preview */}
              <div style={{ 
                position: 'relative', 
                background: `linear-gradient(135deg, ${project.color}22, var(--dark-bg))`,
                overflow: 'hidden'
              }}>
                <div className="project-number">{project.id}</div>
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  padding: 40
                }}>
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    borderRadius: 12,
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 20px ${project.color}33`,
                    transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                    transition: 'transform 0.5s ease'
                  }} className="project-img" />
                </div>
              </div>

              {/* Project Info */}
              <div style={{ padding: 60, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="skill-tag" style={{ fontSize: '0.7rem' }}>{tag}</span>
                  ))}
                </div>
                
                <h3 className="font-display" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 20 }}>
                  {project.title}
                </h3>
                
                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 40, fontSize: '1.05rem', whiteSpace: 'pre-line' }}>
                  {project.desc}
                </p>

                <div style={{ display: 'flex', gap: 20 }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-solid" style={{ padding: '12px 24px' }}>{project.btnText}</a>
                  <a href="#" className="social-icon" style={{ width: 48, height: 48 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-1 1.25-1.25 2.5-1 3.5 0 3.5 3 5.5 6 5.5-.61 1.25-.97 2.4-1 3.5V22"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div style={{ marginTop: 80, textAlign: 'center' }}>
          <a href="#" className="btn-neon">
            <span>View All Projects 🔥</span>
          </a>
        </div> */}
      </div>
      
      <style jsx>{`
        .glass-card:hover .project-img {
          transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05);
        }
      `}</style>
    </section>
  );
}
