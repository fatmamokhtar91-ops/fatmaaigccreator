import { useState } from 'react';
import { Play, Eye, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import Reveal from './Reveal';

export default function VideoPortfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(PORTFOLIO_DATA.videos.map((v) => v.category)))];
  const filtered =
    activeCategory === 'All'
      ? PORTFOLIO_DATA.videos
      : PORTFOLIO_DATA.videos.filter((v) => v.category === activeCategory);

  return (
    <section id="videos" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-lavender-600/8 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-10">
          <span className="text-sm font-semibold text-lavender-400 tracking-widest uppercase">Portfolio</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            Video <span className="text-gradient-purple">showcase</span>
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl mx-auto">
            Demo samples showcasing the types of AI-generated video ads, reels, and product promos I create. Replace with your real projects.
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
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="thumb w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />

                  {/* Play overlay */}
                  <div className="play-overlay absolute inset-0 flex items-center justify-center bg-ink-950/40">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lavender-400 to-lavender-600 flex items-center justify-center glow-purple-strong scale-90 group-hover:scale-100 transition-transform duration-400">
                      <Play size={24} className="text-white ml-1" fill="white" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass text-xs font-medium text-lavender-200">
                    {video.category}
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-3 text-xs text-ink-200">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {video.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={12} /> {video.views}
                    </span>
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
