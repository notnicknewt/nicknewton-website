# Deployment Checklist - Nick Newton Coaching

## Pre-Deployment

### Content
- [ ] Replace VSL video placeholder in `Hero.astro` (line ~73)
- [ ] Replace competition photo in `Proof.astro` (line ~9)
- [ ] Add favicon to `public/favicon.svg`
- [ ] Review all copy for accuracy
- [ ] Test all UTM variants (operator, established, universal)

### Configuration
- [ ] Update API endpoint in `ChatWidget.astro` (line 113)
  - Change from `http://localhost:8000` to production URL
- [ ] Verify backend API is deployed and accessible
- [ ] Test API endpoints:
  - POST /leadbot/api/chat
  - GET /leadbot/api/chat/history
- [ ] Set up environment variables (if needed)

### Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile (iOS)
- [ ] Test on mobile (Android)
- [ ] Test chat widget functionality
- [ ] Test contact form capture
- [ ] Test session persistence (reload page)
- [ ] Test chat history loading
- [ ] Verify all CTAs open chat widget
- [ ] Test UTM parameter variations

### Performance
- [ ] Run Lighthouse audit
- [ ] Optimize images (if added)
- [ ] Check bundle size
- [ ] Verify font loading
- [ ] Test on slow 3G connection

### SEO
- [ ] Update meta description in `Layout.astro`
- [ ] Add Open Graph tags
- [ ] Add Twitter Card tags
- [ ] Create robots.txt
- [ ] Create sitemap.xml
- [ ] Verify title tag
- [ ] Add schema.org markup (optional)

## Build & Deploy

### Build
```bash
npm run build
```
- [ ] No build errors
- [ ] No TypeScript errors
- [ ] Bundle size acceptable (< 100KB JS)
- [ ] Preview build locally (`npm run preview`)

### Hosting Setup

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
- [ ] Connect to Git repository
- [ ] Set up production domain
- [ ] Configure environment variables
- [ ] Enable auto-deploy on push

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```
- [ ] Connect to Git repository
- [ ] Set up production domain
- [ ] Configure build settings
- [ ] Enable auto-deploy on push

#### Cloudflare Pages
- [ ] Connect Git repository
- [ ] Set build command: `npm run build`
- [ ] Set publish directory: `dist`
- [ ] Configure custom domain

### DNS Configuration
- [ ] Point domain to hosting provider
- [ ] Set up SSL certificate
- [ ] Verify HTTPS works
- [ ] Test www redirect (if applicable)

## Post-Deployment

### Verification
- [ ] Visit production URL
- [ ] Test all sections load
- [ ] Test chat widget on production
- [ ] Verify API integration works
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Verify UTM parameters work
- [ ] Test all internal links
- [ ] Check browser console (no errors)

### Analytics Setup (Optional)
- [ ] Add Google Analytics
- [ ] Add Facebook Pixel (if running ads)
- [ ] Set up conversion tracking
- [ ] Track chat widget events
- [ ] Track UTM variant performance

### Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, etc.)
- [ ] Monitor API error rates
- [ ] Track chat widget usage
- [ ] Monitor contact capture rate
- [ ] Set up error logging (Sentry, etc.)

### Marketing
- [ ] Update ad campaigns with new URL
- [ ] Test ad linking with UTM parameters
- [ ] Create operator variant link: `?utm_source=operator`
- [ ] Create established variant link: `?utm_source=established`
- [ ] Share universal link (no UTM)

## Ongoing Maintenance

### Weekly
- [ ] Review chat conversations
- [ ] Monitor API logs for errors
- [ ] Check conversion metrics
- [ ] Review UTM variant performance

### Monthly
- [ ] Update copy based on performance
- [ ] Optimize low-performing sections
- [ ] A/B test variations
- [ ] Review and update FAQ

### As Needed
- [ ] Add new testimonials
- [ ] Update competition photos
- [ ] Refresh VSL video
- [ ] Add new case studies
- [ ] Update pricing (if shown)

## Rollback Plan

If issues arise after deployment:

1. **Vercel/Netlify**: Revert to previous deployment
2. **Manual**: Restore from Git
3. **Emergency**: Switch DNS to maintenance page

### Rollback Steps
```bash
# Git rollback
git log --oneline  # Find previous commit
git revert [commit-hash]
git push

# Vercel rollback
vercel rollback [deployment-url]

# Netlify rollback
netlify deploy --prod --alias previous
```

## Support Contacts

- **Hosting Support**: [Provider support link]
- **DNS Provider**: [DNS provider support]
- **API Backend**: [Backend developer contact]
- **Domain Registrar**: [Registrar support]

## Emergency Checklist

If site goes down:
1. Check hosting provider status
2. Verify DNS records
3. Check SSL certificate
4. Review recent deployments
5. Check API backend status
6. Review error logs
7. Contact hosting support

## Notes

- Keep this checklist updated
- Document any custom configurations
- Save all credentials securely
- Maintain backup of production build
- Version control all changes

---

**Last Updated**: 2026-01-10
**Deployment Status**: Ready for deployment
**Next Review**: Before go-live
