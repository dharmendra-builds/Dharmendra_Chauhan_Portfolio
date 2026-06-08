import useTyped from "../useTyped";

const ROLES = ["Frontend Developer", "React.js Engineer", "Salesforce Developer ", "UI / UX Builder", "Problem Solver"];
const CHIPS = ["React.js", "Tailwind CSS", "JavaScript ES6+", "Salesforce Developer", "Data Structures & Algorithms"];

export default function HeroSection() {
  const typed = useTyped(ROLES);
  return (
    <section id="about" className="hero">
      <div className="hero-ghost">DC</div>
      <div className="hero-grid-overlay" />
      <div className="hero-inner">
        <div className="hero-badge">
          <span className="dot" />
          <span>Open to Opportunities</span>
        </div>
        <h1>
          Dharmendra<br />
          <span className="hl">Chauhan</span>
        </h1>
        <div className="hero-role">
          <span className="bar" />
          <p>
            I am a <span className="typed">{typed}</span>
            <span className="cursor">|</span>
          </p>
        </div>
        <p className="hero-desc">
          Aspiring Software Engineer focused on building responsive and user-centric web applications. 
          Working primarily with <strong>React.js, JavaScript, and Tailwind CSS</strong>. <br />I enjoy solving problems, 
          learning new technologies, and turning ideas into real-world projects.
        </p>
        <div className="hero-chips">
          {CHIPS.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-solid">View My Work →</a>
          <a href="#contact" className="btn btn-ghost">Hire Me</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span className="line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
