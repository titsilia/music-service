import React from "react";

import styles from "./track.module.css";

import {ReactComponent as Like} from "../../../assets/img/icon/like.svg";

function TrackTime({ time }) {
  return (
    <div className={styles.track__time}>
      <Like className={styles["track__time-svg"]} />
      <span className={styles["track__time-text"]}>{time}</span>
    </div>
  );
}

export default TrackTime;
