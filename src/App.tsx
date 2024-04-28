import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./components/NavBar";
import StoryWorksheet from "./components/StoryLayout/StoryWorksheet";
import WorksheetInfo from "./components/StoryLayout/WorksheetInfo";
import Auth from "./components/Auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <Container fluid className="custom-container">
            <Row noGutters>
                <Col>
                    <NavBar />
                    <Auth />
                </Col>
            </Row>
            <Row noGutters className="custom-row">
                <WorksheetInfo />
            </Row>
            <Row noGutters className="custom-row">
                <StoryWorksheet />
            </Row>
        </Container>
    );
}

export default App;
