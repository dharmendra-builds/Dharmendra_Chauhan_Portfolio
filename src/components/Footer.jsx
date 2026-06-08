const SOCIALS = [
  {
    id:"", title: "GitHub", link: "https://github.com/dharmendra-builds"
  }, 
  { 
    id:"", title: "LinkedIn", link: "https://linkedin.com/in/dharmendra-builds"
  }, 
];

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#about" className="nav-brand">
        <span className="hl">D</span>harmendra Chauhan
      </a>

      <div className="footer-socials">
        {SOCIALS.map((s) => (
          <a key={s.id} href={s.link} target="_blank" rel="noreferrer">{s.title}</a>
        ))}
      </div>
    </footer>
  );
}
