import styles from "../../centerblock/centerblock-components/playlist-item.module.scss";

import { useThemeContext } from "../../../context/theme";

import { ReactComponent as Like } from "../../../assets/img/icon/like.svg";
import { ReactComponent as LikeLight } from "../../../assets/img/icon/light/like-light.svg";

function ButtonLikeMain() {
  const { theme } = useThemeContext();
  return (
    <div>
      {theme === "light" ? (
        <LikeLight className={styles["track__time-svg"]} />
      ) : (
        <Like className={styles["track__time-svg"]} />
      )}
    </div>
  );
}

export default ButtonLikeMain;
