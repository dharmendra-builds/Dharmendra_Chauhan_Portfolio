import useReveal from "./useReveal";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import Story from "./components/Story";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Marquee />
        <Story />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
