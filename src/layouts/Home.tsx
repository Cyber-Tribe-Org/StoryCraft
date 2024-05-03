import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home: React.FC = () => {
    return (
        <div style={{ minHeight: "100vh" }}>
            <Container className="py-5">
                <Row>
                    <Col>
                        <h1>Welcome to Our Writing Community</h1>
                        <p>
                            Are you passionate about writing? Do you have a
                            story to tell? Whether you're a seasoned writer or
                            just starting out, our writing community is here to
                            support and inspire you on your journey.
                        </p>
                        <p>
                            Writing a book can be a challenging yet rewarding
                            experience. It requires dedication, creativity, and
                            perseverance. But with the right guidance and
                            resources, you can turn your ideas into a
                            captivating story that resonates with readers.
                        </p>
                        <p>
                            In this community, you'll find tips, resources, and
                            encouragement to help you navigate the writing
                            process. From brainstorming and outlining to
                            drafting and editing, we're here to provide you with
                            the support you need to bring your book to life.
                        </p>
                        <p>
                            Whether you're writing fiction or non-fiction, a
                            novel or a memoir, we believe that everyone has a
                            story worth telling. So join us and embark on your
                            writing journey today!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
