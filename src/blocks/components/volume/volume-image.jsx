import styles from "./volume.module.scss";

import sprite from "../../../assets/img/icon/sprite.svg";

function VolumeImage() {
    return(
        <div className={styles.volume__image}>
            <svg className={styles.volume__svg} alt="volume">
                <use xlinkHref={`${sprite}#icon-volume`}></use>
            </svg>
        </div>
    );
}

export default VolumeImage