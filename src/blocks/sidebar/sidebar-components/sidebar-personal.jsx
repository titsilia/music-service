import React from "react";

import styles from "./sidebar-personal.module.css";

function SidebarPersonal({ name }) {
  return (
    <div className={styles.sidebar__personal}>
      <p className={styles["sidebar__personal-name"]}>{name}</p>
      <div className={styles.sidebar__avatar}></div>
    </div>
  );
}
export default SidebarPersonal;
