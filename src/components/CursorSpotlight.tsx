import { useEffect, useRef, useState } from 'react';

export default function CursorSpotlight() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Real-time mouse coordinate refs
  const mousePos = useRef({ x: -1000, y: -1000 });
  const lightPos = useRef({ x: -1000, y: -1000 });
  const ringPos = useRef({ x: -1000, y: -1000 });
  
  // Velocity calculation for dynamic elastic rubber-band feel
  const velocity = useRef({ x: 0, y: 0, speed: 0, angle: 0 });

  // DOM elements ref for direct high-performance GPU transforms (bypassing React re-render overhead)
  const torchWideRef = useRef<HTMLDivElement>(null);
  const torchMidRef = useRef<HTMLDivElement>(null);
  const torchCoreRef = useRef<HTMLDivElement>(null);
  const ringFollowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animFrameId: number;
    let isTracking = true;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isHovered) setIsHovered(true);

      // If initial position is offscreen, initialize smoothly
      if (ringPos.current.x === -1000) {
        ringPos.current = { x: e.clientX, y: e.clientY };
        lightPos.current = { x: e.clientX, y: e.clientY };
      }

      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // High performance 60/120fps physics loop with smooth spring/rubber LERP
    const renderLoop = () => {
      if (isTracking && mousePos.current.x !== -1000) {
        // 1. Smooth ambient torchlight trailing (snappy & responsive)
        const lightLerp = 0.22;
        lightPos.current.x += (mousePos.current.x - lightPos.current.x) * lightLerp;
        lightPos.current.y += (mousePos.current.y - lightPos.current.y) * lightLerp;

        // 2. Rubber-band / Magnetic spring trailing for the circle follower (deliberate magnetic lag)
        const ringLerp = 0.125; // Smooth rubber trailing speed
        const dx = mousePos.current.x - ringPos.current.x;
        const dy = mousePos.current.y - ringPos.current.y;
        
        ringPos.current.x += dx * ringLerp;
        ringPos.current.y += dy * ringLerp;

        // Velocity & momentum calculation
        const dist = Math.hypot(dx, dy);
        velocity.current.speed = dist;
        velocity.current.angle = Math.atan2(dy, dx) * (180 / Math.PI);

        // Dynamic rubber stretching based on distance/speed
        const stretch = Math.min(1 + dist * 0.0018, 1.35);
        const squeeze = Math.max(1 - dist * 0.0012, 0.75);

        // Direct DOM updates for ultra-smooth buttery 60fps rendering without React overhead
        if (torchWideRef.current) {
          torchWideRef.current.style.background = `radial-gradient(950px circle at ${lightPos.current.x}px ${lightPos.current.y}px, rgba(0, 207, 246, 0.18), rgba(0, 207, 246, 0.05) 50%, transparent 80%)`;
        }
        if (torchMidRef.current) {
          torchMidRef.current.style.background = `radial-gradient(420px circle at ${lightPos.current.x}px ${lightPos.current.y}px, rgba(0, 207, 246, 0.22), rgba(0, 207, 246, 0.08) 60%, transparent 80%)`;
        }
        if (torchCoreRef.current) {
          torchCoreRef.current.style.background = `radial-gradient(160px circle at ${lightPos.current.x}px ${lightPos.current.y}px, rgba(0, 207, 246, 0.28), transparent 75%)`;
        }

        if (ringFollowerRef.current) {
          ringFollowerRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) rotate(${velocity.current.angle}deg) scale(${stretch}, ${squeeze})`;
        }
      }

      animFrameId = requestAnimationFrame(renderLoop);
    };

    animFrameId = requestAnimationFrame(renderLoop);

    return () => {
      isTracking = false;
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <div 
      className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 overflow-hidden ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Wide Cyan Ambient Torchlight Glow */}
      <div
        ref={torchWideRef}
        className="absolute inset-0 will-change-[background]"
      />

      {/* Intense Mid-Core Radiant Light */}
      <div
        ref={torchMidRef}
        className="absolute inset-0 will-change-[background]"
      />

      {/* Crisp Intense Focal Core */}
      <div
        ref={torchCoreRef}
        className="absolute inset-0 will-change-[background]"
      />

      {/* Magnetic Rubber Spring Follower Orb / Ring */}
      <div
        ref={ringFollowerRef}
        className="absolute top-0 left-0 w-8 h-8 rounded-full border-[1.5px] border-[#00CFF6] bg-[#00CFF6]/15 backdrop-blur-[1px] hidden md:flex items-center justify-center will-change-transform"
        style={{
          boxShadow: '0 0 20px 4px rgba(0, 207, 246, 0.65), 0 0 40px 10px rgba(0, 207, 246, 0.25), inset 0 0 10px rgba(0, 207, 246, 0.4)',
        }}
      >
        {/* Glowing Center Micro-Core */}
        <div 
          className="w-1.5 h-1.5 rounded-full bg-[#00CFF6] shadow-[0_0_8px_#00CFF6]" 
        />
      </div>
    </div>
  );
}
