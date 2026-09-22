import { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Play, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'commercial', label: 'Commercials' },
    { id: 'reels', label: 'Reels & Shorts' },
    { id: 'motion', label: 'VFX & Motion' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : activeCategory === 'reels'
    ? PROJECTS_DATA.filter((p) => p.category === 'reels' || p.category === 'shorts')
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section 
      id="projects" 
      className="py-16 md:py-24 relative bg-[#06070a] border-t border-slate-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#00CFF6]/6 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#00CFF6]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00CFF6]/10 border border-[#00CFF6]/30 text-xs font-semibold text-[#00CFF6] mb-3 shadow-[0_0_15px_rgba(0,207,246,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#00CFF6]" />
            <span>Featured Portfolio</span>
          </div>
          <h2 
            id="projects-section-title"
            className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight"
          >
            Featured <span className="text-[#00CFF6]">Works</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div 
          id="project-filter-tabs"
          className="flex flex-wrap items-center justify-center gap-2.5 mb-12"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                id={`filter-tab-${cat.id}`}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#00CFF6] text-black font-bold shadow-[0_0_20px_rgba(0,207,246,0.4)] scale-105'
                    : 'bg-[#0e1117] text-slate-300 border border-slate-800/90 hover:border-[#00CFF6]/50 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Sleek Modern Video Cards Grid with Rotating Glowing Light Beam */}
        <div 
          id="projects-grid-container"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 items-start"
        >
          {filteredProjects.map((project, idx) => {
            const isVertical = project.aspectRatio === '9:16';
            const isSquare = project.aspectRatio === '1:1';
            const isFourFive = project.aspectRatio === '4:5';

            const aspectClass = isVertical 
              ? 'aspect-[9/16]' 
              : isSquare 
              ? 'aspect-square' 
              : isFourFive 
              ? 'aspect-[4/5]' 
              : 'aspect-video';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer"
              >
                {/* Sleek Thin Border Outer Container with Continuous Rotating Cyan Light Aura */}
                <div className="relative rounded-2xl p-[1.5px] overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_35px_rgba(0,207,246,0.35)] shadow-xl bg-[#0e1117]">
                  
                  {/* Rotating Conic Light Beam (চারিপাশে ঘূর্ণায়মান দৃশ্যমান আলো) */}
                  <div className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_260deg,#00CFF6_320deg,#ffffff_355deg,#00CFF6_360deg)] animate-border-beam pointer-events-none opacity-90 group-hover:opacity-100" />

                  {/* Inner Card Screen Area */}
                  <div className="relative rounded-[15px] bg-[#07090e] overflow-hidden flex flex-col h-full z-10">
                    
                    {/* Video Display Container - Clean edge-to-edge thumbnail */}
                    <div className={`relative ${aspectClass} w-full overflow-hidden bg-black flex items-center justify-center`}>
                      
                      {/* Video Thumbnail */}
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                      />

                      {/* Subtle Ambient Hover Glow */}
                      <div className="absolute inset-0 bg-[#00CFF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Card Bottom Meta with Title */}
                    <div className="p-3.5 bg-[#090c13] border-t border-slate-800/80 flex items-center justify-between">
                      <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-[#00CFF6] transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-slate-400 shrink-0 ml-2">
                        {project.duration}
                      </span>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
