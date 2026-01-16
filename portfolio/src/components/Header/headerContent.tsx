import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "../../features/theme/ThemeToggle";
import logo from "../../assets/logo.png";
import logoDark from "../../assets/logo-white.png"; // white logo
import styles from "./header.module.css";
import { useAppSelector } from "../../app/hooks";

export default function HeaderContent() {
  const mode = useAppSelector((state) => state.theme.mode);
  const isDark = mode === "dark";
  
  return (
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
  );
}
