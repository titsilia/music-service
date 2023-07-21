import styles from "./buttons.module.scss";

import sprite from "../../../assets/img/icon/sprite.svg";

function ButtonShuffle() {
  return (
    <div
      className={` ${styles["player__btn-shuffle"]} ${styles["_btn-icon"]} `}
    >
      <svg className={styles["player__btn-shuffle-svg"]} alt="shuffle">
        <use xlinkHref={`${sprite}#icon-shuffle`}></use>
      </svg>
    </div>
  );
}

export default ButtonShuffle;
