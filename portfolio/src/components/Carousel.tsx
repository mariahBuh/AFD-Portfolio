import React, { useState } from "react";
import styles from "./carousel.module.css";

interface CarouselProps {
  images: string[];
  altPrefix?: string;
}

const LeftChevron = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
);
const RightChevron = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
);

const Carousel: React.FC<CarouselProps> = ({ images, altPrefix = "Image" }) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  if (total === 0) return null;

  return (
    <div className={styles.carousel}>
      <button className={styles.arrow} onClick={prev} aria-label="Previous image">
        <LeftChevron />
      </button>
      <img
        src={images[current]}
        alt={`${altPrefix} ${current + 1}`}
        className={styles.image}
      />
      <button className={styles.arrow} onClick={next} aria-label="Next image">
        <RightChevron />
      </button>
      <div className={styles.dots}>
        {images.map((_, idx) => (
          <span
            key={idx}
            className={idx === current ? styles.activeDot : styles.dot}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to image ${idx + 1}`}
            role="button"
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
