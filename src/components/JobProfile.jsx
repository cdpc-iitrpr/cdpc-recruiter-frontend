import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import JobSalaryDetails from "./JobSalaryDetails";

export default function JobProfile() {
    return (
        <div className="page-container">
            <h1>Job Information</h1>
            <Form>
                <div className="section-container">
                <h4>Basic Details</h4>
                <div className="note-container">
                    <div className="field-group">
                        <Form.Group>
                            <Form.Label className="field-heading">Job Designation</Form.Label>
                            <Form.Control type="text" placeholder="Enter Designation" />
                        </Form.Group>
                    </div>
                        <div className="field-group">
                            <Form.Group>
                                <Form.Label className="field-heading">Job Description</Form.Label>
                                <p>Upload PDF</p>
                                <Form.Control type="file" />
                                <br />
                                <p>or Enter Below</p>
                                <Form.Control as="textarea" placeholder="Enter Description" />
                            </Form.Group>
                        </div>
                        <div className="field-group">
                            <Form.Group>
                                <Form.Label className="field-heading">Place of Posting</Form.Label>
                                <Form.Control type="text" placeholder="Enter Location" />
                            </Form.Group>
                        </div>
                </div>
                </div>
                <Form.Group>
                    <div className="section-container">
                        <h4>Salary Details</h4>
                        <div className="note-container">
                            <h6>Please Note:</h6>
                            <p>1. The performance-based bonus should not be declared as part of Gross/CTC but to be indicated in the Bonus/Perks/Incentive section.
                            <br />
                            2. Please provide CTC/Gross/Bonus/Perks/Incentives details for the 1st Year only.
                            </p>
                        </div>
                        <Row>
                            <Col xs={12} md={6}>
                                <JobSalaryDetails degree="BTech" />
                                <JobSalaryDetails degree="MTech" />
                            </Col>
                            <Col xs={12} md={6}>
                                <JobSalaryDetails degree="M.Sc" />
                                <JobSalaryDetails degree="Ph.D" />
                            </Col>
                        </Row>
                        <p>
                            Or, upload these details as an attachment. Please provide a detailed breakup of salary/perks.
                        </p>
                        <Form.Control type="file" />
                    </div>
                </Form.Group>
                <div className="next-button">
                    <Button variant="primary" type="submit"> Next Page </Button>
                </div>
            </Form>
        </div>
    )
}