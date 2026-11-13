import Reveal from './Reveal';

const offerings = [
  {
    title: 'AI Video Ads & Reels',
    ar: 'إعلانات وفيديوهات بالذكاء الاصطناعي',
    text: 'Creative concepts, scripts, AI visuals, voiceovers and motion-led edits for social platforms.',
    image: 'https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Electronic Restaurant Menus',
    ar: 'منيو إلكتروني للمطاعم والكافيهات',
    text: 'Branded digital menus with QR access and clear food presentation for restaurants and cafés.',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1400',
    url: 'https://restaurant-menu-saas.pages.dev/#/abu-khadija',
    button: 'مشاهدة المنيو',
  },
  {
    title: 'Websites & Landing Pages',
    ar: 'تصميم مواقع وصفحات هبوط',
    text: 'Modern responsive websites and focused landing pages for services, products and brands.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Digital Products & eBooks',
    ar: 'منتجات رقمية وكتب إلكترونية',
    text: 'Digital guides, downloadable products, illustrated books and publishing-ready concepts.',
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Presentations & Company Profiles',
    ar: 'عروض تقديمية وبروفايل شركات',
    text: 'Structured, polished presentations, portfolios and company profiles with a consistent visual system.',
    image: 'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Visual Identity & Branding',
    ar: 'هوية بصرية وتصميمات للبراند',
    text: 'Color direction, visual assets and branded social templates built around your business.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Social Content & Campaign Assets',
    ar: 'محتوى السوشيال ميديا والحملات',
    text: 'Reels, carousels, campaign visuals and content packages designed for a coherent brand presence.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
];

export default function ServiceCatalog() {
  return (
    <section id="solutions" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-lavender-950/10 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-sm font-semibold text-lavender-400 tracking-widest uppercase">Creative categories</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            كل الحلول الإبداعية <span className="text-gradient-purple">في مكان واحد</span>
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl mx-auto">اختاري القسم المناسب وشوفي نماذج الأعمال والمشروعات المرتبطة به.</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map(({ title, ar, text, image, url, button }, i) => (
            <Reveal key={title} delay={i * 60}>
              <article className="group h-full overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.025] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-lavender-400/30">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="font-display font-bold text-xl text-white">{title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-lavender-300 text-sm mb-3" dir="rtl">{ar}</p>
                  <p className="text-ink-400 text-sm leading-relaxed">{text}</p>

                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-5 rounded-xl border border-lavender-400/40 bg-lavender-500/10 px-4 py-2.5 text-sm font-semibold text-lavender-200 hover:bg-lavender-500/20 hover:border-lavender-300 transition-all"
                    >
                      {button}
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
