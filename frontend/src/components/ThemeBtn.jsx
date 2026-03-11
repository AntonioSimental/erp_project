"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/componentStyles/ThemeBtn.module.css";

export default function ThemeBtn({ theme, setTheme }) {

  const setLightTheme = () => {
    localStorage.setItem("theme", "light");
    setTheme(false);
  };

  const setNightTheme = () => {
    localStorage.setItem("theme", "dark");
    setTheme(true);
  };

  return (
    <>
      {theme ? (
        <button onClick={setLightTheme} className={styles.btnTheme}>
          <FontAwesomeIcon icon={faSun}/>
        </button>
      ) : (
        <button
          onClick={setNightTheme}
          className={`${styles.btnTheme} ${styles.btnBlue}`}
        >
          <FontAwesomeIcon icon={faMoon}/>
        </button>
      )}
    </>
  );
}