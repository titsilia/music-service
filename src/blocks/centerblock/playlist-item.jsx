import React from 'react';

import styles from "./playlist-item.module.css";

import TrackTitle from "../components/track/track-title";
import TrackImage from "../components/track/track-image";
import Author from "../components/track/author";
import Album from "../components/track/album";
import TrackTime from "../components/track/track-time";

function PlaylistItem(props) {
    const { title, author, album, time } = props;
    return (
      <div className={styles.playlist__item}>
        <div className={`${styles.playlist__track} ${styles.track}`}>
          <div className={styles.track__title}>
            <TrackImage />
            <TrackTitle title={title} />
          </div>
  
          <Author author={author} />
          <Album album={album} />
          <TrackTime time={time} />
        </div>
      </div>
    );
  }

export default PlaylistItem