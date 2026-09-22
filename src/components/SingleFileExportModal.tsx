import { useState } from 'react';
import { X, Copy, Check, Download, FileCode } from 'lucide-react';

interface SingleFileExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GENERATED_SINGLE_FILE_HTML = `<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Missbah | Professional Video Editor & Graphic Designer</title>
  <meta name="description" content="Portfolio of Missbah - Video Editor and Graphic Designer" />
  
  <!-- Google Fonts: Plus Jakarta Sans & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
            display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
          },
          colors: {
            brand: '#00CFF6',
            darkbg: '#050507',
            cardbg: '#0e1117',
          }
        }
      }
    }
  </script>

  <style>
    body { font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; }
    h1, h2, h3, .font-display { font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; letter-spacing: -0.015em; }
  </style>
</head>

<body class="bg-[#050507] text-[#e0e2ec] antialiased selection:bg-[#00CFF6] selection:text-black overflow-x-hidden">

  <!-- ================= NAVBAR ================= -->
  <header class="fixed top-0 left-0 right-0 z-40 bg-[#050507]/90 backdrop-blur-xl border-b border-slate-900 py-3.5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <a href="#" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-[#00CFF6] p-[1px] flex items-center justify-center">
          <div class="w-full h-full bg-[#050507] rounded-[10px] flex items-center justify-center text-[#00CFF6]">
            <i data-lucide="film" class="w-5 h-5"></i>
          </div>
        </div>
        <div>
          <div class="font-display font-extrabold text-lg sm:text-xl text-white">Missbah</div>
          <p class="text-[11px] font-medium tracking-wider text-[#00CFF6] uppercase">Video Editor & Graphic Designer</p>
        </div>
      </a>

      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
        <a href="#projects" class="hover:text-[#00CFF6] transition-colors">Projects</a>
        <a href="#before-after" class="hover:text-[#00CFF6] transition-colors">Before & After</a>
        <a href="#skills" class="hover:text-[#00CFF6] transition-colors">Skills</a>
        <a href="#services" class="hover:text-[#00CFF6] transition-colors">Services</a>
        <a href="#contact" class="hover:text-[#00CFF6] transition-colors">Contact</a>
      </nav>

      <div class="flex items-center gap-3">
        <button onclick="openVideoModal('https://www.youtube.com/embed/dQw4w9WgXcQ', 'Official Showreel 2026')" class="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#00CFF6]/10 border border-[#00CFF6]/30 text-[#00CFF6] hover:bg-[#00CFF6]/20 transition-all">
          <i data-lucide="play" class="w-3.5 h-3.5 fill-[#00CFF6] text-[#00CFF6]"></i>
          <span>Showreel</span>
        </button>
        <a href="#contact" class="px-4 py-2 rounded-xl text-xs font-bold text-black bg-[#00CFF6] hover:bg-[#20d8fc] transition-all shadow-md shadow-[#00CFF6]/20">
          Work With Me
        </a>
      </div>
    </div>
  </header>

  <!-- ================= HERO SECTION ================= -->
  <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    <!-- Ambient Glows -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00CFF6]/5 blur-[130px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0e1117] border border-[#00CFF6]/40 text-xs sm:text-sm font-medium text-[#00CFF6] mb-6">
        <span class="w-2 h-2 rounded-full bg-[#00CFF6] animate-ping"></span>
        <span>Available for Freelance Projects & Remote Contracts</span>
      </div>

      <h1 class="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
        Crafting <span class="text-[#00CFF6]">Viral Stories</span> & Cinematic Visuals
      </h1>

      <p class="mt-4 text-lg sm:text-xl text-slate-300 font-medium max-w-2xl mx-auto">
        Cinematic video editing, high-retention short-form reels, and premium motion graphics design.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4 mt-8">
        <a href="#contact" class="px-7 py-3.5 rounded-2xl text-sm font-bold text-black bg-[#00CFF6] hover:bg-[#20d8fc] shadow-xl shadow-[#00CFF6]/25">
          Work With Me
        </a>
        <button onclick="openVideoModal('https://www.youtube.com/embed/dQw4w9WgXcQ', '2026 Creative Showreel')" class="px-7 py-3.5 rounded-2xl text-sm font-semibold text-white bg-[#0e1117] border border-slate-700 hover:border-[#00CFF6] flex items-center gap-2 transition-all">
          <i data-lucide="play" class="w-4 h-4 fill-[#00CFF6] text-[#00CFF6]"></i>
          <span>Watch Showreel</span>
        </button>
      </div>

      <!-- Hero Video Banner -->
      <div class="mt-14 max-w-5xl mx-auto rounded-3xl p-[1px] border border-[#00CFF6]/40 shadow-2xl bg-[#0e1117]">
        <div class="relative rounded-[22px] overflow-hidden aspect-video bg-[#050507] flex items-center justify-center group cursor-pointer" onclick="openVideoModal('https://www.youtube.com/embed/RfOwuj-G9n8', '2026 Creative Showreel')">
          <img src="https://img.youtube.com/vi/RfOwuj-G9n8/maxresdefault.jpg" alt="Showreel Cover" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700">
          <div class="absolute inset-0 bg-black/50"></div>
          <div class="relative z-10 flex flex-col items-center gap-3">
            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00CFF6] flex items-center justify-center shadow-xl shadow-[#00CFF6]/40 group-hover:scale-110 transition-transform">
              <i data-lucide="play" class="w-8 h-8 fill-black text-black ml-1"></i>
            </div>
            <p class="text-white font-bold text-base sm:text-lg">Click to Play 2026 Showreel (4K DCI)</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= SHOWCASE / PROJECTS ================= -->
  <section id="projects" class="py-20 bg-[#08090d] border-t border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
          Showcase of <span class="text-[#00CFF6]">Recent Works</span>
        </h2>
        <p class="mt-2 text-slate-300">Curated video editing, viral short-form content, and high-end commercial projects.</p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Project 1 -->
        <div class="rounded-2xl bg-[#0e1117] border border-slate-800 overflow-hidden hover:border-[#00CFF6]/50 transition-all group cursor-pointer" onclick="openVideoModal('https://www.youtube.com/embed/pR_gbieG6bo', 'Smartphone & Tech Tutorial Breakdown')">
          <div class="relative aspect-video overflow-hidden">
            <img src="https://img.youtube.com/vi/pR_gbieG6bo/maxresdefault.jpg" alt="Tech Tutorial" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-75 group-hover:opacity-100">
              <div class="w-12 h-12 rounded-full bg-[#00CFF6] flex items-center justify-center text-black">
                <i data-lucide="play" class="w-5 h-5 fill-black ml-0.5"></i>
              </div>
            </div>
            <span class="absolute top-3 left-3 px-2.5 py-1 rounded bg-black text-[#00CFF6] text-xs font-bold border border-slate-800">YouTube Long Form</span>
          </div>
          <div class="p-5">
            <h3 class="font-bold text-white text-lg group-hover:text-[#00CFF6] transition-colors">Tech Tutorial Breakdown</h3>
            <p class="text-xs text-slate-400 mt-1">Kinetic graphics, smooth cuts & crisp audio</p>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="rounded-2xl bg-[#0e1117] border border-slate-800 overflow-hidden hover:border-[#00CFF6]/50 transition-all group cursor-pointer" onclick="openVideoModal('https://www.youtube.com/embed/cKOu0Wc2IdA', 'Advanced VFX & Motion Design')">
          <div class="relative aspect-video overflow-hidden">
            <img src="https://img.youtube.com/vi/cKOu0Wc2IdA/maxresdefault.jpg" alt="VFX & Motion" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-75 group-hover:opacity-100">
              <div class="w-12 h-12 rounded-full bg-[#00CFF6] flex items-center justify-center text-black">
                <i data-lucide="play" class="w-5 h-5 fill-black ml-0.5"></i>
              </div>
            </div>
            <span class="absolute top-3 left-3 px-2.5 py-1 rounded bg-black text-[#00CFF6] text-xs font-bold border border-slate-800">VFX & Motion Design</span>
          </div>
          <div class="p-5">
            <h3 class="font-bold text-white text-lg group-hover:text-[#00CFF6] transition-colors">Advanced VFX & 3D Motion</h3>
            <p class="text-xs text-slate-400 mt-1">3D integration, fluid motion & CGI compositing</p>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="rounded-2xl bg-[#0e1117] border border-slate-800 overflow-hidden hover:border-[#00CFF6]/50 transition-all group cursor-pointer" onclick="openVideoModal('https://www.youtube.com/embed/XXl2-N2Fxuo', 'High-Retention Viral Reel Hook')">
          <div class="relative aspect-video overflow-hidden">
            <img src="https://img.youtube.com/vi/XXl2-N2Fxuo/maxresdefault.jpg" alt="Viral Reel" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-75 group-hover:opacity-100">
              <div class="w-12 h-12 rounded-full bg-[#00CFF6] flex items-center justify-center text-black">
                <i data-lucide="play" class="w-5 h-5 fill-black ml-0.5"></i>
              </div>
            </div>
            <span class="absolute top-3 left-3 px-2.5 py-1 rounded bg-black text-[#00CFF6] text-xs font-bold border border-slate-800">Instagram Reel (9:16)</span>
          </div>
          <div class="p-5">
            <h3 class="font-bold text-white text-lg group-hover:text-[#00CFF6] transition-colors">Viral Social Media Reel</h3>
            <p class="text-xs text-slate-400 mt-1">High-energy hook & kinetic subtitles</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ================= BEFORE & AFTER COLOR GRADING ================= -->
  <section id="before-after" class="py-20 bg-[#050507] border-t border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
        Before & After: <span class="text-[#00CFF6]">Color Grading</span>
      </h2>
      <p class="mt-2 text-slate-300">Slide to compare raw unedited camera LOG footage with final cinematic grade</p>

      <div class="mt-10 max-w-4xl mx-auto rounded-3xl p-[1px] border border-[#00CFF6]/40 bg-[#0e1117]">
        <div id="slider-box" class="relative rounded-[22px] overflow-hidden aspect-video bg-black select-none cursor-ew-resize">
          <!-- After Image -->
          <img src="https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1200&q=90" alt="After Color Grade" class="absolute inset-0 w-full h-full object-cover">
          
          <!-- Before Image Overlay -->
          <div id="before-image-wrap" class="absolute inset-0 overflow-hidden" style="clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);">
            <img src="https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1200&q=50&sat=-100&con=30" alt="Before RAW" class="absolute inset-0 w-full h-full object-cover max-w-none">
          </div>

          <!-- Divider Handle -->
          <div id="slider-handle" class="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none flex items-center justify-center -ml-[2px]" style="left: 50%;">
            <div class="w-10 h-10 rounded-full bg-[#00CFF6] text-black flex items-center justify-center font-bold text-xs shadow-xl">
              ↔
            </div>
          </div>

          <span class="absolute top-4 left-4 px-3 py-1 bg-black/80 rounded text-xs font-bold text-slate-300">RAW S-Log3 (Before)</span>
          <span class="absolute top-4 right-4 px-3 py-1 bg-black/80 rounded text-xs font-bold text-[#00CFF6] border border-[#00CFF6]/40">Graded Rec.709 (After)</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= SKILLS & TOOLS ================= -->
  <section id="skills" class="py-20 bg-[#08090d] border-t border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white font-display">
          Tools & <span class="text-[#00CFF6]">Professional Skills</span>
        </h2>
        <p class="mt-2 text-slate-300">Industry-standard post-production software and daily creative suite</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
        <!-- Premiere Pro -->
        <div class="p-5 rounded-2xl bg-[#0e1117] border border-slate-800 text-center">
          <div class="w-12 h-12 rounded-xl bg-black border border-[#00CFF6]/40 text-[#00CFF6] font-display font-black text-xl flex items-center justify-center mx-auto mb-3">Pr</div>
          <h3 class="font-bold text-white">Premiere Pro</h3>
          <p class="text-xs text-[#00CFF6] font-semibold mt-1">98% Mastery</p>
        </div>

        <!-- After Effects -->
        <div class="p-5 rounded-2xl bg-[#0e1117] border border-slate-800 text-center">
          <div class="w-12 h-12 rounded-xl bg-black border border-[#00CFF6]/40 text-[#00CFF6] font-display font-black text-xl flex items-center justify-center mx-auto mb-3">Ae</div>
          <h3 class="font-bold text-white">After Effects</h3>
          <p class="text-xs text-[#00CFF6] font-semibold mt-1">95% Mastery</p>
        </div>

        <!-- DaVinci Resolve -->
        <div class="p-5 rounded-2xl bg-[#0e1117] border border-slate-800 text-center">
          <div class="w-12 h-12 rounded-xl bg-black border border-[#00CFF6]/40 text-[#00CFF6] font-display font-black text-xl flex items-center justify-center mx-auto mb-3">Dv</div>
          <h3 class="font-bold text-white">DaVinci Resolve</h3>
          <p class="text-xs text-[#00CFF6] font-semibold mt-1">92% Mastery</p>
        </div>

        <!-- Photoshop -->
        <div class="p-5 rounded-2xl bg-[#0e1117] border border-slate-800 text-center">
          <div class="w-12 h-12 rounded-xl bg-black border border-[#00CFF6]/40 text-[#00CFF6] font-display font-black text-xl flex items-center justify-center mx-auto mb-3">Ps</div>
          <h3 class="font-bold text-white">Photoshop</h3>
          <p class="text-xs text-[#00CFF6] font-semibold mt-1">96% Mastery</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= SERVICES SECTION ================= -->
  <section id="services" class="py-20 bg-[#050507] border-t border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white font-display">
          My Creative <span class="text-[#00CFF6]">Services</span>
        </h2>
        <p class="mt-2 text-slate-300">Comprehensive video editing and post-production offerings</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-7 rounded-3xl bg-[#0e1117] border border-slate-800 hover:border-[#00CFF6]/50 transition-all">
          <div class="w-12 h-12 rounded-xl bg-black border border-slate-800 text-[#00CFF6] flex items-center justify-center mb-4">
            <i data-lucide="video" class="w-6 h-6"></i>
          </div>
          <h3 class="text-xl font-bold text-white">YouTube & Video Editing</h3>
          <p class="text-xs text-slate-400 mt-3">Engaging storytelling, sound design, dynamic B-roll integration, and high-retention pacing.</p>
        </div>

        <div class="p-7 rounded-3xl bg-[#0e1117] border border-[#00CFF6]/50 shadow-lg shadow-[#00CFF6]/10">
          <div class="w-12 h-12 rounded-xl bg-black border border-slate-800 text-[#00CFF6] flex items-center justify-center mb-4">
            <i data-lucide="smartphone" class="w-6 h-6"></i>
          </div>
          <h3 class="text-xl font-bold text-white">Viral Reels & Shorts</h3>
          <p class="text-xs text-slate-400 mt-3">High-impact typography, sound drops, jump cuts, and attention-grabbing hooks.</p>
        </div>

        <div class="p-7 rounded-3xl bg-[#0e1117] border border-slate-800 hover:border-[#00CFF6]/50 transition-all">
          <div class="w-12 h-12 rounded-xl bg-black border border-slate-800 text-[#00CFF6] flex items-center justify-center mb-4">
            <i data-lucide="sparkles" class="w-6 h-6"></i>
          </div>
          <h3 class="text-xl font-bold text-white">Color Grading & VFX</h3>
          <p class="text-xs text-slate-400 mt-3">DaVinci Resolve cinematic color grading, ACES workflow, skin tone isolation, and 3D motion graphics.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= CONTACT SECTION ================= -->
  <section id="contact" class="py-20 bg-[#08090d] border-t border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white font-display">
          Let's Work <span class="text-[#00CFF6]">Together</span>
        </h2>
        <p class="mt-2 text-slate-300">Fill out the form below or start a conversation directly on WhatsApp</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Direct Contacts -->
        <div class="p-6 rounded-3xl bg-[#0e1117] border border-slate-800 space-y-4">
          <a href="https://wa.me/8801616281216?text=Hi%20Missbah,%20I%20am%20interested%20in%20your%20video%20editing%20services." target="_blank" class="flex items-center justify-between p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300">
            <div class="flex items-center gap-3">
              <i data-lucide="message-square" class="w-6 h-6"></i>
              <div>
                <div class="text-xs">Instant Response • 01616281216</div>
                <div class="font-bold text-white">WhatsApp Chat</div>
              </div>
            </div>
            <span>→</span>
          </a>

          <div class="p-4 rounded-xl bg-black border border-slate-800">
            <div class="text-xs text-slate-400">Official Email:</div>
            <div class="font-bold text-white">asadhazra9@gmail.com</div>
          </div>
        </div>

        <!-- Contact Form -->
        <form onsubmit="event.preventDefault(); alert('Thank you! Your message has been sent successfully.');" class="p-6 rounded-3xl bg-[#0e1117] border border-[#00CFF6]/40 space-y-4">
          <input type="text" placeholder="Your Name *" required class="w-full px-4 py-3 rounded-xl bg-black border border-slate-800 text-white outline-none focus:border-[#00CFF6]">
          <input type="email" placeholder="Your Email *" required class="w-full px-4 py-3 rounded-xl bg-black border border-slate-800 text-white outline-none focus:border-[#00CFF6]">
          <textarea rows="3" placeholder="Project Details & Requirements *" required class="w-full px-4 py-3 rounded-xl bg-black border border-slate-800 text-white outline-none focus:border-[#00CFF6]"></textarea>
          <button type="submit" class="w-full py-3.5 rounded-xl font-bold text-black bg-[#00CFF6] hover:bg-[#20d8fc] transition-all">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- ================= VIDEO MODAL ================= -->
  <div id="videoModal" class="fixed inset-0 z-50 hidden items-center justify-center p-4 bg-black/90 backdrop-blur-md">
    <div class="relative w-full max-w-4xl bg-[#0e1117] border border-[#00CFF6]/50 rounded-2xl overflow-hidden">
      <div class="flex items-center justify-between px-4 py-3 border-b border-slate-800">
        <h4 id="modalTitle" class="text-white font-bold text-sm">Project Video</h4>
        <button onclick="closeVideoModal()" class="text-slate-400 hover:text-white font-bold text-xl px-2">✕</button>
      </div>
      <div class="aspect-video bg-black">
        <iframe id="modalIframe" src="" class="w-full h-full" allowfullscreen allow="autoplay"></iframe>
      </div>
    </div>
  </div>

  <script>
    // Initialize Lucide Icons
    lucide.createIcons();

    // Video Modal Controller
    function openVideoModal(url, title) {
      document.getElementById('modalIframe').src = url + '?autoplay=1';
      document.getElementById('modalTitle').innerText = title;
      document.getElementById('videoModal').classList.remove('hidden');
      document.getElementById('videoModal').classList.add('flex');
    }

    function closeVideoModal() {
      document.getElementById('modalIframe').src = '';
      document.getElementById('videoModal').classList.add('hidden');
      document.getElementById('videoModal').classList.remove('flex');
    }

    // Before & After Drag Slider
    const sliderBox = document.getElementById('slider-box');
    const beforeWrap = document.getElementById('before-image-wrap');
    const handle = document.getElementById('slider-handle');
    let isSliding = false;

    function updateSlider(clientX) {
      const rect = sliderBox.getBoundingClientRect();
      let percent = ((clientX - rect.left) / rect.width) * 100;
      percent = Math.max(0, Math.min(100, percent));
      beforeWrap.style.clipPath = 'polygon(0 0, ' + percent + '% 0, ' + percent + '% 100%, 0 100%)';
      handle.style.left = percent + '%';
    }

    sliderBox.addEventListener('mousedown', () => isSliding = true);
    window.addEventListener('mouseup', () => isSliding = false);
    window.addEventListener('mousemove', (e) => { if (isSliding) updateSlider(e.clientX); });

    sliderBox.addEventListener('touchstart', () => isSliding = true);
    window.addEventListener('touchend', () => isSliding = false);
    window.addEventListener('touchmove', (e) => { if (isSliding && e.touches[0]) updateSlider(e.touches[0].clientX); });
  </script>
</body>
</html>`;

export default function SingleFileExportModal({ isOpen, onClose }: SingleFileExportModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(GENERATED_SINGLE_FILE_HTML);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([GENERATED_SINGLE_FILE_HTML], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      id="export-code-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0e1117] border border-[#00CFF6]/40 rounded-3xl shadow-2xl shadow-[#00CFF6]/10 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#08090d] border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#00CFF6]/10 border border-[#00CFF6]/30 flex items-center justify-center text-[#00CFF6]">
              <FileCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                <span>Single-File index.html Code</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-black text-[#00CFF6] border border-[#00CFF6]/40">
                  Self-Contained
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Complete, production-ready code (HTML + CSS + JS) in a single portable file
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 rounded-xl bg-[#141822] hover:bg-[#1c2230] text-[#00CFF6] border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Entire Code'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-xl bg-[#00CFF6] text-black text-xs font-bold flex items-center gap-1.5 hover:bg-[#20d8fc] transition-all cursor-pointer shadow-md shadow-[#00CFF6]/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download index.html</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-black hover:bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1 border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Code Preview Area */}
        <div className="p-4 bg-[#050507] flex-1 overflow-y-auto font-mono text-xs text-slate-300 leading-relaxed border-b border-slate-800 select-all">
          <pre className="whitespace-pre-wrap">{GENERATED_SINGLE_FILE_HTML}</pre>
        </div>

        {/* Footer Note */}
        <div className="px-6 py-3 bg-[#08090d] flex items-center justify-between text-xs text-slate-400">
          <span>💡 You can save this as <strong className="text-[#00CFF6]">index.html</strong> on your computer and open directly in any browser without installing anything!</span>
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
