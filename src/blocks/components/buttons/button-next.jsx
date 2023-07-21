import styles from "./buttons.module.scss";

import sprite from "../../../assets/img/icon/sprite.svg";

function ButtonNext() {
    return(
        <div className={styles["player__btn-next"]}>
            <svg className={styles["player__btn-next-svg"]} alt="next">
                <use xlinkHref={`${sprite}#icon-next`}></use>
            </svg>
        </div>
    );
}

export default ButtonNext