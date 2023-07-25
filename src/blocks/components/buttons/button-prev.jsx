import styles from "./buttons.module.scss";

import { useThemeContext } from "../../../context/theme";

import { ReactComponent as Prev } from "../../../assets/img/icon/prev.svg";
import { ReactComponent as PrevLight } from "../../../assets/img/icon/light/prev-light.svg";

function ButtonPrev() {
  const { theme } = useThemeContext();
  return (
    <div className={styles["player__btn-prev"]}>
      {theme === "light" ? (
        <PrevLight className={styles["player__btn-prev-svg"]} />
      ) : (
        <Prev className={styles["player__btn-prev-svg"]} />
      )}
    </div>
  );
}

export default ButtonPrev;
