// Images
import logo from "../assets/logo.png";

// React-Bootstrap components
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";

// React Router
import { NavLink, useNavigate } from "react-router-dom";

// Hooks
import { useState, useRef } from "react";

// Custom hooks
import useAuth from "../hooks/useAuth";

function NavBar() {
    const { userEmail } = useAuth();
    const navigate = useNavigate();
    const [showOffcanvas, setOffcanvas] = useState(false);
    const offcanvasRef = useRef(null);

    const handleLogout = () => {
        // Logic to handle logout
        setOffcanvas(false);
        navigate("/");
    };

    return (
        <Navbar expand={false} className="bg-body-tertiary mb-3">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src={logo} width="40" height="40" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="offcanvasNavbar-expand-false"
                    onClick={() => setOffcanvas(!showOffcanvas)}
                />

                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-false"
                    ref={offcanvasRef}
                    show={showOffcanvas}
                    onHide={() => setOffcanvas(false)}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbar-expand-false">
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavLink
                                to="about"
                                onClick={() => setOffcanvas(false)}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="story"
                                onClick={() => setOffcanvas(false)}
                            >
                                Story Worksheet
                            </NavLink>
                            {userEmail ? (
                                <>
                                    <NavLink
                                        to="profile"
                                        onClick={() => setOffcanvas(false)}
                                    >
                                        Profile
                                    </NavLink>
                                    <Nav.Link onClick={handleLogout}>
                                        Logout
                                    </Nav.Link>
                                </>
                            ) : (
                                <NavLink
                                    to="login"
                                    onClick={() => setOffcanvas(false)}
                                >
                                    Login
                                </NavLink>
                            )}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavBar;
