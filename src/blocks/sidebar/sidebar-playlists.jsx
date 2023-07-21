import React from "react";

import styles from "./sidebar.module.css";
import { Link } from "react-router-dom";

function SlideBarPlaylists() {
  return (
    <div className={`${styles.playlists__sidebar} ${styles.sidebar}`}>
      <Link to="/"><img src="img/icon/exit.png" alt="" /></Link>
    </div>
  );
}

export default SlideBarPlaylists;
