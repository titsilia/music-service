import React from "react";
import { AppRoutes } from "./routes";

import styles from "./container.module.css";

function Container() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
          <AppRoutes />
        </div>
      </div>
  );
}

export default Container;
