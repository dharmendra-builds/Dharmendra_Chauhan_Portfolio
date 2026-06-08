import SectionLabel from "./SectionLabel";
import StarProject from "./StarProject";

const MORE_PROJECTS = [
  {
    num: "04",
    subtitle: "Client-Side Security Utility",
    title: "Password Generator",
    desc: "A vanilla-JavaScript password generator with adjustable length, toggleable character sets, and a live strength meter. Guarantees one of each selected type before a Fisher–Yates shuffle, with one-click copy via the Clipboard API.",
    tags: ["JavaScript", "Tailwind CSS", "Vite"],
    link: "https://password-generator-kappa-amber.vercel.app/",
  },
  {
    num: "05",
    subtitle: "Two-Player Browser Game",
    title: "Tic Tac Toe",
    desc: "A two-player Tic Tac Toe built in vanilla JavaScript — tracks the board in a state array, detects wins across all eight line combinations, highlights the winning row, and handles ties and reset, no framework involved.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    link: "https://tic-tac-toe-game-theta-olive.vercel.app/",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects">
      <div className="shell">
        <div className="reveal">
          <SectionLabel text="Selected Work" />
          <h2 className="big-title">Projects</h2>
        </div>

        <div className="reveal d1">
          <StarProject />
        </div>

        <div className="reveal d1">
          <p className="proj-more">More Builds</p>
        </div>

        <div className="proj-list">
          {MORE_PROJECTS.map((p) => (
            <a
              className="reveal proj-row"
              href={p.link}
              target="_blank"
              rel="noreferrer"
              key={p.num}
              >
              <div className="num">{p.num}</div>
              <div>
                <p className="eyebrow">{p.subtitle}</p>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="row-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="arrow">↗</div>
            </a>
          ))}
        </div>

        <div className="reveal proj-soon">
          <div className="left">
            <span className="n">06</span>
            <div>
              <p className="t">More Projects Coming Soon…</p>
              <p className="s">Apex App · LWC Component Library · More React Builds</p>
            </div>
          </div>
          <span className="arrow">↗</span>
        </div>
      </div>
    </section>
  );
}