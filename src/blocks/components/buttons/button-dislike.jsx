import styles from "./buttons.module.scss";

import dislike from "../../../assets/img/icon/dislike.svg";

function ButtonDislike() {
    return(
        <div className={` ${styles['track-play__dislike']} ${styles['_btn-icon']} `}>
            <img src={dislike} className={styles['track-play__dislike-svg']} alt="не нравится" />
        </div>
    );
}

export default ButtonDislike