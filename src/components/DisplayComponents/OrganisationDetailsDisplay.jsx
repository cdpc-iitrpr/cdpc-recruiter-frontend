import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { KeyValue, TypeList } from "./TextDisplay";

function OrganisationDetailsDisplay({ formData }) {
    return (
        <div>
            <Container>
                <h1 className="mb-3">Organisation Details</h1>
                <div className="note-container">
                    <h3>About</h3>
                    <div className="mb-3">
                        <KeyValue
                            keyName={"Organisation"}
                            value={formData.about_organisation.organisation}
                        ></KeyValue>
                        <KeyValue
                            keyName={"Postal Address"}
                            value={formData.about_organisation.postal_address}
                        ></KeyValue>
                        <KeyValue
                            keyName={"Website"}
                            value={formData.about_organisation.website}
                        ></KeyValue>
                    </div>
                </div>
                <div className="note-container">
                    <h3>Other Details</h3>
                    <div className="mb-3">
                        <TypeList
                            keyName={"Organisation Type"}
                            list={formData.organisation_type.options}
                        ></TypeList>
                        <KeyValue
                            keyName={"Others"}
                            value={formData.organisation_type.others}
                        ></KeyValue>
                    </div>

                    <div className="mb-3">
                        <TypeList
                            keyName={"Industry Sector"}
                            list={formData.industry_sector.options}
                        ></TypeList>
                        <KeyValue
                            keyName={"Others"}
                            value={formData.industry_sector.others}
                        ></KeyValue>
                    </div>
                </div>

                <div className="note-container">
                    <h3>Contact Details</h3>
                    <Row className="mb-3 row-gap-3">
                        <Col lg={4} xs={12} className="pe-3">
                            <h4>Head HR</h4>
                            <KeyValue
                                keyName={"Name"}
                                width={25}
                                value={formData.contact_details.head_hr.name}
                            ></KeyValue>
                            <KeyValue
                                keyName={"Email"}
                                width={25}
                                value={formData.contact_details.head_hr.email}
                            ></KeyValue>
                            <KeyValue
                                keyName={"Company Phone"}
                                width={25}
                                value={formData.contact_details.head_hr.phone}
                            ></KeyValue>
                            <KeyValue
                                keyName={"Personal Phone"}
                                width={25}
                                value={formData.contact_details.head_hr.mobile}
                            ></KeyValue>
                        </Col>
                        <Col lg={4} xs={12} className="pe-3">
                            <h4>
                                1<sup>st</sup> Person of Contact
                            </h4>
                            <KeyValue
                                keyName={"Name"}
                                width={25}
                                value={
                                    formData.contact_details
                                        .first_person_of_contact.name
                                }
                            ></KeyValue>
                            <KeyValue
                                keyName={"Email"}
                                width={25}
                                value={
                                    formData.contact_details
                                        .first_person_of_contact.email
                                }
                            ></KeyValue>
                            <KeyValue
                                width={25}
                                keyName={"Company Phone"}
                                value={
                                    formData.contact_details
                                        .first_person_of_contact.phone
                                }
                            ></KeyValue>
                            <KeyValue
                                width={25}
                                keyName={"Personal Phone"}
                                value={
                                    formData.contact_details
                                        .first_person_of_contact.mobile
                                }
                            ></KeyValue>
                        </Col>
                        <Col lg={4} xs={12} className="pe-3">
                            <h4>
                                2<sup>nd</sup> Person of Contact
                            </h4>
                            <KeyValue
                                keyName={"Name"}
                                width={25}
                                value={
                                    formData.contact_details
                                        .second_person_of_contact.name
                                }
                            ></KeyValue>
                            <KeyValue
                                keyName={"Email"}
                                width={25}
                                value={
                                    formData.contact_details
                                        .second_person_of_contact.email
                                }
                            ></KeyValue>
                            <KeyValue
                                keyName={"Company Phone"}
                                width={25}
                                value={
                                    formData.contact_details
                                        .second_person_of_contact.phone
                                }
                            ></KeyValue>
                            <KeyValue
                                keyName={"Personal Phone"}
                                width={25}
                                value={
                                    formData.contact_details
                                        .second_person_of_contact.mobile
                                }
                            ></KeyValue>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default OrganisationDetailsDisplay;
