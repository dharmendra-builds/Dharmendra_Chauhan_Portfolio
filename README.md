# Dharmendra Chauhan — Portfolio

A frontend developer portfolio built with **React.js + Vite**.
Dark, editorial aesthetic — Bebas Neue display type, DM Serif Display accents,
Outfit body, amber (#f5a623) accent on near-black.

## Run locally
```bash
npm install
npm run dev
```
Then open the URL Vite prints (usually http://localhost:5173).

## Build for production
```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## View instantly (no build)
A pre-built version lives in `/dist`. From inside `/dist` run:
```bash
npx serve            # or: python3 -m http.server
```

## Structure
```
src/
  App.jsx                 # composes the page
  App.css                 # full design system (tokens, components, animations)
  useReveal.js            # scroll-reveal hook (adds .in to .reveal elements)
  useTyped.js             # typewriter hook for the hero role
  components/
    Navbar.jsx            # sticky nav, scroll-spy active link, mobile menu
    HeroSection.jsx       # name, typed role, chips, CTAs
    Marquee.jsx           # scrolling amber tech strip
    Story.jsx             # the UPSC → frontend journey + stat cards
    SkillSection.jsx      # tabbed skills + Salesforce / DSA callouts
    StarProject.jsx       # ★ PureCart — featured e-commerce build
    ProjectSection.jsx    # featured project + the four React builds
    ContactSection.jsx    # contact links + mailto form
    Footer.jsx
    SectionLabel.jsx      # shared eyebrow label
public/Images/projects/ecommerce.png   # PureCart screenshot
```

- **Featured project: PureCart** — a fully responsive React + Tailwind e-commerce storefront.
- Other builds: Razorpay Clone, Weather App, Password Generator, Tic Tac Toe.

## Before sending
Replace the `#` placeholder links (LinkedIn, GitHub, PureCart Live Demo / Source)
with your real URLs — they live in `StarProject.jsx`, `ContactSection.jsx`, and `Footer.jsx`.
