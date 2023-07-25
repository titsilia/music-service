import styles from "./volume.module.scss";
import { useThemeContext } from "../../../context/theme";

import { ReactComponent as Volume } from "../../../assets/img/icon/volume.svg";
import { ReactComponent as VolumeLight } from "../../../assets/img/icon/light/volume-light.svg";

function VolumeImage() {
  const { theme } = useThemeContext();
  return (
    <div className={styles.volume__image}>
      {theme === "light" ? (
        <VolumeLight className={styles.volume__svg} />
      ) : (
        <Volume className={styles.volume__svg} />
      )}
    </div>
  );
}

export default VolumeImage;
