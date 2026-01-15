import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProjects } from "../features/projects/projectsSlice";
import ProjectsSection from "../components/Projects/ProjectsSection";
import Hero from "../components/HeroBanner/HeroBanner";
import About from "../components/About/AboutSection";
import ContactForm from "../components/Contact/ContactForm";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.projects);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProjects());
    }
  }, [dispatch, status]);

  return (
    <>
      <Hero />
      <About />

      <ProjectsSection
        projects={items.slice(0, 3)}
        filters={[]}               // no filters on home
        activeFilter="All"
        onFilterChange={() => {}}  // disabled
      />

      <ContactForm />
    </>
  );
}
