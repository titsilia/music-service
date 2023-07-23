import React from "react";

import styles from "./track.module.css";

import { useThemeContext } from "../../../context/theme";

import { ReactComponent as Note } from "../../../assets/img/icon/note.svg";
import { ReactComponent as NoteLight } from "../../../assets/img/icon/light/note-light.svg";

function TrackImage() {
  const { theme } = useThemeContext();
  return (
    <div
      className={`${styles["track__title-image"]} ${
        theme === "light"
          ? styles["track__title-image_light"]
          : styles["track__title-image_dark"]
      }`}
    >
      {theme === "light" ? (
        <NoteLight className={styles["track__title-svg"]} />
      ) : (
        <Note className={styles["track__title-svg"]} />
      )}
    </div>
  );
}

export default TrackImage;
