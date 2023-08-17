import React, { useEffect } from "react";
import { Container, Form, ProgressBar, Button } from "react-bootstrap";
import OrganisationalDetails from "../FormComponents/OrganisationDetails";
import InfJobDetails from "../FormComponents/InfJobDetails";
import SelectionProcess from "../FormComponents/SelectionProcess";
import "./Form.css";
import { INF_FORM_ACTION } from "../../constants/endPoints";
import { frontToBack } from "../../utils/INFParser";
import useFetch from "../../hooks/useFetch";
import { toast } from "react-toastify";
import JafDisplay from "../Display/JafDisplay";
import InfDisplay from "../Display/InfDisplay";

function InfForm({ formData, setFormData ,versionTitle }) {
    const { fetch } = useFetch();


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

    const handleFormSubmit = async (e) => {
        const parsed_FormData = frontToBack(formData);

        // check if versionTitle is empty
        if (versionTitle === "") {
            alert("Please enter a version title");
            return;
        }

        //post request to server
        const response = await fetch(INF_FORM_ACTION, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                form_id: "id",
                save_as_draft: false,
                form_data: parsed_FormData,
                versionTitle: versionTitle,
            }),
        });
        const json = await response.json();
        if (!response.ok) {
            toast.error(json.error);
        } else {
            toast.success(json.success);
        }

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
                <InfJobDetails
                    formState={formData}
                    setFormState={setFormData}
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
                        setFormPage((prev) => prev + 1);
                        scrollToTop();
                    }}
                    handleBack={() => {
                        setFormPage((prev) => prev - 1);
                        scrollToTop();
                    }}
                />
            )}
            {formPage === 4 && (
                <>
                    <InfDisplay formData={formData} />
                    <div className="d-flex justify-content-around my-3">
                        <Button
                            variant="primary"
                            onClick={() => {
                                setFormPage((prev) => prev - 1);
                                scrollToTop();
                            }}
                        >
                            Back
                        </Button>
                        <Button variant="danger" onClick={handleFormSubmit}>
                            Submit
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}

export default InfForm;
