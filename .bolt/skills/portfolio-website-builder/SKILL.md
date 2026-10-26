---
name: portfolio-website-builder
description: Conventions for building portfolio websites in Bolt — central data file pattern, demo placeholder content rules, section structure, and design standards. Use whenever the user asks to build, redesign, or update a portfolio website, personal site, creator site, or freelancer showcase, even if they don't mention "conventions" or name the skill directly. Also use when the user asks to swap placeholder content for real content on an existing portfolio.
---

# Portfolio Website Builder

Conventions for building portfolio websites that look professional on day one with placeholder content, and are trivially easy to personalize when real details arrive.

## Central data file pattern

All portfolio content — name, title, tagline, contact info, social links, services, videos, gallery images, certificates, skills, stats — lives in a single exported object in `src/data/portfolio.ts`. Components import from there and never hardcode personal details.

This is the most important rule. When a user wants to update their name, email, social links, or portfolio samples, they edit one file instead of hunting through components. If a component needs a piece of personal data, add it to the data object and reference it from there — do not inline it.

```typescript
// src/data/portfolio.ts
export const PORTFOLIO_DATA = {
  name: 'Fatma Omar',
  username: 'fatma.omarofficially',
  title: 'AI Content Creator',
  email: '[Add your email here]',
  // ... everything else
};
```

## Placeholder content rules

When the user hasn't provided real personal info yet, use clearly labeled placeholders — not fake data that looks real.

- **Contact info:** Use bracketed labels like `[Add your email here]` and `[Add your WhatsApp number]`. Set a flag (e.g., `emailPlaceholder: true`) so components can disable click behavior and show a friendly notice instead of linking to nothing.
- **Social links:** Set all URLs to `#` and intercept clicks to show a "links coming soon" message rather than navigating away. Set a `socialsPlaceholder: true` flag.
- **Certificates:** Use bracketed labels like `[Your Certificate Title]` and `[Issuing Organization]`. Add an `isPlaceholder: true` flag so the UI can show a "Demo" badge. Never invent fake certifications, issuers, or qualification names — a placeholder is honest; a fake credential is not.
- **Stats:** Never fabricate client counts, view counts, revenue, or business results. Use honest descriptors instead (e.g., "Specialization: AI Video", "Tools Mastered: 12+", "Turnaround: 48h"). These describe capabilities without implying track record the person may not have.
- **Portfolio samples:** Use high-quality stock images (via the Pexels MCP tool) as thumbnails. Label view counts as "Sample" instead of inventing numbers. Include short descriptions that explain what kind of project each sample represents.

The principle: the site should look complete and professional, but nothing should claim a credential, client, or result the person doesn't actually have. A visitor or potential client should be able to tell what's a placeholder vs. real content.

## Required sections

A portfolio site should include these sections, in this order:

1. **Hero / Home** — Name, title, tagline, two CTAs (primary: "Start Your Project", secondary: "View My Work"), and a stats row
2. **About** — Portrait image with floating accent card, bio text, expertise checklist, and a skills/tools cloud
3. **Services** — 3-4 service cards with icon, title, description, and feature list
4. **Video Portfolio** — Card grid with category filtering, play-button hover overlay, duration, and short descriptions
5. **Image Gallery** — Masonry-style grid with category filters and a fullscreen lightbox on click
6. **Certificates** — Card grid with images, labeled placeholders if no real certs yet
7. **Contact** — Contact form plus contact method cards (WhatsApp, email, location) and social media icons
8. **Footer** — Brand, quick links, contact info, copyright

## Design standards

- **Color palette:** Dark theme (ink/black base) with soft purple (lavender) accents and white text. Define a full color ramp in tailwind.config.js — at minimum `ink` (neutral) and `lavender` (accent) with 50-900 shades each.
- **Typography:** Use a display font (Plus Jakarta Sans) for headings and a body font (Inter). Load via Google Fonts import in index.css. Maximum 3 font weights.
- **Glassmorphism:** Use `backdrop-blur` with semi-transparent backgrounds and subtle borders for cards. Define reusable `.glass` and `.glass-card` utilities in index.css.
- **Animations:** Use an IntersectionObserver-based `Reveal` component for scroll-triggered fade-up animations. Add hover scale, glow, and translate effects on cards. Keep animations smooth (cubic-bezier easing) and never janky.
- **Responsive:** Mobile-first with breakpoints at `sm`, `lg`. Navbar collapses to a hamburger menu on mobile. Grids stack to single column on small screens.
- **Navbar:** Fixed position, transparent at top, solidifies with backdrop blur on scroll. Active section highlighting via scroll position. Smooth scroll on nav clicks.
- **Call-to-action buttons:** Primary CTA uses the lavender gradient with glow shadow on hover. Secondary CTA uses glass style. Both have scale-on-hover micro-interaction.

## Image sourcing

Always use the Pexels MCP tool (`pexels_search`) to get real, license-free placeholder images. Never guess or hardcode image URLs from memory — the Pexels tool returns guaranteed-valid URLs. Search for contextually relevant queries (e.g., "product photography", "social media marketing", "AI technology") and pick images that match each section's purpose.

## Personalization handoff

When the user is ready to add real content, point them to `src/data/portfolio.ts` as the single file to edit. List the specific fields to swap: name, email, whatsapp, socials, video thumbnails/titles, gallery images, and certificate details. Remind them to remove the placeholder flags (`emailPlaceholder`, `whatsappPlaceholder`, `socialsPlaceholder`, `isPlaceholder`) when they add real data — the components use those flags to toggle click behavior and hide demo badges.
