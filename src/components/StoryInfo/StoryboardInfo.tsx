import { Container, Row, Col, Form } from "react-bootstrap";
import { StoryboardProp } from "../../entities/StoryboardInterfaces";

const StoryboardInfo = ({ data }: StoryboardProp) => {
    const handleChange = () => {
        // Save storyboard data logic here
    };

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
                            <Form.Control
                                type="text"
                                value={data.title}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="logline">
                            <Form.Label>
                                <strong>Logline:</strong>
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                value={data.logline}
                                onChange={handleChange}
                                rows={2}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="dramaticQuestion"
                        >
                            <Form.Label>
                                <strong>Dramatic Question:</strong>
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                value={data.dramaticQuestion}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="protagonist">
                            <Form.Label>
                                <strong>Protagonist:</strong>
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                value={data.protagonist}
                                onChange={handleChange}
                                rows={2}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="consciousDesire"
                        >
                            <Form.Label>
                                <strong>Conscious Desire:</strong>
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                value={data.consciousDesire}
                                onChange={handleChange}
                                rows={2}
                            />
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
                            <Form.Control
                                as="textarea"
                                value={data.unconsciousDrive}
                                onChange={handleChange}
                                rows={2}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="achillesHeel">
                            <Form.Label>
                                <strong>Achille's Heel:</strong>
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                value={data.AchillesHeel}
                                onChange={handleChange}
                                rows={2}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="moralsphere">
                            <Form.Label>
                                <strong>Moral Sphere:</strong>
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                value={data.moralSphere}
                                onChange={handleChange}
                                rows={2}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="moralImperative"
                        >
                            <Form.Label>
                                <strong>Moral Imperative:</strong>
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                value={data.moralImperative}
                                onChange={handleChange}
                                rows={2}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="theme">
                            <Form.Label>
                                <strong>Theme:</strong>
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                value={data.theme}
                                onChange={handleChange}
                                rows={1}
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default StoryboardInfo;
