import styles from "./buttons.module.scss";

import next from "../../../assets/img/icon/next.svg";

function ButtonNext() {
    return(
        <div className={styles["player__btn-next"]}>
            <img src={next} className={styles["player__btn-next-svg"]} alt="дальше" />
        </div>
    );
}

export default ButtonNext