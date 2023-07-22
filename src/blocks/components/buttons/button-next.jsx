import styles from "./buttons.module.scss";
import { useThemeContext } from "../../../context/theme";

import { ReactComponent as Next } from "../../../assets/img/icon/next.svg";
import { ReactComponent as NextLight } from "../../../assets/img/icon/light/next-light.svg";
function ButtonNext() {
  const { theme } = useThemeContext();
  return (
    <div className={styles["player__btn-next"]}>
      {theme === "light" ? (
        <NextLight className={styles["player__btn-next-svg"]} />
      ) : (
        <Next className={styles["player__btn-next-svg"]} />
      )}
    </div>
  );
}

export default ButtonNext;
