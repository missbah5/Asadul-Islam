import React, { useState, useEffect, useRef } from 'react';
import { GraphicDesignItem } from '../types';
import { GRAPHIC_DESIGNS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { 
  Palette, 
  Sparkles, 
  Upload, 
  Plus, 
  Maximize2, 
  X, 
  Image as ImageIcon, 
  Trash2, 
  Check, 
  Layers,
  ZoomIn,
  Link as LinkIcon,
  ExternalLink,
  RotateCcw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const STORAGE_KEYS = ['missbah_graphic_designs_v4'];

export default function GraphicDesignSection() {
  const [designs, setDesigns] = useState<GraphicDesignItem[]>(() => {
    try {
      for (const key of STORAGE_KEYS) {
        const saved = localStorage.getItem(key);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        }
      }
    } catch {
      // ignore
    }
    return GRAPHIC_DESIGNS_DATA;
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GraphicDesignItem | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Form states for uploading/adding image
  const [uploadType, setUploadType] = useState<'url' | 'file'>('url');
  const [inputTitle, setInputTitle] = useState('');
  const [inputCategory, setInputCategory] = useState<'thumbnail' | 'poster' | 'manipulation' | 'social' | 'branding'>('thumbnail');
  const [inputAspectRatio, setInputAspectRatio] = useState<'16:9' | '9:16' | '4:5' | '1:1'>('16:9');
  const [inputImageUrl, setInputImageUrl] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputTools, setInputTools] = useState('Photoshop, Illustrator');
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('missbah_graphic_designs', JSON.stringify(designs));
      localStorage.setItem('missbah_graphic_designs_v2', JSON.stringify(designs));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [designs]);

  const categories = [
    { id: 'all', label: 'All Designs' },
    { id: 'thumbnail', label: 'YouTube Thumbnails' },
    { id: 'poster', label: 'Posters & Artworks' },
    { id: 'manipulation', label: 'Photo Manipulation' },
    { id: 'social', label: 'Social Media Posts' },
    { id: 'branding', label: 'Branding & Logo' }
  ];

  const filteredDesigns = activeCategory === 'all' 
    ? designs 
    : designs.filter(item => item.category === activeCategory);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select a valid image file (PNG, JPG, WEBP).');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setUploadError('File size should be less than 10MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setFilePreview(result);
      setInputImageUrl(result);
      setUploadError(null);
    };
    reader.readAsDataURL(file);
  };

  const handleAddDesign = (e: React.FormEvent) => {
    e.preventDefault();
    const finalImageUrl = uploadType === 'file' ? (filePreview || inputImageUrl) : inputImageUrl.trim();

    if (!finalImageUrl) {
      setUploadError('Please provide an image file or a valid image URL.');
      return;
    }

    const categoryLabels: Record<string, string> = {
      thumbnail: 'YouTube Thumbnail',
      poster: 'Poster & Banner',
      manipulation: 'Photo Manipulation',
      social: 'Social Media Post',
      branding: 'Branding & Logo'
    };

    const newDesign: GraphicDesignItem = {
      id: `gd-custom-${Date.now()}`,
      title: inputTitle.trim() || 'Creative Graphic Design',
      category: inputCategory,
      categoryLabel: categoryLabels[inputCategory] || 'Graphic Design',
      imageUrl: finalImageUrl,
      aspectRatio: inputAspectRatio,
      description: inputDescription.trim() || 'High quality creative graphic artwork & composition.',
      tools: inputTools.split(',').map(t => t.trim()).filter(Boolean),
      createdAt: new Date().toLocaleDateString()
    };

    setDesigns(prev => [newDesign, ...prev]);
    setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
      setIsUploadModalOpen(false);
      setInputTitle('');
      setInputImageUrl('');
      setFilePreview(null);
      setInputDescription('');
      setUploadError(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }, 900);
  };

  const handleDeleteDesign = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to remove this design?')) {
      setDesigns(prev => prev.filter(item => item.id !== id));
      if (selectedImage?.id === id) {
        setSelectedImage(null);
      }
    }
  };

  const handleResetToDefaults = () => {
    if (confirm('Reset gallery to default showcase?')) {
      setDesigns(GRAPHIC_DESIGNS_DATA);
      localStorage.removeItem('missbah_graphic_designs');
      localStorage.removeItem('missbah_graphic_designs_v2');
    }
  };

  return (
    <section 
      id="graphic-design"
      className="py-20 md:py-28 relative bg-[#07080c] border-t border-slate-900 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#00CFF6]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-purple-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00CFF6]/10 border border-[#00CFF6]/30 text-xs font-semibold text-[#00CFF6] mb-3 shadow-[0_0_15px_rgba(0,207,246,0.15)]">
            <Palette className="w-3.5 h-3.5 text-[#00CFF6]" />
            <span>Visual Arts</span>
          </div>
          
          <h2 
            id="graphic-design-title"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Graphic Design <span className="text-[#00CFF6]">Portfolio</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div 
          id="graphic-design-categories"
          className="flex flex-wrap items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              id={`filter-${cat.id}`}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#00CFF6] text-black font-bold shadow-[0_0_20px_rgba(0,207,246,0.35)] scale-105'
                  : 'bg-[#0e1117] text-slate-300 border border-slate-800 hover:border-[#00CFF6]/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Designs Grid with Sleek Thin Frames and Rotating Light Beam */}
        <div 
          id="graphic-designs-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredDesigns.map((item, idx) => {
            const aspectClass = item.aspectRatio === '9:16' || item.aspectRatio === '4:5'
              ? 'aspect-[9/13]'
              : item.aspectRatio === '1:1'
              ? 'aspect-square'
              : 'aspect-video';

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                id={`design-card-${item.id}`}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer"
              >
                {/* Sleek Thin Border Outer Container with Continuous Rotating Cyan Light Aura */}
                <div className="relative rounded-2xl p-[1.5px] overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_35px_rgba(0,207,246,0.35)] shadow-xl bg-[#0e1117] flex flex-col h-full">
                  
                  {/* Rotating Conic Light Beam (চারিপাশে ঘূর্ণায়মান দৃশ্যমান আলো) */}
                  <div className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_260deg,#00CFF6_320deg,#ffffff_355deg,#00CFF6_360deg)] animate-border-beam pointer-events-none opacity-90 group-hover:opacity-100" />

                  {/* Inner Card Screen Area */}
                  <div className="relative rounded-[15px] bg-[#07090e] overflow-hidden flex flex-col h-full z-10 flex-1">
                    
                    {/* Image Display Area */}
                    <div className={`relative ${aspectClass} w-full overflow-hidden bg-black flex items-center justify-center`}>
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 filter contrast-105"
                        loading="lazy"
                      />
                      
                      {/* Gradient Ambient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />

                      {/* Zoom Indicator Icon */}
                      <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-[#00CFF6] text-black shadow-[0_0_20px_rgba(0,207,246,0.8)] flex items-center justify-center border-2 border-white/80 scale-90 group-hover:scale-100 transition-transform">
                          <ZoomIn className="w-5 h-5 text-black" />
                        </div>
                      </div>

                      {/* Delete Button for custom items */}
                      {item.id.startsWith('gd-custom-') && (
                        <button
                          onClick={(e) => handleDeleteDesign(item.id, e)}
                          title="Delete custom design"
                          className="absolute top-2.5 right-2.5 z-20 p-1.5 rounded-lg bg-red-600/80 hover:bg-red-600 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Card Bottom Meta */}
                    <div className="p-3.5 bg-[#090c13] border-t border-slate-800/80">
                      <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-[#00CFF6] transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredDesigns.length === 0 && (
          <div className="text-center py-16 px-4 bg-[#0a0c12] rounded-3xl border border-slate-800 max-w-md mx-auto">
            <ImageIcon className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No designs in this category</h3>
            <p className="text-xs text-slate-400 mt-1 mb-4">Click below to upload your own graphic designs.</p>
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#00CFF6] text-black hover:bg-[#20d8fc]"
            >
              Upload Design
            </button>
          </div>
        )}

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="photo-lightbox-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-5xl bg-[#090b10] border border-[#00CFF6]/40 rounded-3xl shadow-[0_0_50px_rgba(0,207,246,0.2)] overflow-hidden flex flex-col max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#050608] border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#00CFF6]/20 border border-[#00CFF6]/40 flex items-center justify-center">
                    <Palette className="w-4 h-4 text-[#00CFF6]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                      {selectedImage.title}
                    </h3>
                    <p className="text-[11px] text-slate-400">{selectedImage.categoryLabel}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedImage.imageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white transition-colors"
                    title="Open full size image in new tab"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* High-Res Image Display */}
              <div className="relative w-full bg-black/95 flex items-center justify-center p-3 sm:p-6 overflow-auto max-h-[75vh]">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Modal Footer Description */}
              {selectedImage.description && (
                <div className="px-5 py-3 bg-[#050608] border-t border-slate-800 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-3">
                  <span>{selectedImage.description}</span>
                  {selectedImage.tools && selectedImage.tools.length > 0 && (
                    <div className="flex items-center gap-1.5">
                      {selectedImage.tools.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* UPLOAD / ADD PHOTO MODAL */}
      <AnimatePresence>
        {isUploadModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="upload-design-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setIsUploadModalOpen(false)}
          >
            <div
              className="relative w-full max-w-lg bg-[#0e111a] border border-[#00CFF6]/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/80 overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#00CFF6]/20 border border-[#00CFF6]/40 flex items-center justify-center">
                    <Upload className="w-5 h-5 text-[#00CFF6]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Add Graphic Design Photo</h3>
                    <p className="text-xs text-slate-400">Upload an image file or paste an image URL</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsUploadModalOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Upload Method Switch */}
              <div className="flex rounded-xl bg-[#08090d] p-1 border border-slate-800 mb-5">
                <button
                  type="button"
                  onClick={() => setUploadType('url')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    uploadType === 'url'
                      ? 'bg-[#00CFF6] text-black shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <LinkIcon className="w-3.5 h-3.5" />
                  <span>Image URL Link</span>
                </button>
                <button
                  type="button"
                  onClick={() => setUploadType('file')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    uploadType === 'file'
                      ? 'bg-[#00CFF6] text-black shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload File From Device</span>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleAddDesign} className="space-y-4">
                
                {uploadType === 'url' ? (
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Image Direct Link (URL) *
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://i.postimg.cc/... or https://..."
                      value={inputImageUrl}
                      onChange={(e) => setInputImageUrl(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#080a0f] border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-[#00CFF6] focus:outline-none"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Choose Image File *
                    </label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-700 hover:border-[#00CFF6] rounded-2xl p-6 text-center cursor-pointer bg-[#080a0f] transition-all"
                    >
                      {filePreview ? (
                        <div className="relative aspect-video max-h-40 mx-auto rounded-lg overflow-hidden">
                          <img src={filePreview} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <Upload className="w-8 h-8 text-[#00CFF6] mb-2" />
                          <p className="text-xs font-semibold text-white">Click to select image file</p>
                          <p className="text-[11px] text-slate-500 mt-1">PNG, JPG, WEBP (Max 10MB)</p>
                        </div>
                      )}
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                )}

                {/* Title */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Design Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. YouTube Thumbnail or Creative Poster"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080a0f] border border-slate-700 text-white text-sm focus:border-[#00CFF6] focus:outline-none"
                  />
                </div>

                {/* Aspect Ratio & Format */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Layout Format
                    </label>
                    <select
                      value={inputAspectRatio}
                      onChange={(e) => setInputAspectRatio(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl bg-[#080a0f] border border-slate-700 text-white text-xs focus:border-[#00CFF6] focus:outline-none"
                    >
                      <option value="16:9">16:9 (Landscape / YouTube)</option>
                      <option value="9:16">9:16 (Vertical / Reel / Story)</option>
                      <option value="4:5">4:5 (Portrait Poster)</option>
                      <option value="1:1">1:1 (Square Post)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Category
                    </label>
                    <select
                      value={inputCategory}
                      onChange={(e) => setInputCategory(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl bg-[#080a0f] border border-slate-700 text-white text-xs focus:border-[#00CFF6] focus:outline-none"
                    >
                      <option value="thumbnail">YouTube Thumbnail</option>
                      <option value="poster">Poster & Banner</option>
                      <option value="manipulation">Photo Manipulation</option>
                      <option value="social">Social Media Post</option>
                      <option value="branding">Branding & Logo</option>
                    </select>
                  </div>
                </div>

                {/* Error Banner */}
                {uploadError && (
                  <div className="p-3 rounded-xl bg-red-950/60 border border-red-800 text-xs text-red-300">
                    {uploadError}
                  </div>
                )}

                {/* Success Banner */}
                {uploadSuccess && (
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Design added successfully to your portfolio!</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={uploadSuccess}
                    className="w-full py-3 rounded-xl text-sm font-bold text-black bg-[#00CFF6] hover:bg-[#20d8fc] transition-all shadow-lg shadow-[#00CFF6]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Check className="w-4 h-4" />
                    <span>Save to Portfolio</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
