import React from "react";

import styles from "./main.module.css";

import Nav from "../../blocks/nav/nav";
import CenterBlock from "../../blocks/centerblock/centerblock-main";
import SlideBar from "../../blocks/sidebar/sidebar";

import Bar from "../../blocks/bar/bar";
import Footer from "../../blocks/footer";

function Main() {
  return (
    <>
      <div className={styles.main}>
        <Nav />
        <CenterBlock />
        <SlideBar />
      </div>
      <Bar />
      <Footer />
    </>
  );
}

export default Main;
