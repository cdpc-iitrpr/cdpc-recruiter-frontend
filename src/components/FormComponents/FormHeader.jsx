import React from "react";
import { Form, Button } from "react-bootstrap";

export default function FormHeader({versionTitle, setVersionTitle, disabled, handleSaveDraft})
{
    return (
        <div className="d-flex justify-content-around text-margin container">
            <Form.Control
                id="versionTitle"
                className="w-75 fs-3 fw-bold border-secondary"
                style={{backgroundColor:"#E6EEF1"}}
                type="text"
                placeholder="Version Title"
                value={versionTitle}
                onChange={(e) => setVersionTitle(e.target.value)}
                disabled={disabled}
            />
            <div className="" >
                {/* <Button
                variant="primary"
                className="button-margin"
                onClick={handleClone}
                >Clone</Button> */}
                <Button
                variant="primary"
                className="button-margin"
                onClick={handleSaveDraft}
                >Save Draft</Button>
            </div>
        </div>
    )
}