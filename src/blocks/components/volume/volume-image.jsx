import styles from "./volume.module.scss";

import {ReactComponent as Volume} from "../../../assets/img/icon/volume.svg";

function VolumeImage() {
    return(
        <div className={styles.volume__image}>
            <Volume className={styles.volume__svg} />
        </div>
    );
}

export default VolumeImage