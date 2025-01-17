import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
	const isLoggedIn = useSelector((state) => state.loggedIn);
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
