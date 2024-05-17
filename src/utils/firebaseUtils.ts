import { db } from "../config/firebase";

import {
    DocumentReference,
    CollectionReference,
    DocumentData,
    collection,
    addDoc,
    getDoc,
    getDocs,
    query,
    where,
    connectFirestoreEmulator,
} from "firebase/firestore";

const cloneProjectDocumentIfNeeded = async (
    userEmail: string,
    userName?: string | null
): Promise<DocumentData | undefined> => {
    try {
        // Check if there is a document with the user's email
        const projectRef = collection(db, "projects");
        const userProjectQuery = query(
            projectRef,
            where("email", "==", userEmail)
        );
        const userProjectSnapshot = await getDocs(userProjectQuery);

        // If a document with the user's email exists, return its data
        if (!userProjectSnapshot.empty) {
            const docSnapshot = userProjectSnapshot.docs[0];
            return docSnapshot.data();
        }

        // If no document with the user's email exists, clone the template document
        const templateProjectQuery = query(
            projectRef,
            where("email", "==", "")
        );
        const templateProjectSnapshot = await getDocs(templateProjectQuery);

        // Throws an error if template project doesn't exist
        if (templateProjectSnapshot.empty) {
            throw new Error("Error: Template project does not exist.");
        }

        // Get the data from template project
        const templateProjectDoc = templateProjectSnapshot.docs[0];
        const templateProjectDocData = templateProjectDoc.data();

        // Generate a unique username based on the provided userName and registration time
        let currentTime = new Date().toISOString().replace(/[^\d]/g, "");

        let uniqueUsername = userName ? userName : "Anonymous";
        uniqueUsername = `${uniqueUsername}-${currentTime}`;

        // Create a new project document for the User from template project
        const newUserProjectRef = await addDoc(projectRef, {
            ...templateProjectDocData,
            email: userEmail,
            name: userName || "",
            username: uniqueUsername,
        });

        // Clone nested 'worksheets' subcollections
        const templateWorksheetsRef = collection(
            templateProjectDoc.ref,
            "worksheets"
        );
        const newWorksheetsRef = collection(newUserProjectRef, "worksheets");
        await cloneSubcollection(templateWorksheetsRef, newWorksheetsRef);

        // Clone nested 'storyboards' subcollection under 'worksheets'
        const templateWorksheetsSnapshot = await getDocs(templateWorksheetsRef);
        const templateStoryboardsRef = collection(
            templateWorksheetsSnapshot.docs[0].ref,
            "storyboards"
        );

        const newWorksheetsSnapshot = await getDocs(newWorksheetsRef);
        const newStoryboardsRef = collection(
            newWorksheetsSnapshot.docs[0].ref,
            "storyboards"
        );
        await cloneSubcollection(templateStoryboardsRef, newStoryboardsRef);

        // Retrieve the document which contains everything about the user from 'projects' collection
        const newUserProjectSnapshot = await getDoc(newUserProjectRef);
        return newUserProjectSnapshot.data();
    } catch (error) {
        console.error("Error cloning project document:", error);
        throw error; // Rethrow the error
    }
};

const cloneSubcollection = async (
    sourceCollectionRef: any,
    targetCollectionRef: any
): Promise<void> => {
    // Fetch all documents in the source subcollection
    const docsSnapshot = await getDocs(sourceCollectionRef);
    // Clone each document to the target subcollection
    await Promise.all(
        docsSnapshot.docs.map(async (docItem: DocumentData) => {
            // Create a new document with the same data in the target subcollection
            const newUserProjectRef = await addDoc(targetCollectionRef, {
                ...docItem.data(),
            });
        })
    );
};

export { cloneProjectDocumentIfNeeded };
