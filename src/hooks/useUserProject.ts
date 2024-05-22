import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../config/firebase";
import { auth } from "../config/firebase";

export interface UserInformation {
    address: string;
    age: number;
    country: string;
    email: string;
    gender: "Male" | "Female";
    is_online: boolean;
    name: string;
    profession: string;
    username: string;
}

const useUserProject = () => {
    const userEmail = auth?.currentUser?.email;

    // Check if the user login and verification was done before that
    if (!userEmail || !auth?.currentUser?.emailVerified) {
        console.log("dsadasdasd", userEmail);
        return null;
    }

    return useQuery<UserInformation, Error>({
        queryKey: ["projects", userEmail] as [string, string], // hierarchical structure (same like designing URLs for APIs)
        queryFn: () => async () => {
            try {
                // Query the projects collection for the document with matching email
                const projectQuery = query(
                    collection(db, "projects"),
                    where("email", "==", userEmail)
                );
                const querySnapshot = await getDocs(projectQuery);

                // Check if a document is not found
                if (querySnapshot.empty) {
                    console.error("User project is not found.");
                    return null;
                }

                // Return the data of the first document found
                const projectData = querySnapshot.docs[0].data();
                return projectData;
            } catch (error) {
                console.error(error);
                return null;
            }
        },
    });
};

export default useUserProject;
