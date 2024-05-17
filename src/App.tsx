import { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import router from "./routing/routes";
import { cloneProjectDocumentIfNeeded } from "./utils/firebaseUtils.ts";
// import "./utils/firebaseUtils.ts";
import { auth } from "./config/firebase";
import { RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const { userEmail, isAuthenticated, isVerified } = useAuth();

    useEffect(() => {
        const cloneProjectDocument = async () => {
            try {
                if (isAuthenticated && isVerified && userEmail) {
                    const name = auth.currentUser?.displayName
                        ? auth.currentUser?.displayName
                        : null;

                    const result = await cloneProjectDocumentIfNeeded(
                        userEmail,
                        name
                    );
                }
            } catch (error) {
                console.error("Error cloning project document:", error);
            }
        };

        cloneProjectDocument();
    }, [userEmail, isAuthenticated, isVerified]);

    return (
        <>
            <ToastContainer pauseOnFocusLoss={false} />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
