const ITEMS = ["React.js", "Tailwind CSS", "JavaScript", "Salesforce Dev", "REST APIs", "Data Structures & Algorithms", "Frontend Dev", "SQL/SOQL", "Git & GitHub"];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <span key={i}>
            {t} <span className="sep">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
