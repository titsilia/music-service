import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPart = '/' }) => {
    const login = localStorage.getItem('login');

    if (!login) {
        return <Navigate to={redirectPart} replace={true} />
    }
}