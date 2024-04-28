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
import UpdatePage from "../Pages/UpdatePage/UpdatePage";
import ViewDetails from "../Components/ViewDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        errorElement: <ErrorPages></ErrorPages>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader:() => fetch('http://localhost:5000/crafts')
            },
            {
                path: '/all-art-and-crafts',
                element: <AllArtCrafts></AllArtCrafts>,
                loader:() => fetch('http://localhost:5000/crafts')
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
                path: '/update-crafts/:id',
                element: <PrivateRoutes><UpdatePage></UpdatePage></PrivateRoutes>,
                loader:({params}) => fetch(`http://localhost:5000/crafts/${params.id}`)
            },
            {
                path: '/view-details/:id',
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader:({params}) => fetch(`http://localhost:5000/crafts/${params.id}`)

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