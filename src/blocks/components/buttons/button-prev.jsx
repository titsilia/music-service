import styles from "./buttons.module.scss";

import prev from "../../../assets/img/icon/prev.svg";

function ButtonPrev() {
  return (
    <div className={styles["player__btn-prev"]}>
      <img src={prev} className={styles["player__btn-prev-svg"]} alt="назад" />
    </div>
  );
}

export default ButtonPrev;
