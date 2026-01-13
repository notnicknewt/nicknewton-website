# Architecture Overview - Nick Newton Coaching MVP

## Page Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     index.astro (Main Page)                  │
│  - Reads UTM parameter (?utm_source=operator|established)    │
│  - Passes variant to Hero component                          │
│  - Composes all sections                                     │
└─────────────────────────────────────────────────────────────┘
                              ↓
        ┌────────────────────────────────────────┐
        │         Layout.astro                    │
        │  - Base HTML structure                  │
        │  - Meta tags, fonts                     │
        │  - Global styles import                 │
        └────────────────────────────────────────┘
                              ↓
        ┌────────────────────────────────────────┐
        │         Page Sections                   │
        │  1. Header (sticky nav)                 │
        │  2. Hero (UTM-driven)                   │
        │  3. Proof (Nick at 45)                  │
        │  4. What You Get (benefits)             │
        │  5. FAQ (collapsible)                   │
        │  6. CTA (final conversion)              │
        │  7. Footer                              │
        │  8. ChatWidget (floating)               │
        └────────────────────────────────────────┘
```

## Component Architecture

### Hero Component (UTM-Driven)
```
Hero.astro
├── Props: variant ('operator' | 'established' | 'universal')
├── Copy Variants Object
│   ├── operator: { headline, subhead, result }
│   ├── established: { headline, subhead, result }
│   └── universal: { headline, subhead, result }
├── Layout
│   ├── Left Column: Copy + CTAs
│   └── Right Column: VSL Video Placeholder
└── CTAs
    ├── "Chat with Daisy" → Triggers daisy:open event
    └── "See What You Get" → Scrolls to #what-you-get
```

### ChatWidget Component (Core Functionality)
```
ChatWidget.astro
├── UI Components
│   ├── Chat Bubble (closed state)
│   ├── Chat Window (open state)
│   ├── Messages Container
│   ├── Contact Form (email/phone)
│   └── Input Area
│
├── TypeScript Class: DaisyChat
│   ├── Properties
│   │   ├── sessionId: string | null
│   │   ├── contactCaptured: boolean
│   │   └── apiBaseUrl: string
│   │
│   ├── Methods
│   │   ├── initializeSession() - Load from localStorage
│   │   ├── attachEventListeners() - Wire up UI events
│   │   ├── openChat() / closeChat() - Toggle visibility
│   │   ├── sendMessage() - POST to API
│   │   ├── loadChatHistory() - GET from API
│   │   ├── addMessage() - Append to UI
│   │   ├── showTypingIndicator() - Visual feedback
│   │   └── hideContactForm() - After capture
│   │
│   └── Event System
│       ├── Listen: 'daisy:open'
│       ├── Dispatch: 'daisy:opened'
│       ├── Dispatch: 'daisy:closed'
│       └── Dispatch: 'daisy:contact_captured'
│
└── API Integration
    ├── POST /leadbot/api/chat
    │   └── { session_id, message, email?, phone? }
    └── GET /leadbot/api/chat/history?session_id=xxx
```

## Data Flow

### UTM Content Swapping
```
URL Parameter
    ↓
?utm_source=operator
    ↓
index.astro reads searchParams
    ↓
variant = 'operator'
    ↓
<Hero variant="operator" />
    ↓
Copy variants object selects operator copy
    ↓
Renders: "Your bank account says CEO. Your body says intern."
```

### Chat Widget Interaction
```
User clicks "Chat with Daisy" button
    ↓
window.dispatchEvent(new CustomEvent('daisy:open'))
    ↓
ChatWidget listens for 'daisy:open'
    ↓
DaisyChat.openChat()
    ↓
Shows chat window, hides bubble
    ↓
User types message
    ↓
DaisyChat.sendMessage()
    ↓
Shows typing indicator
    ↓
POST to API with { session_id, message, email?, phone? }
    ↓
API responds with { response, session_id, lead_id, contact_captured }
    ↓
Hide typing indicator
    ↓
Add bot message to UI
    ↓
If contact_captured: hide contact form, dispatch event
    ↓
Save to localStorage
```

### Session Persistence
```
First Visit
    ↓
No session ID in localStorage
    ↓
Generate new: daisy_[timestamp]_[random]
    ↓
Save to localStorage.daisy_session_id
    ↓
User chats, contact captured
    ↓
Save to localStorage.daisy_contact_captured = 'true'
    ↓

Return Visit
    ↓
Load session ID from localStorage
    ↓
GET /api/chat/history?session_id=xxx
    ↓
Load previous messages
    ↓
Contact form auto-hidden (already captured)
```

## State Management

### Local Storage Keys
```javascript
localStorage.daisy_session_id        // Session identifier
localStorage.daisy_contact_captured  // Boolean flag
```

### Component State
```typescript
class DaisyChat {
  sessionId: string | null          // Current session
  contactCaptured: boolean          // Contact info status
  apiBaseUrl: string                // API endpoint
}
```

## API Contract

### Request Format
```typescript
POST /leadbot/api/chat
{
  session_id: string;       // Required: unique session
  message: string;          // Required: user message
  email?: string;           // Optional: capture once
  phone?: string;           // Optional: capture once
}
```

### Response Format
```typescript
{
  response: string;         // Bot's reply
  session_id: string;       // Session ID (may be new)
  lead_id: number;          // Database ID
  contact_captured: boolean; // True if email/phone saved
}
```

### History Format
```typescript
GET /leadbot/api/chat/history?session_id=xxx
{
  messages: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}
```

## Event System

### Custom Events
```javascript
// Trigger chat open
window.dispatchEvent(new CustomEvent('daisy:open'));

// Listen for events
window.addEventListener('daisy:opened', () => {
  console.log('Chat opened');
});

window.addEventListener('daisy:closed', () => {
  console.log('Chat closed');
});

window.addEventListener('daisy:contact_captured', (e) => {
  console.log('Contact:', e.detail); // { email, phone }
});
```

## CTA Integration Points

All CTAs trigger the same event to open chat:

```javascript
onclick="window.dispatchEvent(new CustomEvent('daisy:open'))"
```

### Locations
1. Header - "Let's talk" button
2. Hero - "Chat with Daisy" button
3. What You Get - "Start a Conversation with Daisy" button
4. CTA Section - "Start the Conversation" button
5. CTA Section - "Chat with Daisy" button

## Styling System

### Tailwind Config
```javascript
colors: {
  brand: {
    dark: '#0a0a0a',      // Main background
    gray: '#1a1a1a',      // Secondary background
    accent: '#d4311a',    // CTA color
    text: '#f5f5f5',      // Primary text
    muted: '#888888',     // Secondary text
  }
}
```

### Component Classes
```css
.btn-primary    // Accent CTA button
.btn-secondary  // Gray outline button
.section-container // Max-width + padding wrapper
.subheading     // Large muted text
```

## Build Pipeline

```
Source Files (.astro, .css, .ts)
    ↓
Astro Compiler
    ↓
TypeScript → JavaScript
Tailwind CSS → Optimized CSS
Astro → Static HTML
    ↓
Vite Bundler
    ↓
dist/
    ├── index.html          // Static HTML
    ├── _astro/             // JS/CSS bundles
    └── assets/             // Images, fonts
```

## Performance Optimizations

- Static site generation (no SSR overhead)
- Minimal JavaScript (only chat widget)
- Tailwind CSS purge (only used classes)
- Font preloading (Inter from Google Fonts)
- Lazy-loaded chat history (on return visit)
- Debounced API calls

## Security Measures

- HTML escaping in chat messages (XSS protection)
- HTTPS-only API calls (in production)
- No sensitive data in localStorage
- Input validation on contact form
- Error boundary in chat widget

## Deployment Considerations

- Static files → CDN
- API endpoint → Separate backend
- Environment variables for API URL
- Analytics tracking (to be added)
- A/B testing via UTM variants
