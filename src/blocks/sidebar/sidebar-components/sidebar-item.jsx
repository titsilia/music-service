import React from "react";

import styles from "./sidebar-items.module.css";

import { Link } from "react-router-dom";

function SidebarItem({img, link}) {
    return (
      <div className={styles.sidebar__item}>
        <Link to={link} className={styles.sidebar__link}>
          <img
            src={img}
            alt="day's playlist"
            className={styles.sidebar__img}
          />
        </Link>
      </div>
    );
  }
export default SidebarItem;