import { SKILLS_DATA } from '../data/portfolioData';
import { Cpu, CheckCircle2, Zap, Layers, Sliders, Palette } from 'lucide-react';
import { motion } from 'motion/react';

export default function SkillsSection() {
  const specializedPillars = [
    {
      title: "Pacing & Story Hook",
      desc: "Fast-retention storytelling & rhythm matching.",
      icon: Zap,
    },
    {
      title: "Cinematic Color Science",
      desc: "DaVinci node graph, ACES & skin isolation.",
      icon: Sliders,
    },
    {
      title: "Kinetic Typography",
      desc: "Dynamic captions, 3D tracking & motion assets.",
      icon: Layers,
    },
    {
      title: "High-CTR Thumbnails",
      desc: "High-contrast visual design & retouching.",
      icon: Palette,
    },
  ];

  return (
    <section 
      id="skills" 
      className="py-16 md:py-24 relative bg-[#08090d] border-t border-slate-900 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00CFF6]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00CFF6]/10 border border-[#00CFF6]/30 text-xs font-semibold text-[#00CFF6] mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#00CFF6]" />
            <span>Software & Mastery</span>
          </div>
          <h2 
            id="skills-section-title"
            className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight"
          >
            Tools & <span className="text-[#00CFF6]">Skills</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Industry-standard software engineered for high-retention video production.
          </p>
        </div>

        {/* Software Icons & Cards Grid */}
        <div 
          id="skills-cards-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SKILLS_DATA.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group p-5 rounded-2xl bg-[#0e1117] border border-slate-800 hover:border-[#00CFF6]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00CFF6]/10 flex flex-col justify-between"
            >
              <div>
                {/* Header with App Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl border border-[#00CFF6]/40 bg-[#050507] flex items-center justify-center font-display font-black text-lg text-[#00CFF6]">
                      {skill.badge}
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-base text-white group-hover:text-[#00CFF6] transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {skill.fullName}
                      </p>
                    </div>
                  </div>

                  <span className="text-sm font-extrabold text-[#00CFF6] font-display">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-black rounded-full h-1.5 overflow-hidden mb-2.5 border border-slate-800">
                  <div 
                    className="h-full rounded-full bg-[#00CFF6] transition-all duration-1000"
                    style={{
                      width: `${skill.level}%`
                    }}
                  />
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-3.5 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-[#00CFF6] font-medium">
                  <CheckCircle2 className="w-3 h-3 text-[#00CFF6]" />
                  Expert Level
                </span>
                <span className="text-slate-500">
                  Daily Tool
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized Creative Pillars */}
        <div className="mt-10 pt-8 border-t border-slate-900">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specializedPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-[#0e1117] border border-slate-800 hover:border-[#00CFF6]/30 transition-all space-y-1.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00CFF6]/10 border border-[#00CFF6]/20 flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4 text-[#00CFF6]" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
