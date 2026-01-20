// This is the homepage component that displays the all odf the main sections of the portfolio site.

// import necessary modules and components
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProjects } from "../features/projects/projectsSlice";
import ProjectsSection from "../components/Projects/ProjectsSection";
import Hero from "../components/HeroBanner/HeroBanner";
import About from "../components/About/AboutSection";
import ContactForm from "../components/Contact/ContactForm";


// define and export the HomePage component
export default function HomePage() {
  // get dispatch function and projects state from Redux store
  const dispatch = useAppDispatch();
  // extract items and status from projects state
  const { items, status } = useAppSelector((state) => state.projects);

  // fetch projects when component mounts if status is idle
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProjects());
    }
  }, [dispatch, status]);

  // render the homepage with Hero, About, Projects, and Contact sections
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
