import { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import ThemeToggle from "../../features/theme/ThemeToggle";
import logo from "../../assets/logo.png";
import logoDark from "../../assets/logo-white.png"; // white logo
import styles from "./header.module.css";
import { useAppSelector } from "../../app/hooks";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [visible, setVisible] = useState(!isHome);

  const mode = useAppSelector((state) => state.theme.mode);
  const isDark = mode === "dark";

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
      className={`${styles.siteHeader} ${visible ? styles.show : styles.hide}`}
    >
      <nav className={styles.nav} aria-label="Main navigation">
        <Link to="/" className={styles.logo} aria-label="Go to homepage">
          <img
            src={isDark ? logoDark : logo}
            alt="Portfolio logo"
            className={styles.logoImage}
          />
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/projects">projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>

        <div className={styles.toggleWrapper}>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
