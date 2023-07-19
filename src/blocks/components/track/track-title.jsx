import React from "react";

import styles from "./track.module.css";

function TrackTitle({ title }) {
  return (
    <div className={styles["track__title-text"]}>
      <a href="http://" className={styles["track__title-link"]}>
        {title}
        <span className={styles["track__title-span"]}></span>
      </a>
    </div>
  );
}

export default TrackTitle;
