import React, { useState } from "react";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import { DJANGO_SERVER } from "../constants/endPoints";
import { OTP_LENGTH } from "../constants/otp";

const Email = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const verifyEmail = (email) => {
    // verify email using regex
    return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null;
  };

  const handleChangedEmail = (e) => {
    setEmail(e.target.value);
    setIsEmailVerified(verifyEmail(e.target.value));
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // email should be valid using regex
    // if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null) {
    //   setIsEmailVerified(false);
    //   setLoading(false);
    //   return;
    // } else {
    //   setIsEmailVerified(true);
    // }

    try {
      // send otp to the django server
      const res = await fetch(DJANGO_SERVER + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.status !== 200) {
        console.log(data.error);
        setError(data.error);
      } else {
        // otp sent successfully
        setIsOtpSent(true);
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
      setIsOtpSent(true); //! for testing
    }
    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // send otp to the django server
      const res = await fetch(DJANGO_SERVER + "/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();

      if (res.status !== 200) {
        console.log(data.error);
        setError(data.error);
      } else {
        // otp sent successfully
        console.log(data.message);
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    setLoading(false);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (isOtpSent) {
      await handleLogin(e);
    } else {
      await handleSendOtp(e);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Email</h2>
      <Form onSubmit={(e) => handleOnSubmit(e)}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            disabled={isOtpSent}
            onChange={handleChangedEmail}
          />
          {error && <Form.Text className="text-danger">{error}</Form.Text>}
        </Form.Group>

        {!isOtpSent ? (
          <Button
            variant="primary"
            onClick={handleSendOtp}
            disabled={!isEmailVerified}
            className="mt-3 d-flex align-items-center justify-content-center gap-2"
          >
            Send OTP
            {loading && <Spinner animation="border" variant="info" size="sm" />}
          </Button>
        ) : (
          <>
            <Form.Group controlId="otp">
              <Form.Label>One-Time Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="success"
              onClick={handleLogin}
              disabled={otp.length !== OTP_LENGTH}
              className="mt-3 d-flex align-items-center justify-content-center gap-2"
            >
              Verify OTP
              {loading && (
                <Spinner animation="border" variant="info" size="sm" />
              )}
            </Button>
          </>
        )}
      </Form>
    </Container>
  );
};

export default Email;
