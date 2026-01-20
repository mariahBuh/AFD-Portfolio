// This component displays detailed information about a specific project.
// It retrieves the project ID from the URL parameters and fetches the corresponding project data from the Redux store.

// import necessary modules and hooks
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import styles from "../components/projectDetail.module.css";

// define and export the ProjectDetailPage component
export default function ProjectDetailPage() {
  // get projectId from URL parameters
  const { projectId } = useParams();

  // select the project from Redux store based on projectId
  const project = useAppSelector((state) =>
    // find the project with matching id
    state.projects.items.find((p) => p.id === projectId)
  );

  // if project not found, display a message
  if (!project) {
    return <p>Project not found.</p>;
  }
  
  // render the project detail page
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
