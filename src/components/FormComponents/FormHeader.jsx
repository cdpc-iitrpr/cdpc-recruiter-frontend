import React from "react";
import { Form, Button } from "react-bootstrap";

export default function FormHeader({versionTitle, setVersionTitle, disabled})
{
    return (
        <div className="space-between text-margin container">
            <Form.Control
                id="versionTitle"
                className="w-100 fs-3 fw-bold"
                style={{backgroundColor:"#E6EEF1"}}
                type="text"
                placeholder="Version Title"
                value={versionTitle}
                onChange={(e) => setVersionTitle(e.target.value)}
                disabled={disabled}
            />
            {/* <div className="space-between">
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
            </div> */}
        </div>
    )
}