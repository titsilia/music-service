import React from 'react';

import styles from "./track.module.css";

import {ReactComponent as Note} from "../../../assets/img/icon/note.svg";

function TrackImage() {
    return(
        <div className={styles['track__title-image']}>
            <Note className={styles['track__title-svg']} />
        </div>
    );
}

export default TrackImage