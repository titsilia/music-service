import styles from "./buttons.module.scss";

import { useThemeContext } from "../../../context/theme";

import { ReactComponent as Repeat } from "../../../assets/img/icon/repeat.svg";
import { ReactComponent as RepeatLight } from "../../../assets/img/icon/light/repeat-light.svg";

function ButtonRepeat() {
  const { theme } = useThemeContext();
  return (
    <div className={` ${styles["player__btn-repeat"]} ${styles["_btn-icon"]} `}>
      {theme === "light" ? (
        <RepeatLight className={styles["player__btn-repeat-svg"]} />
      ) : (
        <Repeat className={styles["player__btn-repeat-svg"]} />
      )}
    </div>
  );
}

export default ButtonRepeat;
