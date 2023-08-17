import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Email from "./pages/Email";
import Signup from "./pages/Signup";
import InfForm from "./components/Form/InfForm";
import JafForm from "./components/Form/JafForm";
import SPOCInterface from "./pages/SPOCInterface";
import RecruiterInterface from "./pages/RecruiterInterface";
import ProtectedRoute from "./pages/ProtectedRoute";
import InfDisplay from "./components/Display/InfDisplay";
import JafDisplay from "./components/Display/JafDisplay";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <AuthContextProvider>
                {/* Header */}
                <Header />
                <Router>
                    <Routes>
                        <Route path="/" element={<Email />} />

                        {/* Login and sigup routes */}
                        <Route path="/login" element={<Email />} />
                        <Route path="/signup" element={<Signup />} />

                        {/* User routes */}
                        <Route
                            path="/spoc"
                            element={
                                <ProtectedRoute
                                    element={<SPOCInterface />}
                                    role={"spoc"}
                                />
                            }
                        />
                        <Route
                            path="/recruiter"
                            element={
                                <ProtectedRoute
                                    element={<RecruiterInterface />}
                                    role={"recruiter"}
                                />
                            }
                        />

                        {/* Form routes */}

                        <Route path="/inf" element={<InfForm />} />
                        <Route path="/jaf" exact element={<JafForm />} />
                        <Route path="/display" exact element={<JafDisplay />} />
                    </Routes>
                </Router>
                <ToastContainer />
            </AuthContextProvider>
        </>
    );
}

export default App;
