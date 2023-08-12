import React from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import JobSalaryDetails from "./JobSalaryDetails";

export default function JafJobDetails(props) {
    const { jafJobDetails, setJafJobDetails } = props;
    const [basicDetails, setBasicDetails] = React.useState(jafJobDetails.basicDetails);

    const [descriptionFile, setDescriptionFile] = React.useState(jafJobDetails.descriptionFile);
    const [salaryFile, setSalaryFile] = React.useState(jafJobDetails.salaryFile);
    const [salaryDetails, setSalaryDetails] = React.useState(jafJobDetails.salaryDetails);

    function handleBasicDetailChange(e) {
        const { name, value } = e.target;
        setBasicDetails((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    React.useEffect(() => {
        setJafJobDetails((prev) => {
            return {
                ...prev,
                basicDetails: basicDetails,
            };
        });

        setJafJobDetails((prev) => {
            return {
                ...prev,
                descriptionFile: descriptionFile,
            };
        });

        setJafJobDetails((prev) => {
            return {
                ...prev,
                salaryFile: salaryFile,
            };
        });

        setJafJobDetails((prev) => {
            return {
                ...prev,
                salaryDetails: salaryDetails,
            };
        });

    }, [basicDetails, descriptionFile, salaryFile, salaryDetails]);

    return (
        <div>
            <Container>
                <h1>Job Information</h1>
                <div className="note-container">
                    <h4>Basic Details</h4>
                    <div className="field-group">
                        <Form.Group>
                            <Form.Label className="field-heading">
                                Job Designation
                            </Form.Label>
                            <Form.Control
                                name="designation"
                                type="text"
                                placeholder="Enter Designation"
                                value={basicDetails.designation}
                                onChange={handleBasicDetailChange}
                            />
                        </Form.Group>
                    </div>
                    <div className="field-group">
                        <Form.Group>
                            <Form.Label className="field-heading">
                                Job Description
                            </Form.Label>
                            <p>Upload PDF</p>
                            <Form.Control
                                type="file"
                                onChange={(e) => {
                                    setDescriptionFile(e.target.files[0]);
                                }}
                            />
                            <br />
                            <p>or Enter Below</p>
                            <Form.Control
                                name="description"
                                as="textarea"
                                placeholder="Enter Description"
                                value={basicDetails.description}
                                onChange={handleBasicDetailChange}
                            />
                        </Form.Group>
                    </div>
                    <div className="field-group">
                        <Form.Group>
                            <Form.Label className="field-heading">
                                Place of Posting
                            </Form.Label>
                            <Form.Control
                                name="location"
                                type="text"
                                placeholder="Enter Location"
                                value={basicDetails.location}
                                onChange={handleBasicDetailChange}
                            />
                        </Form.Group>
                    </div>
                </div>
                <Form.Group>
                    <div className="note-container">
                        <h4>Salary Details</h4>
                        <h6>Please Note:</h6>
                        <p>
                            1. The performance-based bonus should not be
                            declared as part of Gross/CTC but to be indicated in
                            the Bonus/Perks/Incentive section.
                            <br />
                            2. Please provide CTC/Gross/Bonus/Perks/Incentives
                            details for the 1st Year only.
                        </p>
                    </div>
                    <Row>
                        <Col xs={12} md={6}>
                            <JobSalaryDetails
                                degree="BTech"
                                salaryDetails={salaryDetails.BTech}
                                setSalaryDetails={setSalaryDetails}
                            />
                            <JobSalaryDetails
                                degree="MTech"
                                salaryDetails={salaryDetails.MTech}
                                setSalaryDetails={setSalaryDetails}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <JobSalaryDetails
                                degree="MSc"
                                salaryDetails={salaryDetails.MSc}
                                setSalaryDetails={setSalaryDetails}
                            />
                            <JobSalaryDetails
                                degree="PhD"
                                salaryDetails={salaryDetails.PhD}
                                setSalaryDetails={setSalaryDetails}
                            />
                        </Col>
                    </Row>
                    <p>
                        Or, upload these details as an attachment. Please
                        provide a detailed breakup of salary/perks.
                    </p>
                    <Form.Control
                        type="file"
                        onChange={(e) => {
                            setSalaryFile(e.target.files[0]);
                        }}
                    />
                </Form.Group>
            </Container>
        </div>
    );
}
