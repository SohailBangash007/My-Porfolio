# Muhammad Sohail — Portfolio

A modern, multi-page personal portfolio built with **React 18**, **Vite**, **Tailwind CSS** and **Framer Motion**.
Dark/light theme, animated page transitions, a live status side dock and a print-ready resume.

---

## Quick start

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

The production files are created in `dist/`. Because the app uses `HashRouter`, you can open
`dist/index.html` directly **or** upload the `dist` folder to any static host
(Netlify, Vercel, GitHub Pages, cPanel, etc.).

---

## Pages (routes)

| Route         | Page                                                            |
| ------------- | --------------------------------------------------------------- |
| `/`           | Home — hero, about preview, services, featured work, stats, reviews |
| `/about`      | Full story, quick facts, what I'm doing now, how I work         |
| `/skills`     | Skill groups with animated bars, tech marquee, currently learning |
| `/projects`   | All projects with category filter + search                       |
| `/experience` | Internship timeline (HiFi, Jugrafia) + education                |
| `/resume`     | Print / save-as-PDF resume                                       |
| `/contact`    | Contact form (opens email app), contact cards, FAQ               |
| `*`           | Custom 404                                                       |

> The URLs use a `#` (e.g. `/#/projects`). That is intentional so the site also works when
> opened directly from a file or hosted in a sub-folder.

---

## Project structure

```
src/
├─ App.jsx                 # layout + routes + preloader
├─ main.jsx                # entry (HashRouter + ThemeProvider)
├─ index.css               # Tailwind layers, theme tokens, utilities
├─ data/
│  └─ portfolio.js         # ← ALL your content lives here
├─ hooks/
│  ├─ useLocalTime.js      # live clock for the side dock
│  ├─ useMediaQuery.js
│  └─ useTypewriter.js     # hero role typing effect
├─ components/
│  ├─ Navbar.jsx           # sticky glass navbar + mobile menu
│  ├─ Footer.jsx           # footer, copy-email, giant watermark
│  ├─ SideDock.jsx         # live status panel on the right edge
│  ├─ SocialRail.jsx       # vertical social links (left, 2xl screens)
│  ├─ ScrollToTop.jsx
│  ├─ ThemeProvider.jsx    # dark / light theme
│  ├─ ProjectCard.jsx
│  ├─ sections/            # one component per section
│  │  ├─ Hero.jsx
│  │  ├─ AboutSection.jsx
│  │  ├─ AboutPreview.jsx
│  │  ├─ ServicesSection.jsx
│  │  ├─ FeaturedProjects.jsx
│  │  ├─ ProjectsSection.jsx
│  │  ├─ SkillsSection.jsx
│  │  ├─ ExperienceSection.jsx
│  │  ├─ StatsSection.jsx
│  │  ├─ TestimonialsSection.jsx
│  │  ├─ ContactSection.jsx
│  │  └─ CTASection.jsx
│  └─ ui/                  # small reusable pieces
│     ├─ Background.jsx    # grid + animated gradient blobs
│     ├─ Reveal.jsx        # scroll reveal wrapper (Framer Motion)
│     ├─ SectionHeading.jsx
│     ├─ PageHeader.jsx
│     ├─ Marquee.jsx
│     ├─ TiltCard.jsx      # 3D hover tilt
│     ├─ ProjectImage.jsx  # image + gradient fallback
│     ├─ CursorGlow.jsx
│     ├─ Preloader.jsx
│     ├─ ScrollProgress.jsx
│     ├─ BackToTop.jsx
│     └─ SocialLinks.jsx
└─ pages/                  # Home, About, Skills, Projects, Experience, Resume, Contact, NotFound
```

---

## Editing your content

Almost everything is in **`src/data/portfolio.js`**:

- `profile` — name, role, email, phone, address, photo path, social links
- `stats`, `services`, `skillGroups`, `techStack`
- `projects` — title, description, tags, image URL, links
- `experience`, `education`, `testimonials`, `faqs`, `navLinks`

### Change your photo

Replace `public/images/profile.jpg` with your own photo (keep the same file name), or update
`profile.photo` in `src/data/portfolio.js`.

### Project images

Projects use Unsplash URLs by default. To use your own screenshots, put them in
`public/images/` and set e.g. `image: './images/shopsphere.jpg'`. If an image fails to load,
`ProjectImage` automatically shows a branded gradient instead (no broken image icons).

> ⚠️ The `github` / `live` / social links are placeholders — replace them in
> `src/data/portfolio.js` with your real profiles.

---

## Theme & design tokens

Colours are CSS variables in `src/index.css` (`:root[data-theme='dark']` / `[data-theme='light']`).
Change the accent gradient in a few places:

- `tailwind.config.js` → `theme.extend.colors.accent` / `violet`
- `src/index.css` → `.text-gradient`, `.btn-primary`, scrollbar

---

## Features included

- 7 routed pages + 404, animated with Framer Motion
- Fully responsive (tested down to 360px), keyboard focus styles
- Dark / light mode saved in `localStorage`
- Scroll progress bar, back-to-top, preloader, custom cursor glow
- Live status dock: availability, local time (PKT), scroll %, quick email
- Animated skill bars, counters, marquee, testimonial carousel, FAQ accordion
- Contact form with validation that opens a pre-filled email (no backend needed)
- Print stylesheet for the resume page (Save as PDF)
- `prefers-reduced-motion` respected
- Accessible: semantic landmarks, labels, `aria-*` on interactive controls

---

## Notes

- The contact form has no server. It validates locally and opens the visitor's email app via
  `mailto:`. If you later want real submissions, point it at Formspree, Getform or your own API
  inside `ContactSection.jsx`.
- Testimonials and some project content are realistic placeholders — swap them for real ones
  before sharing widely.
- `npm run build` may warn about chunk size because of Framer Motion; that is expected for a
  portfolio and does not affect functionality.
