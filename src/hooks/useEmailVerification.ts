import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../config/firebase";

const useEmailVerification = () => {
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setIsEmailVerified(user?.emailVerified);
                if (!user.emailVerified) {
                    toast.error(
                        "Please verify your email address before continue.",
                        {
                            position: "top-center",
                            autoClose: 4000,
                        }
                    );
                    navigate("/");
                }
            }
        });

        return () => unsubscribe();
    }, []);

    return isEmailVerified;
};

export default useEmailVerification;
