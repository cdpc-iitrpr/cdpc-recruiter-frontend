import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

const initialState = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { email: "", name: "", phoneNumber: "", companyName: "" };

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(initialState);
    const [loggedIn, setLoggedIn] = useState(user.email === "" ? false : true);
    const [otp, setOtp] = useState(null);

    const sendOTP = async () => {};

    const login = async (email, otpString) => {};

    const signup = async (email, name, companyName, phoneNumber) => {};

    const logout = () => {};

    const values = {
        user,
        setUser,
        otp,
        setOtp,
        loggedIn,
        setLoggedIn,
        sendOTP,
        login,
        logout,
        signup,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};
