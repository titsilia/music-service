import React from 'react';

import styles from "./track-play.module.css";

import { useThemeContext } from "../../../context/theme";

function TrackImagePlay({img}) {
    const { theme } = useThemeContext();
    return(
        <div className={`${styles['track-play__image']} ${theme === 'light' ? styles['track-play__image_light'] : styles['track-play__image_dark']}`}>
            <svg className={styles['track-play__svg']} alt="music">
                <use xlinkHref={img}></use>
            </svg>
        </div>
    );
}

export default TrackImagePlay