import router from "./routing/routes";
import { RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <>
            <ToastContainer pauseOnFocusLoss={false} />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
