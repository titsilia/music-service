import styles from "./buttons.module.scss";

function ButtonRepeat() {
    return(
        <div className={` ${styles["player__btn-repeat"]} ${styles["_btn-icon"]} `}>
            <svg className={styles["player__btn-repeat-svg"]} alt="repeat">
                <use href="img/icon/sprite.svg#icon-repeat"></use>
            </svg>
        </div>
    );
}

export default ButtonRepeat