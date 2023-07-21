import styles from "./buttons.module.scss";

import sprite from "../../../assets/img/icon/sprite.svg";

function ButtonPrev() {
    return(
        <div className={styles["player__btn-prev"]}>
            <svg className={styles["player__btn-prev-svg"]} alt="prev">
                <use xlinkHref={`${sprite}#icon-prev`}></use>
            </svg>
        </div>
    );
}

export default ButtonPrev