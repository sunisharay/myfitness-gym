# MYFITNESS GYM — Luxury Fitness Website

A cinematic, single-page website for **MYFITNESS GYM**, built with **React 18 + Vite**, **Framer Motion** and **Lucide React**. Black / charcoal / metallic-gold identity, condensed display type, original SVG logo, and no backend required.

## Features

Preloader · transparent-to-solid sticky navbar with animated mobile menu · parallax hero · About with animated counters · six program cards · parallax "Push Beyond Limits" section · trainers · Basic / Pro / Elite pricing · swipeable testimonial slider · asymmetric gallery · contact form, WhatsApp CTA and map placeholder · footer with newsletter UI.

Animations respect `prefers-reduced-motion`. All images use responsive `srcSet`, lazy loading and a branded fallback panel if a photo ever fails to load.

## Requirements

- Node.js 18 or newer
- npm (bundled with Node)

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

```bash
npm run build     # production build into /dist
npm run preview   # serve the production build locally
```

## Project structure

```
myfitness-gym/
├── index.html                  SEO title, meta description, Open Graph, JSON-LD, fonts
├── vite.config.js              base: './' (works on GitHub Pages and any static host)
├── package.json
├── public/
│   ├── favicon.svg             Favicon (emblem)
│   └── logo.svg                Standalone logo file (for social profiles, print, etc.)
├── .github/workflows/deploy.yml  Automatic GitHub Pages deployment
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/content.js         ← ALL editable content (prices, contact, photos, copy)
    ├── utils/scroll.js         Smooth in-page navigation
    ├── styles/global.css       Design tokens and all styles
    └── components/
        ├── Logo.jsx            Original SVG logo (navbar, footer, preloader)
        ├── Preloader.jsx   Navbar.jsx   Hero.jsx   About.jsx   Programs.jsx
        ├── Experience.jsx  Trainers.jsx Membership.jsx Testimonials.jsx
        ├── Gallery.jsx     Contact.jsx  Footer.jsx
        └── Button.jsx  SmartImage.jsx  Reveal.jsx  SplitText.jsx  Counter.jsx
```

## Customise before launch

Open **`src/data/content.js`** and replace every item marked `PLACEHOLDER`:

| What | Where in `content.js` |
| --- | --- |
| Membership prices, benefits, currency | `PLANS`, `SITE.currency` |
| WhatsApp number (digits only, with country code) | `SITE.whatsappNumber` |
| Phone, email, address, opening hours | `SITE.phone`, `SITE.email`, `SITE.address`, `SITE.hours` |
| Google Maps embed | `SITE.mapEmbedUrl` (Google Maps → Share → Embed a map → copy the `src` URL) |
| Social links | `SITE.social` |
| Trainers (names, bios, photos) | `TRAINERS` |
| Testimonials | `TESTIMONIALS` |
| Counters (members, coaches…) | `STATS` |
| Photos | Replace the Unsplash ID in `IMAGES`, `PROGRAMS`, `TRAINERS`, `GALLERY` |

Set `SITE.showPlaceholderNotes` to `false` to hide the small "placeholder / integration required" notes on the page.
Also update the JSON-LD block in `index.html` with your real business details.

### Photos

Photos are loaded from Unsplash by photo ID. Trainer photos and names in particular are stand-ins — replace them with real team photos (put your own files in `public/images/` and extend `SmartImage` or use a normal `<img>`). If any photo ever fails to load, a dark branded panel is shown instead of a broken image.

## Connecting the forms

The contact form and newsletter form are **UI only — no messages are sent.** Both are clearly marked on the page and in code.

- **Contact form:** edit `handleSubmit` in `src/components/Contact.jsx`. The values are in the `form` state. Easy options: Formspree, EmailJS, Netlify Forms, or your own API.
- **Newsletter:** edit `subscribe` in `src/components/Footer.jsx` and connect Mailchimp, Brevo, ConvertKit, etc.

## Deploy to GitHub Pages

### Option A — automatic (recommended)

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Push to `main`. The included workflow (`.github/workflows/deploy.yml`) builds and publishes the site.
4. Your site appears at `https://<username>.github.io/<repository>/`.

### Option B — manual, using `gh-pages`

```bash
git init
git remote add origin https://github.com/<username>/<repository>.git
npm install
npm run deploy
```

Then in **Settings → Pages** choose the `gh-pages` branch, `/ (root)`.

No extra configuration is needed: `vite.config.js` uses `base: './'`, so the build works under a repository sub-path or a custom domain.

## Brand reference

| Token | Value |
| --- | --- |
| Jet Black | `#080808` |
| Charcoal | `#151515` |
| Metallic Gold | `#D6AE65` |
| White | `#F5F3EF` |
| Display font | Barlow Condensed (700/800) |
| Body font | Manrope |

Fonts load from Google Fonts; a condensed system fallback stack is used if they are unavailable.

## Notes

- `lucide-react` is pinned to `^0.468.0` because social brand icons (Instagram, Facebook, YouTube, X) were removed from later major releases.
- Unsplash photos are subject to the [Unsplash License](https://unsplash.com/license).
