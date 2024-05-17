import { Container, Row, Col, Form } from "react-bootstrap";

const WorksheetInfo = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    {/* Content for the first column */}
                    <Form>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>
                                <strong>Title:</strong>
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="logline">
                            <Form.Label>
                                <strong>Logline:</strong>
                            </Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="dramaticQuestion"
                        >
                            <Form.Label>
                                <strong>Dramatic Question:</strong>
                            </Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="protagonist">
                            <Form.Label>
                                <strong>Protagonist:</strong>
                            </Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="consciousDesire"
                        >
                            <Form.Label>
                                <strong>Conscious Desire:</strong>
                            </Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={12} md={6}>
                    {/* Content for the second column */}
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="unconsciousDrive"
                        >
                            <Form.Label>
                                <strong>Unconscious Drive:</strong>
                            </Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="achillesHeel">
                            <Form.Label>
                                <strong>Achille's Heel:</strong>
                            </Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="moralsphere">
                            <Form.Label>
                                <strong>Moral Sphere:</strong>
                            </Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="moralImperative"
                        >
                            <Form.Label>
                                <strong>Moral Imperative:</strong>
                            </Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="theme">
                            <Form.Label>
                                <strong>Theme:</strong>
                            </Form.Label>
                            <Form.Control as="textarea" rows={1} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default WorksheetInfo;
