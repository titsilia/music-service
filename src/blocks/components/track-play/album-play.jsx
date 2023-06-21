import React from 'react';

import styles from "./track-play.module.css";

function AuthorPlay({album}) {
    return (
        <div className={styles['track-play__album']}>
            <a href="http://" className={styles["track-play__album-link"]}>{album}</a>
        </div>
    );
}
export default AuthorPlay