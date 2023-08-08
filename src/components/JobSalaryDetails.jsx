import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function JobSalaryDetails({degree}) {
    return (
        <div className="note-container">
            <h5>{degree}</h5>
            <Form.Group>
                <Form.Label>Gross CTC</Form.Label>
                <InputGroup className="field-group">
                    <InputGroup.Text>INR</InputGroup.Text>
                    <Form.Control type="number" aria-label="Amount (to the nearest rupee)" />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <Form.Label>Take Home</Form.Label>
                <InputGroup className="field-group">
                    <InputGroup.Text>INR</InputGroup.Text>
                    <Form.Control type="number" aria-label="Amount (to the nearest rupee)" />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <Form.Label>Bonus/Perks/Incentive</Form.Label>
                <InputGroup className="field-group">
                    <InputGroup.Text>INR</InputGroup.Text>
                    <Form.Control type="number" aria-label="Amount (to the nearest rupee)" />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <Form.Label>Bond or Service Contract (if yes, please provide details)</Form.Label>
                <Form.Control as="textarea" placeholder="Enter Details" />
            </Form.Group>
        </div>
    )
}