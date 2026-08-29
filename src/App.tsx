import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { AnimatedBackground } from './components/common/AnimatedBackground';
import { JsonLd } from './components/seo/JsonLd';
import { Navbar } from './components/navigation/Navbar';
import { CommandPalette } from './components/navigation/CommandPalette';
import { DownloadCvModal } from './components/ui/DownloadCvModal';
import { ResumeModal } from './components/ui/ResumeModal';

// Sections
import { Hero } from './sections/Hero';
import { CareerSnapshot } from './sections/CareerSnapshot';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Architecture } from './sections/Architecture';
import { Domains } from './sections/Domains';
import { Projects } from './sections/Projects';
import { Principles } from './sections/Principles';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export function App() {
  const { isDark, toggleTheme } = useTheme();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isDownloadCvModalOpen, setIsDownloadCvModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const sectionIds = [
    'hero',
    'snapshot',
    'about',
    'skills',
    'experience',
    'architecture',
    'domains',
    'projects',
    'principles',
    'education',
    'contact',
  ];

  const activeSection = useScrollSpy(sectionIds, 150);

  const handleOpenDownloadModal = () => {
    setIsDownloadCvModalOpen(true);
  };

  return (
    <div className="relative min-h-screen selection:bg-sky-500/30 selection:text-sky-200">
      {/* SEO Structured Data */}
      <JsonLd />

      {/* Global Animated Background Grid & Glowing Orbs */}
      <AnimatedBackground />

      {/* Sticky Blur Navigation */}
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onResumeClick={handleOpenDownloadModal}
      />

      {/* Main Single Page Content */}
      <main className="relative z-10">
        <Hero onResumeClick={handleOpenDownloadModal} />
        <CareerSnapshot />
        <About />
        <Skills />
        <Experience />
        <Architecture />
        <Domains />
        <Projects />
        <Principles />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Ctrl + K Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onToggleTheme={toggleTheme}
        isDark={isDark}
      />

      {/* Download CV Format Selection Modal (PDF / DOCX) */}
      <DownloadCvModal
        isOpen={isDownloadCvModalOpen}
        onClose={() => setIsDownloadCvModalOpen(false)}
        onOpenFullPreview={() => setIsResumeModalOpen(true)}
      />

      {/* Full Curriculum Vitae Modal (Preview / Print / Download) */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
