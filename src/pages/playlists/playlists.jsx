import Daily from "./daily";
import Hits from "./hits";
import Indie from "./indie";
import Favorite from "./favorite";

import { useParams } from "react-router-dom";

const urlContent = [
  { idName: "daily", component: <Daily /> },
  { idName: "hits", component: <Hits /> },
  { idName: "indie", component: <Indie /> },
  { idName: "favorite", component: <Favorite /> },
];

function Playlists() {
  const { id } = useParams();

  const result = urlContent.find((item) => item.idName === id);

  return <div>{result.component}</div>;
}
export default Playlists;
