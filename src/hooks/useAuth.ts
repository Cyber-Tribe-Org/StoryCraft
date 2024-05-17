import { useState, useEffect } from "react";
import { auth } from "../config/firebase";

const useAuth = () => {
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUserEmail(user.email);
                setIsAuthenticated(true);
                setIsVerified(user.emailVerified);
            } else {
                setUserEmail(null);
                setIsAuthenticated(false);
                setIsVerified(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return { userEmail, isAuthenticated, isVerified };
};

export default useAuth;
