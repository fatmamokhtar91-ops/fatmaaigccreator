import { useState } from 'react';
import { Mail, MessageCircle, Send, MapPin, Instagram, Youtube, Linkedin, Music2, Palette } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import Reveal from './Reveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [socialNotice, setSocialNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(`Hello Fatma! I'd like to request a project.\nName: ${form.name}\nEmail: ${form.email}\nProject details: ${form.message}`);
    window.open(`${PORTFOLIO_DATA.whatsappLink}?text=${message}`, '_blank', 'noopener,noreferrer');
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: PORTFOLIO_DATA.socials.instagram },
    { icon: Music2, label: 'TikTok', href: PORTFOLIO_DATA.socials.tiktok },
    { icon: Youtube, label: 'YouTube', href: PORTFOLIO_DATA.socials.youtube },
    { icon: Linkedin, label: 'LinkedIn', href: PORTFOLIO_DATA.socials.linkedin },
    { icon: Palette, label: 'Behance', href: PORTFOLIO_DATA.socials.behance },
  ];

  const handleSocialClick = (e: React.MouseEvent, href: string) => {
    if (href === '#') {
      e.preventDefault();
      setSocialNotice(true);
      setTimeout(() => setSocialNotice(false), 3500);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-lavender-700/12 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-sm font-semibold text-lavender-400 tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            Let's create something <span className="text-gradient-purple">amazing</span>
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Reach out through any of the channels below.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-4">
            <Reveal>
              <div
                className={`group glass-card p-5 flex items-center gap-4 ${!PORTFOLIO_DATA.whatsappPlaceholder ? 'hover:border-lavender-500/20 hover:bg-white/[0.05] transition-all duration-400 cursor-pointer' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/15 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={22} className="text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-ink-400 mb-0.5">WhatsApp</div>
                  <div className="text-sm font-medium text-white truncate">{PORTFOLIO_DATA.whatsapp}</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div
                className={`group glass-card p-5 flex items-center gap-4 ${!PORTFOLIO_DATA.emailPlaceholder ? 'hover:border-lavender-500/20 hover:bg-white/[0.05] transition-all duration-400 cursor-pointer' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-lavender-500/15 flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-lavender-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-ink-400 mb-0.5">Email</div>
                  <div className="text-sm font-medium text-white truncate">{PORTFOLIO_DATA.email}</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="glass-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-ink-300" />
                </div>
                <div>
                  <div className="text-xs text-ink-400 mb-0.5">Location</div>
                  <div className="text-sm font-medium text-white">{PORTFOLIO_DATA.location}</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="glass-card p-5">
                <div className="text-xs text-ink-400 mb-3">Follow my work</div>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      onClick={(e) => handleSocialClick(e, social.href)}
                      className="w-11 h-11 rounded-xl glass flex items-center justify-center text-ink-300 hover:text-lavender-300 hover:border-lavender-500/30 hover:scale-110 transition-all duration-300"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
                {socialNotice && (
                  <p className="text-xs text-lavender-300 mt-3 animate-fade-in">
                    Social links will be added soon. Check back later!
                  </p>
                )}
              </div>
            </Reveal>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <Reveal delay={100}>
              <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-ink-300 mb-2 font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-ink-900/50 border border-white/10 rounded-xl text-white placeholder:text-ink-500 focus:outline-none focus:border-lavender-500/50 focus:ring-2 focus:ring-lavender-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-ink-300 mb-2 font-medium">Your Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@email.com"
                      className="w-full px-4 py-3 bg-ink-900/50 border border-white/10 rounded-xl text-white placeholder:text-ink-500 focus:outline-none focus:border-lavender-500/50 focus:ring-2 focus:ring-lavender-500/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-ink-300 mb-2 font-medium">Project Details</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Which service do you need? Share your idea, references, preferred timeline and any important details..."
                    className="w-full px-4 py-3 bg-ink-900/50 border border-white/10 rounded-xl text-white placeholder:text-ink-500 focus:outline-none focus:border-lavender-500/50 focus:ring-2 focus:ring-lavender-500/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-lavender-500 to-lavender-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-lavender-500/40 hover:scale-[1.02] transition-all duration-300"
                >
                  {sent ? 'Thank you!' : 'Send Message'}
                  <Send size={18} />
                </button>
                {sent && PORTFOLIO_DATA.emailPlaceholder && (
                  <p className="text-sm text-lavender-300 animate-fade-in">
                    Your project request is ready in WhatsApp. Please send the pre-filled message to complete your inquiry.
                  </p>
                )}
                {sent && !PORTFOLIO_DATA.emailPlaceholder && (
                  <p className="text-sm text-lavender-300 animate-fade-in">
                    WhatsApp should open with your project details. Send the message to complete your inquiry.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
