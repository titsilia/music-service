import styles from "./buttons.module.scss";

import {ReactComponent as Prev} from "../../../assets/img/icon/prev.svg";

function ButtonPrev() {
    return(
        <div className={styles["player__btn-prev"]}>
            <Prev className={styles["player__btn-prev-svg"]} />
        </div>
    );
}

export default ButtonPrev