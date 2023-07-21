import React from 'react';

import styles from "./track-play.module.css";

function TrackImagePlay({img}) {
    return(
        <div className={styles['track-play__image']}>
            <img src={img} className={styles['track-play__svg']} alt="note" />
        </div>
    );
}

export default TrackImagePlay