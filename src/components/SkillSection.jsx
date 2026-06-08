import { useState } from "react";
import SectionLabel from "./SectionLabel";

const SKILLS = {
  Frontend: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "Tailwind CSS", "JSX", "REST APIs"],
  "React Expertise": ["useState", "useEffect", "useMemo", "useRef", "Props & State", "Component Architecture", "Conditional Rendering"],
  "Salesforce Admin": ["Flows", "Validation Rules", "Profiles & Roles", "Reports & Dashboards", "SOQL", "Data Management", "Permission Sets"],
  "CS & Tools": ["C++", "SQL", "Data Structures", "Algorithms", "Git & GitHub", "VS Code", "LeetCode"],
};

export default function SkillSection() {
  const [active, setActive] = useState("Frontend");
  return (
    <section id="skills" className="skills">
      <div className="shell">
        <div className="reveal">
          <SectionLabel text="Technical Skills" />
          <h2 className="big-title">My<br />Toolkit</h2>
        </div>

        <div className="reveal d1 skill-tabs">
          {Object.keys(SKILLS).map((cat) => (
            <button
              key={cat}
              className={`skill-tab ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="reveal d2 skill-grid">
          {SKILLS[active].map((s) => (
            <div className="skill-chip" key={s}>
              <span className="d" />
              <span>{s}</span>
            </div>
          ))}
        </div>

        <div className="reveal d3 callout">
          <div className="glyph">SF</div>
          <div>
            <h4>Salesforce Administration</h4>
            <p>
              Earned <strong>50+ Trailhead badges</strong> covering Administration and Platform
              fundamentals. Hands-on with Flows, Reports, Dashboards, Validation Rules, and SOQL.
              Currently advancing into Apex and Lightning Web Components.
            </p>
          </div>
        </div>

        <div className="reveal d4 callout">
          <div className="glyph">100+</div>
          <div>
            <h4>DSA &amp; Coding Practice</h4>
            <p>
              Solved <strong>100+ problems</strong> on arrays, strings, sorting, searching and core
              data structures. Active on LeetCode, HackerRank, and GeeksforGeeks with consistent
              daily practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
