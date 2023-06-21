import React from "react";

import styles from "./sidebar.module.css";

import SidebarPersonal from "./sidebar-personal";
import SidebarItem from "./sidebar-item";

function SlideBar() {
    return (
      <div className={`${styles.main__sidebar} ${styles.sidebar}`}>
        <SidebarPersonal name="Sergey.Ivanov" />
        <div className={styles.sidebar__avatar}></div>
  
        <div className={styles.sidebar__block}>
          <div className={styles.sidebar__list}>
            <SidebarItem />
            <SidebarItem />
            <SidebarItem />
          </div>
        </div>
      </div>
    );
  }

export default SlideBar;