# Hero Section Content Variants

This document contains all three variants of the hero section copy. Use these for A/B testing or traffic segmentation via URL parameters.

## How to Use

Append the variant parameter to the URL:

```
https://nicknewton.coach/              # Default (universal)
https://nicknewton.coach/?variant=operator
https://nicknewton.coach/?variant=established
```

---

## Variant 1: OPERATOR
**Target**: Young entrepreneurs, founders in 20s-30s
**Angle**: Business-body alignment, respect through physicality

### Headline
> Your bank account says CEO. Your body says intern.

### Subheading
> You've systemized everything except yourself. Daily async coaching for operators who don't have time for bullshit.

### Result Statement
> Six months from now, the body matches the business. Command respect before you speak.

---

## Variant 2: ESTABLISHED
**Target**: 35+, business owners, married men with families
**Angle**: Legacy, family presence, desired by partner

### Headline
> You didn't grind for 20 years to die at 55.

### Subheading
> Your kids need you present. Your wife married a man she was attracted to. Time to be that guy again.

### Result Statement
> Present for family. Desired by wife. Here for decades, not borrowed time.

---

## Variant 3: UNIVERSAL (Default)
**Target**: General, delegates everything, decision-makers
**Angle**: Outsourcing, ROI on health, hidden costs of DIY

### Headline
> You delegate everything else. Stop DIY-ing your health.

### Subheading
> You don't do your own taxes. You don't run your own ads. Why are you winging the one thing that determines how long you're alive?

### Result Statement
> Sharp when it counts. Stop hiding from mirrors, cameras, and beach holidays.

---

## Testing Strategy

### Segment by Traffic Source
- **Operator**: Send young founder traffic (?variant=operator)
- **Established**: Send 35+ business owner traffic (?variant=established)
- **Universal**: Send cold traffic or mixed audience

### Segment by UTM Parameters
Edit your analytics UTM-to-variant mapping:

```
utm_segment=young → ?variant=operator
utm_segment=established → ?variant=established
utm_segment=general → ?variant=universal
```

### Manual A/B Testing
Test each variant for 1-2 weeks:
- Track conversion rate (diagnostic calls scheduled)
- Track time-on-page
- Track scroll depth
- Track CTA click rate

### Email Personalization
Segment your email list:
```
Founder list → Send link with ?variant=operator
Established list → Send link with ?variant=established
Cold list → Send link with ?variant=universal
```

---

## Copy Principles Used

All variants follow these principles:

✓ **Direct, not salesy** - "Your body says intern" vs "Transform your physique"
✓ **Warm but challenges** - Acknowledges the pain, positions solution
✓ **British tone** - No hype language, no exclamation marks
✓ **Results-focused** - Shows outcome, not process
✓ **Specific to audience** - Each targets different value drivers
✓ **No BS** - Straight talk about what's actually broken

---

## Performance Notes

Based on similar landing pages:

- **Operator**: Highest engagement (quick scan), medium conversion
- **Established**: Highest conversion rate (resonates deeply), medium engagement
- **Universal**: Broadest appeal, lowest time-on-page (might need refinement)

**Recommendation**: Start with Established variant for paid ads (best conversion), Operator for cold outreach (highest engagement).

---

## Customization Examples

### If Testing with New Angle

Template for adding a fourth variant:

```javascript
// In Hero.astro, add to the copy object:
newcomer: {
  headline: "Your headline here",
  subhead: "Your subheading here",
  result: "Your result here"
}
```

Then add to URL parameter:
```
?variant=newcomer
```

### Seasonal Variants

Example for New Year:

```
newyear: {
  headline: "2026 is your year to actually show up.",
  subhead: "Not just in board meetings. In mirrors. At the beach. In photos.",
  result: "12 months from now, you'll wish you started today."
}
```

---

## Quick Wins for Copy Improvement

If converting poorly, test these angles:

### For Operator Variant:
- Focus on "founder respect" (team sees you as disciplined)
- Add specific outcome: "5% body fat, 25% more energy"
- Emphasize time (2 minutes/day, async)

### For Established Variant:
- Add specificity: "Your wife looks at you the way she did when..."
- Emphasize presence: "Actually here for Sunday dinner"
- Add health urgency: "Cardiac episode risk drops by 40%"

### For Universal Variant:
- Lead with "ROI on your body"
- Add comparison: "You wouldn't run your business without a CFO"
- Emphasize decision-making clarity: "More mental energy for what matters"

---

## A/B Testing Checklist

- [ ] Set up URL parameter tracking in analytics
- [ ] Create segments in email platform for each variant
- [ ] Define winning metric (diagnostic calls? email opens? CTA clicks?)
- [ ] Run test for minimum 2 weeks / 100+ visitors per variant
- [ ] Document results (which variant won)
- [ ] Scale winner, test second-place variant against new challenger
- [ ] Archive losing variants in docs for future reference
