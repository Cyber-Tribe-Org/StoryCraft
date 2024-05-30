import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ActComponent from "./Act";
import { StoryboardProp } from "../../entities/StoryboardInterfaces";

const StoryWorksheet = ({ data }: StoryboardProp) => {
    return (
        <Container fluid>
            <Row className="mb-2">
                {data.ACTS.map((act, index) => (
                    <Col
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        xl={3}
                        style={{
                            marginTop: "10px",
                            border: "2px solid black",
                            padding: 2,
                            paddingBottom: "0px",
                        }}
                    >
                        <ActComponent act={act} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default StoryWorksheet;
