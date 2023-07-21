import React from "react";

import styles from "./centerblock.module.css";

import PlaylistItem from "./centerblock-components/playlist-item";
import SkelRenderCenterblock from "./centerblock-components/skel-render-centerblock";

import VisibleYear from "./centerblock-components/visible-year";
import VisibleAuthor from "./centerblock-components/visible-author";
import VisibleGenre from "./centerblock-components/visible-genre";

const { useState, useEffect } = React;

function CenterBlock() {
  const [visibleFilter, setVisibleFilter] = useState(null);

  const toggleVisibilityFilter = (filter) =>
    setVisibleFilter(visibleFilter === filter ? null : filter);

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

      <h2 className={styles.centerblock__h2}>Треки</h2>

      <div className={`${styles.centerblock__filter} ${styles.filter}`}>
        <div className={styles.filter__title}>Искать по:</div>
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
                      }`}
            onClick={() => toggleVisibilityFilter("author")}
          >
            исполнителю
          </div>

          <div
            className={`${styles.filter__button} ${styles["button-year"]}  
            ${styles["_btn-text"]}  
                      ${
                        visibleFilter === "year"
                          ? styles.filter__btn_active
                          : styles["_btn-text"]
                      }`}
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
                      }`}
            onClick={() => toggleVisibilityFilter("genre")}
          >
            жанру
          </div>
        </div>
      </div>

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
