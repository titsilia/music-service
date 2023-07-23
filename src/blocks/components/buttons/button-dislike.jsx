import styles from "./buttons.module.scss";

import {ReactComponent as Dislike} from "../../../assets/img/icon/dislike.svg";

function ButtonDislike() {
    return(
        <div className={` ${styles['track-play__dislike']} ${styles['_btn-icon']} `}>
            <Dislike className={styles['track-play__dislike-svg']}  />
        </div>
    );
}

export default ButtonDislike