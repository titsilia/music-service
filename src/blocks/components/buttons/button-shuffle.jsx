import styles from "./buttons.module.scss";

import {ReactComponent as Shuffle} from "../../../assets/img/icon/shuffle.svg";

function ButtonShuffle() {
  return (
    <div
      className={` ${styles["player__btn-shuffle"]} ${styles["_btn-icon"]} `}
    >
      <Shuffle className={styles["player__btn-shuffle-svg"]} />
    </div>
  );
}

export default ButtonShuffle;
