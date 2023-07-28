import React from "react";

import styles from "./track.module.css";
import color from "../../../themes.module.css";

import { useThemeContext } from "../../../context/theme";

function TrackTime({ time }) {
  
  
  const { theme } = useThemeContext();
  return (
    <div className={styles.track__time}>

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
