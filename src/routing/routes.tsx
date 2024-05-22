import { createBrowserRouter } from "react-router-dom";
import Story from "../layouts/Story";
import Login from "../layouts/Login";
import Signup from "../layouts/Signup";
import Home from "../layouts/Home";
import Profile from "../layouts/Profile/Profile";
import RootLayout from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "profile", element: <Profile /> },
            { path: "signup", element: <Signup /> },
            { path: "login", element: <Login /> },
        ],
    },
    {
        element: <PrivateRoutes />,
        children: [{ path: "/story", element: <Story /> }],
    },
]);

export default router;
