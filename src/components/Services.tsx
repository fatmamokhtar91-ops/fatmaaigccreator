import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import Reveal from './Reveal';

const ICON_MAP: Record<string, string> = {
  Video: '🎬',
  Social: '📱',
  Product: '🛍️',
  Brand: '🎨',
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-lavender-700/10 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-sm font-semibold text-lavender-400 tracking-widest uppercase">What I Do</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            Services that <span className="text-gradient-purple">elevate your brand</span>
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl mx-auto">
            Full-service AI content creation — from concept to final cut, optimized for every platform.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.services.map((service, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group glass-card p-7 h-full hover:border-lavender-500/20 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lavender-500/20 to-lavender-700/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {ICON_MAP[service.icon] || '✨'}
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="text-ink-500 group-hover:text-lavender-400 group-hover:rotate-45 transition-all duration-400"
                  />
                </div>

                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-lavender-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-ink-400 text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-ink-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-lavender-400 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
