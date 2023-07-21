import React from "react";

import TrackImagePlay from "../../components/track-play/track-image-play";
import AuthorPlay from "../../components/track-play/author-play";
import AlbumPlay from "../../components/track-play/album-play";

import note from "../../../assets/img/icon/note.svg";

function TrackRender(props) {
    const { author, album } = props;
    return (
      <>
        <TrackImagePlay img={note}/>
        <AuthorPlay author={author} />
        <AlbumPlay album={album} />
      </>
    );
  }

export default TrackRender;