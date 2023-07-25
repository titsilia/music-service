import styles from "./buttons.module.scss";

import { useThemeContext } from "../../../context/theme";

import {ReactComponent as Shuffle} from "../../../assets/img/icon/shuffle.svg";
import { ReactComponent as ShuffleLight } from "../../../assets/img/icon/light/shuffle-light.svg";

function ButtonShuffle() {
  const { theme } = useThemeContext();
  return (
    <div
      className={` ${styles["player__btn-shuffle"]} ${styles["_btn-icon"]} `}
    >
      {theme === "light" ? (
      <ShuffleLight className={styles["player__btn-shuffle-svg"]} />
      ) : (
        <Shuffle className={styles["player__btn-shuffle-svg"]} />
      )}

    </div>
  );
}

export default ButtonShuffle;
