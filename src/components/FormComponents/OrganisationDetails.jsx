import React, { useEffect, useState } from "react";
import { Col, Form, InputGroup, Row, Container, Button } from "react-bootstrap";

function ContactGroup() {
    return (
        <Row>
            <Col>
                <Form.Group className="mb-2" controlId="contactName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Contact Name"
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="contactEmail">
                    <Form.Label>Contact Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Contact Email"
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="contactNumber">
                    <Form.Label>Company Number</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Enter Company Number"
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="contactNumber">
                    <Form.Label>Personal Phone</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Enter Personal Phone"
                    />
                </Form.Group>
            </Col>
        </Row>
    );
}

const initialFormState = {
    about_organisation: {
        organisation: "",
        postal_address: "",
        website: "",
    },
    organisation_type: {
        options: [],
        others: "",
    },
    industry_sector: {
        options: [],
        others: "",
    },
    contact_details: {
        head_hr: {
            name: "",
            email: "",
            mobile: "",
            phone: "",
        },
        first_person_of_contact: {
            name: "",
            email: "",
            mobile: "",
            phone: "",
        },
        second_person_of_contact: {
            name: "",
            email: "",
            mobile: "",
            phone: "",
        },
    },
};

function OrganisationDetails(props) {
    const { formPreset } = props;
    const [formState, setFormState] = useState(
        formPreset === undefined ? initialFormState : formPreset
    );
    const { back, next } = props;
    let [organisationTypes, setOrganisationTypes] = React.useState([
        "Private Sector",
        "Start-up",
        "Government",
        "Public Sector",
        "MNC (Indian Origin)",
        "MNC (Foreign Origin)",
    ]);
    let [industryTypes, setIndustryTypes] = React.useState([
        "Analytics",
        "Consulting",
        "Core",
        "Finance",
        "I.T Software",
        "Management",
        "Teaching Research",
    ]);
    let [organisationTypesSelected, setOrganisationTypesSelected] =
        React.useState([]);
    let [industryTypesSelected, setIndustryTypesSelected] = React.useState([]);

    return (
        <div>
            <Container>
                <h1 className="mb-3">Organisation Information</h1>
                <div className="note-container">
                    <h4 className="mb-3">About</h4>
                    <Form.Group className="mb-3" controlId="organisationName">
                        <Form.Label column>Organisation Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={formState.about_organisation.organisation}
                            placeholder="Enter Organisation Name"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="postalAddress">
                        <Form.Label>Postal Address</Form.Label>
                        <Form.Control
                            type="text"
                            value={formState.about_organisation.postal_address}
                            placeholder="Enter Postal Address"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="website">
                        <Form.Label>Website</Form.Label>
                        <Form.Control
                            type="url"
                            value={formState.about_organisation.website}
                            placeholder="Enter website URL"
                        />
                    </Form.Group>
                </div>
                <div className="note-container">
                    <h4 className="mb-3">Type of Organisation</h4>
                    <Row className="mb-3">
                        {organisationTypes.map((type, index) => (
                            <Col md={4} xs={6} key={index}>
                                <Form.Check
                                    type={"checkbox"}
                                    id={`check-organisation-${index}`}
                                >
                                    <Form.Check.Input
                                        type={"checkbox"}
                                        checked={formState.organisation_type.options.includes(
                                            type
                                        )}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setOrganisationTypesSelected(
                                                    (prev) => [...prev, type]
                                                );
                                            } else {
                                                setOrganisationTypesSelected(
                                                    (prev) =>
                                                        prev.filter(
                                                            (item) =>
                                                                item !== type
                                                        )
                                                );
                                            }
                                        }}
                                    />
                                    <Form.Check.Label>{type}</Form.Check.Label>
                                </Form.Check>
                            </Col>
                        ))}
                    </Row>
                    <InputGroup className="mb-3">
                        <InputGroup.Text
                            id="organistaionTypeOther"
                            value={formState.organisation_type.others}
                        >
                            Others
                        </InputGroup.Text>
                        <Form.Control placeholder="Specify other type" />
                    </InputGroup>
                </div>
                <div className="note-container">
                    <h4 className="mb-3">Industry Sector</h4>
                    <Row className="mb-3">
                        {industryTypes.map((type, index) => (
                            <Col md={4} xs={6} key={index}>
                                <Form.Check
                                    type={"checkbox"}
                                    id={`check-industry-${index}`}
                                >
                                    <Form.Check.Input
                                        type={"checkbox"}
                                        checked={formState.industry_sector.options.includes(
                                            type
                                        )}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setIndustryTypesSelected(
                                                    (prev) => [...prev, type]
                                                );
                                            } else {
                                                setIndustryTypesSelected(
                                                    (prev) =>
                                                        prev.filter(
                                                            (item) =>
                                                                item !== type
                                                        )
                                                );
                                            }
                                        }}
                                    />
                                    <Form.Check.Label>{type}</Form.Check.Label>
                                </Form.Check>
                            </Col>
                        ))}
                    </Row>
                    <InputGroup className="mb-3">
                        <InputGroup.Text
                            id="industrySectorOther"
                            value={formState.industry_sector.others}
                        >
                            Others
                        </InputGroup.Text>
                        <Form.Control placeholder="Specify other type" />
                    </InputGroup>
                </div>
                <div className="note-container">
                    <h4 className="mb-3">Contact Details</h4>
                    <Row>
                        <Col md={4}>
                            <h5 className="my-1">Head HR</h5>
                            <ContactGroup />
                        </Col>
                        <Col md={4}>
                            <h5 className="my-1">
                                1<sup>st</sup> Contact Person
                            </h5>
                            <ContactGroup />
                        </Col>
                        <Col md={4}>
                            <h5 className="my-1">
                                2<sup>nd</sup> Contact Person
                            </h5>
                            <ContactGroup />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default OrganisationDetails;
