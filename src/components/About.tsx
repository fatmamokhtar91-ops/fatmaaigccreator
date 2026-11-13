import { PORTFOLIO_DATA } from '@/data/portfolio';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold-700/10 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <Reveal className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden gradient-border">
                <img
                  src={PORTFOLIO_DATA.aboutImage}
                  alt="{PORTFOLIO_DATA.name}"
                  className="w-full h-[500px] lg:h-[580px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=240&q=85" alt="Professional video production setup" className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <div className="font-display font-bold text-white text-sm">{PORTFOLIO_DATA.aboutBadgeTitle}</div>
                    <div className="text-xs text-ink-400">{PORTFOLIO_DATA.aboutBadgeSubtitle}</div>
                  </div>
                </div>
              </div>
              {/* Floating stat card */}
              <div className="absolute -top-4 -right-4 glass-card p-4 animate-float hidden sm:block">
                <div className="text-3xl font-display font-bold text-gradient-purple">{PORTFOLIO_DATA.aboutStatValue}</div>
                <div className="text-xs text-ink-400">{PORTFOLIO_DATA.aboutStatLabel}</div>
              </div>
            </div>
          </Reveal>

          {/* Right: Content */}
          <div>
            <Reveal>
              <span className="text-sm font-semibold text-gold-400 tracking-widest uppercase">About Me</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-6 leading-tight">
                {PORTFOLIO_DATA.aboutHeading}
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-ink-300 text-lg leading-relaxed mb-5">
                {PORTFOLIO_DATA.aboutPara1.replace('{name}', PORTFOLIO_DATA.name)}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-ink-400 leading-relaxed mb-8">
                {PORTFOLIO_DATA.aboutPara2}
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {PORTFOLIO_DATA.aboutHighlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                    <span className="text-sm text-ink-200">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Skills marquee */}
            <Reveal delay={300}>
              <div className="mb-4">
                <span className="text-sm font-semibold text-gold-400 tracking-widest uppercase">Tools & Skills</span>
              </div>
            </Reveal>
            <Reveal delay={350}>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 glass rounded-lg text-sm text-ink-200 hover:border-gold-500/30 hover:text-gold-300 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
