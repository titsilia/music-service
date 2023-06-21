import React from "react";
import Main from "./blocks/main";
import Bar from "./blocks/bar";
import Footer from "./blocks/footer";

import global from "./global.module.css";
import styles from "./container.module.css";

function Container() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Main />
        <Bar />
        <Footer />
      </div>
    </div>
  );
}

export default Container;
