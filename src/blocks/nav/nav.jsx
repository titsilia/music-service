import React from "react";
import NavMenu from "./NavMenu/nav-menu";

import { useThemeContext } from "../../context/theme";
import { useRefreshTokenMutation } from "../../redux/fetch";

import logo from "../../assets/img/logo.png";
import logoLight from "../../assets/img/logo-light.png";

import styles from "./nav.module.css";
import color from "../../themes.module.css";

const { useState } = React;

function Nav() {
  console.log(localStorage.getItem("token"));
  const [newToken, { isLoading, is }] = useRefreshTokenMutation();

  // newToken({ refresh: localStorage.getItem("token-refresh") });

  // if (!isLoading) {
  //   localStorage.setItem("token", newToken.access);
  //   console.log(newToken);
  // }

  // console.log(localStorage.getItem("token"));

  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  const { theme } = useThemeContext();

  return (
    <nav
      className={`${styles.main__nav} ${styles.nav} ${
        theme === "light"
          ? color.light__nav_background
          : color.dark__nav_background
      }`}
    >
      <div className={`${styles.nav__logo} ${styles.logo}`}>
        <img
          className={styles.logo__image}
          src={theme === "light" ? logoLight : logo}
          alt="logo"
        />
      </div>
      <div
        className={`${styles.nav__burger} ${styles.burger}`}
        onClick={toggleVisibility}
      >
        <span
          className={`${styles.burger__line} ${
            theme === "light"
              ? color.light__border_burger
              : color.dark__border_burger
          } `}
        ></span>
        <span
          className={`${styles.burger__line} ${
            theme === "light"
              ? color.light__border_burger
              : color.dark__border_burger
          } `}
        ></span>
        <span
          className={`${styles.burger__line} ${
            theme === "light"
              ? color.light__border_burger
              : color.dark__border_burger
          } `}
        ></span>
      </div>

      {visible && <NavMenu />}
    </nav>
  );
}

export default Nav;
