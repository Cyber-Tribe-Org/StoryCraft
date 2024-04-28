import { createBrowserRouter } from "react-router-dom";
import Story from "../components/Story";

const router = createBrowserRouter([{ path: "/", element: <Story /> }]);

export default router;
