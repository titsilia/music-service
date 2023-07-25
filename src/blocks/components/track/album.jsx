import React from 'react';

import styles from "./track.module.css";
import color from "../../../themes.module.css";

import { useThemeContext } from "../../../context/theme";

function Album({album}) {
const { theme } = useThemeContext();
    return (
        <div className={styles.track__album}>
            <a href="http://" className={`${styles["track__album-link"]} ${theme === 'light' ? color.light__text_tracks : color.dark__text_tracks}`}>{album}</a>
        </div>
    );
}
export default Album