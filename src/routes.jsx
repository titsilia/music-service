import { Routes, Route } from "react-router-dom";

import Main from "./pages/tracks(main)/main";
import Daily from "./pages/playlists/daily";
import Hits from "./pages/playlists/hits";
import Indie from "./pages/playlists/indie";
import Login from "./pages/login/login";
import Reg from "./pages/login/reg";
import NotFound from "./pages/NotFound/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Reg />} />
      <Route path="/tracks" element={<Main />} />
      <Route path="/daily" element={<Daily />} />
      <Route path="/hits" element={<Hits />} />
      <Route path="/indie" element={<Indie />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
