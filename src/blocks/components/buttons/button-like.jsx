import styles from "./buttons.module.scss";

import sprite from "../../../assets/img/icon/sprite.svg";

function ButtonLike() {
    return(
        <div className={` ${styles['track-play__like']} ${styles['_btn-icon']} `}>
            <svg className={styles['track-play__like-svg']} alt="like">
                <use xlinkHref={`${sprite}#icon-like`}></use>
            </svg>
        </div>
    );
}

export default ButtonLike