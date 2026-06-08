const PROJECTS = [
  {
    id: "ecommerce",
    shot: "/Images/projects/ecommerce.webp",
    alt: "PureCart e-commerce storefront",
    eyebrow: "Full E-Commerce Storefront",
    title: "PureCart",
    lede:
      "A complete, fully responsive fashion e-commerce front end crafted from the ground up with React and Tailwind CSS, combining real product data, interactive UI and thoughtful component architecture.",
    feats: [
      "Data-driven catalogue with category filters & a Best-Sellers rail",
      "Live “Deal of the Day” countdown built with React state & effects",
      "Cart & wishlist counters kept in sync via lifted state",
      "Multi-currency & language switching through shared state",
      "Config-driven, presentational components mapped to a data layer",
    ],
    tags: ["React.js", "Tailwind CSS", "Swiper.js", "JavaScript", "Vite"],
    demo: "https://e-commerce-zeta-rouge-31.vercel.app",
    repo: "https://github.com/dharmendra-builds/E-Commerce",
  },
  {
    id: "razorpay",
    shot: "/Images/projects/razorpay.webp",
    alt: "Razorpay payment gateway landing page",
    eyebrow: "Payment Gateway Landing Page",
    title: "Razorpay",
    lede:
      "A pixel-faithful recreation of Razorpay's marketing site — built from the ground up with React and Tailwind CSS, focused on clean section composition, responsive layouts and a fully component-driven architecture.",
    feats: [
      "Section-based architecture: hero, features, CTA & footer",
      "Reusable FeatureCard driven by a single data array",
      "Fully responsive using Tailwind utilities — no custom CSS",
      "Data-modeled multi-column footer, easy to extend",
      "Pixel-faithful spacing & typography from the real design",
    ],
    tags: ["React.js", "Tailwind CSS", "Vite", "JavaScript"],
    demo: "https://razor-pay-three.vercel.app",
    repo: "https://github.com/dharmendra-builds/RazorPay",
  },
  {
  id: "weather",
  shot: "/Images/projects/weather.webp",
  alt: "Weather app showing current conditions",
  eyebrow: "Real-Time Weather Dashboard",
  title: "Weather App",
  lede:
    "A real-time weather app built in vanilla JavaScript — fetches live conditions from the OpenWeather API by geolocation or city search, with cached coordinates and full loading and error handling.",
  feats: [
    "Dual modes: geolocation-based “Your Weather” and city search",
    "Live data from the OpenWeather REST API via async/await fetch",
    "Caches coordinates in sessionStorage to skip repeat permission prompts",
    "Graceful loading with error & “city-not-found” states",
    "Country flags & weather icons pulled dynamically from remote sources",
  ],
  tags: ["JavaScript", "HTML5", "CSS3", "OpenWeather API"],
  demo: "https://weather-app-delta-eight-75.vercel.app/",
  repo: "https://github.com/dharmendra-builds/Weather-App",
  },
];

export default function StarProject() {
  return (
    <>
      {PROJECTS.map((p) => (
        <div className="featured" key={p.id}>
          <div className="featured-img" role="img" aria-label={p.alt}>
            <img className="featured-shot" src={p.shot} alt="" />
            <span className="featured-hint">Hover to scroll ↓</span>
          </div>

          <div className="featured-body">
            <p className="eyebrow">{p.eyebrow}</p>
            <h3>{p.title}</h3>
            <p className="lede">{p.lede}</p>

            <ul className="featured-feats">
              {p.feats.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <div className="featured-tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>

            <div className="featured-actions">
              <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-sm btn-solid">
                Live Demo →
              </a>
              <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn-sm btn-ghost">
                Source Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}