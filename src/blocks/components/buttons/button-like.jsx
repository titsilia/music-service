import styles from "./buttons.module.scss";

import {ReactComponent as Like} from "../../../assets/img/icon/like.svg";

function ButtonLike() {
    return(
        <div className={` ${styles['track-play__like']} ${styles['_btn-icon']} `}>
            <Like className={styles['track-play__like-svg']} />
        </div>
    );
}

export default ButtonLike