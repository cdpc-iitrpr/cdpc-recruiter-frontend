import React from "react";
import { Button } from "react-bootstrap";
import "./Header.css";
import cdpcLogo from "../../assets/cdcrc_logo.png";
import Logout from "../../assets/logout.png";

export default function Header() {
    return (
        <div>
            <div className="cdpc-primary">
                <div className="container d-flex justify-content-between py-4">
                    <div className="d-flex">
                        <div className="d-lg-block d-none me-3">
                            <img width={"80px"} src={cdpcLogo} />
                        </div>
                        <div className="d-lg-none d-block me-1">
                            <img width={"50px"} src={cdpcLogo} />
                        </div>
                        <div className="container">
                            <p className="d-lg-block d-none h1">
                                CDPC Recruitment Portal
                            </p>
                            <p className="d-lg-none d-block h4">
                                CDPC Recruitment Portal
                            </p>
                            <p className="d-lg-block d-none h4">
                                Indian Institute of Technology Ropar
                            </p>
                            <p className="d-lg-none d-block h6">
                                Indian Institute of Technology Ropar
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <Button
                            className="rounded-pill d-flex align-items-center"
                            style={{ background: "#05709a" }}
                        >
                            <span className="d-lg-block d-none">Log Out</span>
                            <img
                                src={Logout}
                                alt=""
                                width={20}
                                style={{ filter: "invert(1)" }}
                                className="ms-lg-2"
                            />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="cdpc-secondary px-4 d-flex mb-4"></div>
        </div>
    );
}
