import React from "react";
import { Row, Col } from "react-bootstrap";	
import JobProfile from "../components/JobProfile";

function Company(name, email) {
    return (
        <div className="company-container">
            <div>
                <span class="material-symbols-outlined">corporate_fare</span>
                <h5> {name} </h5>
            </div>
            <div>
                <span class="material-symbols-outlined">email</span>
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

const companyEls = data.map((company) => Company(company.name, company.email));

export default function SPOCInterface() {
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
                    <JobProfile />
                </Col>
            </Row>
        </div>
    )
}