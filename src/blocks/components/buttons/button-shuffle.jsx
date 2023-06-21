import styles from "./buttons.module.scss";

function ButtonShuffle() {
  return (
    <div
      className={` ${styles["player__btn-shuffle"]} ${styles["_btn-icon"]} `}
    >
      <svg className={styles["player__btn-shuffle-svg"]} alt="shuffle">
        <use href="img/icon/sprite.svg#icon-shuffle"></use>
      </svg>
    </div>
  );
}

export default ButtonShuffle;
