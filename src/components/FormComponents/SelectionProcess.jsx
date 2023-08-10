import React, { useState } from "react";
import { Col, Form, InputGroup, Row, Container, Button } from "react-bootstrap";

// Import statements...

const SelectionProcess = () => {
    const [testTypes, setTestTypes] = useState([
        "Technical Test",
        "Aptitude Test",
        "Psychometric Test",
    ]);
    return (
        <div>
            <Container>
                {/* Existing form fields... */}

                <h1 className="mb-3">Selection Process</h1>
                {/* <Form.Group className="mb-3" controlId="selectionProcess">
            <Form.Label>Selection Process</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter selection process details"
            />
          </Form.Group> */}
                <div className="note-container">
                    <Form.Group
                        className="mb-3"
                        controlId="eligibilityCriteria"
                    >
                        <Form.Label>
                            Eligibility Criteria (min. CGPA cutoff, 0-10 scale)
                        </Form.Label>
                        <Form.Control
                            type="number"
                            step="0.01"
                            placeholder="Enter CGPA cutoff"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ppt">
                        <Form.Label>PPT</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Yes"
                            name="pptRadio"
                            id="pptYes"
                        />
                        <Form.Check
                            type="radio"
                            label="No"
                            name="pptRadio"
                            id="pptNo"
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="shortlistFromResumes"
                    >
                        <Form.Label>Shortlist from Resumes</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Yes"
                            name="shortlistFromResumesRadio"
                            id="shortlistFromResumesYes"
                        />
                        <Form.Check
                            type="radio"
                            label="No"
                            name="shortlistFromResumesRadio"
                            id="shortlistFromResumesNo"
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="writtenTestOnlineTest"
                    >
                        <Form.Label>Written Test/ Online Test</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Yes"
                            name="writtenTestOnlineTestRadio"
                            id="writtenTestOnlineTestYes"
                        />
                        <Form.Check
                            type="radio"
                            label="No"
                            name="writtenTestOnlineTestRadio"
                            id="writtenTestOnlineTestNo"
                        />
                    </Form.Group>
                </div>
                <div className="note-container">
                    <h4 className="mb-3"> Type of Tests </h4>
                    <Row className="mb-3">
                        {testTypes.map((type, index) => (
                            <Col md={4} xs={6} key={index}>
                                <Form.Check
                                    type={"checkbox"}
                                    id={`check-industry-${index}`}
                                >
                                    <Form.Check.Input
                                        type={"checkbox"}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setIndustryTypesSelected(
                                                    (prev) => [...prev, type]
                                                );
                                            } else {
                                                setIndustryTypesSelected(
                                                    (prev) =>
                                                        prev.filter(
                                                            (item) =>
                                                                item !== type
                                                        )
                                                );
                                            }
                                        }}
                                    />
                                    <Form.Check.Label>{type}</Form.Check.Label>
                                </Form.Check>
                            </Col>
                        ))}
                    </Row>

                    <Form.Group className="mb-3" controlId="groupDiscussion">
                        <Form.Label>Group Discussion</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Yes"
                            name="groupDiscussionRadio"
                            id="groupDiscussionYes"
                        />
                        <Form.Check
                            type="radio"
                            label="No"
                            name="groupDiscussionRadio"
                            id="groupDiscussionNo"
                        />

                        <Form.Label>
                            Personal Interview/ Number of Rounds
                        </Form.Label>
                        <Form.Check
                            type="radio"
                            label="Yes"
                            name="groupDiscussionRadio"
                            id="groupDiscussionYes"
                        />
                        <Form.Check
                            type="radio"
                            label="No"
                            name="groupDiscussionRadio"
                            id="groupDiscussionNo"
                        />
                    </Form.Group>

                    {/* Number of offers you intend to make */}

                    <Form.Group className="mb-3" controlId="numberOfOffers">
                        <Form.Label>
                            Number of offers you intend to make
                        </Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter number of offers"
                        />
                    </Form.Group>

                    {/* Preferred period for recruitment  */}

                    <Form.Group className="mb-3" controlId="preferredPeriod">
                        <Form.Label>
                            Preferred period for recruitment
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter preferred period"
                        />
                    </Form.Group>
                </div>
            </Container>
        </div>
    );
};

export default SelectionProcess;
