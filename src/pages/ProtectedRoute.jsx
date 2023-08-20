import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ element, role }) => {
    const { isLoggedIn, user } = useAuth();
    const userRole = user?.user?.role?.toLowerCase() || "";
    const navigate = useNavigate();

    if (isLoggedIn && userRole === role) {
        return element;
    } else if (isLoggedIn && userRole !== role) {
        return (
            <div className="container text-center mt-5">
                <h1>403 Forbidden</h1>
                <p>You are not authorized to access this page.</p>
                {/* link */}
                <button className="btn btn-link" onClick={() => navigate("/")}>
                    Go to Home
                </button>
            </div>
        );
    } else {
        return (
            <div className="container text-center mt-5">
                <h1>401 Unauthorized</h1>
                <p>You need to login to access this page.</p>
                {/* link */}
                <button className="btn btn-link" onClick={() => navigate("/")}>
                    Go to Home
                </button>
            </div>
        );
    }
};

export default ProtectedRoute;
