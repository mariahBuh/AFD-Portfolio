// Header component with responsive navigation and theme toggle

// import necessary modules and assets
import { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import ThemeToggle from "../../features/theme/ThemeToggle";
import logo from "../../assets/Logo.png";
import logoDark from "../../assets/logo-white.png"; // white logo
import styles from "./header.module.css";
import { useAppSelector } from "../../app/hooks";

// define and export the Header component
export default function Header() {
  // get current location to determine if on homepage
  const location = useLocation();
  // check if current path is home
  const isHome = location.pathname === "/";
  // state to manage header visibility and mobile menu
  const [visible, setVisible] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  // get current theme mode from Redux store
  const mode = useAppSelector((state) => state.theme.mode);
  const isDark = mode === "dark";

  // effect to handle header visibility based on scroll position
  useEffect(() => {
    if (!isHome) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      return;
    }

    // function to update visibility on scroll
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };

    // add scroll event listener
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);


  // render the header component
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
    </header>
  );
}
