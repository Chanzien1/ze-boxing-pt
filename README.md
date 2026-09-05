# ZE BOXING PT — Mobile 1-on-1 Boxing Personal Trainer Website

High-contrast, mobile-first single-page website for **ZE BOXING PT** (Singapore 1-on-1 boxing personal trainer Coach Zi En). Built following a promoter-inspired aesthetic with high-contrast photography and `#D91E24` fight-red accents.

---

## Design System Tokens
- **Background:** `#0D0D0D` (Near-Black)
- **Cards & Section BGs:** `#1A1A1A` (Dark Grey)
- **Primary Text:** `#F5F5F2` (Off-White)
- **Secondary Text:** `#8A8A8A` (Mid Grey)
- **Accent Color:** `#D91E24` (Fight-Red — CTAs, highlights, stats, red borders)
- **Display Font:** `Anton` (All-caps, bold headlines)
- **Body Font:** `Inter` (Clean readability)
- **Data & Stats Font:** `JetBrains Mono` (Pricing & record stats)

---

## 9 Site Sections (Sequence)
1. **Hero:** Full-bleed post-fight background, headline, subhead, location pin, red CTA scrolling to contact.
2. **Profile:** Bio ("5+ years boxing, 2+ years coaching. 6 fights, 1 by KO...") & 4 stat callouts (`5+ YEARS BOXING`, `2+ YEARS COACHING`, `6 FIGHTS`, `1 KO`).
3. **What You Get:** 4 items with custom SVG icons (Fundamentals, Pad work, Ring IQ, High-intensity fitness).
4. **Highlights:** Interactive Video Carousel (7 clips total) for sparring & pad work with YouTube embed modal player.
5. **Client Progress:** 3 1-on-1 client training cards (Noel, Jason, Matt) with inline mobile modal playback.
6. **What Clients Say:** 3 testimonial pull-quotes with 1-on-1 client details.
7. **How It Works:** "I come to you" breakdown (park, condo gym, carpark, 1-hour sessions).
8. **Pricing:** 3 pricing tiers (`First Session $40`, `Standard Session $75`, `4-Class Bundle $265`).
9. **Contact:** WhatsApp integration linking to `https://wa.me/6597318538` with pre-filled message generator.

---

## Previewing Locally & Online Tunnels
```bash
# Using Python local server
python -m http.server 8000 --bind 0.0.0.0
```

---

## Deploying to Production (Cloudflare Pages / Netlify)
This project is pure static HTML/CSS/JS with zero build step required.
1. Push this folder to a GitHub repository or drag and drop into **Cloudflare Pages** or **Netlify Drop**.
2. Set Build Command: *(leave empty)*
3. Set Build Output Directory: `.` or `/`
