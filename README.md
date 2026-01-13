# Nick Newton Coaching - MVP Landing Page

Elite fitness coaching for high-achieving entrepreneurs. Built with Astro and Tailwind CSS.

## Features

- **UTM-based Content Swapping**: Dynamic headline and messaging based on `?utm_source=operator` or `?utm_source=established` query parameters
- **Daisy AI Chat Widget**: Fully functional chat integration with backend API for lead capture
- **Mobile Responsive**: Optimized for all screen sizes
- **Clean Architecture**: Component-based structure for easy maintenance

## Tech Stack

- **Astro** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## Project Structure

```
website/
├── src/
│   ├── pages/
│   │   └── index.astro          # Main landing page
│   ├── components/
│   │   ├── ChatWidget.astro     # Daisy AI chat widget
│   │   ├── Hero.astro           # Hero section with UTM swapping
│   │   ├── Proof.astro          # Nick's competition proof section
│   │   ├── WhatYouGet.astro     # Benefits section
│   │   ├── FAQ.astro            # FAQ section
│   │   ├── CTA.astro            # Final call-to-action
│   │   ├── Header.astro         # Site header
│   │   └── Footer.astro         # Site footer
│   ├── layouts/
│   │   └── Layout.astro         # Base layout wrapper
│   └── styles/
│       └── global.css           # Global styles with Tailwind
├── public/                      # Static assets
├── astro.config.mjs             # Astro configuration
├── tailwind.config.mjs          # Tailwind configuration
└── package.json
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit http://localhost:4321

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## UTM Parameter Usage

The landing page adapts content based on the `utm_source` parameter:

### Operator (Young 20s-30s)
```
https://nicknewton.coach/?utm_source=operator
```
- Headline: "Your bank account says CEO. Your body says intern."
- Result: "Command respect before you speak"

### Established (35+, Family)
```
https://nicknewton.coach/?utm_source=established
```
- Headline: "You didn't grind for 20 years to die at 55"
- Result: "Present for family. Desired by wife. Here for decades."

### Universal (Default)
```
https://nicknewton.coach/
```
- Headline: "You delegate everything else. Stop DIY-ing your health."
- Result: "Sharp when it counts. Stop hiding from mirrors."

## Daisy Chat Widget

The chat widget integrates with the backend API at `http://localhost:8000/leadbot/api/chat`.

### API Integration

**POST /leadbot/api/chat**
```json
{
  "session_id": "daisy_1234567890_abc123",
  "message": "I want to get in shape but I'm too busy",
  "email": "user@example.com",
  "phone": "+1234567890"
}
```

**Response**
```json
{
  "response": "I get it. Most people say 'busy' when they mean 'not a priority yet.' What's actually stopping you?",
  "session_id": "daisy_1234567890_abc123",
  "lead_id": 42,
  "contact_captured": true
}
```

**GET /leadbot/api/chat/history?session_id=xxx**
Returns chat history for returning visitors.

### Session Handling

- Session ID stored in `localStorage` as `daisy_session_id`
- Contact captured flag stored as `daisy_contact_captured`
- Persistent across page reloads
- Contact form hidden after email/phone captured

### Custom Events

The widget dispatches custom events:
- `daisy:opened` - Chat window opened
- `daisy:closed` - Chat window closed
- `daisy:contact_captured` - Contact info captured

Listen for events:
```javascript
window.addEventListener('daisy:contact_captured', (event) => {
  console.log('Contact captured:', event.detail);
});
```

Trigger chat open programmatically:
```javascript
window.dispatchEvent(new CustomEvent('daisy:open'));
```

## Brand Voice

**British wit, direct, not salesy. Warm but challenges.**

Think: "The mate who takes the piss but genuinely cares."

- No motivation fluff
- No sales pressure
- Straight talk about what's broken and how to fix it
- Built for entrepreneurs who have zero time for bullshit

## Placeholders to Replace

1. **VSL Video** - `Hero.astro` line 73
   - Replace the placeholder div with actual video embed (YouTube/Vimeo/Wistia)

2. **Competition Photo** - `Proof.astro` line 9
   - Replace with actual photo of Nick at competition

3. **Favicon** - `public/favicon.svg`
   - Add branded favicon

## API Configuration

The chat widget currently points to `http://localhost:8000/leadbot/api/chat`.

To change the API endpoint, update `ChatWidget.astro` line 113:
```typescript
private apiBaseUrl: string = 'YOUR_API_URL_HERE';
```

## Deployment

This is a static site that can be deployed to:
- Vercel
- Netlify
- Cloudflare Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist/` folder.

## License

Copyright 2026 Nick Newton Coaching. All rights reserved.
