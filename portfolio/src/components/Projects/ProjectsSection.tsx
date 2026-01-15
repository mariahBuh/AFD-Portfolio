import { useState } from "react";
import styles from "./projects.module.css";
import budgetBuddy from "../../assets/budgetBuddy.png";
import ascension from "../../assets/ascension.png";
import profileCard from "../../assets/profile.png";

type Project = {
  id: number;
  title: string;
  image: string;
  tech: string;
  category: string;
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "Budget Buddy",
      image: budgetBuddy,
      tech: "React",
      category: "React",
    },
    {
      id: 2,
      title: "Ascension of the Forgotten",
      image: ascension,
      tech: "React",
      category: "React",
    },
    {
      id: 3,
      title: "Profile Card",
      image: profileCard,
      tech: "Vue",
      category: "Vue",
    },
  ];

  const filters = ["All", "React", "Vue"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        <h2 className={styles.title}>My projects</h2>
        <p className={styles.sectionDescription}>
          These projects showcase my ability to design and develop digital
          experiences that are clean, accessible, and user-friendly.
        </p>
        {/* FILTERS */}
        <div className={styles.filterButtons}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${
                activeFilter === filter ? styles.active : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        {/* GRID */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>

                <div className={styles.projectFooter}>
                  <span className={styles.projectTech}>{project.tech}</span>

                  <button className={styles.viewBtn}>
                    <span className={styles.viewBtnInner}>
                      <span className={styles.viewBtnText}>View</span>
                      <span className={styles.viewBtnArrow}>→</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.viewAllBtn}>
          <span className={styles.viewAllInner}>
            <span className={styles.viewAllText}>View all projects</span>
            <span className={styles.viewAllArrow}>→</span>
          </span>
        </button>{" "}
      </div>
    </section>
  );
}
