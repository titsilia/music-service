import styles from "./buttons.module.scss";

import { useThemeContext } from "../../../context/theme";

import { ReactComponent as Like } from "../../../assets/img/icon/like.svg";
import { ReactComponent as LikeLight } from "../../../assets/img/icon/light/like-light.svg";

function ButtonLike() {
  const { theme } = useThemeContext();
  return (
    <div className={` ${styles["track-play__like"]} ${styles["_btn-icon"]} `}>
      {theme === "light" ? (
        <LikeLight className={styles["track-play__like-svg"]} />
      ) : (
        <Like className={styles["track-play__like-svg"]} />
      )}
    </div>
  );
}

export default ButtonLike;
