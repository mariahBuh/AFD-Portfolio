import styles from "./heroScroll.module.css";

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
