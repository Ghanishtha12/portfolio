'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import HowIThinkSection from './components/HowIThinkSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main style={{ position: 'relative', overflowX: 'hidden' }}>
      <Navbar />
      
      <HeroSection />
      
      <div style={{ position: 'relative', zIndex: 2 }}>
        <AboutSection />
        
        <div className="neon-divider" style={{ width: '80%' }} />
        
        <SkillsSection />
        
        <div className="neon-divider" style={{ width: '80%' }} />
        
        <ProjectsSection />

        <div className="neon-divider" style={{ width: '80%' }} />

        <HowIThinkSection />
        
        <div className="neon-divider" style={{ width: '80%' }} />
        
        <ExperienceSection />
        
        <div className="neon-divider" style={{ width: '80%' }} />
        
        <ContactSection />
      </div>
      
      <Footer />
      
      {/* Background elements */}
      <div style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 1, 
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        <div className="orb orb-cyan" style={{ width: 800, height: 800, top: '20%', left: '-10%', opacity: 0.05 }} />
        <div className="orb orb-pink" style={{ width: 600, height: 600, bottom: '10%', right: '-5%', opacity: 0.05 }} />
      </div>
    </main>
  );
}
