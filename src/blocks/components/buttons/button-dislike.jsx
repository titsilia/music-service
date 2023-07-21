import styles from "./buttons.module.scss";

import sprite from "../../../assets/img/icon/sprite.svg";

function ButtonDislike() {
    return(
        <div className={` ${styles['track-play__dislike']} ${styles['_btn-icon']} `}>
            <svg className={styles['track-play__dislike-svg']} alt="dislike">
                <use xlinkHref={`${sprite}#icon-dislike`}></use>
            </svg>
        </div>
    );
}

export default ButtonDislike