import styles from "./hero.module.css";
import HeaderContent from "../Header/headerContent.tsx";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <header className={styles.heroHeader}>
        <HeaderContent />
      </header>
      <div className={styles.content}>
        <h1 className={styles.title}>My Portfolio</h1>

        <p className={styles.subtitle}>
          showcasing my work and passion for design <br />& development.
        </p>

        <button className={styles.cta}>View projects</button>
      </div>
      {/* Scrolling skills bar */}
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.track}>
          <span>Interactive Design</span>
          <span>UI</span>
          <span>Branding</span>
          <span>Web Experience</span>
          <span>Video Editing</span>
          <span>Front End</span>
          <span>HTML</span>
          <span>Web Design</span>

          {/* duplicate for seamless loop */}
          <span>Interactive Design</span>
          <span>UI</span>
          <span>Branding</span>
          <span>Web Experience</span>
          <span>Video Editing</span>
          <span>Front End</span>
          <span>HTML</span>
          <span>Web Design</span>
        </div>
      </div>
    </section>
  );
}
