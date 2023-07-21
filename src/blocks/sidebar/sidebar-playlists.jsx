import React from "react";

import styles from "./sidebar.module.css";
import { Link } from "react-router-dom";

import {ReactComponent as Exit} from "../../assets/img/icon/exit.svg";

function SlideBarPlaylists() {
  return (
    <div className={`${styles.playlists__sidebar} ${styles.sidebar}`}>
      <Link to="/">
        <Exit className={styles.playlist__sidebar_exit} />
      </Link>
    </div>
  );
}

export default SlideBarPlaylists;
