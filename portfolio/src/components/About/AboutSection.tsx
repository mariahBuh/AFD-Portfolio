import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./about.module.css";

import UX from "../../assets/UX.png";
import figma from "../../assets/figma.png";
import js from "../../assets/javascript.png";
import vue from "../../assets/vue.png";
import react from "../../assets/react.png";
import photoshop from "../../assets/photoshop.png";
import css from "../../assets/css.png";
import canva from "../../assets/canva.png";
import html from "../../assets/html.png";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Optional but recommended
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationId: number;
    const speed = 0.7; // px per frame
    let scrollLeft = 0;

    const animate = () => {
      scrollLeft += speed;

      // When we've scrolled half the content,
      // reset back to start invisibly
      if (scrollLeft >= scroller.scrollWidth / 2) {
        scrollLeft = 0;
      }

      scroller.scrollLeft = scrollLeft;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const stats = [
    { number: "5", label: "years of education" },
    { number: "2", label: "years of work experience" },
  ];

  const skills = [
    { image: figma },
    { image: js },
    { image: vue },
    { image: react },
    { image: photoshop },
    { image: css },
    { image: html },
    { image: canva },
  ];

  const loopingSkills = [...skills, ...skills];

  return (
    <section className={styles.aboutSection}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <img
            src={UX}
            alt="Developer illustration"
            className={styles.illustration}
          />
        </div>

        <div className={styles.right}>
          <h2 className={styles.title}>About me</h2>

          <p className={styles.description}>
            I'm a developer with a strong interest in UX/UI design, focused on
            creating clean, accessible, and user-friendly digital experiences.
          </p>

          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={styles.statCard}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span className={styles.statNumber}>{stat.number}</span>
                <br />
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          <div ref={scrollerRef} className={styles.skillsScroller}>
            <div className={styles.skillsTrack}>
              {loopingSkills.map((skill, index) => (
                <div key={index} className={styles.skillCard}>
                  <img src={skill.image} className={styles.skillIcon} alt="" />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            <a
              href="../public/cv.pdf"
              download="Mariah_Buhagiar_CV_2026.pdf" 
              className={styles.CVButton}
            >
              <span className={styles.CVButtonInner}>
                <span className={styles.CVButtonText}>Download CV</span>
                <span className={styles.CVButtonArrow}>↓</span>
              </span>
            </a>

            <Link to="/about" aria-label="Go to About page">
              <button className={styles.learnButton}>
                <span className={styles.learnButtonInner}>
                  <span className={styles.learnButtonText}>Learn more</span>
                  <span className={styles.learnButtonArrow}>→</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
