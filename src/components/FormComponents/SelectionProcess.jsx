import React, { useState } from "react";
import { Col, Form, InputGroup, Row, Container, Button } from "react-bootstrap";

const SelectionProcess = ({
    formState,
    setFormState,
    handleBack,
    handleSubmit,
}) => {
    const [testTypes, setTestTypes] = useState([
        "Technical Test",
        "Aptitude Test",
        "Psychometric Test",
    ]);

    const handleCheck = (callback) => {
        callback();
    };

    const handleSelectionProcess = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormState((prev) => ({
            ...prev,
            selection_process: {
                ...prev.selection_process,
                [name]: value,
            },
        }));
    };

    const handleTestType = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormState((prev) => ({
            ...prev,
            selection_process: {
                ...prev.selection_process,
                test_type: {
                    ...prev.selection_process.test_type,
                    [name]: prev.selection_process.test_type[name]
                        ? false
                        : true,
                },
            },
        }));
    };

    const handleInterestedDiscipline = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormState((prev) => ({
            ...prev,
            selection_process: {
                ...prev.selection_process,
                interested_discipline: {
                    ...prev.selection_process.interested_discipline,
                    [name]: value,
                },
            },
        }));
    };

    const handleInterestedDisciplineBranches = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormState((prev) => ({
            ...prev,
            selection_process: {
                ...prev.selection_process,
                interested_discipline: {
                    ...prev.selection_process.interested_discipline,
                    branches: {
                        ...prev.selection_process.interested_discipline
                            .branches,
                        [name]: value,
                    },
                },
            },
        }));
    };

    return (
        <div>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Container>
                    {/* Existing form fields... */}

                    <h1 className="mb-3">Selection Process</h1>

                    <div className="note-container">
                        <Form.Group
                            className="mb-3"
                            controlId="eligibilityCriteria"
                        >
                            <Form.Label>
                                Eligibility Criteria (min. CGPA cutoff, 0-10
                                scale)
                            </Form.Label>
                            <Form.Control
                                name="eligibility_criteria"
                                type="number"
                                step="0.01"
                                placeholder="Enter CGPA cutoff"
                                value={
                                    formState.selection_process
                                        .eligibility_criteria
                                }
                                onChange={(e) => handleSelectionProcess(e)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="ppt">
                            <Row>
                                <Col xs={6}>
                                    <Form.Label>PPT</Form.Label>
                                </Col>
                                <Col xs={6}>
                                    <div className="d-flex justify-content-around">
                                        <Form.Check
                                            type="radio"
                                            label="Yes"
                                            name="ppt"
                                            id="pptYes"
                                            checked={
                                                formState.selection_process
                                                    .test_type.ppt
                                            }
                                            onChange={(e) => handleTestType(e)}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="No"
                                            name="ppt"
                                            id="pptNo"
                                            checked={
                                                !formState.selection_process
                                                    .test_type.ppt
                                            }
                                            onChange={(e) => handleTestType(e)}
                                        />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={6}>
                                    <Form.Label>
                                        Shortlist from Resumes
                                    </Form.Label>
                                </Col>
                                <Col xs={6}>
                                    <div className="d-flex justify-content-around">
                                        <Form.Check
                                            type="radio"
                                            label="Yes"
                                            name="shortlist_from_resume"
                                            id="shortlistFromResumesYes"
                                            checked={
                                                formState.selection_process
                                                    .test_type
                                                    .shortlist_from_resume
                                            }
                                            onChange={(e) => handleTestType(e)}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="No"
                                            name="shortlist_from_resume"
                                            id="shortlistFromResumesNo"
                                            checked={
                                                !formState.selection_process
                                                    .test_type
                                                    .shortlist_from_resume
                                            }
                                            onChange={(e) => handleTestType(e)}
                                        />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={6}>
                                    <Form.Label>
                                        Written Test/ Online Test
                                    </Form.Label>
                                </Col>
                                <Col xs={6}>
                                    <div className="d-flex justify-content-around">
                                        <Form.Check
                                            type="radio"
                                            label="Yes"
                                            name="online_test"
                                            id="writtenTestOnlineTestYes"
                                            checked={
                                                formState.selection_process
                                                    .test_type.online_test
                                            }
                                            onChange={(e) => handleTestType(e)}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="No"
                                            name="online_test"
                                            id="writtenTestOnlineTestNo"
                                            checked={
                                                !formState.selection_process
                                                    .test_type.online_test
                                            }
                                            onChange={(e) => handleTestType(e)}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Form.Group>
                    </div>

                    {/* Interested Discipline */}
                    <div className="note-container">
                        <Form.Group
                            className="mb-3"
                            controlId="interestedDegree"
                        >
                            <h4 className="mb-3"> Type of Tests </h4>
                            <Col className="mb-3">
                                {testTypes.map((type, index) => (
                                    <Col md={4} xs={6} key={index}>
                                        <Form.Check
                                            type={"checkbox"}
                                            id={`check-industry-${index}`}
                                        >
                                            <Form.Check.Input
                                                name={`${type
                                                    .split(" ")[0]
                                                    .toLowerCase()}_test`}
                                                type={"checkbox"}
                                                checked={
                                                    formState.selection_process
                                                        .test_type[
                                                        `${type
                                                            .split(" ")[0]
                                                            .toLowerCase()}_test`
                                                    ]
                                                }
                                                onChange={(e) => {
                                                    handleCheck(() =>
                                                        handleTestType(e)
                                                    );
                                                }}
                                            />
                                            <Form.Check.Label>
                                                {type}
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                ))}
                            </Col>
                        </Form.Group>

                        {/* For Technical Test please specify likely Topics / Skill sets: */}
                        <Form.Group
                            className="mb-3"
                            controlId="likelyTopicsSkillSets"
                        >
                            <Form.Label>
                                For Technical Test please specify likely Topics
                                / Skill sets:
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="likely_topics"
                                placeholder="Enter likely topics"
                                value={
                                    formState.selection_process.likely_topics
                                }
                                onChange={(e) => handleSelectionProcess(e)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="groupDiscussion"
                        >
                            <Row>
                                <Col xs={6}>
                                    <Form.Label>Group Discussion</Form.Label>
                                </Col>
                                <Col xs={6}>
                                    <div className="d-flex justify-content-around">
                                        <Form.Check
                                            type="radio"
                                            label="Yes"
                                            name="group_discussion"
                                            id="groupDiscussionYes"
                                            checked={
                                                formState.selection_process
                                                    .test_type.group_discussion
                                            }
                                            onChange={(e) => handleTestType(e)}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="No"
                                            name="group_discussion"
                                            id="groupDiscussionNo"
                                            checked={
                                                !formState.selection_process
                                                    .test_type.group_discussion
                                            }
                                            onChange={(e) => handleTestType(e)}
                                        />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={6}>
                                    <Form.Label>
                                        Personal Interview/ Number of Rounds
                                    </Form.Label>
                                </Col>
                                <Col xs={6}>
                                    <div className="d-flex justify-content-around">
                                        <Form.Check
                                            type="radio"
                                            label="Yes"
                                            name="personal_interview"
                                            id="personalInterviewYes"
                                            checked={
                                                formState.selection_process
                                                    .test_type
                                                    .personal_interview
                                            }
                                            onChange={(e) => handleTestType(e)}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="No"
                                            name="personal_interview"
                                            id="personalInterviewNo"
                                            checked={
                                                !formState.selection_process
                                                    .test_type
                                                    .personal_interview
                                            }
                                            onChange={(e) => handleTestType(e)}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Form.Group>

                        {/* Number of offers you intend to make */}

                        <Form.Group className="mb-3" controlId="numberOfOffers">
                            <Form.Label>
                                Number of offers you intend to make
                            </Form.Label>
                            <Form.Control
                                name="number_of_offers"
                                type="number"
                                placeholder="Enter number of offers"
                                value={
                                    formState.selection_process.number_of_offers
                                }
                                onChange={(e) => handleSelectionProcess(e)}
                            />
                        </Form.Group>

                        {/* Preferred period for recruitment  */}

                        <Form.Group
                            className="mb-3"
                            controlId="preferredPeriod"
                        >
                            <Form.Label>
                                Preferred period for recruitment
                            </Form.Label>
                            <Form.Control
                                name="preferred_period"
                                type="text"
                                placeholder="Enter preferred period"
                                value={
                                    formState.selection_process.preferred_period
                                }
                                onChange={(e) => handleSelectionProcess(e)}
                            />
                        </Form.Group>
                    </div>
                </Container>
                <div className="d-flex justify-content-around my-3">
                    <Button variant="primary" onClick={handleBack}>
                        Back
                    </Button>
                    <Button type="submit">
                        Review
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default SelectionProcess;
