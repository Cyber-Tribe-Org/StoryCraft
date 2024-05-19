import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorksheetInfo from "../components/StoryInfo/WorksheetInfo";
import StoryWorksheet from "../components/StoryLayout/StoryWorksheet";
import CharacterArc from "../components/CharacterArc/CharacterArc";
import useEmailVerification from "../hooks/useEmailVerification";
import useAuth from "../hooks/useAuth";
import useUserProject, { UserInformation } from "../hooks/useUserProject";
import { auth } from "../config/firebase";
// import { useQuery } from "@tanstack/react-query";

const Story = () => {
    useEmailVerification();

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
