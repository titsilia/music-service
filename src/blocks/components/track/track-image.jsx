import React from 'react';

import styles from "./track.module.css";

function TrackImage() {
    return(
        <div className={styles['track__title-image']}>
            <svg className={styles['track__title-svg']} alt="music">
                <use href="img/icon/sprite.svg#icon-note"></use>
            </svg>
        </div>
    );
}

export default TrackImage