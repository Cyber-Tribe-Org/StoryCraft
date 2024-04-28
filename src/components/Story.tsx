import { Container, Row, Col } from "react-bootstrap";
import WorksheetInfo from "./StoryInfo/WorksheetInfo";
import StoryWorksheet from "./StoryLayout/StoryWorksheet";
import CharacterArc from "./CharacterArc/CharacterArc";

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
