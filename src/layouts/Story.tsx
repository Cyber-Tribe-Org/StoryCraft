import { useEffect, useContext, useState } from "react";
import { UserContext } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
    getDocs,
    query,
    collection,
    limit,
    QuerySnapshot,
    DocumentData,
    where,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { Container, Row, Col } from "react-bootstrap";
import WorksheetInfo from "../components/StoryInfo/WorksheetInfo";
import StoryWorksheet from "../components/StoryLayout/StoryWorksheet";
import CharacterArc from "../components/CharacterArc/CharacterArc";
import useEmailVerification from "../hooks/useEmailVerification";

const Story = () => {
    const { userEmail, isVerified } = useContext(UserContext);
    const [storyboardData, setStoryboardData] = useState({});

    console.log("Loading  Story ....");
    const refUserProject = query(
        collection(db, "projects"),
        where("email", "==", userEmail)
    );

    const {
        data: queryProjectResult,
        isLoading,
        error,
    } = useFirestoreQuery(["projects", userEmail], refUserProject);

    // Handle loading and error states
    useEffect(() => {
        const fetchData = async () => {
            if (isLoading) {
                console.log("Loading data...");
            } else if (error) {
                console.error("Error fetching data:", error.message);
            } else if (
                queryProjectResult &&
                queryProjectResult.docs.length > 0
            ) {
                const projectId = queryProjectResult.docs[0].id;
                const worksheetQuery = query(
                    collection(db, `projects/${projectId}/worksheets`)
                );
                const worksheetSnapshot = await getDocs(worksheetQuery);
                if (!worksheetSnapshot.empty) {
                    const worksheetDoc = worksheetSnapshot.docs[0];
                    const storyboardQuery = collection(
                        worksheetDoc.ref,
                        "storyboards"
                    );
                    const storyboardSnapshot = await getDocs(storyboardQuery);
                    if (!storyboardSnapshot.empty) {
                        const storyboardDoc = storyboardSnapshot.docs[0];
                        const storyboardData = storyboardDoc.data();
                        console.log("Storyboard Data:", storyboardData);
                        setStoryboardData(storyboardData);
                    }
                }
                // console.log(
                //     "Data fetched successfully:",
                //     queryProjectResult?.docs[0].data()
                // );
            }
        };

        fetchData();
    }, [userEmail]);

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
