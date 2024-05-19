import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    useNavigate,
} from "react-router-dom";
import Story from "../layouts/Story";
import Login from "../layouts/Login";
import Signup from "../layouts/Signup";
import Home from "../layouts/Home";
import Profile from "../layouts/Profile";
import RootLayout from "../layouts/RootLayout";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated, isVerified } = useAuth();
    const navigate = useNavigate();

    // Redirect if not authenticated or email not verified
    if (!isAuthenticated || !isVerified) {
        navigate("/", { replace: true });
        return <Home />; // Return the Home page
    } else {
        return children; // Render the protected content
    }
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route
                path="story"
                element={
                    <ProtectedRoute>
                        <Story />
                    </ProtectedRoute>
                }
            />
            <Route
                path="profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
        </Route>
    )
);

export default router;
