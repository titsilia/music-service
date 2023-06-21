import React from 'react';

import styles from "./visible.module.css";

function VisibleAuthor() {
    return (
      <>
        <div className={`${styles.filter__dropdown_ad} ${styles.filter__dropdown_author}`}>
          <div className={styles.filter__dropdown}>
            <p className={styles.filter__dropdown_text}>Michael Jackson</p>
            <p className={styles.filter__dropdown_text}>Frank Sinatra</p>
            <p className={styles.filter__dropdown_text}>Calvin Harris</p>
            <p className={styles.filter__dropdown_text}>Zhu</p>
            <p className={styles.filter__dropdown_text}>Arctic Monkeys</p>
            <p className={styles.filter__dropdown_text}>Calvin Harris</p>
            <p className={styles.filter__dropdown_text}>Zhu</p>
          </div>
        </div>
      </>
    );
}

export default VisibleAuthor