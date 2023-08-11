import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function JobSalaryDetails(props) {
    const {degree, salaryDetails, setSalaryDetails} = props;

    function handleChange(e)
    {
        const {name, value} = e.target;
        setSalaryDetails((prev) => {
            return {
                ...prev,
                [degree]: {
                    ...prev[degree],
                    [name]: value
                }
            }
        });
    }

    return (
        <div className="note-container">
            <h5>{degree}</h5>
            <Form.Group>
                <Form.Label>Gross CTC</Form.Label>
                <InputGroup className="field-group">
                    <InputGroup.Text>INR</InputGroup.Text>
                    <Form.Control
                        name="gross"
                        type="number"
                        aria-label="Amount (to the nearest rupee)"
                        min={0}
                        value={salaryDetails.gross}
                        onChange={handleChange}
                    />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <Form.Label>Take Home</Form.Label>
                <InputGroup className="field-group">
                    <InputGroup.Text>INR</InputGroup.Text>
                    <Form.Control
                        name="takeHome"
                        type="number"
                        aria-label="Amount (to the nearest rupee)"
                        min={0}
                        value={salaryDetails.takeHome}
                        onChange={handleChange}
                    />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <Form.Label>Bonus/Perks/Incentive</Form.Label>
                <InputGroup className="field-group">
                    <InputGroup.Text>INR</InputGroup.Text>
                    <Form.Control
                        name="bonus"
                        type="number"
                        aria-label="Amount (to the nearest rupee)"
                        min={0}
                        value={salaryDetails.bonus}
                        onChange={handleChange}
                    />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <Form.Label>Bond or Service Contract (if yes, please provide details)</Form.Label>
                <Form.Control
                        name="serviceContract"
                        as="textarea"
                        value={salaryDetails.serviceContract}
                        onChange={handleChange}
                    />
            </Form.Group>
        </div>
    )
}