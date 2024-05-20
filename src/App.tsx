import { useEffect, createContext } from "react";
import { auth } from "./config/firebase";
import useAuth from "./hooks/useAuth";
import router from "./routing/routes";
import { cloneProjectDocumentIfNeeded } from "./utils/firebaseUtils.ts";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = createContext<{
    userEmail: string | null;
    isAuthenticated: boolean;
    isVerified: boolean;
}>({ userEmail: null, isAuthenticated: false, isVerified: false });

function App() {
    const { userEmail, isAuthenticated, isVerified } = useAuth();

    useEffect(() => {
        const cloneProjectDocument = async () => {
            try {
                if (isAuthenticated && isVerified && userEmail) {
                    const name = auth.currentUser?.displayName || null;

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
    console.log("Loading the main app");
    return (
        <>
            <ToastContainer pauseOnFocusLoss={false} />
            <UserContext.Provider
                value={{ userEmail, isAuthenticated, isVerified }}
            >
                <RouterProvider router={router} />
            </UserContext.Provider>
        </>
    );
}

export default App;
