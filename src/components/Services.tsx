import { PORTFOLIO_DATA } from '@/data/portfolio';

const SERVICE_VISUALS: Record<string, string> = {
  Video: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1400&q=90',
  Social: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=90',
  Product: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1400&q=90',
  Brand: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=90',
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold-700/10 blur-[150px] rounded-full" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-gold-400 tracking-widest uppercase">What I Do</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            Services that <span className="text-gradient-purple">elevate your brand</span>
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl mx-auto">Creative digital services designed with a premium visual direction.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-7">
          {PORTFOLIO_DATA.services.map((service, i) => (
            <article key={i} className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img src={SERVICE_VISUALS[service.icon]} alt={service.title} loading="lazy" className="h-full w-full object-cover" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
