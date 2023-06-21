import styles from "./buttons.module.scss";

function ButtonNext() {
    return(
        <div className={styles["player__btn-next"]}>
            <svg className={styles["player__btn-next-svg"]} alt="next">
                <use href="img/icon/sprite.svg#icon-next"></use>
            </svg>
        </div>
    );
}

export default ButtonNext