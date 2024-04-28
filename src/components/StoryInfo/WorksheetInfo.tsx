import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WorksheetInfo = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    {/* Content for the first column */}
                    Column 1
                </Col>
                <Col xs={12} md={6}>
                    {/* Content for the second column */}
                    Column 2
                </Col>
            </Row>
        </Container>
    );
};

export default WorksheetInfo;
