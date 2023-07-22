import React from "react";

import styles from "./track.module.css";
import color from "../../../themes.module.css";

import { useThemeContext } from "../../../context/theme";

import { ReactComponent as Like } from "../../../assets/img/icon/like.svg";
import { ReactComponent as LikeLight } from "../../../assets/img/icon/light/like-light.svg";

function TrackTime({ time }) {
  const { theme } = useThemeContext();
  return (
    <div className={styles.track__time}>
      {theme === "light" ? (
        <LikeLight className={styles["track__time-svg"]} />
      ) : (
        <Like className={styles["track__time-svg"]} />
      )}

      <span
        className={`${styles["track__time-text"]} ${
          theme === "light" ? color.light__text_tracks : color.dark__text_tracks
        }`}
      >
        {time}
      </span>
    </div>
  );
}

export default TrackTime;
