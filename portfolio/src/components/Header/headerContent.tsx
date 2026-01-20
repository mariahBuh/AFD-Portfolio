//This script contains the HeaderContent component with navigation links and theme toggle for the HeroBanner

// import necessary modules and assets
import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "../../features/theme/ThemeToggle";
import logo from "../../assets/Logo.png";
import logoDark from "../../assets/logo-white.png"; // white logo
import styles from "./header.module.css";
import { useAppSelector } from "../../app/hooks";
import { useState } from "react";

// define and export the HeaderContent component
export default function HeaderContent() {
  // get current theme mode from Redux store
  const mode = useAppSelector((state) => state.theme.mode);
  const isDark = mode === "dark";
  // state to manage mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // render the header content component
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

      <div className={styles.right}>
        <div className={styles.toggleWrapper}>
          <ThemeToggle />
        </div>

        {/* BURGER */}
        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

          <div className={styles.mobileToggle}>
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
