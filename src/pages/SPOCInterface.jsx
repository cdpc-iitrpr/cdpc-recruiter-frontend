import React from "react";
import { Row, Col, Accordion, Button, Form } from "react-bootstrap";
import FormHeader from "../components/FormComponents/FormHeader";
import { blank_inf_object, blank_jaf_object } from "../constants/formObjects";
import { JAF_SPOC_FETCH, INF_SPOC_FETCH } from "../constants/endPoints";
import { useAuth } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import { backToFront as backToFrontJAF } from "../utils/JAFParser";
import { backToFront as backToFrontINF } from "../utils/INFParser";
import JafDisplay from "../components/Display/JafDisplay";
import InfDisplay from "../components/Display/InfDisplay";
import { toast } from "react-toastify";

// function Company(name, email, setCompanyDetails) {

//     function handleClick(e) {
//         setCompanyDetails({
//             name: e.target.getElementsByTagName("h5")[0].innerHTML,
//             email: e.target.getElementsByTagName("p")[0].innerHTML
//         });
//     }

//     return (
//         <div
//             className="company-container hover-effect"
//             onClick={handleClick}
//         >
//             <div>
//                 <span className="material-symbols-outlined">corporate_fare</span>
//                 <h5> {name} </h5>
//             </div>
//             <div>
//                 <span className="material-symbols-outlined">email</span>
//                 <p> {email} </p>
//             </div>
//         </div>
//     )
// }

// const data = [
//     {
//         name: "Company 1", 
//         email: "c1@gmail.com"
//     },
//     {
//         name: "Company 2", 
//         email: "c2@gmail.com"
//     },
//     {
//         name: "Company 3", 
//         email: "c3@gmail.com"
//     },
//     {
//         name: "Company 4",
//         email: "c4@gmail.com"
//     },
//     {
//         name: "Company 5",
//         email: "c5@gmail.com"
//     }
// ]

const Draft = ({
    id,
    versionTitle,
    date,
    type,
    setFormType,
    setCurrentJAFState,
    setCurrentINFState,
    setVersionTitle
}) => {
    const { fetch } = useFetch();

    const loadFormData = async () => {
        const url = type == 0 ? JAF_SPOC_FETCH : INF_SPOC_FETCH;
        const response = await fetch(url + `${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        if (!response.ok) {
            alert(json.message);
        } else {
            setVersionTitle(json.Data.versionTitle? json.Data.versionTitle + ` - [${id}]` : `Untitled - [${id}]`);


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

    function handleClickDraft() {
        setFormType(type);
        loadFormData();
    }

    return (
        <div className="note-container hover-effect cursor-pointer" onClick={handleClickDraft}>
            <div className="space-between" >
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


export default function SPOCInterface() {
    
    // const [companyDetails, setCompanyDetails] = React.useState({
    //     name: "",
    //     email: ""
    // });
    
    // const companyEls = data.map((company) => Company(company.name, company.email, setCompanyDetails));
    const { user } = useAuth();

    const { fetch } = useFetch();

    const [versionTitle, setVersionTitle] = React.useState("");
    const [formType, setFormType] = React.useState(0);
    const [drafts, setDrafts] = React.useState({
        JAF: [
        ],
        INF: [
        ],
    });

    const [currentINFState, setCurrentINFState] = React.useState(blank_inf_object);
    const [currentJAFState, setCurrentJAFState] = React.useState(blank_jaf_object);

    React.useEffect(() => {
        const fetchJAFDrafts = async () => {
            const response = await fetch(JAF_SPOC_FETCH, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await response.json();
            if (!response.ok) {
                toast.error(json.message);
            } else {
                setDrafts((prev) => {
                    return {
                        ...prev,
                        JAF: json.JAF_list,
                    };
                });
            }
        };

        const fetchINFDrafts = async () => {
            const response = await fetch(INF_SPOC_FETCH, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await response.json();
            if (!response.ok) {
                toast.error(json.message);
            } else {
                setDrafts((prev) => {
                    return {
                        ...prev,
                        INF: json.INF_list,
                    };
                });
            }
        };

        fetchJAFDrafts();
        fetchINFDrafts();
    }, []);

    const JAFDraftEls = drafts?.JAF.map((draft) =>
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
        />
    );
    const INFDraftEls = drafts?.INF.map((draft) =>
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
        />
    );


    return (
        <div className="page-container">
            <Row>
                <Col xs={12} md={5}>
                    <div className="note-container">
                        <Accordion>
                            <h2>Current Drafts</h2>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>JAF Drafts</Accordion.Header>
                                <Accordion.Body>{JAFDraftEls}</Accordion.Body>
                            </Accordion.Item>
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
                            disabled={true}
                        />
                        {formType == 0 ? (
                            <JafDisplay formData={currentJAFState} />
                        ) : (
                            <InfDisplay formData={currentINFState} />
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
}