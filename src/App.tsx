// import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import StoryWorksheet from "./components/StoryLayout/StoryWorksheet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <Container fluid className="custom-container">
            <Row noGutters>
                <Col>
                    <NavBar />
                </Col>
            </Row>
            <Row noGutters className="custom-row">
                <StoryWorksheet />
            </Row>
        </Container>
    );
}

export default App;
