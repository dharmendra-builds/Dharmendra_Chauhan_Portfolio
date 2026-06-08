import { useState } from "react";
import SectionLabel from "./SectionLabel";

const LINKS = [
  { icon: "✉", label: "Email", value: "chauhandharmendra15@gmail.com", href: "mailto:chauhandharmendra15@gmail.com" },
  { icon: "📞", label: "Phone", value: "+91 8369778503", href: "tel:+918369778503" },
  { icon: "in", label: "LinkedIn", value: "Dharmendra Chauhan", href: "https://linkedin.com/in/dharmendra-builds" },
  { icon: "GH", label: "GitHub", value: "@dharmendra-builds", href: "https://github.com/dharmendra-builds" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name || "someone"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:chauhandharmendra15@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="shell contact-grid">
        <div>
          <div className="reveal">
            <SectionLabel text="Get In Touch" />
            <h2 className="big-title">Let's Build<br />Something<br />Great</h2>
          </div>
          <p className="reveal d1 contact-lede">
            Whether you have a project in mind, a role you think I'd be a great fit for, or just want
            to connect — I'm always happy to talk.
          </p>
          <div className="reveal d2 contact-links">
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="contact-link">
                <span className="ic">{l.icon}</span>
                <span>
                  <span className="cl-lbl" style={{ display: "block" }}>{l.label}</span>
                  <span className="cl-val">{l.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <form className="reveal d1 form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" placeholder="What's on your mind?" value={form.subject} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} placeholder="Tell me about your project or opportunity..." value={form.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-solid">Send Message →</button>
          {sent && <p className="form-note">✓ Opening your mail app — talk soon!</p>}
        </form>
      </div>
    </section>
  );
}
