import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { KeyValue } from "./TextDisplay";
import useFetch from "../../hooks/useFetch";
import { FILE_DOWNLOAD } from "../../constants/endPoints";

function InfJobDetailsDisplay({ formData }) {
    const { fetch } = useFetch();

    const handleDownload = async (item) => {
        console.log(item);
        const res = await fetch(`${FILE_DOWNLOAD}${item.id}/`, {
            method: "POST",
        });
        const blob = await res.blob();
        console.log(blob);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");

        // click on hidden element to download file

        a.href = url;
        a.download = item.file_name;
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    };

    return (
        <div>
            <Container>
                <h1>Job Details</h1>
                <div className="note-container">
                    <h3>Job Profile</h3>

                    <KeyValue
                        keyName={"Job Title"}
                        value={formData.job_profile.job_title}
                    />
                    <Row className="my-3">
                        <Col md={4}>
                            <KeyValue
                                keyName={"Two Month Internship"}
                                value={
                                    formData.job_profile.two_month_internship
                                        ? "Yes"
                                        : "No"
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <KeyValue
                                keyName={"Six Month Internship"}
                                value={
                                    formData.job_profile.six_month_internship
                                        ? "Yes"
                                        : "No"
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <KeyValue
                                keyName={"Joint Master's Thesis Program"}
                                value={
                                    formData.job_profile
                                        .joint_master_thesis_program
                                        ? "Yes"
                                        : "No"
                                }
                            />
                        </Col>
                    </Row>
                    <KeyValue
                        keyName={"Place of Posting"}
                        value={formData.job_profile.place_of_posting}
                    />
                    <KeyValue
                        keyName={"Job Description"}
                        value={formData.job_profile.job_description}
                    />
                    <KeyValue
                        keyName={"Job Description Files"}
                        valueList={formData.job_profile.job_description_pdf}
                        handleDownload={handleDownload}
                        download={true}
                    />
                </div>
                <div className="note-container">
                    <h3>Stipend Details</h3>

                    <KeyValue
                        keyName={"Stipend Amount"}
                        value={formData.stipend_details.stipend_amount}
                    />
                    <Row className="my-3">
                        <Col md={6}>
                            <KeyValue
                                keyName={"Bonus Perks Incentives"}
                                value={
                                    formData.stipend_details
                                        .bonus_perks_incentives
                                }
                            />
                        </Col>
                        <Col md={6}>
                            <KeyValue
                                keyName={"Accomodation and Trip Fare"}
                                value={
                                    formData.stipend_details
                                        .accomodation_trip_fare
                                }
                            />
                        </Col>
                    </Row>
                    <KeyValue
                        keyName={"Bond/ Service Contract"}
                        value={formData.stipend_details.bond_service_contract}
                    />
                </div>
            </Container>
        </div>
    );
}

export default InfJobDetailsDisplay;
