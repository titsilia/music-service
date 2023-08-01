import React from "react";

import { useGetSelectionQuery } from "../../redux/fetch";
import { useDispatch } from "react-redux";
import { setTrack } from "../../redux/action-creators";

import styles from "./centerblock.module.css";
import color from "../../themes.module.css";

import { useThemeContext } from "../../context/theme";
import { useParams } from "react-router-dom";

import PlaylistItem from "./centerblock-components/playlist-item";
import SkelRenderCenterblock from "./centerblock-components/skel-render-centerblock";

import { ReactComponent as Search } from "../../assets/img/icon/search.svg";
import { ReactComponent as SearchLight } from "../../assets/img/icon/light/search-light.svg";

import { ReactComponent as Watch } from "../../assets/img/icon/watch.svg";
import { ReactComponent as WatchLight } from "../../assets/img/icon/light/watch-light.svg";

const { useState, useEffect } = React;

function CenterBlockPlaylists({ h2 }) {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading } = useGetSelectionQuery(id);

  console.log(data);

  const { theme } = useThemeContext();

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
          {isLoading && !data ? (
            <>
              <SkelRenderCenterblock />
              <SkelRenderCenterblock />
              <SkelRenderCenterblock />
              <SkelRenderCenterblock />
              <SkelRenderCenterblock />
              <SkelRenderCenterblock />
              <SkelRenderCenterblock />
              <SkelRenderCenterblock />
              <SkelRenderCenterblock />
              <SkelRenderCenterblock />
              <SkelRenderCenterblock />
            </>
          ) : (
            data.items.map((track) => (
              <PlaylistItem
                id={track.id}
                key={track.id}
                title={track.name}
                href={track.track_file}
                author={track.author}
                album={track.album}
                time={`${(+track.duration_in_seconds / 60) >> 0}:${
                  +track.duration_in_seconds % 60 < 10
                    ? `0${+track.duration_in_seconds % 60}`
                    : +track.duration_in_seconds % 60
                }`}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CenterBlockPlaylists;
