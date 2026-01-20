// This script contains the Hero component for the portfolio homepage

// import necessary modules and assets
import styles from "./hero.module.css";
import HeaderContent from "../Header/headerContent.tsx";
import HeroScroll from "./heroScroll.tsx";
import { Link } from "react-router-dom";

// define and export the Hero component
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

        <Link to="/projects"  aria-label="Go to Projects page">
        <button className={styles.cta}>
          <span className={styles.ctaInner}>
            <span className={styles.ctaText}>View projects</span>
            <span className={styles.ctaArrow}>→</span>
          </span>
        </button>
        </Link>
      </div>

      {/* Scrolling skills bar */}
      <HeroScroll />
    </section>
  );
}
