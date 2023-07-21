import styles from "./buttons.module.scss";

function ButtonPlay({ func }) {

    function playBtn() {
        func(true)
    }

  return (
    <div onClick={playBtn} className={` ${styles["player__btn-play"]} ${styles["_btn"]} `}>
      <svg className={styles["player__btn-play-svg"]} alt="play">
        <use href="img/icon/sprite.svg#icon-play"></use>
      </svg>
    </div>
  );
}

export default ButtonPlay;
