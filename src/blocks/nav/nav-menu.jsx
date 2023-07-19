import React from "react";

import styles from "./nav-menu.module.css";

function NavMenu() {
  return (
    <div className={`${styles.nav__menu} ${styles.menu}`}>
      <ul className={styles.menu__list}>
        <ul className={styles.menu__item}>
          <a href="http://" className={styles.menu__link}>
            Главное
          </a>
        </ul>
        <ul className={styles.menu__item}>
          <a href="http://" className={styles.menu__link}>
            Мой плейлист
          </a>
        </ul>
        <ul className={styles.menu__item}>
          <a href="http://" className={styles.menu__link}>
            Войти
          </a>
        </ul>
      </ul>
    </div>
  );
}

export default NavMenu;
