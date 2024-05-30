import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../App";
import { toast } from "react-toastify";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Container, Row, Col, Button } from "react-bootstrap";
import StoryboardInfo from "../../components/StoryInfo/StoryboardInfo";
import { StoryboardData } from "../../entities/StoryboardInterfaces";
import StoryWorksheet from "../../components/StoryLayout/StoryWorksheet";
import CharacterArc from "../../components/CharacterArc/CharacterArc";
import "./Story.css"; // Assuming you have a CSS file for custom styles

const Story = () => {
    const { userEmail } = useContext(UserContext);
    const [hasChanges, setHasChanges] = useState(false);
    const [storyboardData, setStoryboardData] = useState<StoryboardData>({
        AchillesHeel: "",
        consciousDesire: "",
        dramaticQuestion: "",
        logline: "",
        moralImperative: "",
        moralSphere: "",
        protagonist: "",
        theme: "",
        title: "",
        unconsciousDrive: "",
        ACTS: [],
    });

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
                        const data = storyboardDoc.data();

                        // Extract and set the relevant parts of the data
                        const infoData: StoryboardData = {
                            AchillesHeel: data.AchillesHeel,
                            consciousDesire: data.consciousDesire,
                            dramaticQuestion: data.dramaticQuestion,
                            logline: data.logline,
                            moralImperative: data.moralImperative,
                            moralSphere: data.moralSphere,
                            protagonist: data.protagonist,
                            theme: data.theme,
                            title: data.title,
                            unconsciousDrive: data.unconsciousDrive,
                            ACTS: data.ACTS,
                        };

                        setStoryboardData(infoData);
                        setHasChanges(false);
                    }
                }
            }
        };

        fetchData();
    }, [userEmail, isLoading, queryProjectResult, error]);

    // Track changes in storyboardData
    useEffect(() => {
        setHasChanges(true);
    }, [storyboardData]);

    const handleSave = () => {
        // Save storyboard data logic here
        console.log("Saving storyboard data:", storyboardData);
        toast.success("Storyboard data saved successfully!");
        setHasChanges(false);
    };

    if (isLoading) return <div>Loading ...</div>;

    return (
        <Container>
            {hasChanges && (
                <Row>
                    <Button
                        variant="dark"
                        className={`save-button ${
                            hasChanges ? "blinking" : ""
                        }`}
                        onClick={handleSave}
                    >
                        Save Changes
                    </Button>
                </Row>
            )}
            <Row>
                <Col>
                    <StoryboardInfo data={storyboardData} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <StoryWorksheet data={storyboardData} />
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
