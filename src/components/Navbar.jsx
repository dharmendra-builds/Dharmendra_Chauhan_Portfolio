import { useState, useEffect } from "react";

const LINKS = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const found = LINKS.map((l) => l.toLowerCase()).find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 120 && r.bottom >= 120;
      });
      if (found) setActive(found);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#about" className="nav-brand">
        <span className="hl">D</span>harmendra Chauhan
      </a>
      <div className={`nav-links ${open ? "open" : ""}`}>
        {LINKS.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className={active === l.toLowerCase() ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {l}
          </a>
        ))}
      </div>
      <button className="nav-burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
        {open ? "\u2715" : "\u2630"}
      </button>
    </nav>
  );
}
