import { useEffect, useState } from 'react';
import { motion, useScroll, useVelocity, useSpring, useTransform } from 'motion/react';

export default function MagneticScrollRails() {
  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  
  // Spring smooth velocity for magnetic elasticity
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 30,
    stiffness: 250,
  });

  // Calculate magnetic pull inward (positive offset pulls left rail rightward, right rail leftward)
  const magneticPullLeft = useTransform(smoothVelocity, [-1, 0, 1], [14, 0, 14]);
  const magneticPullRight = useTransform(smoothVelocity, [-1, 0, 1], [-14, 0, -14]);
  const railGlowOpacity = useTransform(smoothVelocity, [-1, 0, 1], [0.9, 0.3, 0.9]);

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* LEFT Magnetic Rail & Magnetic Bracket */}
      <motion.div
        style={{ x: magneticPullLeft }}
        className="fixed left-0 top-0 bottom-0 z-30 pointer-events-none hidden lg:flex flex-col items-center justify-between py-12 px-2"
      >
        {/* Top Magnetic Bracket */}
        <div className="flex flex-col items-start gap-1">
          <div className="w-4 h-[2px] bg-[#00CFF6]/60 shadow-[0_0_8px_#00CFF6]" />
          <div className="w-[2px] h-6 bg-[#00CFF6]/40" />
        </div>

        {/* Center Magnetic Core Orb */}
        <div className="relative flex flex-col items-center gap-3">
          <motion.div
            style={{ opacity: railGlowOpacity }}
            className="w-1.5 h-16 rounded-full bg-[#00CFF6] shadow-[0_0_15px_#00CFF6]"
          />
          <span className="text-[10px] font-mono tracking-widest text-[#00CFF6]/70 rotate-[-90deg] whitespace-nowrap">
            {scrollPercentage}%
          </span>
        </div>

        {/* Bottom Magnetic Bracket */}
        <div className="flex flex-col items-start gap-1">
          <div className="w-[2px] h-6 bg-[#00CFF6]/40" />
          <div className="w-4 h-[2px] bg-[#00CFF6]/60 shadow-[0_0_8px_#00CFF6]" />
        </div>
      </motion.div>

      {/* RIGHT Magnetic Rail & Magnetic Bracket */}
      <motion.div
        style={{ x: magneticPullRight }}
        className="fixed right-0 top-0 bottom-0 z-30 pointer-events-none hidden lg:flex flex-col items-center justify-between py-12 px-2"
      >
        {/* Top Magnetic Bracket */}
        <div className="flex flex-col items-end gap-1">
          <div className="w-4 h-[2px] bg-[#00CFF6]/60 shadow-[0_0_8px_#00CFF6]" />
          <div className="w-[2px] h-6 bg-[#00CFF6]/40" />
        </div>

        {/* Center Magnetic Core Orb */}
        <div className="relative flex flex-col items-center gap-3">
          <span className="text-[10px] font-mono tracking-widest text-[#00CFF6]/70 rotate-90 whitespace-nowrap uppercase">
            SCROLL
          </span>
          <motion.div
            style={{ opacity: railGlowOpacity }}
            className="w-1.5 h-16 rounded-full bg-[#00CFF6] shadow-[0_0_15px_#00CFF6]"
          />
        </div>

        {/* Bottom Magnetic Bracket */}
        <div className="flex flex-col items-end gap-1">
          <div className="w-[2px] h-6 bg-[#00CFF6]/40" />
          <div className="w-4 h-[2px] bg-[#00CFF6]/60 shadow-[0_0_8px_#00CFF6]" />
        </div>
      </motion.div>
    </>
  );
}
