// This script contains the HeroScroll component for the HeroBanner

import styles from "./heroScroll.module.css";

// list of skills to display in the scrolling marquee
const items = [
  "Web Design",
  "Interactive Design",
  "UI",
  "Front End",
  "Web Experience",
  "Video Editing",
  "HTML",
  "Branding",
];

// define and export the HeroScroll component
export default function HeroScroll(){
  return (
    <div className={styles.marqueeWrapper} aria-hidden="true">
      <div className={styles.marquee}>
        {[...items, ...items].map((item, index) => (
          <span key={index} className={styles.item}>
            {item}
            <span className={styles.separator}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
