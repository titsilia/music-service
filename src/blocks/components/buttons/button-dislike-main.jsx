import styles from "../../centerblock/centerblock-components/playlist-item.module.scss";

import { useThemeContext } from "../../../context/theme";

import { ReactComponent as Dislike } from "../../../assets/img/icon/dislike.svg";
import { ReactComponent as DislikeLight } from "../../../assets/img/icon/light/dislike-light.svg";

function ButtonDislike() {
  const { theme } = useThemeContext();
  return (
      <>
        {theme === "light" ? (
          <DislikeLight className={styles["track__time-svg"]} />
        ) : (
          <Dislike className={styles["track__time-svg"]} />
        )}
      </>
  );
}

export default ButtonDislike;
