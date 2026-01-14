import ProjectCard from "../components/Projects/ProjectsSection";

export default function ProjectsPage() {
  return (
    <section>
      <h2>Projects</h2>

      <div>
        <ProjectCard title="Portfolio Website" tech="React" />
        <ProjectCard title="Pantry App" tech="Vue + Firebase" />
      </div>
    </section>
  );
}
