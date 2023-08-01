import React from "react";

import SkelImage from "../../components/skeleton/skel-image";
import SkelTrack from "../../components/skeleton/skel-track";

function SkelRenderBar() {
  return (
    <>
      <SkelImage />
      <div>
        <SkelTrack />
        <SkelTrack />
      </div>
    </>
  );
}

export default SkelRenderBar;
