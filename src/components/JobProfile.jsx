import React from "react";
import { Form } from "react-bootstrap";

export default function JAF() {
    return (
        <div className="page-container">
            <h1>Job Profile</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Job Designation</Form.Label>
                    <Form.Control type="text" placeholder="Enter Designation" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Job Description</Form.Label>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Place of Posting</Form.Label>
                    <Form.Control type="text" placeholder="Enter Location" />
                </Form.Group>
            </Form>
        </div>
    )
}