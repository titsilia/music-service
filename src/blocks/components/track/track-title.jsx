import React from "react";

import styles from "./track.module.css";
import color from "../../../themes.module.css";

import { useThemeContext } from "../../../context/theme";

function TrackTitle({ title, subtitle }) {
  const { theme } = useThemeContext();

  return (
    <div className={styles["track__title-text"]}>
      <a href="http://" className={`${styles["track__title-link"]} ${theme === 'light' ? color.light__text : color.dark__text}`}>
        {title}
        <span className={`${styles["track__title-span"]} ${theme === 'light' ? color.light__text_tracks : color.dark__text_tracks}`}>{subtitle}</span>
      </a>
    </div>
  );
}

export default TrackTitle;
