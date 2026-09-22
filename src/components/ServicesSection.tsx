import { SERVICES_DATA } from '../data/portfolioData';
import { Sparkles, Check, ArrowRight, Clock, Flame, Youtube, Smartphone, Layers, Volume2, Image } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectServiceForContact }: ServicesSectionProps) {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Youtube': return <Youtube className="w-5 h-5 text-[#00CFF6]" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-[#00CFF6]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#00CFF6]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#00CFF6]" />;
      case 'Volume2': return <Volume2 className="w-5 h-5 text-[#00CFF6]" />;
      case 'Image': return <Image className="w-5 h-5 text-[#00CFF6]" />;
      default: return <Sparkles className="w-5 h-5 text-[#00CFF6]" />;
    }
  };

  return (
    <section 
      id="services" 
      className="py-16 md:py-24 relative bg-[#050507] border-t border-slate-900"
    >
      {/* Ambient background lights */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-[#00CFF6]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00CFF6]/10 border border-[#00CFF6]/30 text-xs font-semibold text-[#00CFF6] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00CFF6]" />
            <span>Creative Services</span>
          </div>
          <h2 
            id="services-section-title"
            className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight"
          >
            Services & <span className="text-[#00CFF6]">Solutions</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            End-to-end post-production packages tailored to creators and brands.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          id="services-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
              id={`service-card-${service.id}`}
              className={`relative rounded-2xl p-6 bg-[#0e1117] border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl ${
                service.popular 
                  ? 'border-[#00CFF6]/50 shadow-[#00CFF6]/10' 
                  : 'border-slate-800 hover:border-[#00CFF6]/40 hover:shadow-[#00CFF6]/10'
              }`}
            >
              {/* Popular Tag */}
              {service.popular && (
                <div className="absolute -top-2.5 right-5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#00CFF6] text-black shadow-md flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-black" />
                  <span>POPULAR</span>
                </div>
              )}

              <div>
                {/* Icon Box */}
                <div className="w-11 h-11 rounded-xl bg-black border border-slate-800 flex items-center justify-center mb-4">
                  {getIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-white font-display">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Features Checklist */}
                <div className="mt-4 pt-4 border-t border-slate-800 space-y-2">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#00CFF6]/20 text-[#00CFF6] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Turnaround & Action Button */}
              <div className="mt-6 pt-3 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#00CFF6]" />
                    Delivery:
                  </span>
                  <span className="font-semibold text-slate-200">
                    {service.turnaround}
                  </span>
                </div>

                <a
                  href="#contact"
                  onClick={() => onSelectServiceForContact(service.title)}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 group cursor-pointer ${
                    service.popular
                      ? 'bg-[#00CFF6] text-black hover:bg-[#20d8fc] shadow-md shadow-[#00CFF6]/20'
                      : 'bg-[#141822] text-white hover:bg-[#1a202c] border border-slate-700'
                  }`}
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
