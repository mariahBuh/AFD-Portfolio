// This component provides a toggle switch to switch between light and dark themes.
// It uses Redux to manage the theme state.

// import necessary modules and hooks
import { toggleTheme } from "./themeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./themeToggle.module.css";

// import icons for light and dark modes
import sunIcon from "../../assets/sun.png";
import moonIcon from "../../assets/moon.png";

// define and export the ThemeToggle component
export default function ThemeToggle() {
  // get dispatch function and current theme mode from Redux store
  const dispatch = useAppDispatch();

  // determine if the current mode is dark
  const mode = useAppSelector((state) => state.theme.mode);
  const isDark = mode === "dark";

  // render the toggle button with appropriate icons and styles
  return (
    <div className={styles.wrapper}>
      {/* ICON switches based on theme */}
      <img
        src={isDark ? moonIcon : sunIcon}
        alt={isDark ? "Dark mode" : "Light mode"}
        aria-hidden="true"
        className={styles.icon}
      />

      <button
        type="button"
        onClick={() => dispatch(toggleTheme())}
        aria-label="Toggle theme"
        aria-pressed={isDark}
        className={`${styles.toggle} ${isDark ? styles.dark : ""}`}
      >
        <span className={styles.knob} />
      </button>
    </div>
  );
}

