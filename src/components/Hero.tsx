import { ArrowRight, Play } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-lavender-900/20 via-transparent to-ink-950" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-lavender-600/20 blur-[120px] animate-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-lavender-500/15 blur-[120px] animate-glow" style={{ animationDelay: '1s' }} />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm text-ink-200 font-medium tracking-wide">{PORTFOLIO_DATA.heroBadge}</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-6">
            <span className="text-gradient">{PORTFOLIO_DATA.heroLine1.replace('{name}', PORTFOLIO_DATA.name)}</span>
            <br />
            <span className="text-gradient-purple">{PORTFOLIO_DATA.heroLine2.replace('{title}', PORTFOLIO_DATA.title)}</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg sm:text-xl text-ink-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {PORTFOLIO_DATA.tagline}
          </p>
        </Reveal>

        <Reveal delay={250}>
          <img src={PORTFOLIO_DATA.bannerImage} alt="Fatma | AIGC Creator — original portrait and F-O brand banner" className="w-full max-w-5xl mx-auto rounded-2xl border border-white/10 shadow-2xl mb-10 object-cover" />
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-lavender-500 to-lavender-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-lavender-500/40 hover:scale-105 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight size={18} />
            </a>
            <a
              href="#videos"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#videos')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <Play size={18} className="text-lavender-400" />
              View My Work
            </a>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal delay={400}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mt-8">
            {PORTFOLIO_DATA.stats.map((stat, i) => (
              <div key={i} className="glass-card p-4 sm:p-5">
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient-purple">{stat.value}</div>
                <div className="text-xs sm:text-sm text-ink-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-lavender-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
