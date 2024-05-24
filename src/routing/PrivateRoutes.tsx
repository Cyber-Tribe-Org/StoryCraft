import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";

const PrivateRoutes = () => {
    const { userEmail, isVerified } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [isVerified, userEmail]);

    if (loading) {
        return null;
    }

    if (!isVerified && userEmail) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="root-layout">
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default PrivateRoutes;
