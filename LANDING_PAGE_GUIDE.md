# Nick Newton Coach Landing Page - Build Guide

## Project Overview

This is an MVP landing page for **nicknewton.coach** - a premium fitness coaching service for high-achieving entrepreneurs. Built with Astro + Tailwind CSS.

**Status**: Production-ready ✓
**Build**: Success - 1 page, 33KB
**Features**: Dynamic hero variants via URL params, responsive design, accessible FAQ, strong CTA

---

## Tech Stack

- **Framework**: Astro 4.x with static output
- **Styling**: Tailwind CSS 3.x
- **Font**: Inter (Google Fonts)
- **Color Scheme**: Custom brand colors (dark theme with deep red accent)
- **Build Target**: Static HTML (optimized for deployment)

---

## Color Palette

Defined in `tailwind.config.mjs`:

```js
brand: {
  dark: '#0a0a0a',      // Pure black background
  gray: '#1a1a1a',      // Section backgrounds
  accent: '#d4311a',    // Deep red (bold, not flashy)
  text: '#f5f5f5',      // Off-white text
  muted: '#888888'      // Secondary text
}
```

**Design Philosophy**: Dark, masculine aesthetic with high contrast for readability. No rounded corners on buttons - sharp, serious edges for serious businessmen.

---

## Project Structure

```
src/
├── components/
│   ├── Header.astro       # Navigation bar + brand
│   ├── Hero.astro         # Dynamic hero (3 variants)
│   ├── WhatYouGet.astro   # 5-feature breakdown
│   ├── Proof.astro        # Nick's competition story
│   ├── FAQ.astro          # 6 objection handlers
│   └── CTA.astro          # Final call-to-action
├── layouts/
│   └── Layout.astro       # Base HTML template
├── pages/
│   └── index.astro        # Main landing page
├── styles/
│   └── global.css         # Tailwind + custom styles
└── assets/                # Images, fonts

dist/                       # Production build output
```

---

## Page Sections & Content

### 1. Header
- **File**: `src/components/Header.astro`
- **Purpose**: Sticky navigation with brand name and CTA button
- **Content**:
  - "Nick Newton" branding
  - "Let's talk" call-to-action button

### 2. Hero Section
- **File**: `src/components/Hero.astro`
- **Purpose**: Attention-grabbing opening with value proposition
- **Variants** (URL parameter: `?variant=operator|established|universal`):

#### OPERATOR (young founders, 20s-30s)
- **Headline**: "Your bank account says CEO. Your body says intern."
- **Subhead**: "You've systemized everything except yourself. Daily async coaching for operators who don't have time for bullshit."
- **Result**: "Six months from now, the body matches the business. Command respect before you speak."

#### ESTABLISHED (35+, business owners, family men)
- **Headline**: "You didn't grind for 20 years to die at 55."
- **Subhead**: "Your kids need you present. Your wife married a man she was attracted to. Time to be that guy again."
- **Result**: "Present for family. Desired by wife. Here for decades, not borrowed time."

#### UNIVERSAL (Default)
- **Headline**: "You delegate everything else. Stop DIY-ing your health."
- **Subhead**: "You don't do your own taxes. You don't run your own ads. Why are you winging the one thing that determines how long you're alive?"
- **Result**: "Sharp when it counts. Stop hiding from mirrors, cameras, and beach holidays."

**Additional Features**:
- VSL video placeholder on right (ready for YouTube/Vimeo embed)
- Two CTAs: Chat with Daisy (primary) + See What You Get (secondary)
- Gradient background

### 3. What You Get
- **File**: `src/components/WhatYouGet.astro`
- **Purpose**: Objection handling through feature clarity
- **Content** (5 features):

1. **Daily Async Check-ins**
   - Not calls, not forms. Quick back-and-forth that fits your actual schedule.

2. **Pattern Tracking**
   - We watch your patterns across weeks. Catches excuses you don't notice yourself.

3. **Done-for-You Nutrition**
   - Eating plan built specifically for your body and lifestyle. No guessing, no apps.

4. **Training Programmed**
   - Every workout is in the app. Progressive. Challenging. No "what do I do today?" moments.

5. **One Strategy Call Weekly**
   - 60 minutes to solve the real stuff. The mental game, the excuses, the patterns that are holding you back.

**Closing Statement**:
"Most coaches sell you calls and accountability. We sell you results. Different system. Different investment. Different outcome."

### 4. Proof Section
- **File**: `src/components/Proof.astro`
- **Purpose**: Credibility through personal example
- **Content**:
  - Nick competed in first men's bodybuilding show at 45
  - "Too old" is a lie - he's the proof
  - Photo placeholder for competition image
  - Two-column layout (text + image)

### 5. FAQ Section
- **File**: `src/components/FAQ.astro`
- **Purpose**: Address objections with honest answers
- **6 Questions & Answers**:

| Question | Answer |
|----------|--------|
| **I don't have time** | That's the point. 2-minute daily async check-ins. No calls to schedule. Built for busy operators. |
| **I've tried coaching before** | Weekly calls don't work for your schedule. Built async for how you actually operate. |
| **What if I travel?** | System travels with you. Async = timezone-proof. NY, Singapore, Portugal - same system. |
| **Is this just another fitness app?** | Apps don't call you out when you're bullshitting. I do. Apps don't understand entrepreneur psychology. I do. |
| **How is this different from gym membership?** | A gym is equipment. This is a coach who knows what works for someone running a business. You're training to be the man your family respects. |
| **What's the investment?** | Premium coaching for premium entrepreneurs. DM to discuss and ensure right fit. |

**Design**: Expandable details/summary elements with +/− icons

### 6. CTA Section
- **File**: `src/components/CTA.astro`
- **Purpose**: Final conversion push
- **Content**:
  - Headline: "Ready to Stop Winging It"
  - Subhead: "Let's have a real conversation about what's actually stopping you."
  - **Upfront Contract** (white box):
    - "20-minute diagnostic. I'll tell you if I can help. If I can't, I'll tell you that too. No ego. No bullshit."
    - Schedule Diagnostic button
  - Secondary CTA options:
    - Reply with what's not working
    - Chat with Daisy
  - Closing: "The worst thing that happens: we figure out it's not the right fit. The best thing: you stop hiding from mirrors."

---

## Dynamic Features

### Hero Variant Switching (UTM Parameter)

The hero section content changes based on URL parameter:

```
/?variant=operator     → Young entrepreneur messaging
/?variant=established  → 35+ business owner messaging
/?variant=universal    → Default (delegates, generalists)
```

**Implementation** (src/pages/index.astro):
```astro
const variant = Astro.url.searchParams.get('variant') as 'operator' | 'established' | 'universal' || 'universal';
<Hero variant={variant} />
```

This allows A/B testing or traffic segmentation via marketing platform UTM parameters.

---

## Component Structure

Each section is a standalone `.astro` component:
- **Reusable**: Can be repurposed or reordered
- **Maintainable**: Self-contained markup + styling
- **Responsive**: Mobile-first Tailwind approach
- **Lightweight**: No JavaScript overhead

All components use:
- `.section-container` class for consistent padding/width
- `.subheading` class for secondary copy
- `.btn-primary` / `.btn-secondary` for consistent button styling

---

## Styling Guidelines

### Typography
- **Headlines**: Bold, tight line-height, slightly negative letter spacing
  - H1: 3xl → 6xl (responsive)
  - H2: 2xl → 4xl
  - H3: xl → 3xl

- **Body Copy**:
  - `subheading` class: lg text, muted color for secondary content
  - Regular: base/lg for primary body text

### Spacing
- **Padding**: 4px → 8px base unit (Tailwind standard)
- **Sections**: 16-24px vertical padding (responsive)
- **Gaps**: 4px → 8px between elements

### Buttons
- **Primary** (Deep red): Full-width on mobile, auto on desktop
- **Secondary** (Gray border): Ghost style with accent hover
- **No rounded corners**: `rounded-sm` or none - sharp edges for serious tone
- **Hover states**: Color shift + shadow elevation

### Colors
- **Text**: Always brand-text (#f5f5f5) or brand-muted for secondary
- **Backgrounds**: brand-dark (#0a0a0a) or brand-gray (#1a1a1a)
- **Accents**: brand-accent (#d4311a) for emphasis
- **Borders**: brand-muted for dividers

---

## Responsive Design

**Breakpoints** (Tailwind standard):
- `sm`: 640px - Tablet
- `md`: 768px - Small desktop
- `lg`: 1024px - Large desktop
- `xl`: 1280px - Extra wide

**Mobile-first approach**: Default styles for mobile, enhanced with `sm:`, `md:`, `lg:` modifiers.

**Key responsive elements**:
- Hero: Stack text over video on mobile, side-by-side on desktop
- Features: 1-column on mobile, 2-column on desktop
- Buttons: Full-width on mobile, auto-width on desktop
- Typography: Scales from 3xl (mobile) to 6xl (desktop)

---

## Ready-Made Customizations

### 1. Add Video to Hero
Replace the placeholder in `Hero.astro`:

```astro
<!-- In the right-side div, replace the placeholder with: -->
<iframe
  src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
  class="w-full h-full rounded-lg"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen
></iframe>
```

### 2. Add Competition Photo
Replace the placeholder in `Proof.astro`:

```astro
<img
  src="/path/to/competition-photo.jpg"
  alt="Nick Newton on stage at bodybuilding competition"
  class="w-full h-full object-cover"
/>
```

### 3. Connect CTA Buttons to Email/Chat
Update button onclick handlers:

```astro
<!-- For email: -->
<a href="mailto:nick@nicknewton.coach?subject=Not%20working%20right%20now"
   class="btn-primary">
  Reply with what's not working
</a>

<!-- For Daisy chat (assuming widget integration): -->
<button onclick="window.daisyChat.open()">Chat with Daisy</button>

<!-- For diagnostic call: -->
<a href="https://calendly.com/nick-newton/diagnostic" class="btn-primary">
  Schedule Diagnostic
</a>
```

### 4. Adjust Accent Color
Edit `tailwind.config.mjs`:

```js
brand: {
  // ...
  accent: '#your-color-here',  // Try: #c41e3a (crimson), #ffd700 (gold), #00d4ff (cyan)
}
```

---

## Brand Voice Guidelines

Used throughout copy:

- **Direct, not salesy**: "Your bank account says CEO" vs "Transform into a CEO"
- **Warm but challenges**: Acknowledges reality, offers solution
- **British, not American hype**: No "amazing," "incredible," "transform your life"
- **Results over promises**: Specific outcomes, not vague benefits
- **No BS**: Straight talk, honest about what's involved

---

## Building & Deployment

### Local Development
```bash
npm install
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Create production build
npm run preview      # Preview built site
```

### Production Build
```bash
npm run build        # Creates /dist folder with static HTML
```

The `/dist` folder is ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting

### Environment Notes
- **Output**: Static HTML (no server needed)
- **Size**: ~33KB (extremely lightweight)
- **Performance**: All CSS inlined, no JavaScript overhead
- **SEO-ready**: Proper meta tags, semantic HTML

---

## Files Reference

| File | Purpose | Status |
|------|---------|--------|
| `src/components/Header.astro` | Navigation | ✓ Complete |
| `src/components/Hero.astro` | 3-variant hero section | ✓ Complete (with video placeholder) |
| `src/components/WhatYouGet.astro` | Feature breakdown | ✓ Complete |
| `src/components/Proof.astro` | Social proof | ✓ Complete (image placeholder) |
| `src/components/FAQ.astro` | Objection handlers | ✓ Complete |
| `src/components/CTA.astro` | Final call-to-action | ✓ Complete |
| `src/layouts/Layout.astro` | Base HTML template | ✓ Complete |
| `src/pages/index.astro` | Main landing page | ✓ Complete |
| `src/styles/global.css` | Tailwind + custom | ✓ Complete |
| `tailwind.config.mjs` | Color & theme config | ✓ Complete |
| `astro.config.mjs` | Build config | ✓ Complete |

---

## Next Steps

1. **Integrate Chat Widget**: Wire up Daisy widget to the buttons (already set up for custom events in Hero)
2. **Add Video**: Embed VSL video to Hero section
3. **Add Photo**: Upload competition photo to Proof section
4. **Connect CTAs**: Link buttons to email, calendar, chat system
5. **Deploy**: Push `/dist` to hosting platform
6. **Analytics**: Add UTM tracking for variant testing
7. **Testing**: A/B test hero variants to find highest-converting message

---

## Support & Modifications

All components are built in plain Astro with Tailwind utilities. Easy to:
- Reorder sections
- Add new sections (follow component pattern)
- Change colors in config
- Adjust spacing/typography
- Add interactive elements (minimal JS needed)

No external dependencies beyond Astro + Tailwind.
