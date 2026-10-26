import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import Reveal from './Reveal';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(PORTFOLIO_DATA.gallery.map((g) => g.category)))];
  const filtered =
    activeCategory === 'All'
      ? PORTFOLIO_DATA.gallery
      : PORTFOLIO_DATA.gallery.filter((g) => g.category === activeCategory);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-lavender-700/8 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-10">
          <span className="text-sm font-semibold text-lavender-400 tracking-widest uppercase">Gallery</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            Image <span className="text-gradient-purple">collection</span>
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl mx-auto">
            Stills, behind-the-scenes shots, and AI-generated visuals from recent projects.
          </p>
        </Reveal>

        {/* Category filter */}
        <Reveal delay={100} className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-lavender-500 to-lavender-700 text-white glow-purple'
                  : 'glass text-ink-300 hover:text-white hover:bg-white/8'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((image, i) => (
            <Reveal key={i} delay={i * 60} className="break-inside-avoid">
              <div
                className="gallery-item relative rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setLightbox(image.src)}
              >
                <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" />
                <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent flex flex-col justify-end p-4">
                  <span className="text-xs text-lavender-300 font-medium mb-1">{image.category}</span>
                  <span className="text-sm text-white font-medium">{image.alt}</span>
                </div>
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={16} className="text-white" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-ink-950/90 backdrop-blur-sm flex items-center justify-center p-5 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={22} className="text-white" />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
