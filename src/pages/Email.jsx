import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import { DJANGO_SERVER } from "../constants/endPoints";
import { OTP_LENGTH } from "../constants/otp";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Email = () => {
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [resend, setResend] = useState(false);
    const [timer, setTimer] = useState(0);
    const intervalIdRef = useRef(null);

    const navigate = useNavigate();
    const { isLoggedIn, user } = useAuth();

    const verifyEmail = (email) => {
        // verify email using regex
        return (
            email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) !==
            null
        );
    };

    const handleChangedEmail = (e) => {
        setEmail(e.target.value);
        setIsEmailVerified(verifyEmail(e.target.value));
    };

    const handleSendOtp = async () => {
        setError(null);
        setLoading(true);
        setResend(false);
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
            const res = await fetch(DJANGO_SERVER + "/api/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email: email.toLowerCase() }),
            });
            const data = await res.json();

            if (res.status !== 200) {
                setError(data.error);
                toast.error(data.error);
            } else {
                // otp sent successfully
                setIsOtpSent(true);
                toast.success("OTP sent successfully");
                setTimeout(() => {
                    setResend(true);
                }, 15000);

                setTimer(15);
                const startInterval = () => {
                    intervalIdRef.current = setInterval(() => {
                        setTimer((prev) => prev - 1);
                    }, 1000);
                };

                startInterval();
            }
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
            setTimer(0);
            setResend(true);
            // setIsOtpSent(true); //! for testing
        }
        setLoading(false);
    };

    useEffect(() => {
        if (timer === 0) {
            clearInterval(intervalIdRef.current);
        }
    }, [timer]);

    const handleLogin = async () => {
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
                body: JSON.stringify({ email: email.toLowerCase(), otp }),
            });
            const data = await res.json();

            if (res.status !== 200) {
                setError(data.error);
                toast.error(data.error);
            } else {
                // otp sent successfully
                login(data);
                toast.success("Logged in successfully");
                navigate("/recruiter");
            }
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
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

    useEffect(() => {
        if (isLoggedIn && user.user.role === "recruiter") {
            navigate("/recruiter");
        } else if (isLoggedIn && user.user.role === "spoc") {
            navigate("/spoc");
        }
    }, []);

    return (
        <Container className="mt-5" style={{ maxWidth: "500px" }}>
            <h2>Login</h2>
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
                    {error && (
                        <Form.Text className="text-danger">{error}</Form.Text>
                    )}
                </Form.Group>

                {!isOtpSent ? (
                    <div className="d-flex mt-3 align-items-center justify-content-between">
                        <Button
                            variant="primary"
                            onClick={handleSendOtp}
                            disabled={!isEmailVerified}
                            className="d-flex align-items-center justify-content-center gap-2"
                        >
                            Send OTP
                            {loading && (
                                <Spinner
                                    animation="border"
                                    variant="info"
                                    size="sm"
                                />
                            )}
                        </Button>
                        <button
                            onClick={() => navigate("/signup")}
                            className="btn btn-link"
                        >
                            Or Sign Up
                        </button>
                    </div>
                ) : (
                    <>
                        <Form.Group controlId="otp" className="d-block">
                            <Form.Label>One-Time Password</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </Form.Group>
                        <div className="mt-3 d-flex justify-content-between">
                            <Button
                                variant="success"
                                onClick={handleLogin}
                                disabled={otp.length !== OTP_LENGTH}
                                className="d-flex align-items-center justify-content-center gap-2"
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
                            <button
                                onClick={() => handleSendOtp()}
                                className="btn btn-link"
                                disabled={!resend}
                            >
                                {timer !== 0 ? `(${timer}s)` : ""} Resend OTP
                            </button>
                        </div>
                    </>
                )}
            </Form>
        </Container>
    );
};

export default Email;
