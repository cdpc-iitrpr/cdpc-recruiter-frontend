import React, { useState } from 'react'
import OrganisationDetailsDisplay from '../DisplayComponents/OrganisationDetailsDisplay'
import { blank_inf_object } from '../../constants/formObjects'
import SelectionProcessDisplay from '../DisplayComponents/SelectionProcessDisplay';
import InfJobDetailsDisplay from '../DisplayComponents/InfJobDetailsDisplay';

function InfDisplay(props) {
  const {formData} = props;
  return (
    <div>
        <OrganisationDetailsDisplay formData={formData}/>
        <InfJobDetailsDisplay formData={formData}/>
        <SelectionProcessDisplay formData={formData}/>
    </div>
  )
}

InfDisplay.defaultProps = {
    formData: blank_inf_object
}

export default InfDisplay