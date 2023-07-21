import React from 'react';

import styles from "./track-play.module.css";

function TrackImagePlay({img}) {
    return(
        <div className={styles['track-play__image']}>
            <svg className={styles['track-play__svg']} alt="music">
                <use href={img}></use>
            </svg>
        </div>
    );
}

export default TrackImagePlay