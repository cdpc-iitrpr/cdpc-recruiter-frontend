import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

const initialState = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { email: "", name: "", phoneNumber: "", companyName: "" , access: "", refresh: ""};

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(initialState);
    const [isLoggedIn, setIsLoggedIn] = useState(initialState.access !== "");
    const [otp, setOtp] = useState(null);

    const sendOTP = async () => {};

    const login = async (data) => {
        setUser(data);
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(data));
    };

    const signup = async (email, name, companyName, phoneNumber) => {};

    const logout = () => {
        setUser({ email: "", name: "", phoneNumber: "", companyName: "" });
        setIsLoggedIn(false);
        localStorage.removeItem("user");
    };

    const values = {
        user,
        setUser,
        otp,
        setOtp,
        isLoggedIn,
        setIsLoggedIn,
        sendOTP,
        login,
        logout,
        signup,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};
