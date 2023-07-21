import styles from "./buttons.module.scss";

import repeat from "../../../assets/img/icon/repeat.svg";

function ButtonRepeat() {
    return(
        <div className={` ${styles["player__btn-repeat"]} ${styles["_btn-icon"]} `}>
            <img src={repeat} className={styles["player__btn-repeat-svg"]} alt="повторить" />
        </div>
    );
}

export default ButtonRepeat