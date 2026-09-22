import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import GraphicDesignSection from './components/GraphicDesignSection';
import VideoModal from './components/VideoModal';
import BeforeAfterSection from './components/BeforeAfterSection';
import ContactSection from './components/ContactSection';
import SingleFileExportModal from './components/SingleFileExportModal';
import CvModal from './components/CvModal';
import Footer from './components/Footer';
import CursorSpotlight from './components/CursorSpotlight';
import MagneticScrollRails from './components/MagneticScrollRails';
import { Project } from './types';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  // Modal states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const handleOpenShowreel = () => {
    setIsShowreelOpen(true);
  };

  const showreelProject: Project = {
    id: 'showreel-2026',
    title: '2026 Official Creative Showreel',
    category: 'commercial',
    categoryLabel: '2026 Showreel Master',
    thumbnail: PERSONAL_INFO.showreelCoverImage,
    videoUrl: PERSONAL_INFO.showreelVideoUrl,
    aspectRatio: '16:9',
    duration: '01:45',
    client: 'Worldwide Highlights',
    views: '2.5M+',
    description: 'A curated reel of commercial video edits, DaVinci Resolve color grading, dynamic 9:16 reels, speed ramping, 3D kinetic typography and sound design highlights.',
    softwareUsed: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Blender', 'Photoshop', 'Audition'],
    featured: true
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#e0e2ec] font-sans selection:bg-[#00CFF6] selection:text-black relative">
      
      {/* Interactive Cursor Spotlight Glow Effect */}
      <CursorSpotlight />

      {/* Magnetic Responsive Scroll Rails Effect on Sides */}
      <MagneticScrollRails />

      {/* Navigation Bar */}
      <Navbar 
        onOpenShowreel={handleOpenShowreel}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenShowreel={handleOpenShowreel} />

        {/* 2. Showcase / Video Projects Section */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. Before & After Color Grading Comparison Slider */}
        <BeforeAfterSection />

        {/* 4. Graphic Design & Photo Manipulation Showcase */}
        <GraphicDesignSection />

        {/* 5. Contact Section & Social Media */}
        <ContactSection selectedService="Video & Design Project" />
      </main>

      {/* Footer */}
      <Footer 
        onOpenExportModal={() => setIsExportModalOpen(true)} 
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Video Player Modal (for individual projects) */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Video Player Modal (for main showreel) */}
      {isShowreelOpen && (
        <VideoModal
          project={showreelProject}
          onClose={() => setIsShowreelOpen(false)}
        />
      )}

      {/* Curriculum Vitae (PDF) Modal with View, Download & Print */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      {/* Standalone 1-File HTML Code Export Modal */}
      <SingleFileExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />

    </div>
  );
}
