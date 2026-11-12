import { ArrowUpRight, Video, Utensils, PanelsTopLeft, BookOpen, Presentation, Palette, Globe } from 'lucide-react';
import Reveal from './Reveal';

const offerings = [
  { icon: Video, title: 'AI Video Ads & Reels', ar: 'إعلانات وفيديوهات بالذكاء الاصطناعي', text: 'Creative concepts, scripts, AI visuals, voiceovers and motion-led edits for social platforms.' },
  { icon: Utensils, title: 'Electronic Restaurant Menus', ar: 'منيو إلكتروني للمطاعم والكافيهات', text: 'Branded digital menus with QR access and clear food presentation for restaurants and cafés.' },
  { icon: Globe, title: 'Websites & Landing Pages', ar: 'تصميم مواقع وصفحات هبوط', text: 'Modern responsive websites and focused landing pages for services, products and brands.' },
  { icon: BookOpen, title: 'Digital Products & eBooks', ar: 'منتجات رقمية وكتب إلكترونية', text: 'Digital guides, downloadable products, illustrated books and publishing-ready concepts.' },
  { icon: Presentation, title: 'Presentations & Company Profiles', ar: 'عروض تقديمية وبروفايل شركات', text: 'Structured, polished presentations, portfolios and company profiles with a consistent visual system.' },
  { icon: Palette, title: 'Visual Identity & Branding', ar: 'هوية بصرية وتصميمات للبراند', text: 'Color direction, visual assets and branded social templates built around your business.' },
  { icon: PanelsTopLeft, title: 'Social Content & Campaign Assets', ar: 'محتوى السوشيال ميديا والحملات', text: 'Reels, carousels, campaign visuals and content packages designed for a coherent brand presence.' },
];

export default function ServiceCatalog() {
  return <section id="solutions" className="relative py-24 sm:py-32 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-lavender-950/10 via-transparent to-transparent" />
    <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal className="text-center mb-14">
        <span className="text-sm font-semibold text-lavender-400 tracking-widest uppercase">Explore the studio</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">Creative services, <span className="text-gradient-purple">all in one place</span></h2>
        <p className="text-ink-400 text-lg max-w-2xl mx-auto">من الفكرة للتنفيذ — حلول إبداعية بالذكاء الاصطناعي والتصميم الرقمي، حسب احتياج مشروعك.</p>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {offerings.map(({icon: Icon, title, ar, text}, i) => <Reveal key={title} delay={i*60}>
          <article className="glass-card p-6 h-full hover:border-lavender-400/30 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-lavender-500/15 text-lavender-300 flex items-center justify-center mb-5"><Icon size={23}/></div>
            <h3 className="font-display font-bold text-lg text-white">{title}</h3>
            <p className="text-lavender-300 text-sm mt-1 mb-3" dir="rtl">{ar}</p>
            <p className="text-ink-400 text-sm leading-relaxed">{text}</p>
            <a href="#contact" className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-lavender-300 hover:text-white">Request this service <ArrowUpRight size={16}/></a>
          </article>
        </Reveal>)}
      </div>
    </div>
  </section>;
}
