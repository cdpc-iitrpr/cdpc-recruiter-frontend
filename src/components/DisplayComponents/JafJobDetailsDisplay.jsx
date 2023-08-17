import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { KeyValue } from "./TextDisplay";

function JafJobDetailsDisplay({ formData }) {
    return (
        <div>
            <Container>
                <h1>Job Details</h1>
                <div className="note-container">
                    <h3>Job Profile</h3>

                    <KeyValue
                        keyName={"Designation"}
                        value={formData.job_profile.designation}
                    />
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
                    <h3>Salary Details</h3>
                    <Row>
                        {[
                            ["b_tech", "B.Tech"],
                            ["m_tech", "M.Tech"],
                            ["m_sc", "M.Sc"],
                            ["phd", "PHD"],
                        ].map(([key, degree]) => {
                            return (
                                    <Col md={6} key={key}>
                                        <h4>{degree}</h4>
                                        <KeyValue
                                            keyName={"CTC Gross"}
                                            value={
                                                formData.salary_details[key]
                                                    .ctc_gross
                                            }
                                        />
                                        <KeyValue
                                            keyName={"CTC Take Home"}
                                            value={
                                                formData.salary_details[key]
                                                    .ctc_take_home
                                            }
                                        />
                                        <KeyValue
                                            keyName={"Bonus Perks"}
                                            value={
                                                formData.salary_details[key]
                                                    .ctc_bonus_perks
                                            }
                                        />
                                        <KeyValue
                                            keyName={"Bond Contract"}
                                            value={
                                                formData.salary_details[key]
                                                    .bond_contract
                                            }
                                        />
                                    </Col>
                            );
                        })}
                    </Row>
                    
                    
                </div>
            </Container>
        </div>
    );
}

export default JafJobDetailsDisplay;
