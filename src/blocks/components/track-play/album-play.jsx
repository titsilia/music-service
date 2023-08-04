import React from 'react';

import styles from "./track-play.module.css";
import color from "../../../themes.module.css";

import { useThemeContext } from "../../../context/theme";

function AuthorPlay({album}) {
    const { theme } = useThemeContext();
    return (
        <div className={styles['track-play__album']}>
            <a href="http://" className={`${styles["track-play__album-link"]} ${theme === 'light' ? color.light__text : color.dark__text}`}>{album}</a>
        </div>
    );
}
export default AuthorPlay