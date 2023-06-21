import styles from "./buttons.module.scss";

function ButtonDislike() {
    return(
        <div className={` ${styles['track-play__dislike']} ${styles['_btn-icon']} `}>
            <svg className={styles['track-play__dislike-svg']} alt="dislike">
                <use href="img/icon/sprite.svg#icon-dislike"></use>
            </svg>
        </div>
    );
}

export default ButtonDislike