import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { KeyValue } from "./TextDisplay";

function InfJobDetailsDisplay({ formData }) {
    return (
        <div>
            <Container>
                <h1>Job Details</h1>
                <div className="note-container">
                    <h3>Job Profile</h3>

                    <KeyValue
                        keyName={"Job Title"}
                        value={formData.job_profile.job_title}
                    />
                    <Row className="my-3">
                        <Col md={4}>
                            <KeyValue
                                keyName={"Two Month Internship"}
                                value={
                                    formData.job_profile.two_month_internship
                                        ? "Yes"
                                        : "No"
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <KeyValue
                                keyName={"Six Month Internship"}
                                value={
                                    formData.job_profile.six_month_internship
                                        ? "Yes"
                                        : "No"
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <KeyValue
                                keyName={"Joint Master's Thesis Program"}
                                value={
                                    formData.job_profile
                                        .joint_master_thesis_program
                                        ? "Yes"
                                        : "No"
                                }
                            />
                        </Col>
                    </Row>
                    <KeyValue
                        keyName={"Place of Posting"}
                        value={formData.job_profile.place_of_posting}
                    />
                    <KeyValue
                        keyName={"Job Description"}
                        value={formData.job_profile.job_description}
                    />
                    <KeyValue
                        keyName={"Job Description Files"}
                        valueList={formData.job_profile.job_description_pdf}
                    />
                </div>
                <div className="note-container">
                    <h3>Stipend Details</h3>

                    <KeyValue
                        keyName={"Stipend Amount"}
                        value={formData.stipend_details.stipend_amount}
                    />
                    <Row className="my-3">
                        <Col md={6}>
                            <KeyValue
                                keyName={"Bonus Perks Incentives"}
                                value={
                                    formData.stipend_details
                                        .bonus_perks_incentives
                                }
                            />
                        </Col>
                        <Col md={6}>
                            <KeyValue
                                keyName={"Accomodation and Trip Fare"}
                                value={
                                    formData.stipend_details
                                        .accomodation_trip_fare
                                }
                            />
                        </Col>
                    </Row>
                    <KeyValue
                        keyName={"Bond/ Service Contract"}
                        value={formData.stipend_details.bond_service_contract}
                    />
                </div>
            </Container>
        </div>
    );
}

export default InfJobDetailsDisplay;
