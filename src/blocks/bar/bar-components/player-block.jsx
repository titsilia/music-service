import React from "react";

import styles from "./player-block.module.scss";
import styleBtn from "../../components/buttons/buttons.module.scss";
import color from "../../../themes.module.css";

import { useThemeContext } from "../../../context/theme";
import { useSelector, useDispatch } from "react-redux";
import { setIdTrack, setMusicData } from "../../../redux/action-creators";

import SkelRenderBar from "./skel-render-bar";
import TrackRender from "./track-render";

import ButtonDislikeBar from "../../components/buttons/button-dislike-bar";
import ButtonLikeBar from "../../components/buttons/button-like-bar";

import VolumeImage from "../../components/volume/volume-image";
import VolumeProgress from "../../components/volume/volume-progress";

import { ReactComponent as Prev } from "../../../assets/img/icon/prev.svg";
import { ReactComponent as PrevLight } from "../../../assets/img/icon/light/prev-light.svg";

import { ReactComponent as Play } from "../../../assets/img/icon/play.svg";
import { ReactComponent as PlayLight } from "../../../assets/img/icon/light/play-light.svg";

import { ReactComponent as Pause } from "../../../assets/img/icon/pause.svg";
import { ReactComponent as PauseLight } from "../../../assets/img/icon/light/pause-light.svg";

import { ReactComponent as Next } from "../../../assets/img/icon/next.svg";
import { ReactComponent as NextLight } from "../../../assets/img/icon/light/next-light.svg";

import { ReactComponent as Repeat } from "../../../assets/img/icon/repeat.svg";
import { ReactComponent as RepeatLight } from "../../../assets/img/icon/light/repeat-light.svg";

import { ReactComponent as Shuffle } from "../../../assets/img/icon/shuffle.svg";
import { ReactComponent as ShuffleLight } from "../../../assets/img/icon/light/shuffle-light.svg";

const { useState, useEffect, useRef } = React;

function PlayerBlock() {
  const dispatch = useDispatch();
  let getIdTrack = useSelector((store) => store.track.trackData.idTrack);

  let getMusicData = useSelector((store) => store.track.trackData.MusicData);

  getMusicData = getMusicData.map((track) => ({
    id: track.id,
    title: track.name,
    author: track.author,
    url: track.track_file,
  }));

  let positionTrack = getMusicData.map((elem) => +elem.id).indexOf(+getIdTrack);
  let idTrack = getMusicData[positionTrack].id;

  const { theme } = useThemeContext();
  const [isLoading, setIsLoading] = useState(true);

  const [isPlay, setPlay] = useState(true);
  const [isLoop, setLoop] = useState(false);
  const [isShuffle, setShuffle] = useState(false);

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

  function loopBtn() {
    if (isLoop) {
      audio.current.loop = false;
      setLoop(false);
    } else {
      audio.current.loop = true;
      setLoop(true);
    }
  }

  useEffect(() => {
    audio.current.volume = 0.1;
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 500);

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
        let procent = (currentTime / audioTime) * 100;
        progressLine.current.style.width = `${procent}%`;

        if (procent === 100) {
          if (isLoop) {
            setPlay(true);
          } else {
            nextMusic();
          }
        }
      }, 10);
    }
    return () => {
      clearInterval(window.play);
    };
  });

  function nextMusic() {
    ++positionTrack;

    if (positionTrack >= getMusicData.length - 1) {
      positionTrack = 0;
    }
    console.log(positionTrack);
    idTrack = getMusicData[positionTrack].id;
    dispatch(setIdTrack(idTrack));
  }

  function prevMusic() {
    procent === 0;

    if (positionTrack === 0) {
      positionTrack = 29;
    }
    --positionTrack;
    let idTrack = getMusicData[positionTrack].id;
    dispatch(setIdTrack(idTrack));
  }

  function shuffleMusic() {
    getMusicData = getMusicData.sort(() => Math.random() - 0.5);
    dispatch(setMusicData(getMusicData));
    nextMusic();
  }

  return (
    <>
      <div
        className={`${styles["bar__player-progress"]} ${
          theme === "light" ? color.light__progress : color.dark__progress
        } `}
      >
        <div
          ref={progressLine}
          className={styles["bar__player-progress_procent"]}
        ></div>
      </div>

      <div className={styles["bar__player-block"]}>
        <div className={` ${styles["bar__player"]} ${styles.player} `}>
          <div className={styles.player__controls}>
            <div onClick={prevMusic} className={styleBtn["player__btn-prev"]}>
              {theme === "light" ? (
                <PrevLight className={styleBtn["player__controls-btn_light"]} />
              ) : (
                <Prev className={styleBtn["player__controls-btn"]} />
              )}
            </div>

            <div
              onClick={playBtn}
              className={` ${styleBtn["player__btn-play"]} ${styleBtn["_btn"]} `}
            >
              {theme === "light" ? (
                isPlay ? (
                  <PauseLight
                    className={styleBtn["player__controls-btn_light"]}
                  />
                ) : (
                  <PlayLight
                    className={styleBtn["player__controls-btn_light"]}
                  />
                )
              ) : isPlay ? (
                <Pause className={styleBtn["player__controls-btn"]} />
              ) : (
                <Play className={styleBtn["player__controls-btn"]} />
              )}
            </div>

            <div className={styleBtn["player__btn-next"]} onClick={nextMusic}>
              {theme === "light" ? (
                <NextLight className={styleBtn["player__controls-btn_light"]} />
              ) : (
                <Next className={styleBtn["player__controls-btn"]} />
              )}
            </div>

            <div
              onClick={loopBtn}
              className={` ${styleBtn["player__btn-repeat"]} ${styleBtn["_btn-icon"]} `}
            >
              {theme === "light" ? (
                <RepeatLight
                  className={`${styleBtn["player__btn-repeat-svg_light"]} ${
                    isLoop
                      ? styleBtn["player__btn-repeat-svg_light_active"]
                      : ""
                  }`}
                />
              ) : (
                <Repeat
                  className={`${styleBtn["player__btn-repeat-svg"]} ${
                    isLoop ? styleBtn["player__btn-repeat-svg_active"] : ""
                  }`}
                />
              )}
            </div>

            <div
              onClick={shuffleMusic}
              className={` ${styleBtn["player__btn-shuffle"]} ${styleBtn["_btn-icon"]} `}
            >
              {theme === "light" ? (
                <ShuffleLight
                  className={`${styleBtn["player__btn-shuffle-svg_light"]}`}
                />
              ) : (
                <Shuffle className={`${styleBtn["player__btn-shuffle-svg"]}`} />
              )}
            </div>
          </div>

          <div
            className={` ${styles["player__track-play"]} ${styles["track-play"]} `}
          >
            <div className={styles["track-play__contain"]}>
              {isLoading ? (
                <SkelRenderBar />
              ) : (
                <>
                  <TrackRender
                    title={getMusicData[positionTrack].title}
                    author={getMusicData[positionTrack].author}
                  />
                </>
              )}
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
        <audio
          autoPlay={isPlay}
          ref={audio}
          src={getMusicData[positionTrack].url}
        ></audio>
      </figure>
    </>
  );
}

export default PlayerBlock;
