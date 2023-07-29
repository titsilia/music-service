import React from "react";

import styles from "./playlist-item.module.css";

import {
  useGetAllFavoriteQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} from "../../../redux/fetch";

import ButtonDislikeMain from "../../components/buttons/button-dislike-main";
import ButtonLikeMain from "../../components/buttons/button-like-main";

import TrackTitle from "../../components/track/track-title";
import TrackImage from "../../components/track/track-image";
import Author from "../../components/track/author";
import Album from "../../components/track/album";
import TrackTime from "../../components/track/track-time";

function PlaylistItem(props) {
  const { title, author, album, time, href, id } = props;

  const token = localStorage.getItem("token");

  let { data } = useGetAllFavoriteQuery(token);
  if (data) {
    data = data.map((track) => track.id);
  }

  const [addSong] = useAddFavoriteMutation();
  const getIdTrack = (event) => {
    const id = event.target.parentElement.parentElement.parentElement.id;
    console.log(id);
    addSong({ id, token });
    if (data) {
      data = data.map((track) => track.id);
    }
  };
  const [deleteSong] = useDeleteFavoriteMutation();
  const getIdTrackDelete = (event) => {
    const id = event.target.parentElement.parentElement.parentElement.id;
    console.log(id);
    deleteSong({ id, token });
    if (data) {
      data = data.map((track) => track.id);
    }
  };

  return (
    <div className={styles.playlist__item}>
      <div className={`${styles.playlist__track} ${styles.track}`} id={id}>
        <div className={styles.track__title}>
          <TrackImage />
          <TrackTitle title={title} href={href} />
        </div>

        <Author author={author} />
        <Album album={album} />
        {data ? (
          data.includes(+id) ? (
            <div onClick={getIdTrackDelete}>
              <ButtonDislikeMain key={(Math.random() * 1000) >> 0} />
            </div>
          ) : (
            <div onClick={getIdTrack}>
              <ButtonLikeMain key={(Math.random() * 1000) >> 0} />
            </div>
          )
        ) : (
          <></>
        )}
        <TrackTime time={time} />
      </div>
    </div>
  );
}
// .includes(+{ id })
export default PlaylistItem;
