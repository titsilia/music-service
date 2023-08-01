import React from 'react';

import styles from "./track-play.module.css";
import color from "../../../themes.module.css";

import { useThemeContext } from "../../../context/theme";

function AuthorPlay({author}) {
    const { theme } = useThemeContext();
    return (
        <div className={styles['track-play__album']}>
            <a href="http://" className={`${styles["track-play__album-link"]} ${theme === 'light' ? color.light__text : color.dark__text}`}>{author}</a>
        </div>
    );
}
export default AuthorPlay