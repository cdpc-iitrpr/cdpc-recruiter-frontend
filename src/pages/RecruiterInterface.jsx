import React from "react";
import { Row, Col, Accordion, Button, Form } from "react-bootstrap";
import JafForm from "../components/Form/JafForm";
import InfForm from "../components/Form/InfForm";

function Draft(versionTitle, date, type)
{
    function handleClickDraft()
    {
        if(type == 0)
        {
            // load JAF form with data
        }
        else{
            // load INF form with data
        }
    }

    return(
        <div className="note-container hover-effect">
            <div 
                className="space-between"
                onClick={handleClickDraft}
            >
                <div>{versionTitle}</div>
                <div>{date}</div>
            </div>
        </div>
    )
}

export default function RecruiterInterface()
{
    const [versionTitle, setVersionTitle] = React.useState("");
    const [formType, setFormType] = React.useState(0);
    const [drafts, setDrafts] = React.useState({
            JAF: [
                {
                    versionTitle: "JAF 1",
                    date: "2021-12-12"
                },
                {
                    versionTitle: "JAF 2",
                    date: "2023-12-12"
                },
            ],
            INF: [
                {
                    versionTitle: "INF 1",
                    date: "2021-12-12"
                },
                {
                    versionTitle: "INF 2",
                    date: "2023-12-12"
                },
            ]
        });

    function handleAddJAF()
    {
        // save current form, then create new JAF form
        if(handleSaveDraft())
        {
            setFormType(0);
            setVersionTitle("");
        }
    }

    function handleAddINF()
    {
        // save current form, then create new INF form
        if(handleSaveDraft())
        {
            setFormType(1);
            setVersionTitle("");
        }
    }

    function handleClone()
    {   
        //save current form, then create new form with same data
        if(handleSaveDraft())
        {
            setVersionTitle(prev => prev + " (copy)");
        }
    }

    function handleSaveDraft()
    {
        if(versionTitle == "")
        {
            alert("Please enter a version title to save the current draft!");
            return false;
        }
        if(formType == 0)
        {
            for(var i=0;i<drafts.JAF.length;i++)
            {
                if(drafts.JAF[i].versionTitle == versionTitle)
                {
                    //update existing draft
                    return true;
                }
            }
            setDrafts(prevDrafts => ({ 
                ...prevDrafts,
                JAF: [...prevDrafts.JAF, {
                    versionTitle: versionTitle,
                    date: (new Date()).toISOString().substring(0, 10)
                }]
            }));
        }
        else{
            for(var i=0;i<drafts.INF.length;i++)
            {
                if(drafts.INF[i].versionTitle == versionTitle)
                {
                    //update existing draft
                    return true;
                }
            }
            setDrafts(prevDrafts => ({
                ...prevDrafts,
                INF: [...prevDrafts.INF, {
                    versionTitle: versionTitle,
                    date: (new Date()).toISOString().substring(0, 10)
                }]
            }))
        }
        //send entered form data to backend
        return true;
    }

    const JAFDraftEls = drafts.JAF.map((draft) => Draft(draft.versionTitle, draft.date, 0));

    const INFDraftEls = drafts.INF.map((draft) => Draft(draft.versionTitle, draft.date, 1));


    return(
        <div className="page-container">
            <Row>
                <Col xs={12} md={5}>
                    <div className="note-container">
                        <Accordion>
                            <h2>Current Drafts</h2>
                            <Button 
                                variant="primary"
                                className="button-margin"
                                onClick={handleAddJAF}
                            >New JAF</Button>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                JAF Drafts
                                    </Accordion.Header>
                                <Accordion.Body>
                                    {JAFDraftEls}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Button 
                                variant="primary"
                                className="button-margin"
                                onClick={handleAddINF}
                            >New INF</Button>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                INF Drafts
                                </Accordion.Header>
                                <Accordion.Body>
                                    {INFDraftEls}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
                <Col xs={12} md={7}>
                    <div className="note-container">
                        <div className="space-between text-margin">
                            <Form.Control
                                id="versionTitle"
                                type="text"
                                placeholder="Version Title"
                                value={versionTitle}
                                onChange={(e) => setVersionTitle(e.target.value)}
                            />
                            <div className="space-between">
                                <Button
                                variant="primary"
                                className="button-margin"
                                onClick={handleClone}
                                >Clone</Button>
                                <Button
                                variant="primary"
                                className="button-margin"
                                onClick={handleSaveDraft}
                                >Save</Button>
                            </div>
                        </div>
                        {formType == 0 ? <JafForm /> : <InfForm />}
                    </div>
                </Col>
            </Row>
        </div>
    );
}