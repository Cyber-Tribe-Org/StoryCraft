import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlotPoint from "./PlotPoint";
import "./Act.css";
import { Act } from "../../entities/StoryboardInterfaces";

interface ActProps {
    act: Act;
}

const ActComponent = ({ act }: ActProps) => {
    console.log("ACT:", act);
    return (
        <Container>
            {Object.keys(act).map((actName, index) => (
                <div key={actName}>
                    <Row>
                        <Col className="p-2 d-flex justify-content-center align-items-center act-column">
                            {actName}
                        </Col>
                    </Row>
                    <Row key={`${actName}_${index}`}>
                        <Col className="p-1 m-1">
                            <Row>
                                {["Sequence 1", "Sequence 2"].map(
                                    (sequenceName) => (
                                        <Col xs={6} className="p-0 m-0">
                                            <div className="d-flex justify-content-center sequence-header">
                                                <div className="p-1">
                                                    {sequenceName}
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column">
                                                {act[actName][
                                                    sequenceName
                                                ]?.map((item) => (
                                                    <div
                                                        className="p-1"
                                                        key={item.number}
                                                    >
                                                        <PlotPoint {...item} />
                                                    </div>
                                                ))}
                                            </div>
                                        </Col>
                                    )
                                )}
                            </Row>
                        </Col>
                    </Row>
                </div>
            ))}
        </Container>
    );
};

export default ActComponent;
