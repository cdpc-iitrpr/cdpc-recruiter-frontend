import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import jwt_decode from "jwt-decode";
import { DJANGO_SERVER } from "../constants/endPoints";

const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { user, login } = useAuth();

    const refreshAccessToken = async () => {
        const response = await fetch(DJANGO_SERVER + "/api/token/refresh/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refresh: user?.refresh }),
        });

        if (!response.ok) {
            setError("Request failed");
        }

        const data = await response.json();

        return data.access;
    };

    const fetchWithTokenRefresh = async (url, options = {}) => {
        setLoading(true);

        let accessToken = user?.access;
        const expirationTime = jwt_decode(accessToken).exp * 1000;

        // Check if the token is expired or about to expire (e.g., within a 1-minute threshold)
        if (!accessToken || Date.now() + 60000 >= expirationTime) {
            try {
                const newAccessToken = await refreshAccessToken();

                login(newAccessToken);

                accessToken = newAccessToken;
            } catch (refreshError) {
                setError("Token refresh failed");
                setLoading(false);
                return; 
            }
        }

        const headers = {
            ...options.headers,
            Authorization: `Bearer ${accessToken}`,
        };

        const updatedOptions = {
            ...options,
            headers,
        };

        try {
            const response = await fetch(url, updatedOptions);

            if (!response.ok) {
                setError("Request failed");
            }

            setLoading(false);

            return response;
        } catch (fetchError) {
            setError("Request failed");
            setLoading(false);
            return; 
        }
    };

    return { fetch: fetchWithTokenRefresh, loading, error };
};

export default useFetch;
