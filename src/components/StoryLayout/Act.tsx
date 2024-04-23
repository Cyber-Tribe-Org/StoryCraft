import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlotPoint from "./PlotPoint";
import "./Act.css";

const Act = () => {
    return (
        <Container>
            <Row noGutters>
                <Col className="p-2 d-flex justify-content-center align-items-center act-column">
                    ACT
                </Col>
            </Row>
            <Row>
                <Col className="p-1 m-1">
                    <Row noGutters>
                        <Col xs={6} className="p-0 m-0">
                            <div className="d-flex justify-content-center sequence-header">
                                <div className="p-1">Sequence</div>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="p-1">
                                    <PlotPoint />
                                </div>
                                <div className="p-1">
                                    <PlotPoint />
                                </div>
                                <div className="p-1">
                                    <PlotPoint />
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} className="p-0 m-0">
                            <div className="d-flex justify-content-center sequence-header">
                                <div className="p-1">Sequence</div>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="p-1">
                                    <PlotPoint />
                                </div>
                                <div className="p-1">
                                    <PlotPoint />
                                </div>
                                <div className="p-1">
                                    <PlotPoint />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Act;
