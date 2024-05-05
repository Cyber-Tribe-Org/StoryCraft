import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import useEmailVerification from "../hooks/useEmailVerification";
import { toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) navigate("/");
        });
    }, []);

    const redirect = () => {
        const isVerified = useEmailVerification();
        if (isVerified) {
            navigate("/story");
        }
    };

    const error_handling = (err: Error) => {
        toast.error("Error while login. Please check your email and password.");
        console.error(err.message);
    };

    const handleLoginWithEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
            .then(() => redirect)
            .catch((error) => error_handling(error));
    };

    const handleLoginWithGoogle = async () => {
        await signInWithPopup(auth, googleProvider)
            .then(() => redirect)
            .catch((error) => error_handling);
    };

    const handleSignUp = () => {
        navigate("/signup");
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={6}>
                    <h2>Login</h2>
                    <Form onSubmit={handleLoginWithEmail}>
                        <Form.Group controlId="formBasicEmail" className="mt-3">
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group
                            controlId="formBasicPassword"
                            className="mt-3"
                        >
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <a
                            className="mt-3 hover-pointer"
                            onClick={handleSignUp}
                        >
                            I don't have an account
                        </a>
                        <Stack
                            direction="horizontal"
                            className="d-flex justify-content-between mt-3"
                        >
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                            <Button
                                variant="danger"
                                onClick={handleLoginWithGoogle}
                            >
                                Login with Google
                            </Button>
                        </Stack>
                    </Form>

                    {error && <p className="mt-3 text-danger">{error}</p>}
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
