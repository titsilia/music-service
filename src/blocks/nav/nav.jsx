import React from "react";
import NavMenu from "./NavMenu/nav-menu";

import { useThemeContext } from "../../context/theme";

import logo from "../../assets/img/logo.png";

import styles from "./nav.module.css";
import light from "../../light.module.css";

const { useState } = React;

function Nav() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  const { theme } = useThemeContext();

  return (
    <nav className={`${styles.main__nav} ${styles.nav} ${theme === 'light' ? light.light__nav_background : ''}`}>
      <div className={`${styles.nav__logo} ${styles.logo}`}>
        <img className={styles.logo__image} src={logo} alt="logo" />
      </div>
      <div
        className={`${styles.nav__burger} ${styles.burger}`}
        onClick={toggleVisibility}
      >
        <span className={`${styles.burger__line} ${theme === 'light' ? light.light_border : ''}`}></span>
        <span className={`${styles.burger__line} ${theme === 'light' ? light.light_border : ''}`}></span>
        <span className={`${styles.burger__line} ${theme === 'light' ? light.light_border : ''}`}></span>
      </div>

      {visible && <NavMenu />}
    </nav>
  );
}

export default Nav;
