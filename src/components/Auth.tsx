import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { auth, googleProvider } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log("Current User:", auth?.currentUser?.email);

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.log(err);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.log(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">
                    email
                </InputGroup.Text>
                <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </InputGroup>
            <br />
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">
                    password
                </InputGroup.Text>
                <Form.Control
                    type="password"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </InputGroup>
            <Button variant="primary" onClick={signIn}>
                Sign In
            </Button>
            <Button variant="primary" onClick={signInWithGoogle}>
                Sign In With Google
            </Button>
            <Button variant="primary" onClick={logout}>
                Logout
            </Button>
        </>
    );
};

export default Auth;
