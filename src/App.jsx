import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Email from "./pages/Email";
import Signup from "./pages/Signup";
import InfForm from "./components/Form/InfForm";
import JafForm from "./components/Form/JafForm";

function App() {
    return (
        <>
            <AuthContextProvider>
                <Router>
                    <Routes>

                        {/* Header */}
                        <Route path="/" element={<Header />} />

                        {/* Login and sigup routes */}
                        <Route path="/login" element={<Email />} />
                        <Route path="/signup" element={<Signup />} />


                        {/* Form routes */}
                        
                        <Route path="/inf" element={<InfForm />} />
                        <Route path="/jaf" exact element={<JafForm />} />
                    </Routes>
                </Router>
            </AuthContextProvider>
        </>
    );
}

export default App;
