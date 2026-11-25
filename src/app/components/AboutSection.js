'use client';
import { useEffect, useRef } from 'react';
import AboutMonogram from './illustrations/AboutMonogram';
import { siteConfig } from '@/data/portfolio';

export default function AboutSection() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="section" ref={ref} style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="about-grid">
          {/* Column 1: Vector / Typographic Monogram Art Block */}
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
            <AboutMonogram />
          </div>

          {/* Column 2: Short human copy + engineering background */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 24, justifyContent: 'center' }}>
            <span className="section-label">Production Philosophy</span>
            <h2 className="display-md">
              Behind the camera. <em className="accent">Ahead of the feed.</em>
            </h2>

            <p className="body-lg" style={{ color: 'var(--text)' }}>
              I am a Digital Media Strategist &amp; Content Producer with hands-on experience leading end-to-end content lifecycles. I brainstorm the ideas, track real-time trends, write the scripts, direct on-location shoots (framing, camera, lighting, audio), and edit every frame.
            </p>

            <p className="body-lg">
              I am not an on-screen influencer — my job is to direct and produce content for brands that captivates audiences and builds organic discoverability. With an academic background in Computer Applications (BCA) and an MBA in progress, I combine technical engineering discipline with creative storytelling.
            </p>

            <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 20, marginTop: 8 }}>
              <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.5 }}>
                &ldquo;Great short-form video requires full-pipeline command: knowing what to shoot on set, how to cut in the edit, and why the algorithm will distribute it.&rdquo;
              </p>
            </div>

            <div style={{ display: 'flex', gap: 20, marginTop: 12 }}>
              <a href="#contact" className="btn-primary">
                Contact details ↗
              </a>
              <a
                href="/resume.pdf"
                download="Ghanishtha_Kapoor_Resume.pdf"
                className="btn-outline"
              >
                Download CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
