import styles from "./buttons.module.scss";

import shuffle from "../../../assets/img/icon/shuffle.svg";

function ButtonShuffle() {
  return (
    <div
      className={` ${styles["player__btn-shuffle"]} ${styles["_btn-icon"]} `}
    >
      <img
        src={shuffle}
        className={styles["player__btn-shuffle-svg"]}
        alt="перемешать"
      />
    </div>
  );
}

export default ButtonShuffle;
