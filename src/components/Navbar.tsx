import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Film, Play, Menu, X, Sparkles, MessageSquare, Download } from 'lucide-react';

interface NavbarProps {
  onOpenShowreel: () => void;
  onOpenExportModal: () => void;
  onOpenCvModal: () => void;
}

export default function Navbar({ onOpenShowreel, onOpenExportModal, onOpenCvModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Video Projects', href: '#projects' },
    { name: 'Before & After', href: '#before-after' },
    { name: 'Graphic Design', href: '#graphic-design' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050507]/95 backdrop-blur-xl border-b border-[#00CFF6]/20 py-3 shadow-2xl shadow-black/80' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          id="brand-logo-link"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-[#00CFF6] to-[#0088cc] p-[2px] shadow-lg shadow-[#00CFF6]/25 group-hover:shadow-[#00CFF6]/50 group-hover:scale-105 transition-all duration-300">
            <div className="w-full h-full bg-[#050507] rounded-[10px] overflow-hidden flex items-center justify-center">
              <img
                src={PERSONAL_INFO.avatarImage}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          <div>
            <div className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
              <span>{PERSONAL_INFO.name}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#00CFF6] shadow-[0_0_8px_#00CFF6]"></span>
            </div>
            <p className="text-[11px] font-semibold tracking-wider text-[#00CFF6] uppercase">
              Video Editor & Motion Designer
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-link-${link.href.replace('#', '')}`}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Download CV Button */}
          <button
            onClick={onOpenCvModal}
            id="nav-download-cv-btn"
            title="View & Download CV / Resume (PDF)"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#10141e] border border-slate-700/80 hover:border-[#00CFF6]/70 text-slate-200 hover:text-white transition-all cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(0,207,246,0.18)]"
          >
            <Download className="w-3.5 h-3.5 text-[#00CFF6]" />
            <span>Download CV</span>
          </button>

          {/* Quick Showreel Button */}
          <button
            onClick={onOpenShowreel}
            id="nav-showreel-btn"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#00CFF6]/10 border border-[#00CFF6]/40 text-[#00CFF6] hover:bg-[#00CFF6]/20 hover:border-[#00CFF6] transition-all cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-[#00CFF6] text-[#00CFF6]" />
            <span>Showreel</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-dropdown"
          className="lg:hidden bg-[#0a0b10]/98 backdrop-blur-2xl border-b border-[#00CFF6]/20 px-5 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-in slide-in-from-top-2"
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-[#00CFF6]/10 hover:text-[#00CFF6] transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-[#111622] border border-slate-700 text-slate-200 hover:text-white cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#00CFF6]" />
              <span>Download CV (PDF)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShowreel();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-[#00CFF6]/10 border border-[#00CFF6]/40 text-[#00CFF6]"
            >
              <Play className="w-4 h-4 fill-[#00CFF6] text-[#00CFF6]" />
              <span>Watch Showreel</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
