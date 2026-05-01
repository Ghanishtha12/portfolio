"use client";

import { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const response = await fetch("https://formspree.io/f/mjglkeop", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    setSubmitted(true);
    e.target.reset();
  } else {
    alert("Something went wrong. Try again.");
  }
};

  return (
    <section id="contact" style={{ padding: '80px 40px', position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-pink" style={{ width: 600, height: 600, bottom: '-20%', right: '-10%', opacity: 0.08 }} />
      
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 80, alignItems: 'center' }}>
        <div>
          <span className="section-label" style={{ marginBottom: 12 }}>Contact</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
            Got a brand that needs content people <span className="gradient-text">don’t scroll past?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: 32, maxWidth: 450 }}>
            Let’s build something that actually works. Drop me a message. 💌
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <a href="mailto:kapoorghanishtha2005@gmail.com" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 16 }}>
              <div className="social-icon" style={{ background: 'var(--neon-cyan)22', color: 'var(--neon-cyan)', border: '1px solid var(--neon-cyan)44' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <span className="font-mono" style={{ fontSize: '1.1rem', color: '#fff' }}>kapoorghanishtha2005@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="glass-card" style={{ padding: 48, position: 'relative' }}>
          {submitted ? (
            <div className="animate-fade-up" style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: 20 }}>🚀</div>
              <h3 className="font-display" style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 12 }}>Message Sent!</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)' }}>Thanks for reaching out. I&apos;ll get back to you faster than a viral trend peaks. ✨</p>
            </div>
          ) : (
        
           <form 
  onSubmit={handleSubmit}
  style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
>
  
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <label className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
        Full Name
      </label>
      <input 
        type="text" 
        name="name"
        className="input-field" 
        placeholder="John Doe" 
        required 
      />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <label className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
        Email
      </label>
      <input 
        type="email" 
        name="email"
        className="input-field" 
        placeholder="john@example.com" 
        required 
      />
    </div>
  </div>

  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <label className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
      Subject
    </label>
    <input 
      type="text" 
      name="subject"
      className="input-field" 
      placeholder="Project Inquiry" 
      required 
    />
  </div>

  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <label className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
      Message
    </label>
    <textarea 
      name="message"
      className="input-field" 
      rows="5" 
      placeholder="Tell me about your project..." 
      required 
    ></textarea>
  </div>

  {/* Optional redirect after submit */}
  {/* <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" /> */}

  <button type="submit" className="btn-solid" style={{ width: '100%', padding: '18px' }}>
    Send Message ✨
  </button>
</form>
          )}
        </div>
      </div>

      <div style={{ marginTop: 60, textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div className="neon-divider" style={{ width: '40%', marginBottom: 40 }} />
        <h2 className="font-display animate-fade-up" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.04em' }}>
          I don’t just <span style={{ color: 'rgba(255,255,255,0.2)', WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>make content.</span> <br />
          I make people <span className="gradient-text-warm pulse-glow" style={{ padding: '0 10px' }}>watch it.</span>
        </h2>
      </div>
    </section>
  );
}
