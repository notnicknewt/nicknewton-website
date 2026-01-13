# Integration Checklist

This checklist tracks what's ready, what needs integration, and what's placeholder content.

## Status Summary

**Page Build**: ✓ COMPLETE
**Design System**: ✓ COMPLETE
**Copy**: ✓ COMPLETE
**Interactive Features**: 🟡 READY FOR INTEGRATION
**Media Assets**: 🟡 PLACEHOLDERS IN PLACE
**Deployment**: ✓ READY

---

## Section-by-Section Status

### Header Navigation
**File**: `src/components/Header.astro`
- [x] Sticky positioning
- [x] Brand name display
- [x] "Let's talk" CTA button
- [ ] Wire button to action (email/chat/calendar)

**Action Required**: Connect "Let's talk" button onclick

---

### Hero Section
**File**: `src/components/Hero.astro`
- [x] 3 dynamic variants (operator/established/universal)
- [x] VSL video placeholder
- [x] Both CTA buttons
- [x] Gradient background
- [ ] Embed actual VSL video
- [ ] Wire CTA button events

**Current State**:
```astro
<!-- Lines 73-96: Video placeholder with comment for integration -->
<!-- VSL Video Placeholder
Replace with actual video embed (YouTube/Vimeo/Wistia)
-->
```

**Action Required**:
1. Embed VSL video (replace placeholder)
2. Wire CTA buttons:
   - "Chat with Daisy" → Daisy widget open
   - "See What You Get" → Scroll to WhatYouGet section

---

### What You Get Section
**File**: `src/components/WhatYouGet.astro`
- [x] All 5 features listed
- [x] Responsive grid (1-col mobile, 2-col desktop)
- [x] Differentiator statement
- [ ] Wire section for smooth scroll from hero

**Current State**:
```javascript
const features = [
  { title: "Daily Async Check-ins", description: "..." },
  { title: "Pattern Tracking", description: "..." },
  // ... (all 5 complete)
]
```

**Action Required**:
- Add `id="what-you-get"` anchor for hero link

---

### Proof Section
**File**: `src/components/Proof.astro`
- [x] Competition story (Nick at 45)
- [x] Photo placeholder with "45 years old" badge
- [x] Three key bullet points
- [x] Responsive 2-column layout
- [ ] Replace placeholder with actual competition photo

**Current Placeholder**:
```astro
<!-- Lines 8-27: Image placeholder -->
<div class="aspect-square bg-brand-dark rounded-lg overflow-hidden border-2 border-brand-accent/30">
  <!-- User icon + "Competition Photo" text -->
</div>
```

**Action Required**:
Replace with actual photo:
```astro
<img
  src="/images/nick-competition-photo.jpg"
  alt="Nick Newton competing at 45 years old - bodybuilding stage"
  class="w-full h-full object-cover rounded-lg"
/>
```

---

### FAQ Section
**File**: `src/components/FAQ.astro`
- [x] All 6 Q&A pairs
- [x] Expandable details/summary elements
- [x] +/− icon toggle
- [x] Responsive styling
- [ ] No integration needed

**Current State**: Static content, fully functional

---

### CTA Section
**File**: `src/components/CTA.astro`
- [x] Headline + subhead
- [x] "Upfront Contract" white box
- [x] Schedule Diagnostic button
- [x] Two secondary CTAs
- [ ] Wire all buttons to actions

**Current State**:
```astro
<button class="bg-brand-accent...">Schedule Diagnostic</button>
<button>Reply with what's not working</button>
<button>Chat with Daisy</button>
```

**Action Required**: Wire buttons:
1. **Schedule Diagnostic** → Calendly link
2. **Reply with what's not working** → Email link or form
3. **Chat with Daisy** → Open chat widget

---

## Media Assets Needed

### Priority 1: Required for Launch
- [ ] **Competition Photo** (Proof section)
  - Dimensions: Square aspect ratio recommended (1:1)
  - Size: 400-600px wide (Astro will optimize)
  - Format: JPG/WebP for performance
  - Location: `/src/assets/nick-competition-photo.jpg`

### Priority 2: For VSL Video
- [ ] **Wistia/Vimeo/YouTube Video URL**
  - Duration: 3-5 minutes recommended
  - Format: Embedded iframe or direct URL
  - Integration point: Lines 73-96 in Hero.astro

### Nice-to-Have: Later Additions
- [ ] Hero background video (optional overlay)
- [ ] Client testimonial videos for FAQ
- [ ] Before/after transformation images

---

## Integration Tasks

### Task 1: Daisy Chat Widget
**Status**: Ready for integration (Sonnet agent is handling)
**Files to Update**: All components with CTA buttons
**Methods Needed**:
- `window.dispatchEvent(new CustomEvent('daisy:open'))` - Already in Hero
- Need to add to Header, CTA section
- **Files**: `src/components/Header.astro`, `src/components/CTA.astro`

**Code Example**:
```astro
<button
  class="btn-primary"
  onclick="window.dispatchEvent(new CustomEvent('daisy:open'))"
>
  Chat with Daisy
</button>
```

### Task 2: Email / Contact Links
**Status**: Ready to wire
**Options**:
```html
<!-- Option A: Simple mailto -->
<a href="mailto:hello@nicknewton.coach?subject=What's%20not%20working">
  Reply with what's not working
</a>

<!-- Option B: Contact form (requires form component) -->
<!-- To be created -->

<!-- Option C: Typeform/Formspree -->
<!-- Add if needed -->
```

### Task 3: Calendly / Scheduling
**Status**: Ready to wire
**Integration**:
```astro
<a href="https://calendly.com/nicknewton/diagnostic"
   class="btn-primary"
   target="_blank">
  Schedule Diagnostic (20 mins)
</a>
```

### Task 4: Analytics & Tracking
**Status**: Ready to add
**Recommended**:
- Google Analytics 4 tag in Layout.astro
- Conversion tracking for:
  - Diagnostic calls scheduled
  - Chat widget opens
  - CTA button clicks
  - Page variants viewed

**Code to add** (in `src/layouts/Layout.astro` head):
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Task 5: FAQ Smooth Scrolling
**Status**: CSS-ready, can enhance
**Current**: Native `<details>` element behavior
**Enhancement**: Could add `scroll-behavior: smooth;` in global CSS

---

## Before Going Live

### Content Check
- [ ] Proofread all copy for typos
- [ ] Verify all headlines resonate with target audience
- [ ] Check phone numbers/email addresses are correct
- [ ] Confirm CTA destinations are live (Calendly, email, etc.)

### Technical Check
- [ ] Test all buttons on mobile (tap targets 44px+)
- [ ] Test expandable FAQ on mobile
- [ ] Check video embeds load properly
- [ ] Verify responsive breakpoints (sm/md/lg)
- [ ] Test on at least: iPhone, Android, Desktop

### Performance Check
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Check image optimization
- [ ] Verify CSS minification
- [ ] Check load time (target: <2 seconds)

### SEO Check
- [ ] Meta description is set ✓
- [ ] H1 present on page ✓
- [ ] Open Graph tags (add if needed)
- [ ] Schema markup (optional, could add later)

### Analytics Setup
- [ ] Google Analytics property created
- [ ] Conversion events defined
- [ ] UTM variant tracking enabled
- [ ] Goal funnel established (view → chat → schedule → client)

---

## Deployment Options

### Recommended: Vercel
```bash
npm install -g vercel
vercel
```
- Auto-deploys on git push
- Built-in analytics
- Free tier available
- CDN included

### Alternative: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Alternative: Manual S3 + CloudFront
1. Build: `npm run build`
2. Upload `/dist` to S3 bucket
3. Create CloudFront distribution
4. Set up custom domain

---

## File Manifest

| File | Status | Next Steps |
|------|--------|-----------|
| `src/components/Header.astro` | ✓ Ready | Wire "Let's talk" button |
| `src/components/Hero.astro` | ✓ Ready | Add video, wire CTAs |
| `src/components/WhatYouGet.astro` | ✓ Ready | No action needed |
| `src/components/Proof.astro` | ✓ Ready | Add competition photo |
| `src/components/FAQ.astro` | ✓ Ready | No action needed |
| `src/components/CTA.astro` | ✓ Ready | Wire all 3 buttons |
| `src/layouts/Layout.astro` | ✓ Ready | Add analytics tag |
| `src/pages/index.astro` | ✓ Ready | Test routing |
| `src/styles/global.css` | ✓ Ready | No changes needed |
| `tailwind.config.mjs` | ✓ Ready | Color scheme approved |
| `astro.config.mjs` | ✓ Ready | No changes needed |

---

## Final Deployment Checklist

Before pushing to production:

- [ ] All buttons wired to actual destinations
- [ ] Competition photo uploaded and optimized
- [ ] VSL video embedded
- [ ] Analytics tag added
- [ ] Mobile testing complete
- [ ] Lighthouse audit: 90+
- [ ] All links tested (no 404s)
- [ ] CTA destinations tested (Calendly loads, email works, chat opens)
- [ ] Daisy widget integration confirmed
- [ ] Domain configured (DNS / SSL)
- [ ] Backup of code created
- [ ] Deployment command: `npm run build && vercel --prod` (or chosen platform)

---

## Post-Launch Monitoring

- Monitor Lighthouse performance score
- Check analytics for traffic flow
- Monitor conversion rate (initial baseline)
- A/B test hero variants weekly
- Monitor CTA button click rate
- Set up alerts for error rates

**Typical conversion funnel** (goal: 10% of visitors schedule diagnostic):
- 100% view page
- 40% scroll to "What You Get"
- 25% scroll to Proof or FAQ
- 10% click CTA button
- 50% of those complete diagnostic signup (5% overall)
- 20% of diagnostics convert to client (1% of initial visitors)

---

## Contact & Support

For questions during integration:
- Check `LANDING_PAGE_GUIDE.md` for component docs
- Check `CONTENT_VARIANTS.md` for copy variations
- Component code is self-documented with comments
- All Tailwind classes are documented in `global.css`
