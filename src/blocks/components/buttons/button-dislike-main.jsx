import styles from "./buttons.module.scss";

import { useThemeContext } from "../../../context/theme";

import { ReactComponent as Dislike } from "../../../assets/img/icon/dislike.svg";
import { ReactComponent as DislikeLight } from "../../../assets/img/icon/light/dislike-light.svg";

function ButtonDislike() {
  const { theme } = useThemeContext();
  return (
    <>
      {theme === "light" ? (
        <DislikeLight className={styles["track-play__like-svg_light"]} />
      ) : (
        <Dislike className={styles["track-play__like-svg"]} />
      )}
    </>
  );
}

export default ButtonDislike;
