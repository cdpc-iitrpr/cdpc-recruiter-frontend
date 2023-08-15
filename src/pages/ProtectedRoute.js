import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ element, role }) => {
    const { loggedIn, user } = useAuth();
    const userRole = user?.user?.role?.toLowerCase() || "";

    if (loggedIn && userRole === role) {
        return element;
    } 
    return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
