import styles from "./buttons.module.scss";

import sprite from "../../../assets/img/icon/sprite.svg";

function ButtonRepeat() {
    return(
        <div className={` ${styles["player__btn-repeat"]} ${styles["_btn-icon"]} `}>
            <svg className={styles["player__btn-repeat-svg"]} alt="repeat">
                <use xlinkHref={`${sprite}#icon-repeat`}></use>
            </svg>
        </div>
    );
}

export default ButtonRepeat