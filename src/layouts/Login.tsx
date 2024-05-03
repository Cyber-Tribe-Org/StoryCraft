import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLoginWithEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // await auth.signInWithEmailAndPassword(email, password);
            navigate("/");
        } catch (error) {
            // setError(error.message);
        }
    };

    const handleLoginWithGoogle = async () => {
        try {
            // await auth.signInWithPopup(googleProvider);
            navigate("/");
        } catch (error) {
            // setError(error.message);
        }
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
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

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

                    <div className="mt-3">
                        <p>Don't have an account?</p>
                        <Button variant="secondary" onClick={handleSignUp}>
                            Sign Up
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
