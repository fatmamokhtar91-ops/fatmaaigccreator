import { PORTFOLIO_DATA } from '@/data/portfolio';
import Reveal from './Reveal';

const SERVICE_VISUALS: Record<string, string> = {
  Video: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1400&q=85',
  Social: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=85',
  Product: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=85',
  Brand: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=85',
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
          <p className="text-ink-400 text-lg max-w-2xl mx-auto">Creative digital services designed with a premium visual direction.</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-7">
          {PORTFOLIO_DATA.services.map((service, i) => (
            <Reveal key={i} delay={i * 80}>
              <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-lavender-400/30">
                <div className="relative h-64 overflow-hidden">
                  <img src={SERVICE_VISUALS[service.icon]} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <h3 className="font-display font-bold text-2xl text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-ink-300 leading-relaxed mb-5">{service.description}</p>
                  <ul className="grid gap-2">
                    {service.features.map((feat, j) => (
                      <li key={j} className="text-sm text-ink-300 border-b border-white/5 pb-2 last:border-0">{feat}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
