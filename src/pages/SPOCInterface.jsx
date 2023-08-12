import React from "react";
import { Row, Col } from "react-bootstrap";
import JafForm from "../components/Form/JafForm";

function Company(name, email, setCompanyDetails) {

    function handleClick(e) {
        setCompanyDetails({
            name: e.target.getElementsByTagName("h5")[0].innerHTML,
            email: e.target.getElementsByTagName("p")[0].innerHTML
        });
    }

    return (
        <div
            className="company-container"
            onClick={handleClick}
        >
            <div>
                <span className="material-symbols-outlined">corporate_fare</span>
                <h5> {name} </h5>
            </div>
            <div>
                <span className="material-symbols-outlined">email</span>
                <p> {email} </p>
            </div>
        </div>
    )
}

const data = [
    {
        name: "Company 1", 
        email: "c1@gmail.com"
    },
    {
        name: "Company 2", 
        email: "c2@gmail.com"
    },
    {
        name: "Company 3", 
        email: "c3@gmail.com"
    },
    {
        name: "Company 4",
        email: "c4@gmail.com"
    },
    {
        name: "Company 5",
        email: "c5@gmail.com"
    }
]


export default function SPOCInterface() {
    
    const [companyDetails, setCompanyDetails] = React.useState({
        name: "",
        email: ""
    });
    
    const companyEls = data.map((company) => Company(company.name, company.email, setCompanyDetails));

    return (
        <div className="page-container">
            <h1> Welcome! </h1>
            <Row>
                <Col xs={12} md={4}>
                    <div className="list-container">
                        <div>
                            {companyEls}
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={8}>
                    <JafForm />
                </Col>
            </Row>
        </div>
    )
}