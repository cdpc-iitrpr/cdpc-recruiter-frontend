import React, { useEffect } from "react";
import { Container, ProgressBar } from "react-bootstrap";
import OrganisationalDetails from "../FormComponents/OrganisationDetails";
import SelectionProcess from "../FormComponents/SelectionProcess";
import JafJobDetails from "../FormComponents/JafJobDetails";
import "./Form.css";
import { frontToBack } from "../../utils/JAFParser";
import { JAF_SUBMIT_ACTION } from "../../constants/endPoints";
import { useAuth } from "../../context/AuthContext";

function JafForm({ formData, setFormData }) {
    const { user } = useAuth();

    const [formPage, setFormPage] = React.useState(1);
    const [progress, setProgress] = React.useState(
        Math.round(((formPage - 1) / 3) * 100)
    );

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    function handleFormSubmit() {
        console.log(formData);
        const parsedFormData = frontToBack(formData);
        // post request to server
        fetch(JAF_SUBMIT_ACTION, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.access}`,
            },
            body: JSON.stringify({
                form_id: "id",
                save_as_draft: false,
                form_data: parsedFormData,
            }),
        }).then((response) => response.json());
    }

    useEffect(() => {
        setProgress(Math.round(((formPage - 1) / 3) * 100));
    }, [formPage]);

    return (
        <div>
            <Container>
                <h1>Job Announcement Form</h1>
            </Container>
            <div className="container progress-container sticky-top pb-3 bottom-fade">
                <p className="m-0 ">Progress:</p>
                <ProgressBar
                    striped
                    variant="success"
                    now={progress}
                    label={`${progress}%`}
                    className="border border-secondary"
                />
                <div className="bottom-fade"></div>
            </div>
            {formPage === 1 && (
                <OrganisationalDetails
                    formState={formData}
                    setFormState={setFormData}
                    handleSubmit={(e) => {
                        e.preventDefault();
                        console.log("submit");
                        setFormPage((prev) => prev + 1);
                        scrollToTop();
                    }}
                />
            )}
            {formPage === 2 && (
                <JafJobDetails
                    formData={formData}
                    setFormData={setFormData}
                    handleSubmit={(e) => {
                        e.preventDefault();
                        console.log("submit");
                        setFormPage((prev) => prev + 1);
                        scrollToTop();
                    }}
                    handleBack={() => {
                        setFormPage((prev) => prev - 1);
                        scrollToTop();
                    }}
                />
            )}
            {formPage === 3 && (
                <SelectionProcess
                    formState={formData}
                    setFormState={setFormData}
                    handleSubmit={(e) => {
                        e.preventDefault();
                        handleFormSubmit();
                    }}
                    handleBack={() => {
                        setFormPage((prev) => prev - 1);
                        scrollToTop();
                    }}
                />
            )}
        </div>
    );
}

export default JafForm;
