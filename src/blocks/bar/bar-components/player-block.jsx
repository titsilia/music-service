import React from "react";

import styles from "./player-block.module.scss";

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

const { useState, useEffect } = React;

function PlayerBlock() {
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
    <div className={styles["bar__player-block"]}>
      <div className={` ${styles["bar__player"]} ${styles.player} `}>
        <div className={styles.player__controls}>
          <ButtonPrev />
          <ButtonPlay />
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
          <VolumeProgress />
        </div>
      </div>
    </div>
  );
}

export default PlayerBlock;
