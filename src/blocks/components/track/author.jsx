import React from 'react';

import styles from "./track.module.css";

function Author({author}) {
    return (
        <div className={styles.track__author}>
            <a href="http://" className={styles["track__author-link"]}>{author}</a>
        </div>
    );
};

export default Author