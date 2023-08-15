import React from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import JobSalaryDetails from "./JobSalaryDetails";

export default function JafJobDetails(props) {
    const { formData, setFormData, handleSubmit, handleBack } = props;

    // const [descriptionFile, setDescriptionFile] = React.useState(
    //     jafJobDetails.descriptionFile
    // );
    // const [salaryFile, setSalaryFile] = React.useState(
    //     jafJobDetails.salaryFile
    // );

    function handleBasicDetailChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                job_profile: {
                    ...prev.job_profile,
                    [name]: value,
                },
            };
        });
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
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
                                    value={formData.job_profile.designation}
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
                                        setFormData((prev) => ({
                                            ...prev,
                                            job_profile: {
                                                ...prev.job_profile,
                                                job_description_pdf:
                                                    e.target.files[0],
                                            },
                                        }));
                                    }}
                                />
                                <br />
                                <p>or Enter Below</p>
                                <Form.Control
                                    name="job_description"
                                    as="textarea"
                                    placeholder="Enter Description"
                                    value={formData.job_profile.job_description}
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
                                    name="place_of_posting"
                                    type="text"
                                    placeholder="Enter Location"
                                    value={
                                        formData.job_profile.place_of_posting
                                    }
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
                                declared as part of Gross/CTC but to be
                                indicated in the Bonus/Perks/Incentive section.
                                <br />
                                2. Please provide
                                CTC/Gross/Bonus/Perks/Incentives details for the
                                1st Year only.
                            </p>
                        </div>
                        <Row>
                            <Col xs={12} md={6}>
                                <JobSalaryDetails
                                    degree="BTech"
                                    fieldName="b_tech"
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                                <JobSalaryDetails
                                    degree="MTech"
                                    fieldName="m_tech"
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                            </Col>
                            <Col xs={12} md={6}>
                                <JobSalaryDetails
                                    degree="MSc"
                                    fieldName="m_sc"
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                                <JobSalaryDetails
                                    degree="PhD"
                                    fieldName="phd"
                                    formData={formData}
                                    setFormData={setFormData}
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
                                setFormData((prev) => ({
                                    ...prev,
                                    salary_details_pdf: e.target.files[0],
                                }));
                            }}
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-around my-3">
                        <Button variant="primary" onClick={handleBack}>
                            Back
                        </Button>
                        <Button variant="primary" type="submit">
                            Next
                        </Button>
                    </div>
                </Container>
            </Form>
        </div>
    );
}
