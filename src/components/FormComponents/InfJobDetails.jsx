import React, { useEffect, useState } from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";

function OptionGroup({ fieldName, optionName, formState, setFormState }) {
    function handleOptionChange(e, name, setTo) {
        if (e.target.checked) {
            setFormState((prev) => ({
                ...prev,
                job_profile: {
                    ...prev.job_profile,
                    [name]: setTo,
                },
            }));
        }
    }

    return (
        <Form.Group className="mb-2">
            <Row>
                <Col xs={6}>
                    <Form.Label>{optionName}</Form.Label>
                </Col>
                <Col xs={6}>
                    <div className="d-flex justify-content-around">
                        <Form.Check
                            label="Yes"
                            type="radio"
                            checked={formState.job_profile[fieldName]}
                            id={`${fieldName}-yes`}
                            onChange={(e) => {
                                handleOptionChange(e, fieldName, true);
                            }}
                        />
                        <Form.Check
                            label="No"
                            type="radio"
                            checked={!formState.job_profile[fieldName]}
                            id={`${fieldName}-no`}
                            onChange={(e) => {
                                handleOptionChange(e, fieldName, false);
                            }}
                        />
                    </div>
                </Col>
            </Row>
        </Form.Group>
    );
}

function InfJobDetails({ formState, setFormState }) {
    // const [formState, setFormState] = useState(
    //     formData === undefined ? initialFormState : formData
    // );

    function handleJobDetail(e) {
        const name = e.target.name;
        setFormState((prev) => ({
            ...prev,
            job_profile: {
                ...prev.job_profile,
                [name]: e.target.value,
            },
        }));
    }

    function handleStipendDetail(e) {
        const name = e.target.name;
        setFormState((prev) => ({
            ...prev,
            stipend_details: {
                ...prev.stipend_details,
                [name]: e.target.value,
            },
        }));
    }

    return (
        <div>
            <div className="container">
                <h1 className="mb-3">Internship Details</h1>

                {/* Job Profile */}
                <div className="note-container">
                    <h4>Job Profile</h4>
                    <OptionGroup
                        fieldName="two_month_intern"
                        optionName="2 Month Internship"
                        formState={formState}
                        setFormState={setFormState}
                    />
                    <OptionGroup
                        fieldName="six_month_intern"
                        optionName="6 Month Internship"
                        formState={formState}
                        setFormState={setFormState}
                    />
                    <OptionGroup
                        optionName="Joint Master Thesis Program"
                        fieldName="joint_master_thesis_program"
                        formState={formState}
                        setFormState={setFormState}
                    />
                    <Form.Group className="mb-3" controlId="placeOfPosting">
                        <Form.Label column>Place of Posting</Form.Label>
                        <Form.Control
                            type="text"
                            name="place_of_posting"
                            placeholder="Enter Place of Posting"
                            onChange={handleJobDetail}
                            value={formState.job_profile.place_of_posting}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="jobDescription">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter a Job Description"
                            name="job_description"
                            value={formState.job_profile.job_description}
                            onChange={handleJobDetail}
                        />
                    </Form.Group>
                    <Form.Group controlId="jobDescriptionFile" className="mb-3">
                        <Form.Control type="file" multiple required />
                        <Form.Text className="text-muted">
                            Upload Job Description File
                        </Form.Text>
                    </Form.Group>
                </div>

                {/* Stipend Details */}
                <div className="note-container">
                    <h4>Stipend Details</h4>
                    <h6>Please Note:</h6>
                    <p>
                        1. Performance base bonus should not be declared as part
                        of Gross/CTC but to be indicated in
                        Bonus/Perks/Incentive section.
                        <br/>
                        2. Any amount to be disbursed late than the end of the 3
                        months should not be a part of Gross/CTC.
                    </p>
                    <Row className="d-flex justify-content-between">
                        <Col xl={4} xs={12}>
                            <Form.Group
                                className="mb-3"
                                controlId="stipendAmount"
                            >
                                <Form.Label>Stipend Amount</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Amount"
                                    name="stipend_amount"
                                    onChange={handleStipendDetail}
                                    value={
                                        formState.stipend_details.stipend_amount
                                    }
                                />
                            </Form.Group>
                        </Col>
                        <Col xl={4} xs={12}>
                            <Form.Group
                                className="mb-3"
                                controlId="bonusPerksIncentives"
                            >
                                <Form.Label>Bonus/Perks/Incentives </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Amount"
                                    name="bonus_perks_incentives"
                                    onChange={handleStipendDetail}
                                    value={
                                        formState.stipend_details
                                            .bonus_perks_incentives
                                    }
                                />
                            </Form.Group>
                        </Col>
                        <Col xl={4} xs={12}>
                            <Form.Group
                                className="mb-3"
                                controlId="accomodationFare"
                            >
                                <Form.Label>Accommodation/Trip Fare</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Amount"
                                    name="accomodation_trip_fare"
                                    onChange={handleStipendDetail}
                                    value={
                                        formState.stipend_details
                                            .accomodation_trip_fare
                                    }
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="compensation">
                        <Form.Label>Bond/ Service Contract (if any)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter details"
                            name="bond_service_contract"
                            onChange={handleStipendDetail}
                            value={
                                formState.stipend_details.bond_service_contract
                            }
                        />
                    </Form.Group>
                </div>
            </div>
        </div>
    );
}

export default InfJobDetails;
