import React from "react";

import styles from "./track.module.css";
import color from "../../../themes.module.css";

import { useThemeContext } from "../../../context/theme";

import { useDispatch } from "react-redux";
import { setTrack } from "../../../redux/action-creators";

function TrackTitle({ title, subtitle, href }) {
  const dispatch = useDispatch();

  const sendTrack = (event) => {
    event.preventDefault();
    const target = event.target.getAttribute("href");
    console.log(target);
    dispatch(setTrack(target));
  };

  const { theme } = useThemeContext();

  return (
    <div className={styles["track__title-text"]}>
      <a
        onClick={sendTrack}
        href={href}
        className={`${styles["track__title-link"]} ${
          theme === "light" ? color.light__text : color.dark__text
        }`}
      >
        {title}
        <span
          className={`${styles["track__title-span"]} ${
            theme === "light"
              ? color.light__text_tracks
              : color.dark__text_tracks
          }`}
        >
          {subtitle}
        </span>
      </a>
    </div>
  );
}

export default TrackTitle;
