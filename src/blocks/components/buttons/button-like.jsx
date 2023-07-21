import styles from "./buttons.module.scss";

import like from "../../../assets/img/icon/like.svg";

function ButtonLike() {
    return(
        <div className={` ${styles['track-play__like']} ${styles['_btn-icon']} `}>
            <img src={like} className={styles['track-play__like-svg']} alt="нравится" />
        </div>
    );
}

export default ButtonLike