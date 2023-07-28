import React from "react";
import { useGetAllTracksQuery } from "../../../redux/fetch";
import { useDispatch } from "react-redux";
import { setAuthor } from "../../../redux/action-creators";

import styles from "./visible.module.css";

function VisibleAuthor() {
  let { data, isLoading } = useGetAllTracksQuery();
  console.log(data);
  const dispatch = useDispatch();

  if (data.length < 1 || isLoading) {
    return <></>;
  }

  data = data.map((item) => item.author);
  

  let authors = [];

  data.forEach((author) => {
    if (!authors.includes(author) && author.charCodeAt() !== 45) {
      authors.push(author);
    }
  });

  const getAuthor = (event) => {
    const target = event.target;
    console.log(target);
    if (target.tagName === "P") {
      dispatch(setAuthor(target.textContent));
    }
  };
  return (
    <>
      <div
        className={`${styles.filter__dropdown_ad} ${styles.filter__dropdown_author}`}
      >
        <div className={styles.filter__dropdown} onClick={getAuthor}>
          {authors.map((author) => (
            <p
              key={(Math.random() * 1000) >> 0}
              className={styles.filter__dropdown_text}
            >
              {author}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default VisibleAuthor;
