import React from "react";

import styles from "./visible.module.css";

function VisibleYear() {
  return (
    <div
      className={`${styles.filter__dropdown_ad} ${styles.filter__dropdown_year}`}
    >
      <div className={styles.filter__dropdown}>
        <p className={styles.filter__dropdown_text}>2023</p>
        <p className={styles.filter__dropdown_text}>2022</p>
        <p className={styles.filter__dropdown_text}>2021</p>
        <p className={styles.filter__dropdown_text}>2020</p>
        <p className={styles.filter__dropdown_text}>2019</p>
      </div>
    </div>
  );
}

export default VisibleYear;
