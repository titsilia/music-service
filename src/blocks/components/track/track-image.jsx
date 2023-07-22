import React from 'react';

import styles from "./track.module.css";
import color from "../../../themes.module.css";

import { useThemeContext } from "../../../context/theme";

import {ReactComponent as Note} from "../../../assets/img/icon/note.svg";

function TrackImage() {
    const { theme } = useThemeContext();
    return(
        <div className={`${styles['track__title-image']} ${theme === 'light' ? styles['track__title-image_light'] : styles['track__title-image_dark']}`}>
            <Note className={styles['track__title-svg']} />
        </div>
    );
}

export default TrackImage