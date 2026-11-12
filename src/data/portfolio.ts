// =============================================================
//  PORTFOLIO CONFIGURATION FILE
//  This is the ONLY file you need to edit to personalize your
//  portfolio. Every section of the site pulls its content from
//  the values below. See README.md for detailed instructions.
// =============================================================

export const PORTFOLIO_DATA = {
  // ---- Brand identity ----
  // Shown in the navbar, footer, and hero section.
  name: 'Fatma Omar',
  brandInitial: 'F',          // Single letter shown in the logo square
  username: 'fatma.omarofficially',
  title: 'AI Content Creator', // Shown as the second line of the hero heading

  // ---- Hero section ----
  heroBadge: 'AI-Powered Content Creation',  // Small pill above the hero title
  // Two-line hero heading. Line 1 uses {name}, line 2 uses {title}.
  heroLine1: 'Hi, I\u2019m {name}',
  heroLine2: '{title}',
  tagline: 'Crafting scroll-stopping AI video ads, social media content, and product promos that convert.',

  // ---- About section ----
  aboutImage: 'https://images.pexels.com/photos/17681366/pexels-photo-17681366.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  aboutBadgeTitle: 'AI-Enhanced Workflow',
  aboutBadgeSubtitle: 'Faster delivery, premium quality',
  aboutHeading: 'Turning AI tools into brand stories that sell',
  aboutPara1: 'I\u2019m {name}, an AI content creator specializing in video advertisements, social media content, and product promotional videos. I blend cutting-edge AI tools with creative direction to produce content that looks cinematic — without the cinematic budget.',
  aboutPara2: 'From AI-generated voiceovers to 3D product showcases, I help brands stand out in crowded feeds. Every project is crafted with strategy, data, and a deep understanding of what makes people stop, watch, and click.',
  aboutHighlights: [
    'AI video ad specialist',
    'Social media content strategy',
    'Product promo expertise',
    'Fast 48-hour delivery',
    'Unlimited revisions',
    'Multi-platform optimization',
  ],
  // Floating stat card in the About section
  aboutStatValue: '12+',
  aboutStatLabel: 'AI Tools Mastered',

  // ---- Contact info ----
  // While emailPlaceholder is true, the contact form shows a friendly
  // message instead of trying to open an email client. Set to false
  // and replace email with your real address to enable live sending.
  email: '[Add your email here]',
  emailPlaceholder: true,

  // Same pattern for WhatsApp.
  whatsapp: '+201013308014',
  whatsappLink: 'https://wa.me/201013308014',
  whatsappPlaceholder: false,

  location: 'Available Worldwide · Remote',

  // ---- Social media ----
  // While socialsPlaceholder is true, clicking a social icon shows a
  // "links coming soon" notice. Set to false and replace with your
  // real profile URLs to make them clickable.
  socials: {
    instagram: '#',
    tiktok: '#',
    youtube: '#',
    linkedin: '#',
    behance: '#',
  },
  socialsPlaceholder: true,

  // ---- Stats row (hero section) ----
  // These describe your capabilities — avoid fabricating client counts
  // or view totals that could mislead potential customers.
  stats: [
    { label: 'Specialization', value: 'AI Video' },
    { label: 'Platforms', value: '5+' },
    { label: 'Tools Mastered', value: '12+' },
    { label: 'Turnaround', value: '48h' },
  ],

  // ---- Services ----
  // icon values map to emoji in the Services component: Video, Social, Product, Brand
  services: [
    {
      icon: 'Video',
      title: 'AI Video Advertisements',
      description: 'High-converting AI-generated video ads optimized for Facebook, Instagram, and TikTok. Includes scriptwriting, AI voiceover, and motion graphics.',
      features: ['AI voiceover & scripting', 'Platform-optimized formats', 'A/B test variants', '48h turnaround'],
    },
    {
      icon: 'Social',
      title: 'Social Media Content',
      description: 'Engaging AI-powered social media posts, reels, and stories that grow your following and boost engagement across all platforms.',
      features: ['Reels & short-form video', 'Carousel posts', 'Content calendars', 'Trend-aware strategy'],
    },
    {
      icon: 'Product',
      title: 'Product Promo Videos',
      description: 'Cinematic product promotional videos using AI tools to showcase your product from every angle — no physical shoot required.',
      features: ['3D product showcases', 'AI-generated backgrounds', 'Lifestyle mockups', 'E-commerce ready'],
    },
    {
      icon: 'Brand',
      title: 'Brand Identity Kits',
      description: 'Complete visual identity packages including AI-generated logos, color palettes, typography, and brand guidelines.',
      features: ['Logo design', 'Color & type systems', 'Brand guidelines', 'Social templates'],
    },
  ],

  // ---- Video portfolio ----
  // Replace thumbnails with your own video poster images.
  // Set views to real numbers or remove the field to hide it.
  videos: [
    {
      title: 'Luxury Perfume — Cinematic Product Ad',
      description: 'AI-generated cinematic ad showcasing a perfume bottle with dynamic splash effects and atmospheric lighting.',
      category: 'Product Promo',
      duration: '0:32',
      views: 'Sample',
      thumbnail: 'https://images.pexels.com/photos/31152154/pexels-photo-31152154.png?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      title: 'Skincare Launch — Short-Form Reel',
      description: 'Vertical social media reel designed for TikTok and Instagram, featuring AI-enhanced product visuals and trending audio style.',
      category: 'Social Media',
      duration: '0:15',
      views: 'Sample',
      thumbnail: 'https://images.pexels.com/photos/8102021/pexels-photo-8102021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      title: 'Tech App — AI Explainer Video',
      description: 'Animated explainer using AI-generated visuals and voiceover to communicate a tech startup app value proposition.',
      category: 'AI Video Ad',
      duration: '1:05',
      views: 'Sample',
      thumbnail: 'https://images.pexels.com/photos/15863066/pexels-photo-15863066.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      title: 'Gold Jewelry — Elegant Showcase',
      description: 'Product promotional video with AI-generated luxury backgrounds, close-up motion, and refined color grading.',
      category: 'Product Promo',
      duration: '0:28',
      views: 'Sample',
      thumbnail: 'https://images.pexels.com/photos/30541169/pexels-photo-30541169.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      title: 'Food Brand — Appetite-Trigger Ad',
      description: 'Mouth-watering AI-enhanced food advertisement with dynamic text overlays, optimized for social feed placement.',
      category: 'AI Video Ad',
      duration: '0:20',
      views: 'Sample',
      thumbnail: 'https://images.pexels.com/photos/8305726/pexels-photo-8305726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      title: 'Fashion Collection — Story Series',
      description: 'Multi-slide Instagram story sequence with AI-styled fashion visuals, animated text, and brand-consistent transitions.',
      category: 'Social Media',
      duration: '0:45',
      views: 'Sample',
      thumbnail: 'https://images.pexels.com/photos/15221799/pexels-photo-15221799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
  ],

  // ---- Image gallery ----
  gallery: [
    { src: 'https://images.pexels.com/photos/5878878/pexels-photo-5878878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Studio product photography setup', category: 'Behind the Scenes' },
    { src: 'https://images.pexels.com/photos/6956303/pexels-photo-6956303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Social media marketing design layout', category: 'Social Media' },
    { src: 'https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: '3D AI brain visualization concept', category: 'AI Art' },
    { src: 'https://images.pexels.com/photos/35152910/pexels-photo-35152910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Luxury perfume product shot', category: 'Product' },
    { src: 'https://images.pexels.com/photos/17486102/pexels-photo-17486102.png?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Holographic 3D shapes concept', category: 'AI Art' },
    { src: 'https://images.pexels.com/photos/5563240/pexels-photo-5563240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cinematographer behind camera setup', category: 'Behind the Scenes' },
    { src: 'https://images.pexels.com/photos/8102021/pexels-photo-8102021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Skincare serum product flat lay', category: 'Product' },
    { src: 'https://images.pexels.com/photos/17483910/pexels-photo-17483910.png?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Digital wave abstract design', category: 'AI Art' },
    { src: 'https://images.pexels.com/photos/38285024/pexels-photo-38285024.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Content creator design concept', category: 'Social Media' },
    { src: 'https://images.pexels.com/photos/30541169/pexels-photo-30541169.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Gold jewelry luxury product shot', category: 'Product' },
    { src: 'https://images.pexels.com/photos/8305726/pexels-photo-8305726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Gourmet food advertisement visual', category: 'Product' },
    { src: 'https://images.pexels.com/photos/39190704/pexels-photo-39190704.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Fashion studio photoshoot setup', category: 'Behind the Scenes' },
  ],

  // ---- Certificates ----
  // Keep isPlaceholder: true until you add real credentials.
  // The UI shows a "Demo" badge on placeholder cards.
  certificates: [
    { title: '[Your Certificate Title]', issuer: '[Issuing Organization]', year: '[Year]', image: 'https://images.pexels.com/photos/8177922/pexels-photo-8177922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', isPlaceholder: true },
    { title: '[Your Certificate Title]', issuer: '[Issuing Organization]', year: '[Year]', image: 'https://images.pexels.com/photos/8177925/pexels-photo-8177925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', isPlaceholder: true },
    { title: '[Your Certificate Title]', issuer: '[Issuing Organization]', year: '[Year]', image: 'https://images.pexels.com/photos/8177932/pexels-photo-8177932.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', isPlaceholder: true },
    { title: '[Your Certificate Title]', issuer: '[Issuing Organization]', year: '[Year]', image: 'https://images.pexels.com/photos/8177924/pexels-photo-8177924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', isPlaceholder: true },
  ],

  // ---- Skills & tools ----
  skills: ['Runway ML', 'Midjourney', 'After Effects', 'Premiere Pro', 'Canva', 'CapCut', 'DALL\u00b7E', 'Sora', 'ElevenLabs', 'Photoshop', 'Illustrator', 'Figma'],

  // ---- Footer ----
  footerTagline: 'AI Content Creator · Video Ads · Social Media · Product Promos',
};
