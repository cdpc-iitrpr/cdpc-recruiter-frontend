import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import { AuthContextProvider } from "./context/AuthContext";
import InfForm from "./components/Form/InfForm";
import JafForm from "./components/Form/JafForm";

function App() {
    return (
        <>
            <AuthContextProvider>
                <div className="App">
                    <Header />
                    <JafForm/>
                </div>
            </AuthContextProvider>
        </>
    );
}

export default App;
