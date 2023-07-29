import { Routes, Route } from "react-router-dom";

import Main from "./pages/tracks(main)/main";
import Playlists from "./pages/playlists/playlists";
import Favorite from "./pages/playlists/favorite";
import Login from "./pages/login/login";
import Reg from "./pages/login/reg";
import NotFound from "./pages/NotFound/NotFound";

import { ProtectedRoute } from "./protected-route/ProtectedRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Reg />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/tracks" element={<Main />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/category/:id" element={<Playlists />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
