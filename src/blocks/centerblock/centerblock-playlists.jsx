import React from "react";

import styles from "./centerblock.module.css";
import color from "../../themes.module.css";

import { useThemeContext } from "../../context/theme";

import PlaylistItem from "./centerblock-components/playlist-item";
import SkelRenderCenterblock from "./centerblock-components/skel-render-centerblock";

import sprite from "../../assets/img/icon/sprite.svg";

import { ReactComponent as Search } from "../../assets/img/icon/search.svg";
import { ReactComponent as SearchLight } from "../../assets/img/icon/light/search-light.svg";

import { ReactComponent as Watch } from "../../assets/img/icon/watch.svg";
import { ReactComponent as WatchLight } from "../../assets/img/icon/light/watch-light.svg";

const { useState, useEffect } = React;

function CenterBlockPlaylists({ h2 }) {
  const { theme } = useThemeContext();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <div
      className={`${styles.main__centerblock} ${styles.centerblock} ${
        theme === "light"
          ? color.light__background
          : color.dark__main_background
      }`}
    >
      <div
        className={`${styles.centerblock__search} ${styles.search}  ${
          theme === "light" ? color.light__border : color.dark__border
        }`}
      >
        {theme === "light" ? (
          <SearchLight className={styles.search__svg} />
        ) : (
          <Search className={styles.search__svg} />
        )}
        <input
          className={`${styles.search__text} ${
            theme === "light" ? color.light__text : color.dark__text
          }`}
          type="search"
          placeholder="Поиск"
          name="search"
        ></input>
      </div>

      <h2
        className={`${styles.centerblock__h2} ${
          theme === "light" ? color.light__text : color.dark__text
        }`}
      >
        {h2}
      </h2>

      <div className={styles.centerblock__content}>
        <div className={`${styles.content__title} ${styles.playlist_title}`}>
          <div
            className={`${styles.playlist_title__col} ${styles.col01} ${
              theme === "light"
                ? color.light__text_tracks
                : color.dark__text_tracks
            }`}
          >
            Трек
          </div>
          <div
            className={`${styles.playlist_title__col} ${styles.col02} ${
              theme === "light"
                ? color.light__text_tracks
                : color.dark__text_tracks
            }`}
          >
            ИСПОЛНИТЕЛЬ
          </div>
          <div
            className={`${styles.playlist_title__col} ${styles.col03} ${
              theme === "light"
                ? color.light__text_tracks
                : color.dark__text_tracks
            }`}
          >
            АЛЬБОМ
          </div>
          <div className={`${styles.playlist_title__col} ${styles.col04}`}>
          {theme === "light" ? <WatchLight /> : <Watch />}
          </div>
        </div>

        <div className={`${styles.content__playlist} ${styles.playlist}`}>
          {isLoading ? (
            <>
              <SkelRenderCenterblock />
              <SkelRenderCenterblock />
              <SkelRenderCenterblock />
              <SkelRenderCenterblock />
              <SkelRenderCenterblock />
            </>
          ) : (
            <>
              <PlaylistItem
                title="Guilt"
                author="Nero"
                album="Welcome Reality"
                time="4:44"
              />
              <PlaylistItem
                title="Elektro"
                author="Dynoro, Outwork, Mr. Gee"
                album="Elektro"
                time="2:22"
              />
              <PlaylistItem
                title="I’m Fire"
                author="Ali Bakgor"
                album="I’m Fire"
                time="2:22"
              />
              <PlaylistItem
                title="Non Stop"
                author="Стоункат, Psychopath"
                album="Non Stop"
                time="4:12"
              />
              <PlaylistItem
                title="Run Run"
                author="Jaded, Will Clarke, AR/CO"
                album="Run Run"
                time="2:54"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CenterBlockPlaylists;
