import { toggleTheme } from "./themeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./themeToggle.module.css";
import sunIcon from "../../assets/sun.png";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);
  const isDark = mode === "dark";

  return (
    <div className={styles.wrapper}>
      <img
        src={sunIcon}
        alt=""
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

