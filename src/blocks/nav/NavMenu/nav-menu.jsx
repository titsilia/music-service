import React from "react";

import { useThemeContext } from "../../../context/theme";

import styles from "./nav-menu.module.css";
import color from "../../../themes.module.css";

import { Link } from "react-router-dom";

import { ReactComponent as Moon } from "../../../assets/img/icon/dark-theme.svg";
import { ReactComponent as Sun } from "../../../assets/img/icon/light-theme.svg";

function NavMenu() {
  const loginClearBtn = () => {
    localStorage.clear();
  };

  const { theme, toggleTheme } = useThemeContext();

  console.log(theme);
  return (
    <div className={`${styles.nav__menu} ${styles.menu}`}>
      <ul className={styles.menu__list}>
        <ul className={styles.menu__item}>
          <Link
            to="/tracks"
            className={`${styles.menu__link} ${
              theme === "light" ? color.light__text : color.dark__text
            }`}
          >
            Главное
          </Link>
        </ul>
        <ul className={styles.menu__item}>
          <Link
            to="/category/favorite"
            className={`${styles.menu__link} ${
              theme === "light" ? color.light__text : color.dark__text
            }`}
          >
            Моё избранное
          </Link>
        </ul>
        <ul className={styles.menu__item}>
          <Link
            to="/"
            className={`${styles.menu__link} ${
              theme === "light" ? color.light__text : color.dark__text
            }`}
            onClick={loginClearBtn}
          >
            Выйти
          </Link>
        </ul>
        <div onClick={toggleTheme}>{theme === "dark" ? <Moon /> : <Sun />}</div>
      </ul>
    </div>
  );
}

export default NavMenu;
