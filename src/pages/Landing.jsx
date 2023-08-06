import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Landing() {
    return (
        <div className="page-container">
            <Row>
                <Col xs={12} md={6}>
                    <h2>JAF Form</h2>
                </Col>
                <Col xs={12} md={6}>
                    <h2>INF Form</h2>
                </Col>
            </Row>
        </div>
    )
}