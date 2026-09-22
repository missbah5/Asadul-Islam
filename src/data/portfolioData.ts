import { Project, SkillItem, ServiceItem, BeforeAfterPreset, GraphicDesignItem, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: "Missbah",
  title: "Professional Video Editor & Motion Designer",
  avatarImage: "https://i.postimg.cc/MpQWzchL/Chat-GPT-Image-Sep-21-2026-01-03-55-PM.png",
  logoImage: "https://i.postimg.cc/MpQWzchL/Chat-GPT-Image-Sep-21-2026-01-03-55-PM.png",
  subtitle: "Cinematic Video Editing, High-Retention Social Reels & Premium Motion Design",
  tagline: "Crafting High-Retention Visuals, Cinematic Color Grades & Scroll-Stopping Motion Graphics",
  experienceYears: "6+",
  completedProjects: "350+",
  totalViews: "45M+",
  satisfactionRate: "99.4%",
  email: "asadhazra9@gmail.com",
  phone: "+880 1616-281216",
  whatsapp: "8801616281216",
  location: "Kotalipara, Gopalganj 8121 (Available for Worldwide Remote Projects)",
  cvUrl: "https://i.postimg.cc/4ycDZH37/Asadul-Islam-(2).png",
  cvPdfUrl: "/Asadul_Islam_CV.pdf",
  showreelVideoUrl: "https://www.youtube.com/embed/RfOwuj-G9n8",
  showreelCoverImage: "https://img.youtube.com/vi/RfOwuj-G9n8/maxresdefault.jpg",
  socials: {
    youtube: "https://www.youtube.com/@sssss-k8q",
    facebook: "https://www.facebook.com/profile.php?id=61567526661899",
    instagram: "https://www.instagram.com/missbahhazra/?hl=en",
    behance: "https://www.behance.net/asadulislam1",
    linkedin: "https://www.linkedin.com/in/missbah-undefined-743587433/",
    tiktok: "https://www.tiktok.com/@missbah569?lang=en",
    twitter: "https://x.com/milkybella767",
    discord: "https://discord.com",
    whatsapp: "https://whatsapp.com/channel/0029VbD0UfCIN9if11pkRs1u",
    telegram: "https://t.me/+oMVfN-dftJk1YTY1",
  }
};

export const PROJECTS_DATA: Project[] = [
  // 1. YouTube & Widescreen 16:9 Videos
  {
    id: "proj-youtube-1",
    title: "Smartphone & Tech Tutorial Breakdown",
    category: "youtube",
    categoryLabel: "YouTube",
    thumbnail: "https://img.youtube.com/vi/pR_gbieG6bo/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/pR_gbieG6bo",
    aspectRatio: "16:9",
    duration: "08:24",
    client: "Tech & Smartphone Guide",
    views: "125K",
    description: "High-clarity YouTube tutorial video editing with zoom-in callouts, kinetic graphics, smooth jump-cuts, and crisp audio cleanup.",
    softwareUsed: ["Premiere Pro", "After Effects", "Photoshop"],
    featured: true,
  },
  {
    id: "proj-comm-2",
    title: "Cinematic Brand Commercial",
    category: "commercial",
    categoryLabel: "Commercials",
    thumbnail: "https://img.youtube.com/vi/RfOwuj-G9n8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/RfOwuj-G9n8",
    aspectRatio: "16:9",
    duration: "01:45",
    client: "Global Campaign",
    views: "890K",
    description: "Cinematic commercial storytelling with moody color grade, sound design foley, and seamless visual rhythm.",
    softwareUsed: ["DaVinci Resolve", "Premiere Pro", "Audition"],
    featured: true,
  },
  {
    id: "proj-motion-1",
    title: "Advanced VFX & Motion Design",
    category: "motion",
    categoryLabel: "VFX & Motion",
    thumbnail: "https://img.youtube.com/vi/cKOu0Wc2IdA/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/cKOu0Wc2IdA",
    aspectRatio: "16:9",
    duration: "02:15",
    client: "Creative Studio",
    views: "340K",
    description: "Custom visual effects composition, 3D element integration, fluid motion graphics, and cinematic CGI compositing.",
    softwareUsed: ["After Effects", "Blender", "Premiere Pro"],
    featured: true,
  },

  // 2. Vertical 9:16 Reels & Shorts Videos
  {
    id: "proj-comm-1",
    title: "Commercial Promo & Brand Reel",
    category: "reels",
    categoryLabel: "Reels & Shorts",
    thumbnail: "https://img.youtube.com/vi/0znRhfIm17E/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/0znRhfIm17E",
    aspectRatio: "9:16",
    duration: "00:30",
    client: "Brand Showcase",
    views: "450K",
    description: "High-impact commercial video production with dynamic pacing, punchy typography, and cinematic lighting polish.",
    softwareUsed: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    featured: true,
  },
  {
    id: "proj-reel-1",
    title: "High-Retention Viral Reel Hook",
    category: "reels",
    categoryLabel: "Reels & Shorts",
    thumbnail: "https://img.youtube.com/vi/XXl2-N2Fxuo/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/XXl2-N2Fxuo",
    aspectRatio: "9:16",
    duration: "00:45",
    client: "Viral Social Media",
    views: "1.8M",
    description: "High-energy social hook, animated kinetic captions, sound hit markers, and fast multi-layer transitions.",
    softwareUsed: ["Premiere Pro", "After Effects", "Photoshop"],
    featured: true,
  },
  {
    id: "proj-short-2",
    title: "Fast-Paced Social Story & Short",
    category: "shorts",
    categoryLabel: "Reels & Shorts",
    thumbnail: "https://img.youtube.com/vi/KQJOs__7eiU/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/KQJOs__7eiU",
    aspectRatio: "9:16",
    duration: "00:52",
    client: "Creator Media",
    views: "920K",
    description: "Engaging vertical short editing with dynamic zoom-ins, SFX triggers, and high-retention editing formula.",
    softwareUsed: ["Premiere Pro", "After Effects", "CapCut"],
    featured: true,
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterPreset[] = [
  {
    id: "preset-video-1",
    title: "Cinematic Grade Showcase (Live Video)",
    description: "Real-time side-by-side and interactive comparison of flat raw footage against the final graded master.",
    beforeImage: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1200&q=50&sat=-100&con=30",
    afterImage: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1200&q=90",
    beforeVideoUrl: "https://streamable.com/e/b9w1y7",
    afterVideoUrl: "https://streamable.com/e/xn1n11",
    isVideo: true,
    beforeLabel: "RAW / Unedited (Before)",
    afterLabel: "Color Graded Master (After)",
    lutName: "DaVinci Resolve Custom Master Look",
    tags: ["Node Color Grading", "Skin Tone Balance", "Dynamic Range", "ACES Workflow"]
  },
  {
    id: "preset-1",
    title: "Cinematic Film Look (Rec.709 vs LOG)",
    description: "Transforming flat Sony S-Log3 raw footage into rich, filmic contrast with deep blacks and vibrant golden highlights.",
    beforeImage: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1200&q=50&sat=-100&con=30",
    afterImage: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1200&q=90",
    isVideo: false,
    beforeLabel: "RAW / Flat S-Log3 (Before)",
    afterLabel: "Graded Cinematic Rec.709 (After)",
    lutName: "Teal & Warm Ember Film v4",
    tags: ["Color Wheels", "Skin Tone Balance", "Filmic Curve", "Halation Effect"]
  },
  {
    id: "preset-2",
    title: "Cyberpunk Night Street Grade & Neon Glow",
    description: "Enhancing shadow detail, boosting vibrant cyan & magenta neon hues, and applying optical bloom to city lights.",
    beforeImage: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=50&sat=-50",
    afterImage: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=95",
    isVideo: false,
    beforeLabel: "Unprocessed Night Shot (Before)",
    afterLabel: "Neon Cyberpunk Grade (After)",
    lutName: "Tokyo Neon Glow 3D LUT",
    tags: ["Luma Curve", "Glow Masking", "Hue vs Sat", "Noise Reduction"]
  },
  {
    id: "preset-3",
    title: "Commercial Golden Hour Portrait Polish",
    description: "Precise secondary mask for skin tones, warm sun flare addition, micro-contrast enhancement and cinematic grain.",
    beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=50&sat=-80",
    afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=95",
    isVideo: false,
    beforeLabel: "Flat Lighting Shot (Before)",
    afterLabel: "Golden Hour Glow & Soft Skin (After)",
    lutName: "Kodak 2383 Kodak Print LUT",
    tags: ["Skin Retouch", "Sun Flare VFX", "Film Grain", "35mm Film Gate"]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    name: "Premiere Pro",
    fullName: "Adobe Premiere Pro CC",
    badge: "Pr",
    category: "editing",
    level: 98,
    color: "#9999FF",
    glowColor: "rgba(153, 153, 255, 0.5)",
    description: "Advanced Multi-cam, Speed Ramping, Pacing, Dynamic Subtitles, Nested Timelines & XML Roundtripping.",
    iconType: "pr"
  },
  {
    name: "After Effects",
    fullName: "Adobe After Effects CC",
    badge: "Ae",
    category: "vfx",
    level: 95,
    color: "#9999FF",
    glowColor: "rgba(153, 153, 255, 0.5)",
    description: "Kinetic Typography, 3D Camera Tracking, VFX Compositing, Particle Systems, Logo Animation & HUD Elements.",
    iconType: "ae"
  },
  {
    name: "DaVinci Resolve",
    fullName: "DaVinci Resolve Studio",
    badge: "Dv",
    category: "color",
    level: 92,
    color: "#FF4444",
    glowColor: "rgba(255, 68, 68, 0.5)",
    description: "Node-based Color Grading, ACES Color Managed Workflow, HDR Mastering, Shot Matching & Custom LUTs.",
    iconType: "dv"
  },
  {
    name: "Photoshop",
    fullName: "Adobe Photoshop CC",
    badge: "Ps",
    category: "design",
    level: 96,
    color: "#31A8FF",
    glowColor: "rgba(49, 168, 255, 0.5)",
    description: "High-CTR YouTube Thumbnails, Photo Manipulation, Poster Design, Textures & Layer Assets.",
    iconType: "ps"
  },
  {
    name: "Illustrator",
    fullName: "Adobe Illustrator CC",
    badge: "Ai",
    category: "design",
    level: 88,
    color: "#FF9A00",
    glowColor: "rgba(255, 154, 0, 0.5)",
    description: "Vector Assets, Vector Icons, Badges, Infographics and Storyboard Asset Preparation.",
    iconType: "ai"
  },
  {
    name: "Blender 3D",
    fullName: "Blender 3D Suite",
    badge: "3D",
    category: "vfx",
    level: 80,
    color: "#F5792A",
    glowColor: "rgba(245, 121, 42, 0.5)",
    description: "3D Product Modeling, Dynamic Lighting, Camera Rigs, Material Shading & Rendering for Video Intros.",
    iconType: "blender"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "srv-1",
    title: "YouTube & Long-Form Video Editing",
    iconName: "Youtube",
    description: "Engaging storytelling, tight cuts, motion graphics overlays, zoom dynamics, pattern interrupts, and audio balancing designed to maximize retention and watch time.",
    features: ["Storyline pacing & beat matching", "B-Roll curation & animated overlays", "Custom lower thirds & titles", "Foley sound effects & leveling"],
    turnaround: "2-4 Business Days",
    accentGradient: "from-red-500 via-rose-500 to-amber-500",
    popular: true
  },
  {
    id: "srv-2",
    title: "Shorts & Viral Reels (9:16 Format)",
    iconName: "Smartphone",
    description: "High-energy vertical videos with dynamic animated captions, emojis, sound drops, and punchy hook pacing optimized for TikTok, Instagram Reels, and YouTube Shorts.",
    features: ["Alex Hormozi style animated subtitles", "Split-second visual hooks", "Trendy sound design & SFX", "Color pop optimization for mobile OLEDs"],
    turnaround: "24-48 Hours",
    accentGradient: "from-cyan-400 via-blue-500 to-indigo-600",
    popular: true
  },
  {
    id: "srv-3",
    title: "Cinematic Color Grading & Mastering",
    iconName: "Sparkles",
    description: "Professional node-based color grading in DaVinci Resolve. Film emulation, shot-to-shot matching, skin tone isolation, and custom mood LUT creation.",
    features: ["LOG to Rec.709 color conversion", "Shot matching & skin tone precision", "Film grain, halation & glow effects", "Broadcast & HDR compliant export"],
    turnaround: "1-3 Business Days",
    accentGradient: "from-amber-400 via-orange-500 to-pink-500"
  },
  {
    id: "srv-4",
    title: "Motion Graphics & Visual Effects (VFX)",
    iconName: "Layers",
    description: "Eye-popping 2D/3D motion graphics, 3D element tracking, logo reveals, custom HUD interfaces, kinetic typography, and seamless transitions.",
    features: ["Kinetic typography animations", "3D Camera tracking & screen replace", "Custom intro/outro stinger animations", "Infographic charts & UI mockups"],
    turnaround: "3-5 Business Days",
    accentGradient: "from-purple-500 via-violet-500 to-cyan-400"
  },
  {
    id: "srv-5",
    title: "Sound Design & Audio Engineering",
    iconName: "Volume2",
    description: "Immersive soundscapes, clean dialogue restoration, custom foley accents, impact swooshes, risers, and balanced loudness for all streaming platforms.",
    features: ["Background noise & echo cleanup", "Custom cinematic whooshes & hits", "Stereo imaging & compression", "LUFS mastering for YouTube & Spotify"],
    turnaround: "1-2 Business Days",
    accentGradient: "from-emerald-400 via-teal-500 to-cyan-500"
  },
  {
    id: "srv-6",
    title: "High-CTR Thumbnails & Graphic Design",
    iconName: "Image",
    description: "Vibrant, high-contrast YouTube thumbnails designed with psychological color triggers, face retouching, and 3D text to boost your Click-Through Rate (CTR).",
    features: ["A/B Testing variations provided", "Subject cutout & glowing rim lights", "Bold readable typography on mobile", "Social media banners & branding kits"],
    turnaround: "24 Hours",
    accentGradient: "from-fuchsia-500 via-pink-500 to-rose-500"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Footage Transfer & Briefing",
    desc: "Share your raw footage, script, brand guidelines, and reference style videos via Google Drive, Dropbox, or Frame.io."
  },
  {
    step: "02",
    title: "Rough Cut & Narrative Pacing",
    desc: "Building the core timeline, eliminating pauses, arranging the hook, and locking down the storytelling pace."
  },
  {
    step: "03",
    title: "Color Grade, Motion & Sound Design",
    desc: "Injecting life with DaVinci Resolve color grading, custom SFX, animated text, graphics, and music synchronization."
  },
  {
    step: "04",
    title: "Review, Polish & 4K Master Delivery",
    desc: "Collaborative revisions until you are 100% satisfied. Delivery in crisp 4K Pro-Res, H.264, or platform-optimized formats."
  }
];

export const GRAPHIC_DESIGNS_DATA: GraphicDesignItem[] = [
  // --- TOP ROW: স্বাভাবিক ৩টি (3 Standard / Landscape 16:9 Thumbnails) ---
  {
    id: "gd-yt-1",
    title: "High-CTR YouTube Thumbnail Design",
    category: "thumbnail",
    categoryLabel: "YouTube Thumbnail",
    imageUrl: "https://i.postimg.cc/R0Rs7QWG/Asadul-Islam-3830-thumbnile.jpg",
    aspectRatio: "16:9",
    description: "High-CTR YouTube video thumbnail with punchy typography, sharp subject isolation, and vibrant color grading.",
    tools: ["Photoshop", "Lightroom"]
  },
  {
    id: "gd-yt-2",
    title: "Red & White Modern YouTube Thumbnail",
    category: "thumbnail",
    categoryLabel: "YouTube Thumbnail",
    imageUrl: "https://i.postimg.cc/CKHtvpQC/Red-and-White-Modern-You-Tube-Design-Thumbnail.jpg",
    aspectRatio: "16:9",
    description: "Modern high-retention YouTube thumbnail design with bold red & white contrast accents and crisp hierarchy.",
    tools: ["Photoshop", "Illustrator"]
  },
  {
    id: "gd-manip-1",
    title: "Behance Showcase Photo Manipulation Design",
    category: "manipulation",
    categoryLabel: "Photo Manipulation",
    imageUrl: "https://i.postimg.cc/jjK3nkSv/Behance-Thumbnil-Design-2.jpg",
    aspectRatio: "16:9",
    description: "Advanced composite photo manipulation with multi-layer exposure blending, realistic lighting harmonization, and visual effects.",
    tools: ["Photoshop", "Illustrator"]
  },

  // --- BOTTOM ROW: লম্বালম্বি ৩টি (3 Vertical / Portrait 4:5 Posters) ---
  {
    id: "gd-poster-1",
    title: "Professional Corporate Flyer & Poster Design",
    category: "poster",
    categoryLabel: "Poster & Flyer",
    imageUrl: "https://i.postimg.cc/TwdsFH8Y/Professional-Flyer.jpg",
    aspectRatio: "4:5",
    description: "Clean, modern corporate promotional flyer & vertical poster layout with sleek typographic hierarchy.",
    tools: ["Photoshop", "Illustrator"]
  },
  {
    id: "gd-poster-2",
    title: "Tanvir Key Visual & Creative Artwork",
    category: "poster",
    categoryLabel: "Poster & Artwork",
    imageUrl: "https://i.postimg.cc/rspv0Zgn/Tanvir.png",
    aspectRatio: "4:5",
    description: "Atmospheric portrait key art and creative poster composition with dramatic rim lighting and custom typography.",
    tools: ["Photoshop", "Lightroom"]
  },
  {
    id: "gd-social-1",
    title: "Tanvir Social Campaign Creative Visual",
    category: "poster",
    categoryLabel: "Vertical Social Flyer",
    imageUrl: "https://i.postimg.cc/GhHWbN4t/tanvir-2.jpg",
    aspectRatio: "4:5",
    description: "High-engagement vertical social poster & campaign graphic with clean branding and portrait framing.",
    tools: ["Photoshop", "Illustrator"]
  },

  // Additional gallery designs
  {
    id: "gd-social-2",
    title: "Berger Brand Social Media Creative Post",
    category: "social",
    categoryLabel: "Social Media Post",
    imageUrl: "https://i.postimg.cc/G2mMq8YL/Berger.jpg",
    aspectRatio: "1:1",
    description: "Eye-catching commercial advertising post design with vivid color accents, product presentation, and promotional layout.",
    tools: ["Photoshop", "Illustrator"]
  },
  {
    id: "gd-brand-1",
    title: "Brand Identity Emblem & Visual Concept",
    category: "branding",
    categoryLabel: "Branding & Logo",
    imageUrl: "https://i.postimg.cc/PqwZhtjC/Chat-GPT-Image-17-aga-2026-05-52-42-PM.png",
    aspectRatio: "1:1",
    description: "Distinctive brand emblem, geometric identity design, and vector icon aesthetics for digital creators.",
    tools: ["Illustrator", "Photoshop"]
  },
  {
    id: "gd-brand-2",
    title: "Creative Mascot & Logo Art Direction",
    category: "branding",
    categoryLabel: "Branding & Logo",
    imageUrl: "https://i.postimg.cc/13T6L8LG/Gemini-Generated-Image-mlyx9smlyx9smlyx.jpg",
    aspectRatio: "1:1",
    description: "Modern brand mascot character illustration and logo art with vibrant personality and clean vector outlines.",
    tools: ["Illustrator", "Photoshop"]
  }
];

