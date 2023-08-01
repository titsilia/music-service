import React from "react";
import { useSelector } from "react-redux";

import Bar from "../../blocks/bar/bar";
import Footer from "../../blocks/footer";

import styles from "../tracks(main)/main.module.css";

import Nav from "../../blocks/nav/nav";
import CenterBlockFavorite from "../../blocks/centerblock/centerblock-favorite";
import SlideBarPlaylists from "../../blocks/sidebar/sidebar-playlists";

function Favorite() {
  const getIdTrack = useSelector((store) => store.track.trackData.idTrack);

  return (
    <div className={styles.main}>
      <Nav />
      <CenterBlockFavorite h2="Моё избранное" />
      <SlideBarPlaylists />
      {getIdTrack === "" ? <></> : <Bar />}
      <Footer />
    </div>
  );
}

export default Favorite;
