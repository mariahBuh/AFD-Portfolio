import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProjects, filterByTech } from "../features/projects/projectsSlice";
import ProjectsSection from "../components/Projects/ProjectsSection";

export default function ProjectsPage() {
  const dispatch = useAppDispatch();
  const { filtered, selectedTech, status, error } = useAppSelector(
    (state) => state.projects
  );

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (status === "loading") return <p>Loading projects…</p>;
  if (status === "failed") return <p>{error}</p>;

  const filters = ["All", "React", "Node"];

  return (
    <ProjectsSection
      projects={filtered}
      filters={filters}
      activeFilter={selectedTech}
      onFilterChange={(filter) => dispatch(filterByTech(filter))}
    />
  );
}
