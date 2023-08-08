import React from 'react'
import { Container, Form, Col, Row, Button } from 'react-bootstrap'

function OptionGroup({ feildName, options, selectedOptions, setSelectedOptions }) {
  return (
    <Form.Group>
      <Row>
        <Col xs={6}>
          <Form.Label>{feildName}</Form.Label>
        </Col>
        <Col xs={6} >
          <div className='d-flex justify-content-around'>
            {options.map((option, index) => {
              return (
                <Form.Check
                  label={option}
                  name={feildName}
                  type="radio"
                  id={`${feildName}-${option}-${index}`}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedOptions((prev) => [...prev, option]);
                    } else {
                      setSelectedOptions((prev) => prev.filter((item) => item !== option));
                    }
                  }}
                />
              )
            })}
          </div>
        </Col>
      </Row>
    </Form.Group>
  )
}

function InfJobDetails() {
  return (
    <div>

      <Container style={{ maxWidth: "800px" }}>
        <h1 className='mb-3'>Internship Details</h1>
        <Form>
          <h4>Job Profile</h4>
          <OptionGroup feildName="2 Month Internship" options={["Yes", "No"]} />
          <OptionGroup feildName="6 Month Internship" options={["Yes", "No"]} />
          <OptionGroup feildName="Joint Master Thesis Program" options={["Yes", "No"]} />
          <Form.Group className="mb-3" controlId="placeOfPosting">
            <Form.Label column>Place of Posting</Form.Label>
            <Form.Control type="text" placeholder="Enter Place of Posting" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="jobDescription">
            <Form.Label>Job Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder='Enter a Job Description' />
          </Form.Group>
          <Form.Group controlId="jobDescriptionFile" className="mb-3" >
            <Form.Control type="file" multiple required />
            <Form.Text className="text-muted">
              Upload Job Description File
            </Form.Text>
          </Form.Group>
          <h4>Stipend Details</h4>
          <Form.Group className="mb-3" controlId="compensation">
            <Form.Label >Compensation</Form.Label>
            <Form.Control type="text" placeholder='Enter Compensation' />
          </Form.Group>
          <Row className='d-flex justify-content-between'>
            <Col md={4} xs={12}>
              <Form.Group className="mb-3" controlId="stipendAmount">
                <Form.Label>Stipend Amount</Form.Label>
                <Form.Control type="text" placeholder='Enter Amount' />
              </Form.Group>
            </Col>
            <Col md={4} xs={12}>
              <Form.Group className="mb-3" controlId="bonusPerksIncentives">
                <Form.Label>Bonus/Perks/Incentives </Form.Label>
                <Form.Control type="text" placeholder='Enter Amount' />
              </Form.Group>
            </Col>
            <Col md={4} xs={12}>
              <Form.Group className="mb-3" controlId="accomodationFare">
                <Form.Label>Accommodation/Trip Fare</Form.Label>
                <Form.Control type="text" placeholder='Enter Amount' />
              </Form.Group>
            </Col>
          </Row>
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

export default InfJobDetails