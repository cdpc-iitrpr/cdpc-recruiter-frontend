import { useEffect, useState } from "react";
import { Col, Form, InputGroup, Row, Container, Button } from "react-bootstrap";

function OrganisationContactGroup({ formState, setFormState, personType }) {
    function handleChange(e) {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            contact_details: {
                ...prev.contact_details,
                [personType]: {
                    ...prev.contact_details[personType],
                    [name]: value,
                },
            },
        }));
    }

    return (
        <Row>
            <Col>
                <Form.Group className="mb-2" controlId="contactName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        value={formState.contact_details[personType].name}
                        type="text"
                        onChange={handleChange}
                        placeholder="Enter Contact Name"
                        required={personType !== "second_person_of_contact"}
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="contactEmail">
                    <Form.Label>Contact Email</Form.Label>
                    <Form.Control
                        name="email"
                        value={formState.contact_details[personType].email}
                        type="email"
                        onChange={handleChange}
                        placeholder="Enter Contact Email"
                        required={personType !== "second_person_of_contact"}
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="contactNumber">
                    <Form.Label>Company Number</Form.Label>
                    <Form.Control
                        name="phone"
                        value={formState.contact_details[personType].phone}
                        type="tel"
                        onChange={handleChange}
                        placeholder="Enter Company Number"
                        required={personType !== "second_person_of_contact"}
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="contactNumber">
                    <Form.Label>Personal Phone</Form.Label>
                    <Form.Control
                        name="mobile"
                        value={formState.contact_details[personType].mobile}
                        type="tel"
                        onChange={handleChange}
                        placeholder="Enter Personal Phone"
                        required={personType !== "second_person_of_contact"}
                    />
                </Form.Group>
            </Col>
        </Row>
    );
}

export default OrganisationContactGroup;
