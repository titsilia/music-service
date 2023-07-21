import React from 'react';

import styles from "./track.module.css";

import sprite from "../../../assets/img/icon/sprite.svg";

function TrackImage() {
    return(
        <div className={styles['track__title-image']}>
            <svg className={styles['track__title-svg']} alt="music">
                <use xlinkHref={`${sprite}#icon-note`}></use>
            </svg>
        </div>
    );
}

export default TrackImage