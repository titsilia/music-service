import React from "react";

import { useGetAllTracksQuery } from "../../redux/fetch";

import styles from "./centerblock.module.css";
import color from "../../themes.module.css";

import { useThemeContext } from "../../context/theme";

import PlaylistItem from "./centerblock-components/playlist-item";
import SkelRenderCenterblock from "./centerblock-components/skel-render-centerblock";

import VisibleYear from "./centerblock-components/visible-year";
import VisibleAuthor from "./centerblock-components/visible-author";
import VisibleGenre from "./centerblock-components/visible-genre";

import { ReactComponent as Search } from "../../assets/img/icon/search.svg";
import { ReactComponent as SearchLight } from "../../assets/img/icon/light/search-light.svg";

import { ReactComponent as Watch } from "../../assets/img/icon/watch.svg";
import { ReactComponent as WatchLight } from "../../assets/img/icon/light/watch-light.svg";

const { useState, useEffect } = React;

function CenterBlock() {
  const response = useGetAllTracksQuery();

  const { theme } = useThemeContext();

  const [visibleFilter, setVisibleFilter] = useState(null);

  const toggleVisibilityFilter = (filter) =>
    setVisibleFilter(visibleFilter === filter ? null : filter);

  return (
    <div
      className={`${styles.main__centerblock} ${styles.centerblock} ${
        theme === "light"
          ? color.light__background
          : color.dark__main_background
      } `}
    >
      <div
        className={`${styles.centerblock__search} ${styles.search} ${
          theme === "light" ? color.light__border : color.dark__border
        } `}
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
        Треки
      </h2>

      <div className={`${styles.centerblock__filter} ${styles.filter}`}>
        <div
          className={`${styles.filter__title} ${
            theme === "light" ? color.light__text : color.dark__text
          }`}
        >
          Искать по:
        </div>
        <div className={styles.filter__container_btn}>
          {visibleFilter === "author" && <VisibleAuthor />}
          {visibleFilter === "year" && <VisibleYear />}
          {visibleFilter === "genre" && <VisibleGenre />}
          <div
            className={`${styles.filter__button} ${styles["button-author"]}  
            ${styles["_btn-text"]} 
                      ${
                        visibleFilter === "author"
                          ? styles.filter__btn_active
                          : styles["_btn-text"]
                      } ${
              theme === "light" ? styles.light__search : color.dark__search
            }`}
            onClick={() => toggleVisibilityFilter("author")}
          >
            исполнителю
          </div>

          <div
            className={`${styles.filter__button} ${styles["button-year"]} ${
              styles["_btn-text"]
            }  ${
              visibleFilter === "year"
                ? styles.filter__btn_active
                : styles["_btn-text"]
            } ${theme === "light" ? styles.light__search : color.dark__search}`}
            onClick={() => toggleVisibilityFilter("year")}
          >
            году выпуска
          </div>

          <div
            className={`${styles.filter__button} ${styles["button-genre"]}  ${
              styles["_btn-text"]
            } 
                      ${
                        visibleFilter === "genre"
                          ? styles.filter__btn_active
                          : styles["_btn-text"]
                      } ${
              theme === "light" ? styles.light__search : color.dark__search
            }`}
            onClick={() => toggleVisibilityFilter("genre")}
          >
            жанру
          </div>
        </div>
      </div>

      <div className={styles.centerblock__content}>
        <div className={`${styles.content__title} ${styles.playlist_title}`}>
          <div
            className={`${styles.playlist_title__col} ${styles.col01} ${
              theme === "light"
                ? color.light__text_tracks
                : color.dark__text_tracks
            } `}
          >
            Трек
          </div>
          <div
            className={`${styles.playlist_title__col} ${styles.col02} ${
              theme === "light"
                ? color.light__text_tracks
                : color.dark__text_tracks
            } `}
          >
            ИСПОЛНИТЕЛЬ
          </div>
          <div
            className={`${styles.playlist_title__col} ${styles.col03} ${
              theme === "light"
                ? color.light__text_tracks
                : color.dark__text_tracks
            } `}
          >
            АЛЬБОМ
          </div>

          <div className={`${styles.playlist_title__col} ${styles.col04} `}>
            {theme === "light" ? <WatchLight /> : <Watch />}
          </div>
        </div>

        <div className={`${styles.content__playlist} ${styles.playlist}`}>
          {response.isLoading && !response.data ? (
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
            response.data.map((track) => (
              <PlaylistItem
                key={track.id}
                title={track.name}
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

export default CenterBlock;
