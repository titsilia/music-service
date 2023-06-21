import React from "react";

import styles from "./main.module.css";

import Nav from "./nav/nav";
import CenterBlock from "./centerblock/centerblock";
import SlideBar from "./sidebar/sidebar";

function Main() {
  return (
    <div className={styles.main}>
      <Nav />
      <CenterBlock />
      <SlideBar />
    </div>
  );
}

export default Main;
