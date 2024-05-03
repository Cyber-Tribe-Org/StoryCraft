import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Story from "../layouts/Story";
import Login from "../layouts/Login";
import Home from "../layouts/Home";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="story" element={<Story />} />
            <Route path="login" element={<Login />} />
        </Route>
    )
);

export default router;
