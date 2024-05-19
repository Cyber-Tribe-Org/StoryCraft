import React from "react";
import useAuth from "../hooks/useAuth";

const Profile = () => {
    const { userEmail, isAuthenticated, isVerified } = useAuth();
    return <div>Profile</div>;
};

export default Profile;
