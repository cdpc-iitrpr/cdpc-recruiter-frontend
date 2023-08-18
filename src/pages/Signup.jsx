import React, { useState } from "react";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import { DJANGO_SERVER } from "../constants/endPoints";
import { OTP_LENGTH } from "../constants/otp";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company_name, setCompanyName] = useState("");
    const [phone, setPhoneNumber] = useState("");

    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const auth = useAuth();

    const navigate = useNavigate();

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
        } else if (company_name === "") {
            setLoading(false);
            setError("Please enter your company name");
            return;
        } else if (company_name.length < 3) {
            setLoading(false);
            setError("Company name should be at least 3 characters long");
            return;
        } else if (phone === "") {
            setLoading(false);
            setError("Please enter your phone number");
            return;
        } else if (phone.length < 10) {
            setLoading(false);
            setError("Phone number should be 10 digits long");
            return;
        } else {
            setError(null);
        }

        try {
            // Send otp to the django server
            const res = await fetch(DJANGO_SERVER + "/api/signup/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ name, email, company_name, phone }),
            });
            const data = await res.json();

            if (res.status !== 200) {
                console.log(data.error);
                setError(data.error);
            } else {
                // Otp sent successfully
                console.log(data);
                setIsOtpSent(true);
                setError(null);
            }
        } catch (err) {
            console.log(err);
            setIsOtpSent(false);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // send otp to the django server
            const res = await fetch(DJANGO_SERVER + "/api/verify/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ otp }),
            });
            const data = await res.json();

            if (res.status !== 200) {
                console.log(data.error);
                setError(data.error);
            } else {
                toast.success("Login Successful");
                navigate("/recruiter");
            }
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
        setLoading(false);
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

                <Form.Group controlId="company_name">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your company name"
                        value={company_name}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </Form.Group>
                {error && (
                    <Form.Text className="text-danger">{error}</Form.Text>
                )}

                {!isOtpSent ? (
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={(e) => handleOnSubmit(e)}
                            className="d-flex align-items-center justify-content-center"
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
                        <button
                            className="btn btn-link"
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            or Sign In
                        </button>
                    </div>
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
                            className="mt-3 me-2 d-flex align-items-center justify-content-center gap-2"
                        >
                            Verify OTP
                            {loading && (
                                <Spinner
                                    animation="border"
                                    variant="info"
                                    size="sm"
                                />
                            )}
                        </Button>
                    </>
                )}
            </Form>
        </Container>
    );
};

export default Signup;
