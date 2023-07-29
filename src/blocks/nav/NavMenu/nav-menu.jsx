import React from "react";

import { useThemeContext } from "../../../context/theme";

import styles from "./nav-menu.module.css";
import color from "../../../themes.module.css";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { ReactComponent as Moon } from "../../../assets/img/icon/dark-theme.svg";
import { ReactComponent as Sun } from "../../../assets/img/icon/light-theme.svg";

function NavMenu() {
  const navigate = useNavigate();

  const exitClick = () => {
    localStorage.removeItem("token");
    navigate("/");
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
            to="/favorites"
            className={`${styles.menu__link} ${
              theme === "light" ? color.light__text : color.dark__text
            }`}
          >
            Моё избранное
          </Link>
        </ul>
        <ul
          className={`${styles.menu__item} ${styles.menu__link} ${
            theme === "light" ? color.light__text : color.dark__text
          }`}
          onClick={exitClick}
        >
          Выйти
        </ul>
        <div onClick={toggleTheme}>{theme === "dark" ? <Moon /> : <Sun />}</div>
      </ul>
    </div>
  );
}

export default NavMenu;
