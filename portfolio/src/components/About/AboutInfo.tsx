// React component for the "About Me" section of a portfolio website.

//imports React hooks and CSS module for styling
import { useEffect, useRef, useState } from "react";
import styles from "./about.module.css";

//imports images used as icons for skills
import UX from "../../assets/UX.png";
import figma from "../../assets/Figma.png";
import js from "../../assets/javascript.png";
import vue from "../../assets/vue.png";
import react from "../../assets/react.png";
import photoshop from "../../assets/photoshop.png";
import css from "../../assets/css.png";
import canva from "../../assets/canva.png";
import html from "../../assets/html.png";

//defines and exports the AboutSection component
export default function AboutSection() {
  //state to track visibility for animation
  const [isVisible, setIsVisible] = useState<boolean>(false);
  //ref for the skills scroller element
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  //effect to set visibility to true on mount for fade-in animation
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
  }, []);

  //effect to create infinite scrolling animation for skills
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Animation loop
    let animationId: number;
    const speed = 0.7; // px per frame
    let scrollLeft = 0;

    // Recursive animation function
    const animate = () => {
      scrollLeft += speed;

      // Reset scroll position to create infinite loop effect
      if (scrollLeft >= scroller.scrollWidth / 2) {
        
        scrollLeft = 0;
      }

      scroller.scrollLeft = scrollLeft;

      // Request next frame
      animationId = requestAnimationFrame(animate);
    };

    // Start the animation
    animationId = requestAnimationFrame(animate);

    // Cleanup function to cancel animation on unmount
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  //data for stats and skills
  const stats = [
    { number: "5", label: "years of education" },
    { number: "2", label: "years of work experience" },
  ];

  //array of skills with associated images
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

  //duplicate skills array for seamless scrolling
  const loopingSkills = [...skills, ...skills];

  //renders the AboutSection component
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
            I’m a developer with a strong interest in UX/UI design, focused on
            creating clean, accessible, and user-friendly digital experiences. I
            spent two years completing a Software Development diploma and I’m
            currently in my third year of a Creative Computing degree, which has
            strengthened both my technical and design foundations. Alongside my
            studies, I worked for a website design company for one year, where I
            helped design and refine interfaces, and spent another year as a
            frontend developer, turning designs into responsive, functional web
            applications. These experiences shaped my ability to bridge design
            and development while focusing on usability, accessibility, and
            consistent experiences across devices.
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
        </div>
      </div>
    </section>
  );
}
