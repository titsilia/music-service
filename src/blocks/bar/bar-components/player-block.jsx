import React from "react";

import styles from "./player-block.module.scss";

import styleBtn from "../../components/buttons/buttons.module.scss";

import SkelRenderBar from "./skel-render-bar";
import TrackRender from "./track-render";

import ButtonPrev from "../../components/buttons/button-prev";
import ButtonPlay from "../../components/buttons/button-play";
import ButtonNext from "../../components/buttons/button-next";
import ButtonRepeat from "../../components/buttons/button-repeat";
import ButtonShuffle from "../../components/buttons/button-shuffle";
import ButtonLike from "../../components/buttons/button-like";
import ButtonDislike from "../../components/buttons/button-dislike";

import VolumeImage from "../../components/volume/volume-image";
import VolumeProgress from "../../components/volume/volume-progress";

const { useState, useEffect, useRef } = React;

function PlayerBlock() {
  const [isLoading, setIsLoading] = useState(true);

  const [isPlay, setPlay] = useState(false);

  const audio = useRef(null);
  const progressLine = useRef(null);

  function playBtn() {
    if (isPlay) {
      audio.current.pause();
      setPlay(false);
    } else {
      audio.current.play();
      setPlay(true);
    }
  }

  useEffect(() => {
    audio.current.volume = 0.1;
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timerId);
    };
  });

  useEffect(() => {
    const audioTime = audio.current.duration;

    if (isPlay) {
      window.play = setInterval(() => {
        console.log("au");
        const currentTime = audio.current.currentTime;

        const procent = (currentTime / audioTime) * 100;
        progressLine.current.style.width = `${procent}%`;

        if (procent === 100) {
          clearInterval(window.play);
          setPlay(false);
        }
      }, 10);
    } else {
      clearInterval(window.play);
    }
  });

  console.log(1);
  return (
    <>
      <div className={styles["bar__player-progress"]}>
        <div
          ref={progressLine}
          className={styles["bar__player-progress_procent"]}
        ></div>
      </div>

      <div className={styles["bar__player-block"]}>
        <div className={` ${styles["bar__player"]} ${styles.player} `}>
          <div className={styles.player__controls}>
            <ButtonPrev />

            <div
              onClick={playBtn}
              className={` ${styleBtn["player__btn-play"]} ${styleBtn["_btn"]} `}
            >
              <svg className={styleBtn["player__btn-play-svg"]} alt="play">
                <use
                  href={`img/icon/sprite.svg#icon-${isPlay ? "pause" : "play"}`}
                ></use>
              </svg>
            </div>

            <ButtonNext />
            <ButtonRepeat />
            <ButtonShuffle />
          </div>

          <div
            className={` ${styles["player__track-play"]} ${styles["track-play"]} `}
          >
            <div className={styles["track-play__contain"]}>
              {isLoading ? (
                <SkelRenderBar />
              ) : (
                <>
                  <TrackRender author="Ты та..." album="Баста" />
                </>
              )}
            </div>

            <div className={styles["track-play__like-dis"]}>
              <ButtonLike />
              <ButtonDislike />
            </div>
          </div>
        </div>

        <div className={` ${styles["bar__volume-block"]} ${styles.volume} `}>
          <div className={styles.volume__content}>
            <VolumeImage />
            <VolumeProgress audio={audio} />
          </div>
        </div>
      </div>
      <figure>
        <audio ref={audio} src="music/Bobby_Marleni_-_Dropin.mp3"></audio>
      </figure>
    </>
  );
}

export default PlayerBlock;
