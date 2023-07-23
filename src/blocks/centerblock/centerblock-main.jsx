import React from "react";

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
  const { theme } = useThemeContext();

  const [visibleFilter, setVisibleFilter] = useState(null);

  const toggleVisibilityFilter = (filter) =>
    setVisibleFilter(visibleFilter === filter ? null : filter);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

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
          {isLoading ? (
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
              <PlaylistItem
                title="Eyes on Fire"
                author="Blue Foundation, Zeds Dead"
                album="Eyes on Fire"
                time="5:20"
              />
              <PlaylistItem
                title="Mucho Bien"
                author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
                album="Mucho Bien"
                time="3:41"
              />
              <PlaylistItem
                title="Knives n Cherries"
                author="minthaze"
                album="Captivating"
                time="1:48"
              />
              <PlaylistItem
                title="How Deep Is Your Love"
                author="Calvin Harris, Disciples"
                album="How Deep Is Your Love"
                time="3:32"
              />
              <PlaylistItem
                title="Morena"
                author="Tom Boxer"
                album="Soundz Made in Romania"
                time="3:36"
              />
              <PlaylistItem
                title="Guilt"
                author="Dynoro"
                album="Welcome"
                time="0"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CenterBlock;
