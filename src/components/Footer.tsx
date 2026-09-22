import { PERSONAL_INFO } from '../data/portfolioData';
import { Film, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onOpenExportModal: () => void;
  onOpenCvModal: () => void;
}

interface SocialLinkItem {
  id: string;
  name: string;
  url: string;
  glowColor: string;
  icon: React.ReactNode;
}

export default function Footer({ onOpenExportModal, onOpenCvModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks: SocialLinkItem[] = [
    {
      id: 'social-youtube',
      name: 'YouTube',
      url: PERSONAL_INFO.socials.youtube,
      glowColor: 'rgba(255, 0, 0, 0.5)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      id: 'social-facebook',
      name: 'Facebook',
      url: PERSONAL_INFO.socials.facebook,
      glowColor: 'rgba(24, 119, 242, 0.6)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      id: 'social-instagram',
      name: 'Instagram',
      url: PERSONAL_INFO.socials.instagram,
      glowColor: 'rgba(225, 48, 108, 0.6)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      id: 'social-behance',
      name: 'Behance',
      url: PERSONAL_INFO.socials.behance,
      glowColor: 'rgba(0, 87, 255, 0.6)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.171 3-3.957 0-5.555-3.074-5.555-6 0-3.405 2.108-6 5.555-6 4.316 0 5.445 3.328 5.445 6.002 0 .438-.035.795-.054.998h-8.082c.071 1.611 1.112 2.918 2.691 2.918 1.438 0 2.279-.76 2.658-1.918h2.513zm-5.006-4.207c-.035-1.127-.678-2.5-2.203-2.5-1.438 0-2.189 1.238-2.293 2.5h4.496zM0 4h7.58c3.275 0 4.887 1.418 4.887 3.654 0 1.344-.658 2.373-1.844 2.871 1.543.438 2.377 1.699 2.377 3.332 0 2.607-2.072 4.143-5.188 4.143H0V4zm3.02 5.094h3.691c1.281 0 2.109-.533 2.109-1.523 0-1.025-.783-1.5-2.109-1.5H3.02v3.023zm0 6.844h3.906c1.479 0 2.457-.611 2.457-1.74 0-1.166-.979-1.777-2.457-1.777H3.02v3.517z"/>
        </svg>
      )
    },
    {
      id: 'social-linkedin',
      name: 'LinkedIn',
      url: PERSONAL_INFO.socials.linkedin,
      glowColor: 'rgba(0, 119, 181, 0.6)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      id: 'social-tiktok',
      name: 'TikTok',
      url: PERSONAL_INFO.socials.tiktok,
      glowColor: 'rgba(0, 242, 234, 0.6)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.77 1.81-.02 3.28-1.46 3.44-3.26.09-1.01.07-2.02.07-3.03V.02z"/>
        </svg>
      )
    },
    {
      id: 'social-twitter',
      name: 'X (Twitter)',
      url: PERSONAL_INFO.socials.twitter,
      glowColor: 'rgba(255, 255, 255, 0.5)',
      icon: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      id: 'social-discord',
      name: 'Discord',
      url: PERSONAL_INFO.socials.discord,
      glowColor: 'rgba(88, 101, 242, 0.6)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      )
    },
    {
      id: 'social-whatsapp',
      name: 'WhatsApp',
      url: PERSONAL_INFO.socials.whatsapp,
      glowColor: 'rgba(37, 211, 102, 0.6)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      )
    },
    {
      id: 'social-telegram',
      name: 'Telegram',
      url: PERSONAL_INFO.socials.telegram,
      glowColor: 'rgba(34, 158, 217, 0.6)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.941z"/>
        </svg>
      )
    }
  ];

  return (
    <footer 
      id="main-footer"
      className="bg-[#050507] border-t border-slate-900 pt-10 pb-10 text-slate-400 relative overflow-hidden"
    >
      {/* Dynamic Ambient Background Glow in Footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#00CFF6]/8 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dedicated Highlighted Social Channels Row with Back-To-Top */}
        <div className="pb-8 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-between w-full">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center sm:text-left">
              Connect & Follow Across Platforms
            </div>
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              className="p-2.5 rounded-xl bg-[#0e1117] border border-slate-800 hover:border-[#00CFF6]/60 text-slate-300 hover:text-[#00CFF6] hover:shadow-[0_0_20px_rgba(0,207,246,0.35)] transition-all cursor-pointer"
              title="Scroll to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          {/* Social Icons Strip with Glowing Zoom-In Effects */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4.5 pt-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.id}
                id={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                title={social.name}
                aria-label={social.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0e1117] border border-slate-800/90 text-slate-300 hover:text-white transition-all duration-300 ease-out cursor-pointer hover:scale-125 hover:-translate-y-2 hover:border-[#00CFF6] hover:bg-[#050507] hover:shadow-[0_0_25px_rgba(0,207,246,0.7),0_0_50px_rgba(0,207,246,0.3)] shadow-[0_0_12px_rgba(0,207,246,0.08)]"
              >
                {/* Glowing Background Radial Halo */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${social.glowColor} 0%, transparent 70%)`
                  }}
                />

                {/* Crisp Vector SVG Icon with Hover Neon Accent */}
                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#00CFF6]">
                  {social.icon}
                </div>

                {/* Subtle Tooltip Label */}
                <span className="absolute -top-8 px-2 py-0.5 rounded-md bg-[#0e1117] border border-[#00CFF6]/40 text-[10px] font-bold text-[#00CFF6] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Note */}
        <div className="pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Crafted for visual impact.
          </p>
          <p className="flex items-center gap-1.5 text-slate-400 justify-center">
            <span>High-Retention Video Editing</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00CFF6]"></span>
            <span>4K Ready</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
