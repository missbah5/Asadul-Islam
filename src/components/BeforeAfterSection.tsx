import { useState, useRef, useEffect, useCallback } from 'react';
import { BEFORE_AFTER_DATA } from '../data/portfolioData';
import { Sliders, Sparkles, Play, Pause, RefreshCw } from 'lucide-react';

export default function BeforeAfterSection() {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoScanning, setIsAutoScanning] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const currentPreset = BEFORE_AFTER_DATA[activePresetIndex];

  // Auto-scan slider animation effect
  useEffect(() => {
    let animationFrameId: number;
    let direction = 1;

    if (isAutoScanning) {
      const step = () => {
        setSliderPosition((prev) => {
          let next = prev + 0.35 * direction;
          if (next >= 88) {
            direction = -1;
            next = 88;
          } else if (next <= 12) {
            direction = 1;
            next = 12;
          }
          return next;
        });
        animationFrameId = requestAnimationFrame(step);
      };
      animationFrameId = requestAnimationFrame(step);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isAutoScanning]);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoScanning(false);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoScanning(false);
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <section 
      id="before-after" 
      className="py-16 md:py-24 relative bg-[#050507] border-t border-slate-900 overflow-hidden"
    >
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00CFF6]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00CFF6]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean Title Only */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 
            id="before-after-title"
            className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight"
          >
            Before & After <span className="text-[#00CFF6]">Grading</span>
          </h2>
        </div>

        {/* Preset Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {BEFORE_AFTER_DATA.map((preset, idx) => (
            <button
              key={preset.id}
              onClick={() => {
                setActivePresetIndex(idx);
                setSliderPosition(50);
                setIsAutoScanning(false);
              }}
              id={`preset-btn-${preset.id}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activePresetIndex === idx
                  ? 'bg-[#00CFF6] text-black font-bold shadow-lg shadow-[#00CFF6]/25 scale-[1.02]'
                  : 'bg-[#0e1117] text-slate-300 border border-slate-800 hover:border-[#00CFF6]/40 hover:text-white'
              }`}
            >
              <span>{preset.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Single-Frame Split Comparison Canvas with Rotating Glowing Light Beam */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-[1.5px] overflow-hidden bg-[#0e1117] shadow-2xl shadow-[#00CFF6]/20">
            
            {/* Rotating Conic Light Beam Aura */}
            <div className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_260deg,#00CFF6_320deg,#ffffff_355deg,#00CFF6_360deg)] animate-border-beam pointer-events-none opacity-90" />

            <div 
              ref={containerRef}
              id="before-after-slider-container"
              className="relative rounded-[22px] overflow-hidden bg-black aspect-[16/9] select-none cursor-ew-resize touch-none z-10 shadow-inner"
            >
              {currentPreset.isVideo && currentPreset.beforeVideoUrl && currentPreset.afterVideoUrl ? (
                /* --- VIDEO SPLIT SLIDER --- */
                <>
                  {/* Layer 1: After (Graded Master) Video - Full Base */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <iframe
                      src={`${currentPreset.afterVideoUrl}?autoplay=1&muted=1&loop=1&controls=0`}
                      title={currentPreset.afterLabel}
                      className="w-full h-full border-0 pointer-events-none"
                      allow="fullscreen; autoplay"
                    />
                  </div>

                  {/* Layer 2: Before (RAW / Unedited) Video - Clipped Overlay */}
                  <div 
                    className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                    style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                  >
                    <iframe
                      src={`${currentPreset.beforeVideoUrl}?autoplay=1&muted=1&loop=1&controls=0`}
                      title={currentPreset.beforeLabel}
                      className="w-full h-full border-0 pointer-events-none"
                      allow="fullscreen; autoplay"
                    />
                  </div>
                </>
              ) : (
                /* --- IMAGE SPLIT SLIDER --- */
                <>
                  {/* Layer 1: After (Graded) Image - Full Base */}
                  <img
                    src={currentPreset.afterImage}
                    alt={currentPreset.afterLabel}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none filter contrast-110"
                  />

                  {/* Layer 2: Before (RAW LOG) Image - Clipped Overlay */}
                  <div 
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                  >
                    <img
                      src={currentPreset.beforeImage}
                      alt={currentPreset.beforeLabel}
                      className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none filter brightness-95"
                    />
                  </div>
                </>
              )}

              {/* Invisible Drag Capture Overlay (Ensures smooth mouse/touch dragging over iframes) */}
              <div 
                className="absolute inset-0 z-20 cursor-ew-resize"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              />

              {/* Slider Divider Line & Knob */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(0,207,246,1)] pointer-events-none z-30 flex items-center justify-center -ml-[2px]"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Glowing Drag Handle */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00CFF6] p-[2px] shadow-2xl shadow-[#00CFF6]/90 flex items-center justify-center animate-pulse">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white">
                    <Sliders className="w-4 h-4 text-[#00CFF6]" />
                  </div>
                </div>
              </div>

              {/* Labels On Canvas */}
              <div className="absolute top-4 left-4 z-30 pointer-events-none">
                <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-black/85 backdrop-blur-md border border-amber-500/60 text-amber-400 flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  {currentPreset.beforeLabel}
                </span>
              </div>

              <div className="absolute top-4 right-4 z-30 pointer-events-none">
                <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-black/85 backdrop-blur-md border border-[#00CFF6]/60 text-[#00CFF6] flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3 h-3 text-[#00CFF6]" />
                  {currentPreset.afterLabel}
                </span>
              </div>

              {/* Bottom Drag Prompt Tooltip */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <span className="px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-black/85 backdrop-blur-md border border-slate-700/80 text-slate-300 shadow-lg whitespace-nowrap">
                  ↔ Drag slider left (Before) or right (After)
                </span>
              </div>
            </div>

          </div>

          {/* Minimal Controls Bar */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsAutoScanning(!isAutoScanning)}
              id="toggle-auto-scan-btn"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                isAutoScanning
                  ? 'bg-[#00CFF6] text-black font-bold shadow-lg shadow-[#00CFF6]/30'
                  : 'bg-[#0e1117] text-slate-300 hover:bg-[#141822] hover:text-white border border-slate-800'
              }`}
            >
              {isAutoScanning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isAutoScanning ? 'Stop Auto-Scan' : 'Auto-Scan Motion'}</span>
            </button>

            <button
              onClick={() => {
                setIsAutoScanning(false);
                setSliderPosition(50);
              }}
              id="reset-slider-btn"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#0e1117] text-slate-400 hover:text-slate-200 border border-slate-800 cursor-pointer"
              title="Reset Slider to Center"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>50/50 Center</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
