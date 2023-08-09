import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import JAF from "./pages/JAF";
import Email from "./pages/Email";
import JobProfile from "./components/JobProfile";
import Signup from "./pages/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import OrganisationDetails from "./components/OrganisationDetails";
import InfJobDetails from "./components/InfJobDetails";

function App() {
    return (
        <>
            <AuthContextProvider>
                <div className="App">
                    <Header />
                    {/* <Landing /> */}
                    {/* <Email /> */}
                    <JobProfile />
                    {/* <Signup /> */}
                    {/* <InfForm /> */}
                    <InfJobDetails />
                </div>
            </AuthContextProvider>
        </>
    );
}

export default App;
