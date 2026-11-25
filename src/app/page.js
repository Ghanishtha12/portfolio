'use client';

import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import LivingPortraitEngine from './components/LivingPortraitEngine';

export default function Home() {
  return (
    <main className="main-wrapper" style={{ position: 'relative', overflowX: 'clip', backgroundColor: '#0C0C0C' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <LivingPortraitEngine />
    </main>
  );
}
