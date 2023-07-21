import React from 'react';

import styles from "./visible.module.css";

function VisibleGenre() {
    return (
      <div className={`${styles.filter__dropdown_ad} ${styles.filter__dropdown_genre}`}>
        <div className={styles.filter__dropdown}>
          <p className={styles.filter__dropdown_text}>Jazz</p>
          <p className={styles.filter__dropdown_text}>Rap</p>
          <p className={styles.filter__dropdown_text}>Phonk</p>
          <p className={styles.filter__dropdown_text}>Hyperpop</p>
        </div>
      </div>
    );
}
export default VisibleGenre