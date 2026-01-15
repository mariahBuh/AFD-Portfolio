import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "../../features/theme/ThemeToggle";
import logo from "../../assets/logo.png";
import styles from "./header.module.css";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [visible, setVisible] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      return;
    }

    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={`${styles.siteHeader} ${
        visible ? styles.show : styles.hide
      }`}
    >
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.logo}>
          <img src={logo} alt="Site logo" />
        </div>

        <ul className={styles.navLinks}>
          <li><NavLink to="/about">about</NavLink></li>
          <li><NavLink to="/projects">projects</NavLink></li>
          <li><NavLink to="/contact">contact</NavLink></li>
        </ul>

        <div className={styles.toggleWrapper}>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
