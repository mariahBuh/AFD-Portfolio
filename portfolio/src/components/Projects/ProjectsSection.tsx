// This component displays a section showcasing various projects with filtering options.

import styles from "./projects.module.css";
import { Link } from "react-router-dom";
import { useMemo } from "react";

// define the Project type and component props
type Project = {
  id: string;
  title: string;
  image: string;
  tech: string;
};

// define the props for the ProjectsSection component
interface ProjectsSectionProps {
  projects: Project[];
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

// define and export the ProjectsSection component
export default function ProjectsSection({
  projects,
  filters,
  activeFilter,
  onFilterChange,
}: ProjectsSectionProps) {
  const visibleProjects = useMemo(() => {
    return projects;
  }, [projects]);

  // render the ProjectsSection component
  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        <h2 className={styles.title}>My projects</h2>

        <p className={styles.sectionDescription}>
          These projects showcase my ability to design and develop digital
          experiences that are clean, accessible, and user-friendly.
        </p>

        <div className={styles.filterButtons}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${
                activeFilter === filter ? styles.active : ""
              }`}
              onClick={() => onFilterChange(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {visibleProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className={styles.projectCard}
            >
              <div className={styles.projectImage}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>

                <div className={styles.projectFooter}>
                  <span className={styles.projectTech}>{project.tech}</span>

                  <span className={styles.viewBtn}>
                    <span className={styles.viewBtnInner}>
                      <span className={styles.viewBtnText}>View</span>
                      <span className={styles.viewBtnArrow}>→</span>
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
