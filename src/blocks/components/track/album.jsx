import React from 'react';

import styles from "./track.module.css";

function Album({album}) {
    return (
        <div className={styles.track__album}>
            <a href="http://" className={styles["track__album-link"]}>{album}</a>
        </div>
    );
}
export default Album