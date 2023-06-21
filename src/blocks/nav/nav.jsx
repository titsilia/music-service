import React from "react";
import NavMenu from "./nav-menu";

import styles from "./nav.module.css";

const { useState } = React;

function Nav() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <nav className={`${styles.main__nav} ${styles.nav}`}>
      <div className={`${styles.nav__logo} ${styles.logo}`}>
        <img className={styles.logo__image} src="img/logo.png" alt="logo" />
      </div>
      <div
        className={`${styles.nav__burger} ${styles.burger}`}
        onClick={toggleVisibility}
      >
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>

      {visible && <NavMenu />}
    </nav>
  );
}

export default Nav;
