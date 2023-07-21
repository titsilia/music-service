import React from 'react';

import styles from "./track.module.css";

import note from "../../../assets/img/icon/note.svg";

function TrackImage() {
    return(
        <div className={styles['track__title-image']}>
            <img className={styles['track__title-svg']} src={note} alt="imageS" />
        </div>
    );
}

export default TrackImage