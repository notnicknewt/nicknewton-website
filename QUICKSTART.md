# Quick Start Guide - Nick Newton Coaching Landing Page

## Get Running in 2 Minutes

### 1. Start Development Server
```bash
cd T:\Coding\LeadBot\website
npm run dev
```

Visit: http://localhost:4321

### 2. Test UTM Variants

Open these URLs to see different messaging:

**Operator (Young entrepreneurs)**
```
http://localhost:4321/?utm_source=operator
```

**Established (35+, family)**
```
http://localhost:4321/?utm_source=established
```

**Universal (Default)**
```
http://localhost:4321/
```

### 3. Test Chat Widget

1. Click the chat bubble in bottom-right corner
2. Type a message
3. Enter email/phone (optional)
4. Send message

**Note:** Chat requires backend API running at `http://localhost:8000/leadbot/api/chat`

If backend is not running, you'll see a connection error message.

## Key Files to Customize

### Replace Placeholders

1. **VSL Video**
   - File: `src/components/Hero.astro`
   - Line: ~73
   - Replace placeholder with actual video embed

2. **Competition Photo**
   - File: `src/components/Proof.astro`
   - Line: ~9
   - Replace placeholder with Nick's actual photo

3. **API Endpoint**
   - File: `src/components/ChatWidget.astro`
   - Line: 113
   - Change from localhost to production URL

### Customize Copy

All copy can be edited in these files:
- `src/components/Hero.astro` - Headlines and hero copy
- `src/components/Proof.astro` - Social proof messaging
- `src/components/WhatYouGet.astro` - Benefits
- `src/components/FAQ.astro` - Questions and answers
- `src/components/CTA.astro` - Final conversion copy

## Build for Production

```bash
npm run build
```

Output goes to `dist/` folder.

## Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Other Hosts
Upload the `dist/` folder to any static hosting service.

## Troubleshooting

### Chat Widget Not Working
- Check if backend API is running
- Verify API URL in `ChatWidget.astro`
- Check browser console for errors

### UTM Not Changing Content
- Clear browser cache
- Check URL query parameter: `?utm_source=operator`
- Verify spelling (must be exact: `operator` or `established`)

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules dist .astro
npm install
npm run build
```

## Next Steps

1. Replace all placeholders (video, photo, favicon)
2. Update API endpoint for production
3. Test on mobile devices
4. Run performance audit
5. Set up analytics tracking
6. Deploy to production

## Support

See `README.md` for full documentation.
See `PROJECT_SUMMARY.md` for technical details.
