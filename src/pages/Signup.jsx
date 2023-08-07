import React, { useState } from "react";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import { DJANGO_SERVER } from "../constants/endPoints";
import { OTP_LENGTH } from "../constants/otp";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const verifyEmail = (email) => {
    // Verify email using regex
    return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Email should be valid using regex
    if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null) {
      setLoading(false);
      setError("Please enter a valid email address");
      return;
    } else if (name === "") {
      setLoading(false);
      setError("Please enter your name");
      return;
    } else if (name.length < 3) {
      setLoading(false);
      setError("Name should be at least 3 characters long");
      return;
    } else if (companyName === "") {
      setLoading(false);
      setError("Please enter your company name");
      return;
    } else if (companyName.length < 3) {
      setLoading(false);
      setError("Company name should be at least 3 characters long");
      return;
    } else if (phoneNumber === "") {
      setLoading(false);
      setError("Please enter your phone number");
      return;
    } else if (phoneNumber.length < 10) {
      setLoading(false);
      setError("Phone number should be 10 digits long");
      return;
    } else {
      setError(null);
    }

    try {
      // Send otp to the django server
      const res = await fetch(DJANGO_SERVER + "/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, companyName, phoneNumber }),
      });
      const data = await res.json();

      if (res.status !== 200) {
        console.log(data.error);
        setError(data.error);
      } else {
        // Otp sent successfully
        console.log(data);
        setError(null);
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h2>Signup</h2>
      <Form onSubmit={(e) => handleOnSubmit(e)}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="companyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>
        {error && <Form.Text className="text-danger">{error}</Form.Text>}

        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleOnSubmit(e)}
          className="mt-3 d-flex align-items-center justify-content-center"
        >
          Sign up
          {loading && (
            <Spinner
              animation="border"
              variant="info"
              size="sm"
              className="ml-2"
            />
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
