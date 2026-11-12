import { Award, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import Reveal from './Reveal';

export default function Certificates() {
  const realCertificates = PORTFOLIO_DATA.certificates.filter((cert) => !cert.isPlaceholder);
  if (realCertificates.length === 0) return null;
  return (
    <section id="certificates" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-lavender-600/8 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-sm font-semibold text-lavender-400 tracking-widest uppercase">Credentials</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            Certificates & <span className="text-gradient-purple">achievements</span>
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl mx-auto">
            Selected professional credentials and achievements.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {realCertificates.map((cert, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group glass-card overflow-hidden hover:border-lavender-500/20 transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl glass flex items-center justify-center">
                    {cert.isPlaceholder ? (
                      <FileText size={18} className="text-lavender-400" />
                    ) : (
                      <Award size={18} className="text-lavender-400" />
                    )}
                  </div>
                  {cert.isPlaceholder && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-lavender-500/20 backdrop-blur-sm text-[10px] font-semibold text-lavender-200 uppercase tracking-wider">
                      Demo
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-sm text-white leading-snug mb-2 group-hover:text-lavender-200 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-ink-400">{cert.issuer}</p>
                      <p className="text-xs text-lavender-400 font-medium mt-0.5">{cert.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm text-ink-300">
            <FileText size={14} className="text-lavender-400" />
            These are demo placeholders. Add your real certificate images and details in the data file.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
