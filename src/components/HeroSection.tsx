import { PERSONAL_INFO } from '../data/portfolioData';
import { Play, Clapperboard, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenShowreel: () => void;
}

export default function HeroSection({ onOpenShowreel }: HeroSectionProps) {
  return (
    <section 
      id="hero"
      className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] bg-[#00CFF6]/8 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            id="hero-main-title"
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]"
          >
            Crafting <span className="text-[#00CFF6]">Viral Stories</span> & Visuals
          </motion.h1>
        </div>

        {/* Hero Showreel Visual Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 sm:mt-14 max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl p-[1px] bg-[#0e1117] border border-[#00CFF6]/30 shadow-2xl group">
            <div className="relative rounded-[23px] overflow-hidden bg-[#050507] aspect-video sm:aspect-[21/9] flex items-center justify-center">
              
              {/* Background Cover Image */}
              <img
                src={PERSONAL_INFO.showreelCoverImage}
                alt="Showreel Preview"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-700 filter contrast-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-black/40 to-transparent" />

              {/* Floating Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/80 backdrop-blur-md border border-[#00CFF6]/40 text-[#00CFF6] flex items-center gap-1.5">
                  <Clapperboard className="w-3.5 h-3.5 text-[#00CFF6]" />
                  <span>2026 SHOWREEL</span>
                </span>
              </div>

              {/* Center Play Trigger */}
              <div className="relative z-10 flex flex-col items-center gap-2.5">
                <button
                  onClick={onOpenShowreel}
                  id="hero-play-showreel-center-btn"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#00CFF6] text-black flex items-center justify-center shadow-xl shadow-[#00CFF6]/40 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  aria-label="Play Showreel"
                >
                  <Play className="w-6 h-6 fill-black text-black ml-0.5" />
                </button>
                <div className="text-center">
                  <p className="text-sm font-bold text-white">Play 2026 Showreel</p>
                  <p className="text-xs text-[#00CFF6]">Duration: 01:45 • 4K DCI</p>
                </div>
              </div>

              {/* Bottom Feature Badges */}
              <div className="absolute bottom-3.5 left-4 right-4 hidden md:flex items-center justify-between text-xs text-slate-300 z-10 px-2">
                <div className="flex items-center gap-4 text-slate-300">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00CFF6]" /> Dynamic Pacing</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00CFF6]" /> Color Grading</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00CFF6]" /> Custom Sound FX</span>
                </div>
                <div className="text-[#00CFF6] font-semibold">
                  ★ 5.0 Rating
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
