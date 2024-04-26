import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import ErrorPages from "../Components/ErrorPages";
import Home from "../Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AllArtCrafts from "../Pages/AllArtCrafts/AllArtCrafts";
import AddCrafts from "../Pages/AddCrafts/AddCrafts";
import MyArtCrafts from "../Pages/MyArtCrafts/MyArtCrafts";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        errorElement: <ErrorPages></ErrorPages>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-art-and-crafts',
                element: <AllArtCrafts></AllArtCrafts>
            },
            {
                path: '/add-crafts',
                element: <PrivateRoutes><AddCrafts></AddCrafts></PrivateRoutes>
            },
            {
                path: '/my-art-craft',
                element: <PrivateRoutes><MyArtCrafts></MyArtCrafts></PrivateRoutes>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path : '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
]);

export default routes;