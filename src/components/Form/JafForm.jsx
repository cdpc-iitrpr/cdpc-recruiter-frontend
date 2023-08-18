import React, { useEffect } from "react";
import { Container, ProgressBar, Button } from "react-bootstrap";
import OrganisationalDetails from "../FormComponents/OrganisationDetails";
import SelectionProcess from "../FormComponents/SelectionProcess";
import JafJobDetails from "../FormComponents/JafJobDetails";
import "./Form.css";
import { frontToBack } from "../../utils/JAFParser";
import { JAF_SUBMIT_ACTION } from "../../constants/endPoints";
import { blank_jaf_object } from "../../constants/formObjects";
import JafDisplay from "../Display/JafDisplay";
import useFetch from "../../hooks/useFetch";
import { toast } from "react-toastify";

function JafForm(props) {
    const { formData, setFormData, versionTitle, setEditable } = props;
    const { fetch } = useFetch();

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

    const handleFormSubmit = async () => {
        console.log(formData);
        toast.info("Submitting form...");
        
        const parsedFormData = frontToBack(formData);

        // check if version title is empty
        if (versionTitle === "") {
            alert("Please enter a version title");
            return;
        }

        // post request to server
        const response = await fetch(JAF_SUBMIT_ACTION, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                form_id: "id",
                save_as_draft: false,
                form_data: parsedFormData,
                versionTitle: versionTitle,
            }),
        });
        const json = await response.json();
        if (!response.ok) {
            toast.error(json.error);
            console.log(json);
        } else {
            toast.success(json.success);
            setEditable(false);
        }

    };

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
                    <JafDisplay formData={formData} />
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

JafForm.defaultProps = {
    formData: blank_jaf_object,
};

export default JafForm;
