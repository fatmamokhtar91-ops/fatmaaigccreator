# AI Content Creator Portfolio Template

A premium, fully responsive portfolio website template designed for AI content creators, video editors, social media designers, and digital creatives. Built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- **Single-file customization** — All content (name, services, videos, gallery, certificates, contact info, social links) is controlled from `src/data/portfolio.ts`
- **8 fully designed sections** — Hero, About, Services, Video Portfolio, Image Gallery, Certificates, Contact, Footer
- **Dark theme with glassmorphism** — Modern, professional aesthetic with soft purple accents
- **Scroll-triggered animations** — Smooth reveal effects powered by IntersectionObserver
- **Category filtering** — Video portfolio and image gallery both support filterable categories
- **Fullscreen lightbox** — Gallery images open in a click-to-zoom overlay
- **Mobile-first responsive** — Hamburger nav, stacked grids, and touch-friendly tap targets
- **Placeholder-safe** — Contact info, social links, and certificates use clearly labeled demo placeholders that won't mislead visitors
- **No backend required** — Runs entirely as a static site (optional Supabase support for form submissions if you want to add it)

## Quick Start

### Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

### Installation

1. **Download or clone the template**

   ```bash
   git clone <your-repo-url> my-portfolio
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the dev server**

   ```bash
   npm run dev
   ```

   The site runs at `http://localhost:5173`.

4. **Build for production**

   ```bash
   npm run build
   ```

   Output goes to the `dist/` folder. Preview it with:

   ```bash
   npm run preview
   ```

## Customization Guide

Everything you need to personalize is in **`src/data/portfolio.ts`**. You do not need to touch any component files.

### 1. Brand Identity

```typescript
name: 'Fatma Omar',           // Your full name (shown in navbar, footer, hero)
brandInitial: 'F',            // Single letter in the logo square
title: 'AI Content Creator',  // Your role/title (shown in hero)
username: 'fatma.omarofficially', // For reference, not displayed on the page
```

### 2. Hero Section

```typescript
heroBadge: 'AI-Powered Content Creation',  // Small pill above the title
heroLine1: 'Hi, I\u2019m {name}',          // {name} is auto-replaced
heroLine2: '{title}',                       // {title} is auto-replaced
tagline: 'Your tagline here...',
```

### 3. About Section

```typescript
aboutImage: 'https://...',                  // Your portrait or workspace photo URL
aboutBadgeTitle: 'AI-Enhanced Workflow',    // Floating badge on the image
aboutBadgeSubtitle: 'Faster delivery, premium quality',
aboutHeading: 'Your about heading',
aboutPara1: 'I\u2019m {name}, ...',        // {name} is auto-replaced
aboutPara2: 'Your second paragraph...',
aboutHighlights: [                           // Checklist items
  'AI video ad specialist',
  'Social media content strategy',
  // ...
],
aboutStatValue: '12+',                      // Floating stat card
aboutStatLabel: 'AI Tools Mastered',
```

### 4. Services

Each service card has an icon, title, description, and feature list. Icon values map to emoji:

| Icon value | Emoji |
|------------|-------|
| `Video`    | 🎬    |
| `Social`   | 📱    |
| `Product`  | 🛍️    |
| `Brand`    | 🎨    |

```typescript
services: [
  {
    icon: 'Video',
    title: 'AI Video Advertisements',
    description: '...',
    features: ['Feature 1', 'Feature 2', ...],
  },
  // add or remove services as needed
],
```

### 5. Video Portfolio

Replace the demo thumbnails with your own video poster images. Set `views` to real numbers or leave as `'Sample'` until you have data.

```typescript
videos: [
  {
    title: 'Your Project Title',
    description: 'Short description of the project.',
    category: 'Product Promo',  // Used for the filter buttons
    duration: '0:32',
    views: '1.2M',              // or 'Sample'
    thumbnail: 'https://...',
  },
],
```

### 6. Image Gallery

Add as many images as you like. The `category` field powers the filter buttons.

```typescript
gallery: [
  { src: 'https://...', alt: 'Description', category: 'Behind the Scenes' },
],
```

### 7. Certificates

While `isPlaceholder: true`, the card shows a "Demo" badge. Replace with real data and set `isPlaceholder: false`.

```typescript
certificates: [
  {
    title: 'Your Certificate Title',
    issuer: 'Issuing Organization',
    year: '2025',
    image: 'https://...',
    isPlaceholder: false,       // Set to false when adding real certs
  },
],
```

### 8. Contact Info

The template uses placeholder flags to control behavior:

```typescript
email: 'your@email.com',
emailPlaceholder: false,       // false = contact form opens email client

whatsapp: '+1234567890',
whatsappLink: 'https://wa.me/1234567890',
whatsappPlaceholder: false,    // false = WhatsApp card is clickable

socials: {
  instagram: 'https://instagram.com/yourhandle',
  tiktok: 'https://tiktok.com/@yourhandle',
  youtube: 'https://youtube.com/@yourhandle',
  linkedin: 'https://linkedin.com/in/yourprofile',
  behance: 'https://behance.net/yourprofile',
},
socialsPlaceholder: false,     // false = social icons link to real profiles
```

### 9. Stats

```typescript
stats: [
  { label: 'Specialization', value: 'AI Video' },
  { label: 'Platforms', value: '5+' },
  { label: 'Tools Mastered', value: '12+' },
  { label: 'Turnaround', value: '48h' },
],
```

### 10. Skills

```typescript
skills: ['Runway ML', 'Midjourney', 'After Effects', ...],
```

### 11. Footer

```typescript
footerTagline: 'AI Content Creator · Video Ads · Social Media · Product Promos',
```

## Changing the Color Scheme

Colors are defined in `tailwind.config.js` under the `ink` (neutral/dark) and `lavender` (accent) ramps. Each has shades 50–900 (ink also has 950). To rebrand:

1. Open `tailwind.config.js`
2. Replace the `lavender` values with your brand color hex codes
3. Replace the `ink` values if you want a different neutral base
4. Update the gradient and glow color references in `src/index.css` (search for `rgba(167, 139, 250` — that's the lavender RGB used in shadows and borders)

The scrollbar color in `src/index.css` also references the accent color (`#6b2fb8`, `#8b5fe8`).

## Changing Fonts

Fonts are loaded via Google Fonts in `src/index.css` (line 1):

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
```

Replace with your desired fonts, then update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Body Font', 'system-ui', 'sans-serif'],
  display: ['Your Heading Font', 'system-ui', 'sans-serif'],
},
```

## Deployment

The template builds to a static `dist/` folder that can be hosted on any static hosting provider.

### Option 1: Vercel

1. Push your project to a GitHub/GitLab/Bitbucket repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel auto-detects Vite — no configuration needed
5. Click "Deploy"
6. Your site is live at `https://your-project.vercel.app`

### Option 2: Netlify

1. Run `npm run build` locally
2. Go to [netlify.com](https://netlify.com) and sign in
3. Drag and drop the `dist/` folder onto the Netlify dashboard
4. Or connect your Git repo and set build command to `npm run build` and publish directory to `dist`

### Option 3: GitHub Pages

1. Add `base: '/your-repo-name/'` to `vite.config.ts`
2. Run `npm run build`
3. Push the `dist/` folder contents to a `gh-pages` branch
4. Enable GitHub Pages in your repository settings

### Option 4: Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your Git repository
3. Set build command to `npm run build`
4. Set output directory to `dist`
5. Click "Save and Deploy"

### Option 5: Bolt

1. Import the project into [Bolt](https://bolt.new)
2. Click the deploy button in the header
3. Your site is live on a Bolt-hosted URL

## Project Structure

```
├── src/
│   ├── data/
│   │   └── portfolio.ts        ← THE ONLY FILE YOU NEED TO EDIT
│   ├── components/
│   │   ├── Navbar.tsx           (fixed nav with scroll-spy)
│   │   ├── Hero.tsx             (hero with stats row)
│   │   ├── About.tsx            (bio + skills cloud)
│   │   ├── Services.tsx         (service cards)
│   │   ├── VideoPortfolio.tsx   (filterable video grid)
│   │   ├── Gallery.tsx          (filterable image grid + lightbox)
│   │   ├── Certificates.tsx     (certificate cards with demo badges)
│   │   ├── Contact.tsx          (contact form + info cards + socials)
│   │   ├── Footer.tsx           (brand, links, contact, copyright)
│   │   └── Reveal.tsx           (scroll animation wrapper)
│   ├── App.tsx                  (root component, section order)
│   ├── main.tsx                 (React entry point)
│   └── index.css                (global styles, animations, utilities)
├── index.html                   (HTML template + meta tags)
├── tailwind.config.js           (colors, fonts, animations)
├── vite.config.ts               (Vite config + path alias)
├── package.json
└── README.md
```

## Available Scripts

| Command           | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start dev server at localhost:5173  |
| `npm run build`   | Build production bundle to dist/    |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |
| `npm run typecheck` | Run TypeScript type checking       |

## Tech Stack

- **React 18** — UI framework
- **TypeScript 5** — Type safety
- **Vite 5** — Build tool and dev server
- **Tailwind CSS 3** — Utility-first styling
- **Lucide React** — Icon library

## License

This template is licensed for commercial use. You may use it to build and sell portfolio websites for yourself or your clients. You may not resell or redistribute the template source code itself.

## Support

If you purchased this template and need help customizing it, refer to the Customization Guide above. All changes happen in `src/data/portfolio.ts` — no coding experience required for basic personalization.
