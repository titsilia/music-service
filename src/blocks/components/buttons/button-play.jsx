import styles from "./buttons.module.scss";

import sprite from "../../../assets/img/icon/sprite.svg";

function ButtonPlay({ func }) {

    function playBtn() {
        func(true)
    }

  return (
    <div onClick={playBtn} className={` ${styles["player__btn-play"]} ${styles["_btn"]} `}>
      <svg className={styles["player__btn-play-svg"]} alt="play">
        <use xlinkHref={`${sprite}#icon-play`}></use>
      </svg>
    </div>
  );
}

export default ButtonPlay;
