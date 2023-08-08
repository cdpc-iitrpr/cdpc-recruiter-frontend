import React, { useEffect } from 'react'
import { Col, Form, InputGroup, Row, Container, Button } from 'react-bootstrap'

function ContactGroup() {
  return (
    <Row>
      <Col md={6}>
        <Form.Group className="mb-2" controlId="contactName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Contact Name" />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group className="mb-2" controlId="contactEmail">
          <Form.Label>Contact Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Contact Email" />
        </Form.Group>
      </Col>
      <Col xs={6}>
        <Form.Group className="mb-2" controlId="contactNumber">
          <Form.Label>Company Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter Company Number" />
        </Form.Group>
      </Col>
      <Col xs={6}>
        <Form.Group className="mb-2" controlId="contactNumber">
          <Form.Label>Personal Phone</Form.Label>
          <Form.Control type="tel" placeholder="Enter Personal Phone" />
        </Form.Group>
      </Col>
    </Row>
  )
}


function InfForm() {
  let [organisationTypes, setOrganisationTypes] = React.useState(["Private Sector", "Start-up", "Government", "Public Sector", "MNC (Indian Origin)", "MNC (Foreign Origin)"]);
  let [industryTypes, setIndustryTypes] = React.useState(["Analytics", "Consulting", "Core", "Finance", "I.T Software", "Management", "Teaching Research"]);
  let [organisationTypesSelected, setOrganisationTypesSelected] = React.useState([]);
  let [industryTypesSelected, setIndustryTypesSelected] = React.useState([]);

  return (
    <div>
      <Container style={{ maxWidth: "800px" }}>

        <Form>
          <h1 className='mb-3'>Organisation Information</h1>
          <h4 className='mb-3'>About</h4>
          <Form.Group className="mb-3" controlId="organisationName">
            <Form.Label column>Organisation Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Organisation Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="postalAddress">
            <Form.Label>Postal Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Postal Address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="website">
            <Form.Label>Website</Form.Label>
            <Form.Control type="url" placeholder="Enter website URL" />
          </Form.Group>
          <h4 className='mb-3'>Type of Organisation</h4>
          <Row className='mb-3'>
            {organisationTypes.map((type, index) =>
              <Col md={4} xs={6} key={index}>
                <Form.Check
                  type={"checkbox"}
                  id={`check-organisation-${index}`}
                >
                  <Form.Check.Input type={"checkbox"}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setOrganisationTypesSelected((prev) => [...prev, type]);
                      } else {
                        setOrganisationTypesSelected((prev) => prev.filter((item) => item !== type));
                      }
                    }} />
                  <Form.Check.Label>{type}</Form.Check.Label>
                </Form.Check>
              </Col>
            )}
          </Row>
          <InputGroup className="mb-3">
            <InputGroup.Text id="organistaionTypeOther">Others</InputGroup.Text>
            <Form.Control
              placeholder="Specify other type"
            />
          </InputGroup>
          <h4 className='mb-3'>Industry Sector</h4>
          <Row className='mb-3'>
            {industryTypes.map((type, index) =>
              <Col md={4} xs={6} key={index}>
                <Form.Check type={"checkbox"} id={`check-industry-${index}`} >
                  <Form.Check.Input type={"checkbox"}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setIndustryTypesSelected((prev) => [...prev, type]);
                      } else {
                        setIndustryTypesSelected((prev) => prev.filter((item) => item !== type));
                      }
                    }} />
                  <Form.Check.Label>{type}</Form.Check.Label>
                </Form.Check>
              </Col>
            )}
          </Row>
          <InputGroup className="mb-3">
            <InputGroup.Text id="industrySectorOther">Others</InputGroup.Text>
            <Form.Control
              placeholder="Specify other type"
            />
          </InputGroup>
          <h4 className='mb-3'>Contact Details</h4>
          <h5 className='my-1'>Head HR</h5>
          <ContactGroup />
          <h5 className='my-1'>First Contact Person</h5>
          <ContactGroup />
          <h5 className='my-1'>Second Contact Person</h5>
          <ContactGroup />
          <div className="d-flex justify-content-end my-3">
            <Button variant="primary" type="submit">
              Next
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  )
}

export default InfForm