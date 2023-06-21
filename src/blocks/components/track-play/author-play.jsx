import React from 'react';

import styles from "./track-play.module.css";

function AlbumPlay({author}) {
    return (
        <div className={styles['track-play__author']}>
            <a href="http://" className={styles["track-play__author-link"]}>{author}</a>
        </div>
    );
};

export default AlbumPlay