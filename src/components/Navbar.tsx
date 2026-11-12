import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#solutions' },
  { label: 'Videos', href: '#videos' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = NAV_LINKS.map((l) => l.href);
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/5 py-3' : 'py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#home" onClick={() => handleClick('#home')} className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-lavender-500 to-lavender-700 flex items-center justify-center text-white font-bold text-lg glow-purple group-hover:scale-110 transition-transform duration-300">
            {PORTFOLIO_DATA.brandInitial}
          </span>
          <span className="font-display font-bold text-lg tracking-tight hidden sm:block">
            {PORTFOLIO_DATA.name}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  active === link.href
                    ? 'text-lavender-300 bg-lavender-500/10'
                    : 'text-ink-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={() => handleClick('#contact')}
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-lavender-500 to-lavender-700 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-lavender-500/30 hover:scale-105 transition-all duration-300"
        >
          Let's Talk
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-5 pt-4 pb-6 space-y-1 bg-ink-950/95 backdrop-blur-xl">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  active === link.href
                    ? 'text-lavender-300 bg-lavender-500/10'
                    : 'text-ink-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => handleClick('#contact')}
              className="block text-center px-5 py-3 bg-gradient-to-r from-lavender-500 to-lavender-700 text-white text-sm font-semibold rounded-xl"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
