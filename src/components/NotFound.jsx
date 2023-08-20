import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="container text-center mt-5">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <button className="btn btn-link" onClick={() => navigate("/")}> Go to Home</button>
        </div>
    );
};

export default NotFound;
