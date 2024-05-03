import { Container, Row, Col } from "react-bootstrap";
import WorksheetInfo from "../components/StoryInfo/WorksheetInfo";
import StoryWorksheet from "../components/StoryLayout/StoryWorksheet";
import CharacterArc from "../components/CharacterArc/CharacterArc";

const Story = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <WorksheetInfo />
                </Col>
            </Row>
            <Row>
                <Col>
                    <StoryWorksheet />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CharacterArc />
                </Col>
            </Row>
        </Container>
    );
};

export default Story;