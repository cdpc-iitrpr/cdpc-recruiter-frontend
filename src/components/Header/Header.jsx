import React from "react";
import { Button } from "react-bootstrap";
import "./Header.css";
import cdpcLogo from "../../assets/cdcrc_logo.png";

export default function Header() {
    return (
        <div className="shadow">
            <div className="cdpc-primary d-flex justify-content-between p-4">
                <div className="d-flex">
                    <div className="me-3">
                        <img width={"80px"} src={cdpcLogo} />
                    </div>
                    <div className="container">
                        <h1>CDPC Recruitment Portal</h1>
                        <h4>Indian Institute of Technology Ropar</h4>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <Button className="rounded-pill" style={{background: "#05709a"}}>Log Out</Button>
                </div>
            </div>
            <div className="cdpc-secondary px-4 d-flex mb-4"></div>
        </div>
    );
}
