import React from "react";

import styles from "./track.module.css";

function TrackTime({ time }) {
  return (
    <div className={styles.track__time}>
      <svg className={styles["track__time-svg"]} alt="time">
        <use href="img/icon/sprite.svg#icon-like"></use>
      </svg>
      <span className={styles["track__time-text"]}>{time}</span>
    </div>
  );
}

export default TrackTime;
