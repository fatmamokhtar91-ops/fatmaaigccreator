const offerings = [
  {
    title: 'AI Video Ads & Reels',
    ar: 'إعلانات وفيديوهات بالذكاء الاصطناعي',
    text: 'Creative concepts, scripts, AI visuals, voiceovers and motion-led edits for social platforms.',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1400&q=90',
  },
  {
    title: 'Electronic Restaurant Menus',
    ar: 'منيو إلكتروني للمطاعم والكافيهات',
    text: 'Branded digital menus with QR access and clear food presentation for restaurants and cafés.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9?auto=format&fit=crop&w=1400&q=90',
    url: 'https://restaurant-menu-saas.pages.dev/#/port-said-fish',
    button: 'مشاهدة المنيو',
  },
  {
    title: 'Websites & Landing Pages',
    ar: 'تصميم مواقع وصفحات هبوط',
    text: 'Modern responsive websites and focused landing pages for services, products and brands.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90',
  },
  {
    title: 'Digital Products & eBooks',
    ar: 'منتجات رقمية وكتب إلكترونية',
    text: 'Digital guides, downloadable products, illustrated books and publishing-ready concepts.',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1400&q=90',
  },
  {
    title: 'Presentations & Company Profiles',
    ar: 'عروض تقديمية وبروفايل شركات',
    text: 'Structured, polished presentations, portfolios and company profiles with a consistent visual system.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=90',
  },
  {
    title: 'Visual Identity & Branding',
    ar: 'هوية بصرية وتصميمات للبراند',
    text: 'Color direction, visual assets and branded social templates built around your business.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=90',
  },
  {
    title: 'Social Content & Campaign Assets',
    ar: 'محتوى السوشيال ميديا والحملات',
    text: 'Reels, carousels, campaign visuals and content packages designed for a coherent brand presence.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=90',
  },
];

export default function ServiceCatalog() {
  return (
    <section id="solutions" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-gold-950/10 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-gold-400 tracking-widest uppercase">Creative categories</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            كل الحلول الإبداعية <span className="text-gradient-purple">في مكان واحد</span>
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl mx-auto">اختاري القسم المناسب وشوفي نماذج الأعمال والمشروعات المرتبطة به.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map(({ title, ar, text, image, url, button }) => (
            <article key={title} className="h-full overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.025] shadow-2xl">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={image}
                  alt={ar}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-display font-bold text-xl text-white">{title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gold-300 text-sm mb-3" dir="rtl">{ar}</p>
                <p className="text-ink-400 text-sm leading-relaxed">{text}</p>

                {url && (
                  <a
                    href={url}
                    className="inline-flex items-center mt-5 rounded-xl border border-gold-400/40 bg-gold-500/10 px-4 py-2.5 text-sm font-semibold text-gold-200"
                  >
                    {button}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
