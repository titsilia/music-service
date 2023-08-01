import React from 'react';

import styles from "./track-play.module.css";
import color from "../../../themes.module.css";

import { useThemeContext } from "../../../context/theme";

function TitlePlay({title}) {
    const { theme } = useThemeContext();
    return (
        <div className={styles['track-play__author']}>
            <a href="http://" className={`${styles["track-play__author-link"]} ${theme === 'light' ? color.light__text : color.dark__text}`}>{title}</a>
        </div>
    );
};

export default TitlePlay