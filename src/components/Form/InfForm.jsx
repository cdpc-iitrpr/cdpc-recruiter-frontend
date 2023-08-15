import React, { useEffect } from "react";
import { Container, Form, ProgressBar, Button } from "react-bootstrap";
import OrganisationalDetails from "../FormComponents/OrganisationDetails";
import InfJobDetails from "../FormComponents/InfJobDetails";
import SelectionProcess from "../FormComponents/SelectionProcess";
import "./Form.css";
import { INF_FORM_ACTION } from "../../constants/endPoints";
import { frontToBack } from "../../utils/INFParser";
import { useAuth } from "../../context/AuthContext";

function InfForm({formData, setFormData}) {

    const { user } = useAuth();

    const [formPage, setFormPage] = React.useState(1);
    const [progress, setProgress] = React.useState(
        Math.round(((formPage - 1) / 3) * 100)
    );

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Use 'auto' for instant scroll
        });
    };

    const handleFormSubmit = (e) => {
        const parsed_FormData = frontToBack(formData);
        //post request to server
        fetch(INF_FORM_ACTION, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.access}`,
            },
            body: JSON.stringify({
                form_id: "id",
                save_as_draft: false,
                form_data: parsed_FormData,
            }),
        }).then((response) => response.json());
    };

    useEffect(() => {
        setProgress(Math.round(((formPage - 1) / 3) * 100));
    }, [formPage]);

    return (
        <div>
            <Container>
                <h1>Internship Notification Form</h1>
            </Container>
            <div className="container progress-container sticky-top pb-3 bottom-fade">
                <p className="m-0  ">Progress:</p>
                <ProgressBar
                    striped
                    variant="success"
                    now={progress}
                    label={`${progress}%`}
                    className="border border-secondary"
                />
                <div className="bottom-fade"></div>
            </div>
            <Form onSubmit={handleFormSubmit}>
                {formPage === 1 && (
                    <OrganisationalDetails
                        formState={formData}
                        setFormState={setFormData}
                    />
                )}
                {formPage === 2 && (
                    <InfJobDetails
                        formState={formData}
                        setFormState={setFormData}
                    />
                )}
                {formPage === 3 && (
                    <SelectionProcess
                        formState={formData}
                        setFormState={setFormData}
                    />
                )}
            </Form>
            <div className="d-flex justify-content-around my-3">
                {formPage > 1 && (
                    <Button
                        variant="primary"
                        onClick={() => {
                            setFormPage((prev) => prev - 1);
                            scrollToTop();
                        }}
                    >
                        Back
                    </Button>
                )}
                {formPage < 3 && (
                    <Button
                        variant="primary"
                        onClick={() => {
                            setFormPage((prev) => prev + 1);
                            scrollToTop();
                        }}
                    >
                        Next
                    </Button>
                )}
                {formPage == 3 && (
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={handleFormSubmit}
                    >
                        Submit
                    </Button>
                )}
            </div>
        </div>
    );
}

export default InfForm;
