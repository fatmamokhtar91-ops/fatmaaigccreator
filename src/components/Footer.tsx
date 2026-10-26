import { Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Videos', href: '#videos' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 py-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-lavender-700/5 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-lavender-500 to-lavender-700 flex items-center justify-center text-white font-bold text-lg">
                {PORTFOLIO_DATA.brandInitial}
              </span>
              <span className="font-display font-bold text-lg">
                {PORTFOLIO_DATA.name.split(' ')[0]}<span className="text-lavender-400">{PORTFOLIO_DATA.name.split(' ')[1] || ''}</span>
              </span>
            </div>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
              {PORTFOLIO_DATA.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-sm text-ink-400 hover:text-lavender-300 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <span className="block text-sm text-ink-400">
                {PORTFOLIO_DATA.email}
              </span>
              <span className="block text-sm text-ink-400">
                {PORTFOLIO_DATA.whatsapp}
              </span>
              <p className="text-sm text-ink-400">{PORTFOLIO_DATA.location}</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-ink-500 flex items-center gap-1.5">
            © {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Made with
            <Heart size={14} className="text-lavender-400" fill="currentColor" />
            and AI
          </p>
          <p className="text-xs text-ink-500">{PORTFOLIO_DATA.footerTagline}</p>
        </div>
      </div>
    </footer>
  );
}
