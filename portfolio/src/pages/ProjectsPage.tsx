// This component displays a list of projects with filtering options based on technology used.

// import necessary modules and hooks
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProjects, filterByTech } from "../features/projects/projectsSlice";
import ProjectsSection from "../components/Projects/ProjectsSection";

// define and export the ProjectsPage component
export default function ProjectsPage() {
  // get dispatch function and projects state from Redux store
  const dispatch = useAppDispatch();
  // extract filtered projects, selected technology, status, and error from projects state
  const { filtered, selectedTech, status, error } = useAppSelector(
    (state) => state.projects
  );

  // fetch projects when component mounts
  useEffect(() => {
    // dispatch fetchProjects action
    dispatch(fetchProjects());
  }, [dispatch]);

  // handle loading and error states
  if (status === "loading") return <p>Loading projects…</p>;
  if (status === "failed") return <p>{error}</p>;

  // define available filters
  const filters = ["All", "React", "Node"];

  // render the ProjectsSection with filtered projects and filtering options
  return (
    <ProjectsSection
      projects={filtered}
      filters={filters}
      activeFilter={selectedTech}
      onFilterChange={(filter) => dispatch(filterByTech(filter))}
    />
  );
}
