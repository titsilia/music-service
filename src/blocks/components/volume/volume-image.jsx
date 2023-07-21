import styles from "./volume.module.scss";

import volume from "../../../assets/img/icon/volume.svg";

function VolumeImage() {
    return(
        <div className={styles.volume__image}>
            <img src={volume} className={styles.volume__svg} alt="громкость" />
        </div>
    );
}

export default VolumeImage