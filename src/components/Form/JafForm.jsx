import React, { useEffect } from "react";
import { Container, Form, ProgressBar, Button } from "react-bootstrap";
import OrganisationalDetails from "../FormComponents/OrganisationDetails";
import SelectionProcess from "../FormComponents/SelectionProcess";
import JafJobDetails from "../FormComponents/JafJobDetails";

function JafForm() {
    const [formPage, setFormPage] = React.useState(1);
    const [progress, setProgress] = React.useState(Math.round((formPage / 3) * 100));
    const [jafJobDetails, setJafJobDetails] = React.useState({
        basicDetails: { designation: "", description: "", location: "" },
        descriptionFile: null,
        salaryFile: null,
        salaryDetails: {
            BTech: { gross: 0, takeHome: 0, bonus: 0, serviceContract: "" },
            MTech: { gross: 0, takeHome: 0, bonus: 0, serviceContract: "" },
            MSc: { gross: 0, takeHome: 0, bonus: 0, serviceContract: "" },
            PhD: { gross: 0, takeHome: 0, bonus: 0, serviceContract: "" },
        },
    });
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Use 'auto' for instant scroll
        });
    };

    useEffect(() => {
        setProgress(Math.round((formPage / 3) * 100));
    }, [formPage]);


    return (
        <div>
            <Container>
                <h1>Job Announcement Form</h1>
            </Container>
            <div className="container progress-container sticky-top bg-white pb-3">
                <p className="m-0">Progress:</p>
                <ProgressBar striped variant="success"  now={progress} label = {`${progress}%`} className="" />
            </div>
            <Form>
                {formPage === 1 && <OrganisationalDetails />}
                {formPage === 2 && <JafJobDetails jafJobDetails={jafJobDetails} setJafJobDetails={setJafJobDetails} />}
                {formPage === 3 && <SelectionProcess />}
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
                            onClick={() => {}}
                        >
                            Submit
                        </Button>
                    )}
                </div>
        </div>
    );
}

export default JafForm;
