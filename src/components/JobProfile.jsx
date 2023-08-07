import React from "react";
import { Form } from "react-bootstrap";

export default function JAF() {
    return (
        <div className="page-container">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <h2>About the Organization</h2>
                    <Form.Label>Name of the Organization</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                    <Form.Label>Postal Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter postal address" />
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="text" placeholder="Enter website URL" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <h2>Type of Organization</h2>
                    <Form.Label>Industry Sector</Form.Label>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Job Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter job location" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Job Type</Form.Label>
                    <Form.Control type="text" placeholder="Enter job type" />
                </Form.Group>
            </Form>
        </div>
    )
}