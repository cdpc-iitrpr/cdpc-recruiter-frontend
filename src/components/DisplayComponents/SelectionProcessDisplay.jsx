import React, { useEffect, useState } from "react";
import { KeyValue, TypeList } from "./TextDisplay";
import { Container, Row, Col } from "react-bootstrap";

function SelectionProcessDisplay({ formData }) {
    function snakeCaseToSentence(snakeCaseString) {
        const words = snakeCaseString.split("_");
        const sentence = words
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        return sentence;
    }

    return (
        <div>
            <Container>
                <h1>Selection Process</h1>
                <div className="note-container">
                    <h3>Eligibility</h3>
                    <Row className="my-3">
                        <Col>
                            <KeyValue
                                keyName={"Eligibility Criteria"}
                                value={formData.selection_process.eligibility_criteria}
                            />
                        </Col>
                        <Col>
                            <KeyValue
                                keyName={"Allow Backlogs"}
                                value={
                                    formData.selection_process.allow_backlog_students
                                        ? "Yes"
                                        : "No"
                                }
                            />
                        </Col>
                    </Row>
                </div>
                <div className="note-container">
                    <h3>Test Types</h3>
                    <TypeList
                        list={Object.keys(formData.selection_process.test_type)
                            .filter(
                                (key) =>
                                    formData.selection_process.test_type[key] === true
                            )
                            .map((key) => snakeCaseToSentence(key))}
                        keyName={"Test Types"}
                    />
                    <Row className="my-3 row-gap-3">
                        <Col md={6} xs={12}>
                            <KeyValue
                                keyName={"Test Duration"}
                                value={formData.selection_process.test_duration}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <KeyValue
                                keyName={"Likely Topics"}
                                value={formData.selection_process.likely_topics}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <KeyValue
                                keyName={"Number of Rounds"}
                                value={formData.selection_process.number_of_rounds}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <KeyValue
                                keyName={"Number of Offers"}
                                value={formData.selection_process.number_of_offers}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <KeyValue
                                keyName={"Preferred Period"}
                                value={formData.selection_process.preferred_period}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <KeyValue
                                keyName={"Logistics Requirements"}
                                value={formData.selection_process.logistics_requirements}
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default SelectionProcessDisplay;
