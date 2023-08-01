import React from "react";

import TrackImagePlay from "../../components/track-play/track-image-play";
import TitlePlay from "../../components/track-play/title-play";
import AuthorPlay from "../../components/track-play/author-play";

function TrackRender(props) {
  const { title, author } = props;
  return (
    <>
      <TrackImagePlay />
      <div>
        <TitlePlay title={title} />
        <AuthorPlay author={author} />
      </div>
    </>
  );
}

export default TrackRender;
