import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Story from "../components/Story";
import Login from "../components/Login";
import Home from "../layouts/Home";
import About from "../layouts/About";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="story" element={<Story />} />
        </Route>
    )
);

export default router;
