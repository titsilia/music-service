import React from "react";

import { useDispatch } from "react-redux";
import { setYear } from "../../../redux/action-creators";

import styles from "./visible.module.css";

function VisibleYear() {
  const dispatch = useDispatch();

  const getYear = (event) => {
    const target = event.target.id;
    dispatch(setYear(target));
  };

  return (
    <div
      className={`${styles.filter__dropdown_ad} ${styles.filter__dropdown_year}`}
    >
      <div className={styles.filter__dropdown}>
        <div className={styles.filter__dropdown_radio}>
          <input type="radio" id="old" name="input-radio" onChange={getYear} />
          <label htmlFor="old" className={styles.filter__dropdown_text}>
            Более старые
          </label>
        </div>
        <div className={styles.filter__dropdown_radio}>
          <input type="radio" id="new" name="input-radio" onChange={getYear} />
          <label htmlFor="new" className={styles.filter__dropdown_text}>
            Более новые
          </label>
        </div>
      </div>
    </div>
  );
}

export default VisibleYear;
