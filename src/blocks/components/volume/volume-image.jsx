import styles from "./volume.module.scss";

function VolumeImage() {
    return(
        <div className={styles.volume__image}>
            <svg className={styles.volume__svg} alt="volume">
                <use href="img/icon/sprite.svg#icon-volume"></use>
            </svg>
        </div>
    );
}

export default VolumeImage