import { useState } from 'react';
import { Play } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import Reveal from './Reveal';

export default function VideoPortfolio() {
  const [activeCategory, setActiveCategory] = useState('الكل');

  const categories = ['الكل', ...Array.from(new Set(PORTFOLIO_DATA.videos.map((v) => v.category)))];
  const filtered =
    activeCategory === 'الكل'
      ? PORTFOLIO_DATA.videos
      : PORTFOLIO_DATA.videos.filter((v) => v.category === activeCategory);

  return (
    <section id="videos" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-lavender-600/8 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-10">
          <span className="text-sm font-semibold text-lavender-400 tracking-widest uppercase">معرض الأعمال</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            فيديوهات <span className="text-gradient-purple">إعلانية</span>
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl mx-auto">
            نماذج من الفيديوهات الإعلانية التي صممتها بالذكاء الاصطناعي للمنتجات والمطاعم والعلامات التجارية.
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

        {/* Video grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((video, i) => (
            <Reveal key={video.title} delay={i * 80}>
              <div className="video-card group relative rounded-2xl overflow-hidden glass-card cursor-pointer hover:border-lavender-500/20 transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-video overflow-hidden bg-black">
                  <video
                    src={video.src}
                    title={video.title}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass text-xs font-medium text-lavender-200 pointer-events-none">
                    {video.category}
                  </div>
                </div>

                {/* Title + description */}
                <div className="p-4">
                  <h3 className="font-display font-semibold text-base text-white group-hover:text-lavender-200 transition-colors mb-1.5">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="text-sm text-ink-400 leading-relaxed">{video.description}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
