import React from "react";

import styles from "./sidebar.module.css";

function SidebarItem() {
    return (
      <div className={styles.sidebar__item}>
        <a href="#" className={styles.sidebar__link}>
          <img
            src="img/playlist01.png"
            alt="day's playlist"
            className={styles.sidebar__img}
          />
        </a>
      </div>
    );
  }
export default SidebarItem;