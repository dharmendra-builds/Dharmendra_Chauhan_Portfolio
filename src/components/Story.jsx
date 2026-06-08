import SectionLabel from "./SectionLabel";

const STATS = [
  { n: "50+", l: "Salesforce Badges" },
  { n: "100+", l: "DSA Problems Solved" },
  { n: "9.1", l: "B.Com CGPA / 10" },
  { n: "5+", l: "React Projects Built" },
];

export default function Story() {
  return (
    <section className="story">
      <div className="shell story-grid">
        <div>
          <div className="reveal">
            <SectionLabel text="My Journey" />
            <h2 className="big-title">The Story<br />Behind<br />The Code</h2>
          </div>
          <div className="reveal d1 stat-grid">
            {STATS.map((s) => (
              <div className="stat" key={s.l}>
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="reveal d1 story-body">
            <p>
              My path to frontend development is anything but conventional. For{" "}
              <strong>six years</strong> I prepared for the UPSC Civil Services Examination — India's
              most demanding competitive exam. I cleared through the Mains stage. That journey taught
              me relentless consistency, deep analytical thinking, and how to break any complex
              problem into structured parts.
            </p>
            <p>
              Those same skills now power how I write code. I approach every component, every state
              problem, and every UI challenge with the same structured discipline I brought to essay
              writing under exam conditions.
            </p>
            <p>
              I'm currently building with <strong>React.js and Tailwind CSS</strong>, growing my
              Salesforce Admin skills (50+ Trailhead badges), solving DSA problems daily, and looking
              for a team that values both technical ability and someone who genuinely thinks deeply
              about the work.
            </p>
            <div className="story-quote">
              <span className="bar" />
              <p>
                "Six years of UPSC preparation taught me that consistent, structured effort produces
                extraordinary results — in civil services and in code."
              </p>
            </div>
          </div>
          <div className="reveal d2 story-meta">
            <div>📍 Mumbai, India</div>
            <div>📞 +91 8369778503</div>
          </div>
        </div>
      </div>
    </section>
  );
}
