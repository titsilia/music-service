import styles from "./buttons.module.scss";

import { useThemeContext } from "../../../context/theme";

import { ReactComponent as Like } from "../../../assets/img/icon/like.svg";
import { ReactComponent as LikeLight } from "../../../assets/img/icon/light/like-light.svg";

function ButtonLikeMain() {
  const { theme } = useThemeContext();
  return (
    <>
      {theme === "light" ? (
        <LikeLight className={styles["track-play__like-svg_light"]} />
      ) : (
        <Like className={styles["track-play__like-svg"]} />
      )}
    </>
  );
}

export default ButtonLikeMain;
