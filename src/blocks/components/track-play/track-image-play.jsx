import React from "react";

import styles from "./track-play.module.css";

import { useThemeContext } from "../../../context/theme";

import { ReactComponent as Note } from "../../../assets/img/icon/note.svg";
import { ReactComponent as NoteLight } from "../../../assets/img/icon/light/note-light.svg";

function TrackImagePlay() {
  const { theme } = useThemeContext();
  return (
    <div
      className={`${styles["track-play__image"]} ${
        theme === "light"
          ? styles["track-play__image_light"]
          : styles["track-play__image_dark"]
      }`}
    >
      {theme === "light" ? (
        <NoteLight className={styles["track-play__svg"]} />
      ) : (
        <Note className={styles["track-play__svg"]} />
      )}
    </div>
  );
}

export default TrackImagePlay;
