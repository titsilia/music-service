import styles from "./buttons.module.scss";

import {ReactComponent as Play} from "../../../assets/img/icon/play.svg";

function ButtonPlay({ func }) {

    function playBtn() {
        func(true)
    }

  return (
    <div onClick={playBtn} className={` ${styles["player__btn-play"]} ${styles["_btn"]} `}>
      <Play className={styles["player__btn-play-svg"]} />
    </div>
  );
}

export default ButtonPlay;
