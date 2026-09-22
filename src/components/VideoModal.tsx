import { useEffect } from 'react';
import { Project } from '../types';
import { X, Film } from 'lucide-react';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

function getEmbedUrl(rawUrl: string): string {
  if (!rawUrl) return '';
  if (rawUrl.includes('youtube.com/embed/')) {
    return rawUrl.includes('?') ? `${rawUrl}&autoplay=1` : `${rawUrl}?autoplay=1`;
  }
  const shortMatch = rawUrl.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch && shortMatch[1]) {
    return `https://www.youtube.com/embed/${shortMatch[1]}?autoplay=1&rel=0&modestbranding=1`;
  }
  const shortsMatch = rawUrl.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch && shortsMatch[1]) {
    return `https://www.youtube.com/embed/${shortsMatch[1]}?autoplay=1&rel=0&modestbranding=1`;
  }
  const watchMatch = rawUrl.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchMatch && watchMatch[1]) {
    return `https://www.youtube.com/embed/${watchMatch[1]}?autoplay=1&rel=0&modestbranding=1`;
  }
  return rawUrl;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      id="video-player-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className={`relative w-full ${
          project.aspectRatio === '9:16'
            ? 'max-w-sm sm:max-w-md'
            : project.aspectRatio === '1:1'
            ? 'max-w-md'
            : project.aspectRatio === '4:5'
            ? 'max-w-lg'
            : 'max-w-4xl'
        } bg-[#0a0c12] border border-[#00CFF6]/40 rounded-3xl shadow-[0_0_50px_rgba(0,207,246,0.25)] overflow-hidden flex flex-col max-h-[95vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#050608] border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#00CFF6]/20 border border-[#00CFF6]/40 flex items-center justify-center">
              <Film className="w-4 h-4 text-[#00CFF6]" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            id="close-video-modal-btn"
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className={`relative w-full bg-black flex items-center justify-center ${
          project.aspectRatio === '9:16' 
            ? 'aspect-[9/16] max-h-[78vh] mx-auto' 
            : project.aspectRatio === '1:1'
            ? 'aspect-square max-h-[78vh] mx-auto'
            : project.aspectRatio === '4:5'
            ? 'aspect-[4/5] max-h-[78vh] mx-auto'
            : 'aspect-video max-h-[78vh]'
        }`}>
          {project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be') ? (
            <iframe
              src={getEmbedUrl(project.videoUrl)}
              title={project.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={project.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
}

