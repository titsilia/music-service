import React from "react";

import imageTrack from '../../assets/img/logo.png'

import styles from "./centerblock.module.css";

import PlaylistItem from "./centerblock-components/playlist-item";
import SkelRenderCenterblock from "./centerblock-components/skel-render-centerblock";

const { useState, useEffect } = React;

function CenterBlockPlaylists({h2}) {

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
    <div className={`${styles.main__centerblock} ${styles.centerblock}`}>
      <div className={`${styles.centerblock__search} ${styles.search}`}>
        <svg className={styles.search__svg}>
          <use href="img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={styles.search__text}
          type="search"
          placeholder="Поиск"
          name="search"
        ></input>
      </div>

      <h2 className={styles.centerblock__h2}>{h2}</h2>

      <div className={styles.centerblock__content}>
        <div className={`${styles.content__title} ${styles.playlist_title}`}>
          <div className={`${styles.playlist_title__col} ${styles.col01}`}>
            Трек
          </div>
          <div className={`${styles.playlist_title__col} ${styles.col02}`}>
            ИСПОЛНИТЕЛЬ
          </div>
          <div className={`${styles.playlist_title__col} ${styles.col03}`}>
            АЛЬБОМ
          </div>
          <div className={`${styles.playlist_title__col} ${styles.col04}`}>
            <svg className={styles.playlist_title__svg} alt="time">
              <use href="img/icon/sprite.svg#icon-watch"></use>
            </svg>
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
