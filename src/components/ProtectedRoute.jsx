import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const ProtectedRoute = ({ children }) => {
	const isLoggedIn = useAppSelector((state) => state.user.loggedIn);
	const location = useLocation(); // Get the current location

	if (!isLoggedIn && location.pathname !== "/login") {
		return <Navigate to="/login" replace />;
	}
	if (isLoggedIn && location.pathname === "/login") {
		return <Navigate to="/" replace />;
	}
	return children;
};

export default ProtectedRoute;
