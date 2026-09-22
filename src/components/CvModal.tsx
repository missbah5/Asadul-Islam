import { useEffect } from 'react';
import { X, Download, FileText, Printer, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    const printWindow = window.open(PERSONAL_INFO.cvPdfUrl, '_blank');
    if (printWindow) {
      printWindow.focus();
    }
  };

  return (
    <div 
      id="cv-viewer-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/92 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0e1118] border border-[#00CFF6]/40 rounded-3xl shadow-[0_0_60px_rgba(0,207,246,0.25)] flex flex-col my-auto max-h-[96vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-[#07090e] border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#00CFF6]/20 border border-[#00CFF6]/40 flex items-center justify-center">
              <FileText className="w-4 h-4 text-[#00CFF6]" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>Asadul Islam — Curriculum Vitae (PDF)</span>
              </h3>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Professional Video Editor & Content Creator
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Download PDF button (Direct download of original PDF) */}
            <a
              href={PERSONAL_INFO.cvPdfUrl}
              download="Asadul_Islam_CV.pdf"
              id="modal-download-pdf-btn"
              className="flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#00CFF6] text-black hover:bg-[#20d8fc] transition-all shadow-md shadow-[#00CFF6]/25 hover:scale-102 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            {/* Open in new tab / PDF Reader */}
            <a
              href={PERSONAL_INFO.cvPdfUrl}
              target="_blank"
              rel="noreferrer"
              id="modal-open-pdf-btn"
              title="Open PDF in new tab"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl text-xs font-semibold bg-[#141923] border border-slate-700 text-slate-200 hover:text-white hover:border-[#00CFF6]/50 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
              <span>Open PDF</span>
            </a>

            {/* Print button */}
            <button
              onClick={handlePrint}
              id="modal-print-cv-btn"
              title="Print CV"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl text-xs font-semibold bg-[#141923] border border-slate-700 text-slate-200 hover:text-white hover:border-[#00CFF6]/50 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-slate-300" />
              <span>Print</span>
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              id="close-cv-modal-btn"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document View (Original Untouched Layout) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-[#040508] flex justify-center items-start">
          <div className="w-full max-w-2xl bg-[#f7f7f0] shadow-2xl rounded-2xl overflow-hidden border border-slate-300/60 transition-all">
            <img
              src={PERSONAL_INFO.cvUrl}
              alt="Asadul Islam - Curriculum Vitae"
              className="w-full h-auto object-contain block select-none"
              loading="eager"
            />
          </div>
        </div>

        {/* Footer info bar */}
        <div className="px-5 py-2.5 bg-[#07090e] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#00CFF6]" />
            <span>Exact Original PDF — Ready to Download or View</span>
          </span>
          <a
            href={PERSONAL_INFO.cvPdfUrl}
            download="Asadul_Islam_CV.pdf"
            className="text-[#00CFF6] hover:underline font-semibold cursor-pointer"
          >
            Download Asadul_Islam_CV.pdf
          </a>
        </div>
      </div>
    </div>
  );
}
