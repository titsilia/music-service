import styles from "./buttons.module.scss";

import {ReactComponent as Repeat} from "../../../assets/img/icon/repeat.svg";

function ButtonRepeat() {
    return(
        <div className={` ${styles["player__btn-repeat"]} ${styles["_btn-icon"]} `}>
            <Repeat className={styles["player__btn-repeat-svg"]} />
        </div>
    );
}

export default ButtonRepeat