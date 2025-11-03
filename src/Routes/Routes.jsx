import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import AppDetails from "../Pages/AppDetails";
import InstalledApps from "../Pages/InstalledApps";
import Apps from "../Pages/Apps";
import Errorpage from "../Pages/Errorpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                index: true,
                element : <Home></Home>
            },
            {
                path: "/apps",
                element: <Apps></Apps>,
            },
            {
                path:"/app/:id",
                element: <AppDetails></AppDetails>,
            },
            {
                path: "/installed",
                element: <InstalledApps/>
            }

        ]
    }
]);
export default router