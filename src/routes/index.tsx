import { createBrowserRouter } from "react-router";
import App from "../App";
import GlobalErrorPage from "../components/GlobalErrorPage";
import ProjectDetails from "../components/ProjectDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <GlobalErrorPage />
    },
    {
        path: "/projects/:id",
        Component: ProjectDetails,
        errorElement: <GlobalErrorPage />,
    },
    {
        path: "*",
        element: <GlobalErrorPage />,
    },
])
    