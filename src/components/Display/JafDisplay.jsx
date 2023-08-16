import React, { useState } from "react";
import OrganisationDetailsDisplay from "../DisplayComponents/OrganisationDetailsDisplay";
import { blank_jaf_object } from "../../constants/formObjects";
import SelectionProcessDisplay from "../DisplayComponents/SelectionProcessDisplay";
import JafJobDetailsDisplay from "../DisplayComponents/JafJobDetailsDisplay";

function JafDisplay(props) {
    const { formData } = props;
    return (
        <div>
            <OrganisationDetailsDisplay formData={formData} />
            <JafJobDetailsDisplay formData={formData} />
            <SelectionProcessDisplay formData={formData} />
        </div>
    );
}

JafDisplay.defaultProps = {
    formData: blank_jaf_object,
};

export default JafDisplay;
