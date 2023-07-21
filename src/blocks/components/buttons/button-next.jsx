import styles from "./buttons.module.scss";

import {ReactComponent as Next} from "../../../assets/img/icon/next.svg";

function ButtonNext() {
    return(
        <div className={styles["player__btn-next"]}>
            <Next className={styles["player__btn-next-svg"]} />
        </div>
    );
}

export default ButtonNext