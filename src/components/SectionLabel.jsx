export default function SectionLabel({ text }) {
  return (
    <div className="section-label">
      <span className="bar" />
      <span>{text}</span>
    </div>
  );
}
