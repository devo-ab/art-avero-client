import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import ErrorPages from "../Components/ErrorPages";
import Home from "../Home/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        errorElement: <ErrorPages></ErrorPages>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
]);

export default routes;