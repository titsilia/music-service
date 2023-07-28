import React from "react";
import { useParams } from "react-router-dom";

import Bar from "../../blocks/bar/bar";
import Footer from "../../blocks/footer";

import styles from "../tracks(main)/main.module.css";

import Nav from "../../blocks/nav/nav";
import CenterBlockPlaylists from "../../blocks/centerblock/centerblock-playlists";
import SlideBarPlaylists from "../../blocks/sidebar/sidebar-playlists";

function Daily() {
  const { id } = useParams();

  return (
    <div className={styles.main}>
      <Nav />
      <CenterBlockPlaylists
        h2={
          id === "1"
            ? "Плейлист дня"
            : id === "2"
            ? "Инди заряд"
            : "100 танцевальных хитов"
        }
      />
      <SlideBarPlaylists />
      <Bar />
      <Footer />
    </div>
  );
}

export default Daily;
