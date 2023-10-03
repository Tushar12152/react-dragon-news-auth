import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root/Root";
import Home from "../pages/Home/Home";

const Routs = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            }
        ]
    }
])

export default Routs;