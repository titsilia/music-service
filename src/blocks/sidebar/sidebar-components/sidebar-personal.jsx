import React from "react";

import styles from "./sidebar-personal.module.css"
import color from "../../../themes.module.css";

import { useThemeContext } from "../../../context/theme";

function SidebarPersonal({ name }) {
  const { theme } = useThemeContext();
  return (
    <div className={styles.sidebar__personal}>
      <p className={`${styles["sidebar__personal-name"]} ${theme === 'light' ? color.light__text : color.dark__text}`}>{name}</p>
      <div className={styles.sidebar__avatar}></div>
    </div>
  );
}
export default SidebarPersonal;
