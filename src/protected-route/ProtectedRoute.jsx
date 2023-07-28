import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPart = "/" }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={redirectPart} replace={true} />;
  }

  return <Outlet />;
};
