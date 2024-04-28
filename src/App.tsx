import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./components/NavBar";
import router from "./routing/routes";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <Container fluid className="custom-container">
            <Row>
                <Col>
                    <NavBar />
                </Col>
            </Row>
            <Row className="custom-row">
                <RouterProvider router={router}></RouterProvider>
            </Row>
        </Container>
    );
}

export default App;
