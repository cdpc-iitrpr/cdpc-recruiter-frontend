import React, { useState } from "react";
import { Col, Form, InputGroup, Row, Container, Button } from "react-bootstrap";

// Import statements...
// "selection_process": {
//     "eligibility_criteria": string,
// ?     "allow_backlog_students": bool,
//     "test_type": {
//         "ppt": bool,
//         "shortlist_from_resume": bool,
//         "written_test": bool,
//         "online_test": bool,
//         "technical_test": bool,
//         "aptitiude_test": bool,
//         "psychometric_test": bool,
//         "group_discussion": bool,
//         "personal_interview": bool,
//     },
// ?    "test_duration": string,
//     "likely_topics": string,
// ?    "number_of_rounds": number,
//     "group_discussion_duration": string,
//     "number_of_offers": number,
//     "preferred_period": string,
// ?    "logistics_requirements": string,
//     "interested_discipline": [
//         {
//             "degree": string,
//             "branches": [string
//             ] //
//         }
//     ]
// }
// const empty_selection_process = {
//     eligibility_criteria: "",
//     allow_backlog_students: false,
//     test_type: {
//         ppt: false,
//         shortlist_from_resume: false,
//         written_test: false,
//         online_test: false,
//         technical_test: false,
//         aptitiude_test: false,
//         psychometric_test: false,
//         group_discussion: false,
//         personal_interview: false,
//     },
//     test_duration: "",
//     likely_topics: "",
//     number_of_rounds: 0,
//     group_discussion_duration: "",
//     number_of_offers: 0,
//     preferred_period: "",
//     logistics_requirements: "",
//     interested_discipline: [
//         {
//             degree: "",
//             branches: [],
//         },
//     ],
// };
const SelectionProcess = ({ formState, setFormState }) => {
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
            [name]: value,
        }));
    };

    const handleTestType = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormState((prev) => ({
            ...prev,
            test_type: {
                ...prev.test_type,
                [name]: prev.test_type[name] ? false : true,
            },
        }));
    };

    const handleInterestedDiscipline = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormState((prev) => ({
            ...prev,
            interested_discipline: {
                ...prev.interested_discipline,
                [name]: value,
            },
        }));
    };

    const handleInterestedDisciplineBranches = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormState((prev) => ({
            ...prev,
            interested_discipline: {
                ...prev.interested_discipline,
                branches: {
                    ...prev.interested_discipline.branches,
                    [name]: value,
                },
            },
        }));
    };

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
                            name="eligibility_criteria"
                            type="number"
                            step="0.01"
                            placeholder="Enter CGPA cutoff"
                            value={formState.eligibility_criteria}
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
                                        checked={formState.test_type.ppt}
                                        onChange={(e) => handleTestType(e)}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="No"
                                        name="ppt"
                                        id="pptNo"
                                        checked={!formState.test_type.ppt}
                                        onChange={(e) => handleTestType(e)}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="shortlistFromResumes"
                    >
                        <Form.Label>Shortlist from Resumes</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Yes"
                            name="shortlist_from_resume"
                            id="shortlistFromResumesYes"
                            checked={formState.test_type.shortlist_from_resume}
                            onChange={(e) => handleTestType(e)}
                        />
                        <Form.Check
                            type="radio"
                            label="No"
                            name="shortlist_from_resume"
                            id="shortlistFromResumesNo"
                            checked={!formState.test_type.shortlist_from_resume}
                            onChange={(e) => handleTestType(e)}
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
                            name="online_test"
                            id="writtenTestOnlineTestYes"
                            checked={formState.test_type.written_test}
                            onChange={(e) => handleTestType(e)}
                        />
                        <Form.Check
                            type="radio"
                            label="No"
                            name="online_test"
                            id="writtenTestOnlineTestNo"
                            checked={!formState.test_type.written_test}
                            onChange={(e) => handleTestType(e)}
                        />
                    </Form.Group>
                </div>

                {/* Interested Discipline */}
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
                                        name={`${type
                                            .split(" ")[0]
                                            .toLowerCase()}_test`}
                                        type={"checkbox"}
                                        checked={
                                            formState.test_type[
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
                                    <Form.Check.Label>{type}</Form.Check.Label>
                                </Form.Check>
                            </Col>
                        ))}
                    </Row>

                    {/* For Technical Test please specify likely Topics / Skill sets: */}
                    <Form.Group
                        className="mb-3"
                        controlId="likelyTopicsSkillSets"
                    >
                        <Form.Label>
                            For Technical Test please specify likely Topics /
                            Skill sets:
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="likely_topics"
                            placeholder="Enter likely topics"
                            value={formState.likely_topics}
                            onChange={(e) => handleSelectionProcess(e)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="groupDiscussion">
                        <Form.Label>Group Discussion</Form.Label>
                        <Form.Check
                            type="radio"
                            name="group_discussion"
                            label="Yes"
                            id="groupDiscussionYes"
                            checked={formState.test_type.group_discussion}
                            onChange={(e) => handleTestType(e)}
                        />
                        <Form.Check
                            type="radio"
                            label="No"
                            name="group_discussion"
                            id="groupDiscussionNo"
                            checked={!formState.test_type.group_discussion}
                            onChange={(e) => handleTestType(e)}
                        />

                        <Form.Label>
                            Personal Interview/ Number of Rounds
                        </Form.Label>
                        <Form.Check
                            type="radio"
                            label="Yes"
                            name="personal_interview"
                            id="groupDiscussionYes"
                            checked={formState.test_type.personal_interview}
                            onChange={(e) => handleTestType(e)}
                        />
                        <Form.Check
                            type="radio"
                            label="No"
                            name="personal_interview"
                            id="groupDiscussionNo"
                            checked={!formState.test_type.personal_interview}
                            onChange={(e) => handleTestType(e)}
                        />
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
                            value={formState.number_of_offers}
                            onChange={(e) => handleSelectionProcess(e)}
                        />
                    </Form.Group>

                    {/* Preferred period for recruitment  */}

                    <Form.Group className="mb-3" controlId="preferredPeriod">
                        <Form.Label>
                            Preferred period for recruitment
                        </Form.Label>
                        <Form.Control
                            name="preferred_period"
                            type="text"
                            placeholder="Enter preferred period"
                            value={formState.preferred_period}
                            onChange={(e) => handleSelectionProcess(e)}
                        />
                    </Form.Group>
                </div>
            </Container>
        </div>
    );
};

export default SelectionProcess;
