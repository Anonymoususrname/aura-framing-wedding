# Eternelle — Wedding & Event Management Website

A luxury, multi-page wedding event management website with smooth page transitions, custom cursor, scroll-reveal animations, and a fully responsive layout.

---

## Project Structure

```
eternelle/
│
├── index.html                  ← Entry point & page shells
│
├── css/
│   ├── base.css                ← CSS variables, reset, typography
│   ├── layout.css              ← Nav, page system, footer grid
│   ├── components.css          ← Cursor, loader, buttons, forms,
│   │                             service cards, pricing, testimonials,
│   │                             gallery, marquee, job listings
│   ├── pages.css               ← Page-specific styles (Home, About,
│   │                             Services, Careers, Booking, Contact)
│   ├── animations.css          ← @keyframes + .reveal scroll utility
│   └── responsive.css          ← All media queries / breakpoints
│
├── js/
│   ├── cursor.js               ← Custom gold dot + ring cursor (lerp)
│   ├── loader.js               ← Intro loader dismiss + hero zoom
│   ├── router.js               ← SPA page switching + transition overlay
│   ├── components.js           ← Testimonial carousel, ScrollReveal,
│   │                             form feedback
│   └── main.js                 ← HTML injection for all 6 pages
│
├── pages/                      ← (optional) standalone page HTML
│   ├── home.html
│   ├── about.html
│   ├── services.html
│   ├── careers.html
│   ├── booking.html
│   └── contact.html
│
└── assets/                     ← Place your local images here
    ├── images/
    └── fonts/                  ← (optional) self-host fonts here
```

---

## Pages

| Page     | Route key  | Description                                      |
|----------|-----------|--------------------------------------------------|
| Home     | `home`    | Hero, marquee, features, services, testimonials, gallery |
| About    | `about`   | Story, values, team profiles                     |
| Services | `services`| Detailed service rows, pricing tiers             |
| Careers  | `careers` | Perks, job listings, application form            |
| Booking  | `booking` | 3-step process, consultation request form        |
| Contact  | `contact` | Contact details, hours, message form             |

---

## Key Features

- **Smooth page transitions** — Gold overlay sweeps up/down between pages
- **Custom cursor** — Gold dot + lagged ring (lerp animation)
- **Intro loader** — Brand screen with animated line expand
- **Scroll-reveal** — Elements fade up as they enter the viewport
- **Testimonial carousel** — Auto-advance + manual dot navigation
- **Marquee ticker** — Seamless infinite scroll banner
- **Responsive** — Collapses cleanly to mobile with hamburger nav
- **Form feedback** — Submit buttons show success state

---

## How to Run

No build tools required. Simply open `index.html` in a browser:

```bash
# Option 1: direct open
open index.html

# Option 2: local dev server (recommended to avoid CORS on fonts)
npx serve .
# or
python3 -m http.server 3000
```

---

## Customisation Guide

### Change brand name
Search and replace `Eternelle` in `index.html` and `js/main.js`.

### Change colors
Edit CSS variables in `css/base.css`:
```css
:root {
  --gold:      #c9a96e;   /* primary accent */
  --charcoal:  #1a1714;   /* dark background */
  --cream:     #faf6f0;   /* light background */
}
```

### Change fonts
Replace the Google Fonts `<link>` in `index.html` and update
`--font-serif` and `--font-sans` in `css/base.css`.

### Add / remove pages
1. Add a new `<div class="page" id="page-YOURPAGE"></div>` in `index.html`
2. Add a nav link: `<a href="#" data-page="YOURPAGE">Page Name</a>`
3. Inject HTML content in `js/main.js`
4. Add page-specific styles in `css/pages.css`

### Replace Unsplash images
Swap the `src` URLs in `js/main.js` with your own images.
For production, copy images to `assets/images/` and update paths.

### Add Google Maps (Contact page)
Replace the `.contact-map` placeholder in `js/main.js` with:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%" height="400" style="border:0" allowfullscreen loading="lazy">
</iframe>
```

---

## Browser Support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

---

## Credits

- Photography: [Unsplash](https://unsplash.com)
- Fonts: [Google Fonts](https://fonts.google.com) — Cormorant Garamond, Jost
- No external JS libraries required

---

© 2026 Eternelle Events
