import React from "react";

import styles from "./sidebar.module.css";
import { Link } from "react-router-dom";

import sprite from "../../assets/img/icon/sprite.svg";
import exit from "../../assets/img/icon/exit.svg";

function SlideBarPlaylists() {
  return (
    <div className={`${styles.playlists__sidebar} ${styles.sidebar}`}>
      <Link to="/">
        <svg className={styles.playlist__sidebar_exit} alt="time">
          <use xlinkHref={`${sprite}#icon-exit`}></use>
        </svg>
      </Link>
    </div>
  );
}

export default SlideBarPlaylists;
