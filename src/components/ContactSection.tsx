import { useState } from 'react';
import { PERSONAL_INFO, SERVICES_DATA } from '../data/portfolioData';
import { Mail, MessageSquare, Send, CheckCircle, Copy, Check, Youtube, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactSectionProps {
  selectedService: string;
}

export default function ContactSection({ selectedService }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: selectedService || 'YouTube & Long-Form Video Editing',
    budget: '$300 - $800',
    footageLink: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 relative bg-[#050507] border-t border-slate-900 overflow-hidden"
    >
      {/* Background Neon Lights */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#00CFF6]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00CFF6]/10 border border-[#00CFF6]/30 text-xs font-semibold text-[#00CFF6] mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#00CFF6]" />
            <span>Contact</span>
          </div>
          <h2 
            id="contact-title"
            className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight"
          >
            Start Your <span className="text-[#00CFF6]">Project</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Inquire for video editing packages or message directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts & Social Icons */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="p-6 rounded-2xl bg-[#0e1117] border border-slate-800 space-y-5">
              
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Direct Contact
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Typical response within 2-4 hours.
                </p>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                id="contact-whatsapp-btn"
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 hover:bg-emerald-900/40 hover:border-emerald-400 text-emerald-300 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-emerald-400 font-medium">WhatsApp Channel</div>
                    <div className="text-sm font-bold text-white">Join on WhatsApp</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Email Box with One-Click Copy */}
              <div className="p-3.5 rounded-xl bg-black border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#00CFF6]/10 flex items-center justify-center text-[#00CFF6] flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-slate-400">Official Email</div>
                    <div className="text-xs sm:text-sm font-bold text-white truncate">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  id="copy-email-btn"
                  className="px-2.5 py-1 rounded-md bg-[#141822] hover:bg-[#1c2230] text-xs font-semibold text-[#00CFF6] flex items-center gap-1 transition-colors cursor-pointer flex-shrink-0 border border-slate-700"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Social Channels Showcase */}
              <div className="pt-3 border-t border-slate-800 space-y-2.5">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Social Channels:
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={PERSONAL_INFO.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    id="social-yt-btn"
                    className="p-2.5 rounded-lg bg-black border border-slate-800 hover:border-[#00CFF6]/50 hover:bg-[#00CFF6]/5 text-slate-300 hover:text-white flex items-center gap-2 text-xs font-semibold transition-all"
                  >
                    <Youtube className="w-3.5 h-3.5 text-[#00CFF6]" />
                    <span>YouTube</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    id="social-ig-btn"
                    className="p-2.5 rounded-lg bg-black border border-slate-800 hover:border-[#00CFF6]/50 hover:bg-[#00CFF6]/5 text-slate-300 hover:text-white flex items-center gap-2 text-xs font-semibold transition-all"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#00CFF6]" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.behance}
                    target="_blank"
                    rel="noreferrer"
                    id="social-be-btn"
                    className="p-2.5 rounded-lg bg-black border border-slate-800 hover:border-[#00CFF6]/50 hover:bg-[#00CFF6]/5 text-slate-300 hover:text-white flex items-center gap-2 text-xs font-semibold transition-all"
                  >
                    <span className="w-3.5 h-3.5 font-black text-[#00CFF6] flex items-center justify-center text-xs">Bē</span>
                    <span>Behance</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    id="social-li-btn"
                    className="p-2.5 rounded-lg bg-black border border-slate-800 hover:border-[#00CFF6]/50 hover:bg-[#00CFF6]/5 text-slate-300 hover:text-white flex items-center gap-2 text-xs font-semibold transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#00CFF6]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Work Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0e1117] border border-slate-800">
              
              {isSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Thank You! Message Received.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out! I will review your requirements and get back to you shortly via email or WhatsApp.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'YouTube & Long-Form Video Editing',
                        budget: '$300 - $800',
                        footageLink: '',
                        message: '',
                      });
                    }}
                    className="px-5 py-2 rounded-xl text-xs font-bold text-black bg-[#00CFF6] hover:bg-[#20d8fc] shadow-md shadow-[#00CFF6]/20 transition-all cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      Send a Project Inquiry
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Fill in your project requirements below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Rivera"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-slate-800 focus:border-[#00CFF6] text-xs sm:text-sm text-white placeholder-slate-600 outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@channel.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-slate-800 focus:border-[#00CFF6] text-xs sm:text-sm text-white placeholder-slate-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Service Type */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">
                        Required Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-slate-800 focus:border-[#00CFF6] text-xs sm:text-sm text-white outline-none transition-all"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title} className="bg-slate-900 text-white">
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget Estimation */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">
                        Approx Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-slate-800 focus:border-[#00CFF6] text-xs sm:text-sm text-white outline-none transition-all"
                      >
                        <option value="$100 - $300" className="bg-slate-900">$100 - $300 (Small / Reels Pack)</option>
                        <option value="$300 - $800" className="bg-slate-900">$300 - $800 (Standard Video)</option>
                        <option value="$800 - $2000+" className="bg-slate-900">$800 - $2000+ (Commercial / Campaign)</option>
                        <option value="Monthly Retainer" className="bg-slate-900">Monthly Retainer</option>
                      </select>
                    </div>
                  </div>

                  {/* Raw Footage or Reference Link */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">
                      Raw Footage / Reference Link
                    </label>
                    <input
                      type="url"
                      placeholder="Google Drive or Dropbox link"
                      value={formData.footageLink}
                      onChange={(e) => setFormData({ ...formData, footageLink: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-slate-800 focus:border-[#00CFF6] text-xs sm:text-sm text-white placeholder-slate-600 outline-none transition-all"
                    />
                  </div>

                  {/* Project Details Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe your vision, target audience, deadline, or pacing style..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-slate-800 focus:border-[#00CFF6] text-xs sm:text-sm text-white placeholder-slate-600 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-contact-form-btn"
                    className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold text-black bg-[#00CFF6] hover:bg-[#20d8fc] shadow-lg shadow-[#00CFF6]/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
