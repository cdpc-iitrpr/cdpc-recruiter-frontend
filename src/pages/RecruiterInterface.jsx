import React, { useState } from "react";
import { Row, Col, Accordion, Button, Form } from "react-bootstrap";
import JafForm from "../components/Form/JafForm";
import InfForm from "../components/Form/InfForm";
import FormHeader from "../components/FormComponents/FormHeader";
import { blank_inf_object, blank_jaf_object } from "../constants/formObjects";
import { JAF_FETCH_DRAFTS, INF_FETCH_DRAFTS } from "../constants/endPoints";
import { useAuth } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";

function Draft(versionTitle, date, type) {
    function handleClickDraft() {
        if (type == 0) {
            // load JAF form with data
        } else {
            // load INF form with data
        }
    }

    return (
        <div className="note-container hover-effect">
            <div className="space-between" onClick={handleClickDraft}>
                <div>{versionTitle}</div>
                <div>{date}</div>
            </div>
        </div>
    );
}

export default function RecruiterInterface() {
    const { user } = useAuth();
    const { fetch } = useFetch();

    const [versionTitle, setVersionTitle] = React.useState("");
    const [formType, setFormType] = React.useState(0);
    const [drafts, setDrafts] = React.useState({
        JAF: [
            {
                id: "",
                versionTitle: "JAF 1",
                timestamp: "2021-12-12",
                is_draft: false,
            },
            {
                id: "",
                versionTitle: "JAF 2",
                timestamp: "2023-12-12",
                is_draft: false,
            },
        ],
        INF: [
            {
                id: "",
                versionTitle: "INF 1",
                timestamp: "2021-12-12",
                is_draft: false,
            },
            {
                id: "",
                versionTitle: "INF 2",
                timestamp: "2023-12-12",
                is_draft: false,
            },
        ],
    });

    React.useEffect(() => {
        const fetchJAFDrafts = async () => {
            const response = await fetch(JAF_FETCH_DRAFTS, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.access}`,
                },
            });
            const json = await response.json();
            if(!response.ok)
            {
                alert(json.message);
            }
            else
            {
                setDrafts(prev => {
                    return {
                        ...prev,
                        JAF: json.JAF_List,
                    }
                })
            }
        };

        const fetchINFDrafts = async () => {
            const response = await fetch(INF_FETCH_DRAFTS, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.access}`,
                },
            });
            const json = await response.json();
            if(!response.ok)
            {
                alert(json.message);
            }
            else
            {
                setDrafts(prev => {
                    return {
                        ...prev,
                        INF: json.INF_List,
                    }
                })
            }
        };

        fetchJAFDrafts();
        fetchINFDrafts();
    }, []);

    function handleAddJAF() {
        // save current form, then create new JAF form
        // if (handleSaveDraft()) {
        //     setFormType(0);
        //     setVersionTitle("");
        // }
        if (formType === 0) return;
        setFormType(0);
        setVersionTitle("");
        setCurrentJAFState(blank_jaf_object);
    }

    function handleAddINF() {
        // save current form, then create new INF form
        // if (handleSaveDraft()) {
        //     setFormType(1);
        //     setVersionTitle("");
        // }
        if (formType === 1) return;
        setFormType(1);
        setVersionTitle("");
        setCurrentINFState(blank_inf_object);
        
    }

    function handleClone() {
        //save current form, then create new form with same data
        if (handleSaveDraft()) {
            setVersionTitle((prev) => prev + " (copy)");
        }
    }

    function handleSaveDraft() {
        if (versionTitle == "") {
            alert("Please enter a version title to save the current draft!");
            return false;
        }
        if (formType == 0) {
            for (var i = 0; i < drafts.JAF.length; i++) {
                if (drafts.JAF[i].versionTitle == versionTitle) {
                    //update existing draft
                    return true;
                }
            }
            setDrafts((prevDrafts) => ({
                ...prevDrafts,
                JAF: [
                    ...prevDrafts.JAF,
                    {
                        versionTitle: versionTitle,
                        date: new Date().toISOString().substring(0, 10),
                    },
                ],
            }));
        } else {
            for (var i = 0; i < drafts.INF.length; i++) {
                if (drafts.INF[i].versionTitle == versionTitle) {
                    //update existing draft
                    return true;
                }
            }
            setDrafts((prevDrafts) => ({
                ...prevDrafts,
                INF: [
                    ...prevDrafts.INF,
                    {
                        versionTitle: versionTitle,
                        date: new Date().toISOString().substring(0, 10),
                    },
                ],
            }));
        }
        //send entered form data to backend
        return true;
    }

    const JAFDraftEls = drafts?.JAF.map((draft) =>
        Draft(draft.versionTitle, draft.date, 0)
    );
    const  INFDraftEls = drafts?.INF.map((draft) =>
        Draft(draft.versionTitle, draft.date, 1)
    );

    const [currentINFState, setCurrentINFState] = useState(blank_inf_object);
    const [currentJAFState, setCurrentJAFState] = useState(blank_jaf_object);

    return (
        <div className="page-container">
            <Row>
                <Col xs={12} md={5}>
                    <div className="note-container">
                        <Accordion>
                            <h2>Current Drafts</h2>
                            <Button
                                variant="primary"
                                className="my-3"
                                onClick={handleAddJAF}
                            >
                                New JAF
                            </Button>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>JAF Drafts</Accordion.Header>
                                <Accordion.Body>{JAFDraftEls}</Accordion.Body>
                            </Accordion.Item>
                            <Button
                                variant="primary"
                                className="my-3"
                                onClick={handleAddINF}
                            >
                                New INF
                            </Button>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>INF Drafts</Accordion.Header>
                                <Accordion.Body>{INFDraftEls}</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
                <Col xs={12} md={7}>
                    <div className="">
                        <FormHeader
                            versionTitle={versionTitle}
                            setVersionTitle={setVersionTitle}
                            handleSaveDraft={handleSaveDraft}
                            handleClone={handleClone}
                        />
                        {formType == 0 ? (
                            <JafForm
                                formData={currentJAFState}
                                setFormData={setCurrentJAFState}
                            />
                        ) : (
                            <InfForm
                                formData={currentINFState}
                                setFormData={setCurrentINFState}
                            />
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
}
