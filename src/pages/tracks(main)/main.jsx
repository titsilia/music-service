import React from "react";
import { useSelector } from "react-redux";

import styles from "./main.module.css";

import Nav from "../../blocks/nav/nav";
import CenterBlock from "../../blocks/centerblock/centerblock-main";
import SlideBar from "../../blocks/sidebar/sidebar";

import Bar from "../../blocks/bar/bar";
import Footer from "../../blocks/footer";

function Main() {
  const getIdTrack = useSelector((store) => store.track.trackData.idTrack);
  return (
    <>
      <div className={styles.main}>
        <Nav />
        <CenterBlock />
        <SlideBar />
      </div>
      {getIdTrack === "" ? <></> : <Bar />}
      <Footer />
    </>
  );
}

export default Main;
