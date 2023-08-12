import { useState } from "react";
import { Col, Form, InputGroup, Row, Container } from "react-bootstrap";
import OrganisationContactGroup from "./OrganistaionContactGroup";

function OrganisationDetails({ formState, setFormState }) {
    let [organisationTypes, setOrganisationTypes] = useState([
        "Private Sector",
        "Start-up",
        "Government",
        "Public Sector",
        "MNC (Indian Origin)",
        "MNC (Foreign Origin)",
    ]);
    let [industryTypes, setIndustryTypes] = useState([
        "Analytics",
        "Consulting",
        "Core",
        "Finance",
        "I.T Software",
        "Management",
        "Teaching Research",
    ]);

    function handleCheck(e, name, value) {
        setFormState((prev) => ({
            ...prev,
            [name]: {
                ...prev[name],
                options: prev[name].options.includes(value)
                    ? prev[name].options.filter((item) => item !== value)
                    : [...prev[name].options, value],
            },
        }));
    }

    function handleAboutOrganisation(e) {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            about_organisation: {
                ...prev.about_organisation,
                [name]: value,
            },
        }));
    }

    function handleOthers(e, name) {
        const { value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: {
                ...prev[name],
                others: value,
            },
        }));
    }

    return (
        <div>
            <Container>
                <h1 className="mb-3">Organisation Information</h1>

                {/* About */}
                <div className="note-container">
                    <h4 className="mb-3">About</h4>
                    <Form.Group className="mb-3" controlId="organisationName">
                        <Form.Label column>Organisation Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="organisation"
                            value={formState.about_organisation.organisation}
                            placeholder="Enter Organisation Name"
                            onChange={(e) => handleAboutOrganisation(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="postalAddress">
                        <Form.Label>Postal Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="postal_address"
                            value={formState.about_organisation.postal_address}
                            placeholder="Enter Postal Address"
                            onChange={(e) => handleAboutOrganisation(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="website">
                        <Form.Label>Website</Form.Label>
                        <Form.Control
                            type="url"
                            name="website"
                            value={formState.about_organisation.website}
                            placeholder="Enter website URL"
                            onChange={(e) => handleAboutOrganisation(e)}
                        />
                    </Form.Group>
                </div>

                {/* Type of Organisation */}
                <div className="note-container">
                    <h4 className="mb-3">Type of Organisation</h4>
                    <Row className="mb-3">
                        {organisationTypes.map((type, index) => (
                            <Col md={4} xs={6} key={index}>
                                <Form.Check
                                    type={"checkbox"}
                                    id={`check-organisation-${index}`}
                                    name="organisation_type"
                                >
                                    <Form.Check.Input
                                        name={"organisation_type " + index}
                                        type={"checkbox"}
                                        checked={formState.organisation_type.options.includes(
                                            type
                                        )}
                                        onChange={(e) =>
                                            handleCheck(
                                                e,
                                                "organisation_type",
                                                type
                                            )
                                        }
                                    />
                                    <Form.Check.Label>{type}</Form.Check.Label>
                                </Form.Check>
                            </Col>
                        ))}
                    </Row>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="organistaionTypeOther">
                            Others
                        </InputGroup.Text>
                        <Form.Control
                            value={formState.organisation_type.others}
                            onChange={(e) =>
                                handleOthers(e, "organisation_type")
                            }
                            placeholder="Specify other type"
                        />
                    </InputGroup>
                </div>

                {/* Industry Sector */}
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
                                        name={"industry_sector " + index}
                                        checked={formState.industry_sector.options.includes(
                                            type
                                        )}
                                        onChange={(e) =>
                                            handleCheck(
                                                e,
                                                "industry_sector",
                                                type
                                            )
                                        }
                                    />
                                    <Form.Check.Label>{type}</Form.Check.Label>
                                </Form.Check>
                            </Col>
                        ))}
                    </Row>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="industrySectorOther">
                            Others
                        </InputGroup.Text>
                        <Form.Control
                            value={formState.industry_sector.others}
                            onChange={(e) => handleOthers(e, "industry_sector")}
                            placeholder="Specify other type"
                        />
                    </InputGroup>
                </div>

                {/* Contact Details */}
                <div className="note-container">
                    <h4 className="mb-3">Contact Details</h4>
                    <Row>
                        <Col md={4}>
                            <h5 className="my-1">Head HR</h5>
                            <OrganisationContactGroup
                                formState={formState}
                                setFormState={setFormState}
                                personType={"head_hr"}
                            />
                        </Col>
                        <Col md={4}>
                            <h5 className="my-1">
                                1<sup>st</sup> Contact Person
                            </h5>
                            <OrganisationContactGroup
                                formState={formState}
                                setFormState={setFormState}
                                personType={"first_person_of_contact"}
                            />
                        </Col>
                        <Col md={4}>
                            <h5 className="my-1">
                                2<sup>nd</sup> Contact Person
                            </h5>
                            <OrganisationContactGroup
                                formState={formState}
                                setFormState={setFormState}
                                personType={"second_person_of_contact"}
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default OrganisationDetails;
