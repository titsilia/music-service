import styles from "./buttons.module.scss";

function ButtonLike() {
    return(
        <div className={` ${styles['track-play__like']} ${styles['_btn-icon']} `}>
            <svg className={styles['track-play__like-svg']} alt="like">
                <use href="img/icon/sprite.svg#icon-like"></use>
            </svg>
        </div>
    );
}

export default ButtonLike