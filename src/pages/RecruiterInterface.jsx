import React, { useState } from "react";
import { Form, Row, Col, Accordion, Button } from "react-bootstrap";
import JafForm from "../components/Form/JafForm";
import InfForm from "../components/Form/InfForm";
import FormHeader from "../components/FormComponents/FormHeader";
import { blank_inf_object, blank_jaf_object } from "../constants/formObjects";
import { JAF_FETCH_DRAFTS, INF_FETCH_DRAFTS } from "../constants/endPoints";
import { useAuth } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import { backToFront as backToFrontJAF } from "../utils/JAFParser";
import { backToFront as backToFrontINF } from "../utils/INFParser";
import JafDisplay from "../components/Display/JafDisplay";
import InfDisplay from "../components/Display/InfDisplay";
import { toast } from "react-toastify";

const Draft = ({
    id,
    versionTitle,
    date,
    type,
    setFormType,
    setCurrentJAFState,
    setCurrentINFState,
    setVersionTitle,
    setIsEditable,
}) => {
    const { fetch } = useFetch();

    const loadFormData = async () => {
        const url = type == 0 ? JAF_FETCH_DRAFTS : INF_FETCH_DRAFTS;
        const response = await fetch(url + `${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        if (!response.ok) {
            // alert(json.message);
            toast.error(json.error);
        } else {
            setVersionTitle(json.versionTitle ?? `Untitled - [${id}]`);

            if (type == 0) {
                const structuredFormData = backToFrontJAF(json.Data);
                setCurrentJAFState(structuredFormData);
            } else {
                const structuredFormData = backToFrontINF(json.Data);
                setCurrentINFState(structuredFormData);
            }
            // setVersionTitle(json.versionTitle);
        }
    };

    const handleClickDraft = async () => {
        // toast.info("Loading draft...");
        toast.info("Click on New JAF/INF to edit this form");
        setFormType(type);
        setIsEditable(false);
        try {
            await loadFormData();
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    };

    return (
        <div
            className="note-container hover-effect cursor-pointer"
            onClick={handleClickDraft}
        >
            <div className="space-between">
                <div>{versionTitle}</div>
                <div>
                    {new Date(date).toLocaleDateString() +
                        " " +
                        new Date(date).toLocaleTimeString()}
                </div>
            </div>
        </div>
    );
};

export default function RecruiterInterface() {
    const { user } = useAuth();
    const { fetch } = useFetch();
    const [isEditable, setIsEditable] = useState(true);

    const [versionTitle, setVersionTitle] = React.useState("");
    const [formType, setFormType] = React.useState(0);
    const [drafts, setDrafts] = React.useState({
        JAF: [],
        INF: [],
    });
    const [search, setSearch] = React.useState({ JAF: "", INF: "" });

    React.useEffect(() => {
        const fetchJAFDrafts = async () => {
            try {
                const response = await fetch(JAF_FETCH_DRAFTS, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const json = await response.json();
                if (!response.ok) {
                    toast.error(json.error);
                } else {
                    setDrafts((prev) => {
                        return {
                            ...prev,
                            JAF: json.JAF_list,
                        };
                    });
                }
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        };

        const fetchINFDrafts = async () => {
            try {
                const response = await fetch(INF_FETCH_DRAFTS, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const json = await response.json();
                if (!response.ok) {
                    toast.error(json.error);
                } else {
                    setDrafts((prev) => {
                        return {
                            ...prev,
                            INF: json.INF_list,
                        };
                    });
                }
            } catch (error) {
                console.log(error);
                toast.error(error.message);
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
        setIsEditable(true);
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
        setIsEditable(true);
        if (formType === 1) return;
        setFormType(1);
        setVersionTitle("");
        setCurrentINFState(blank_inf_object);
    }

    function handleClone() {
        //save current form, then create new form with same data
        setIsEditable(true);
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

    function handleSearch(e, type) {
        if (type == 0) {
            setSearch((prev) => ({
                ...prev,
                JAF: e.target.value,
            }));
        } else {
            setSearch((prev) => ({
                ...prev,
                INF: e.target.value,
            }));
        }
    }

    const JAFSearchResults = [];
    for (var i = 0; i < drafts.JAF.length; i++) {
        if (drafts.JAF[i].versionTitle == null) {
            // JAFSearchResults.push(drafts.JAF[i]);
        } else if (
            drafts.JAF[i].versionTitle
                .toLowerCase()
                .includes(search.JAF.toLowerCase())
        )
            JAFSearchResults.push(drafts.JAF[i]);
    }

    const INFSearchResults = [];
    for (var i = 0; i < drafts.INF.length; i++) {
        if (drafts.INF[i].versionTitle == null) {
            // INFSearchResults.push(drafts.INF[i]);
        } else if (
            drafts.INF[i].versionTitle
                .toLowerCase()
                .includes(search.INF.toLowerCase())
        )
            INFSearchResults.push(drafts.INF[i]);
    }

    const [currentINFState, setCurrentINFState] = useState(blank_inf_object);
    const [currentJAFState, setCurrentJAFState] = useState(blank_jaf_object);

    const JAFDraftEls = JAFSearchResults.map((draft) => (
        <Draft
            key={draft.id}
            id={draft.id}
            versionTitle={draft.versionTitle}
            date={draft.timestamp}
            type={0}
            setFormType={setFormType}
            setCurrentJAFState={setCurrentJAFState}
            setCurrentINFState={setCurrentINFState}
            setVersionTitle={setVersionTitle}
            setIsEditable={setIsEditable}
        />
    ));
    const INFDraftEls = INFSearchResults.map((draft) => (
        <Draft
            key={draft.id}
            id={draft.id}
            versionTitle={draft.versionTitle}
            date={draft.timestamp}
            type={1}
            setFormType={setFormType}
            setCurrentJAFState={setCurrentJAFState}
            setCurrentINFState={setCurrentINFState}
            setVersionTitle={setVersionTitle}
            setIsEditable={setIsEditable}
        />
    ));

    return (
        <div className="page-container">
            <Row>
                <Col xs={12} md={5}>
                    <div className="note-container">
                        <Accordion>
                            <h2>Current Drafts</h2>
                            <div className="space-between my-3">
                                <Button
                                    variant="primary"
                                    className=""
                                    onClick={handleAddJAF}
                                >
                                    New JAF
                                </Button>
                                <div className="w-75">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        value={search.JAF}
                                        onChange={(e) => handleSearch(e, 0)}
                                    ></Form.Control>
                                </div>
                            </div>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>JAF Drafts</Accordion.Header>
                                <Accordion.Body className="list-container">
                                    {JAFDraftEls}
                                </Accordion.Body>
                            </Accordion.Item>
                            <div className="space-between my-3">
                                <Button
                                    variant="primary"
                                    className=""
                                    onClick={handleAddINF}
                                >
                                    New INF
                                </Button>
                                <div className="w-75">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        value={search.INF}
                                        onChange={(e) => handleSearch(e, 1)}
                                    ></Form.Control>
                                </div>
                            </div>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>INF Drafts</Accordion.Header>
                                <Accordion.Body className="list-container">
                                    {INFDraftEls}
                                </Accordion.Body>
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
                            disabled={false}
                        />
                        {formType == 0 && isEditable && (
                            <JafForm
                                formData={currentJAFState}
                                setFormData={setCurrentJAFState}
                                versionTitle={versionTitle}
                            />
                        )}
                        {formType == 1 && isEditable && (
                            <InfForm
                                formData={currentINFState}
                                setFormData={setCurrentINFState}
                                versionTitle={versionTitle}
                            />
                        )}
                        {formType == 0 && !isEditable && (
                            <JafDisplay formData={currentJAFState} />
                        )}
                        {formType == 1 && !isEditable && (
                            <InfDisplay formData={currentINFState} />
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
}
