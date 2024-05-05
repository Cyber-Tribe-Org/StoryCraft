import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../config/firebase";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignupWithEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCred) => {
                const user = userCred.user;
                await sendEmailVerification(user);
                navigate("/story");
            })
            .catch((error) => {
                toast.error(`Error while Sign Up. \n ${error?.message}`);
                console.error(error?.message);
            });
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={6}>
                    <h2>Sign Up</h2>
                    <Form onSubmit={handleSignupWithEmail}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>
                                Email address
                                <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>
                                Password<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label>
                                Confirm Password
                                <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Form.Group>

                        <Stack
                            direction="horizontal"
                            className="d-flex justify-content-between mt-3"
                        >
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Stack>
                    </Form>

                    {error && <p className="mt-3 text-danger">{error}</p>}
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
