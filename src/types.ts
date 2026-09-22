export interface Project {
  id: string;
  title: string;
  titleBn?: string;
  category: 'youtube' | 'commercial' | 'reels' | 'shorts' | 'motion';
  categoryLabel: string;
  thumbnail: string;
  videoUrl: string; // YouTube / Vimeo / Direct MP4 URL
  aspectRatio: '16:9' | '9:16' | '1:1' | '4:5' | 'custom';
  duration: string;
  client: string;
  views?: string;
  description: string;
  softwareUsed: string[];
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  fullName: string;
  badge: string;
  category: 'editing' | 'vfx' | 'color' | 'design' | 'audio';
  level: number; // percentage 0-100
  color: string;
  glowColor: string;
  description: string;
  iconType: 'pr' | 'ae' | 'dv' | 'ps' | 'ai' | 'blender' | 'audition';
}

export interface ServiceItem {
  id: string;
  title: string;
  titleBn?: string;
  iconName: string;
  description: string;
  features: string[];
  turnaround: string;
  accentGradient: string;
  popular?: boolean;
}

export interface BeforeAfterPreset {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeVideoUrl?: string;
  afterVideoUrl?: string;
  isVideo?: boolean;
  beforeLabel: string;
  afterLabel: string;
  lutName: string;
  tags: string[];
}

export interface GraphicDesignItem {
  id: string;
  title: string;
  category: 'thumbnail' | 'poster' | 'manipulation' | 'social' | 'branding';
  categoryLabel: string;
  imageUrl: string;
  aspectRatio?: '16:9' | '1:1' | '4:5' | '9:16' | 'custom';
  description?: string;
  tools?: string[];
  createdAt?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  project: string;
  rating: number;
}
