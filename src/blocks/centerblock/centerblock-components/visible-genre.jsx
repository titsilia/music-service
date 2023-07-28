import React from "react";
import { useGetAllTracksQuery } from "../../../redux/fetch";
import { useDispatch } from "react-redux";
import { setGenre } from "../../../redux/action-creators";

import styles from "./visible.module.css";

function VisibleGenre() {
  let { data, isLoading } = useGetAllTracksQuery();

  const dispatch = useDispatch();

  if (data.length < 1 || isLoading) {
    return <></>;
  }

  data = data.map((item) => item.genre);

  let genres = [];

  data.forEach((genre) => {
    if (!genres.includes(genre)) {
      genres.push(genre);
    }
  });

  const getGenre = (event) => {
    const target = event.target;
    if (target.tagName === "P") {
      dispatch(setGenre(target.textContent));
    }
  };

  return (
    <div
      className={`${styles.filter__dropdown_ad} ${styles.filter__dropdown_genre}`}
    >
      <div className={styles.filter__dropdown} onClick={getGenre}>
        {genres.map((genre) => (
          <p
            key={(Math.random() * 1000) >> 0}
            className={styles.filter__dropdown_text}
          >
            {genre}
          </p>
        ))}
      </div>
    </div>
  );
}
export default VisibleGenre;
