import React from "react";

import Bar from "../../blocks/bar/bar";
import Footer from "../../blocks/footer";

import styles from "../tracks(main)/main.module.css";

import Nav from "../../blocks/nav/nav";
import CenterBlockPlaylists from "../../blocks/centerblock/centerblock-playlists";
import SlideBarPlaylists from "../../blocks/sidebar/sidebar-playlists";


function Indie() {
  return (
    <div className={styles.main}>
      <Nav />
      <CenterBlockPlaylists h2="Инди заряд"/>
      <SlideBarPlaylists />
      <Bar />
      <Footer />
    </div>
  );
}

export default Indie;