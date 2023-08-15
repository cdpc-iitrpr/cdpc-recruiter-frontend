import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function JobSalaryDetails(props) {
    const {degree, fieldName, formData, setFormData} = props;

    function handleChange(e)
    {
        const {name, value} = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                salary_details:{
                    ...prev.salary_details,
                    [fieldName]: {
                        ...prev.salary_details[fieldName],
                        [name]: value
                    }
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
                        name="ctc_gross"
                        type="number"
                        aria-label="Amount (to the nearest rupee)"
                        min={0}
                        value={formData.salary_details[fieldName].ctc_gross}
                        onChange={handleChange}
                    />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <Form.Label>Take Home</Form.Label>
                <InputGroup className="field-group">
                    <InputGroup.Text>INR</InputGroup.Text>
                    <Form.Control
                        name="ctc_take_home"
                        type="number"
                        aria-label="Amount (to the nearest rupee)"
                        min={0}
                        value={formData.salary_details[fieldName].ctc_take_home}
                        onChange={handleChange}
                    />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <Form.Label>Bonus/Perks/Incentive</Form.Label>
                <InputGroup className="field-group">
                    <InputGroup.Text>INR</InputGroup.Text>
                    <Form.Control
                        name="ctc_bonus_perks"
                        type="number"
                        aria-label="Amount (to the nearest rupee)"
                        min={0}
                        value={formData.salary_details[fieldName].ctc_bonus_perks}
                        onChange={handleChange}
                    />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <Form.Label>Bond or Service Contract (if yes, please provide details)</Form.Label>
                <Form.Control
                        name="bond_contract"
                        as="textarea"
                        value={formData.salary_details[fieldName].bond_contract}
                        onChange={handleChange}
                    />
            </Form.Group>
        </div>
    )
}