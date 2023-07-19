import React from "react";

import styles from "./bar.module.css";

import PlayerBlock from "./bar-components/player-block";

function Bar() {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__content}>
        <div className={styles["bar__player-progress"]}></div>
        <PlayerBlock />
      </div>
    </div>
  );
}

export default Bar;
