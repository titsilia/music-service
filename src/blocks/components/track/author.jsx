import React from 'react';

import styles from "./track.module.css";
import color from "../../../themes.module.css";

import { useThemeContext } from "../../../context/theme";

function Author({author}) {
    const { theme } = useThemeContext();

    return (
        <div className={styles.track__author}>
            <a href="http://" className={`${styles["track__author-link"]} ${theme === 'light' ? color.light__text : color.dark__text}`}>{author}</a>
        </div>
    );
};

export default Author