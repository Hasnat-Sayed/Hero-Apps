import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import AppDetails from "../Pages/AppDetails";
import InstalledApps from "../Pages/InstalledApps";
import Apps from "../Pages/Apps";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<p>sdfsdf</p>,
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
                path:"/apps/:id",
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