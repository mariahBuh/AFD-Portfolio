import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import styles from "../components/projectDetail.module.css";

export default function ProjectDetailPage() {
  const { projectId } = useParams();

  const project = useAppSelector((state) =>
    state.projects.items.find((p) => p.id === projectId)
  );

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <section className={styles.projectDetailPage}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link to="/projects">← Back to Projects</Link>
      </nav>

      <div className={styles.projectContent}>
        <div className={styles.projectLeft}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.projectImage}
          />
        </div>

        <div className={styles.projectRight}>
          <h1 className={styles.projectTitle}>{project.title}</h1>

          <p className={styles.projectDescription}>{project.description}</p>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveBtn}
            >
              <span className={styles.viewText}>View live</span>
              <span className={styles.btnIcon}>→</span>
            </a>
          )}


        </div>
      </div>
    </section>
  );
}
