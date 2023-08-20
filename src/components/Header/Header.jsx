import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Header.css";
import cdpcLogo from "../../assets/cdcrc_logo.png";
import Logout from "../../assets/logout.png";
import Menu from "../../assets/menu.png";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

function LinkContainer({ links }) {
    const [showList, setShowList] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <div className="d-xl-block d-none ">
                <div className="d-flex justify-content-between text-center">
                    {links.map((key, index) => {
                        return (
                            <a key={index}
                                href={key.link}
                                className="link-light link-underline-opacity-0 py-2 px-1 my-1 m-0 header-link"
                            >
                                {key.title}
                            </a>
                        );
                    })}
                </div>
            </div>
            <div className="d-xl-none pb-1">
                <Button
                    style={{ background: "#05709a", border: "#05709a" }}
                    onClick={() => setShowList((prev) => !prev)}
                    className="px-2 py-1"
                >
                    <img
                        src={Menu}
                        alt=""
                        width={20}
                        style={{ filter: "invert(1)" }}
                        className="m-0"
                    />
                </Button>
                {showList && (
                    <div>
                        {links.map((key, index) => {
                            return (
                                <a key={index}
                                    href={key.link}
                                    className="link-light d-block link-underline-opacity-0 mx-2 py-2 m-0 header-link"
                                >
                                    {key.title}
                                </a>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
}

export default function Header() {
    const { isLoggedIn, logout } = useAuth();
    const [links, setLinks] = useState([
        {
            title: "Why Recruit",
            link: "https://iitrpr.ac.in/cdpc/recruiter/why/",
        },
        {
            title: "Recruiter Guide",
            link: "https://iitrpr.ac.in/cdpc/recruiter/recruiter_guide/",
        },
        {
            title: "Placement Statistics",
            link: "https://iitrpr.ac.in/cdpc/info/placement-statistics/",
        },
        {
            title: "6 Month Internship",
            link: "https://iitrpr.ac.in/cdpc/recruiter/six_month_internship/",
        },
        {
            title: "Joint Master Thesis",
            link: "https://iitrpr.ac.in/cdpc/recruiter/joint_master_thesis/",
        },
        {
            title: "Student Demographics",
            link: "https://iitrpr.ac.in/cdpc/recruiter/demographics/",
        },
        {
            title: "Past Recruiters",
            link: "https://iitrpr.ac.in/cdpc/info/tnp/past_recruiters/",
        },
        {
            title: "Contact Us",
            link: "https://iitrpr.ac.in/cdpc/info/contacts/",
        },
    ]);
    return (
        <div>
            <div className="cdpc-primary">
                <div className="container d-flex justify-content-between py-4">
                    <div className="d-flex">
                        <div className="d-lg-block d-none me-3">
                            <a href="https://iitrpr.ac.in/cdpc/info/home/">
                                <img width={"80px"} src={cdpcLogo} />
                            </a>
                        </div>
                        <div className="d-lg-none d-block me-1">
                            <a href="https://iitrpr.ac.in/cdpc/info/home/">
                                <img width={"50px"} src={cdpcLogo} />
                            </a>
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
                        {isLoggedIn && (
                            <Button
                                className="rounded-pill d-flex align-items-center"
                                style={{ background: "#05709a" }}
                                onClick={() => {logout(); navigate("/");}}
                            >
                                <span className="d-lg-block d-none">
                                    Log Out
                                </span>
                                <img
                                    src={Logout}
                                    alt=""
                                    width={20}
                                    style={{ filter: "invert(1)" }}
                                    className="ms-lg-2"
                                />
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            <div className="cdpc-secondary  mb-4">
                <div className="container">
                    <LinkContainer links={links} />
                </div>
            </div>
        </div>
    );
}
