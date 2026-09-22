import { WORKFLOW_STEPS } from '../data/portfolioData';
import { GitBranch } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProcessSection() {
  return (
    <section 
      id="workflow" 
      className="py-16 md:py-20 relative bg-[#050507] border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00CFF6]/10 border border-[#00CFF6]/30 text-xs font-semibold text-[#00CFF6] mb-3">
            <GitBranch className="w-3.5 h-3.5 text-[#00CFF6]" />
            <span>Workflow</span>
          </div>
          <h2 
            id="workflow-title"
            className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight"
          >
            How We <span className="text-[#00CFF6]">Work</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            A seamless 4-step process from raw footage to 4K master delivery.
          </p>
        </div>

        {/* Workflow Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {WORKFLOW_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              id={`step-${step.step}`}
              className="relative p-5 rounded-2xl bg-[#0e1117] border border-slate-800 hover:border-[#00CFF6]/40 transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Step Number */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-black text-3xl text-[#00CFF6]">
                    {step.step}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#141822] border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400">
                    0{idx + 1}
                  </div>
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-[#00CFF6] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mt-1.5">
                  {step.desc}
                </p>
              </div>

              {/* Progress Connector */}
              <div className="mt-4 pt-2.5 border-t border-slate-800 flex items-center text-[11px] font-semibold text-slate-500 group-hover:text-[#00CFF6] transition-colors">
                <span>Phase 0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
