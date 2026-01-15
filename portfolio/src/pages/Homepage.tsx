import Hero from "../components/HeroBanner/HeroBanner";
import About from "../components/About/AboutSection";
import Projects from "../components/Projects/ProjectsSection";
import ContactForm from "../components/Contact/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <ContactForm />
    </>
  );
}