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
import CategoriesCard from "../Components/CategoriesCard";
import CateDetails from "../Components/CateDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        errorElement: <ErrorPages></ErrorPages>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader:() => fetch('https://art-avero-server.vercel.app/crafts')
            },
            {
                path: '/all-art-and-crafts',
                element: <AllArtCrafts></AllArtCrafts>,
                loader:() => fetch('https://art-avero-server.vercel.app/crafts')
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
                loader:({params}) => fetch(`https://art-avero-server.vercel.app/crafts/${params.id}`)
            },
            {
                path: '/view-details/:id',
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader:({params}) => fetch(`https://art-avero-server.vercel.app/crafts/${params.id}`)

            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path : '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/subCategories/:id',
                element: <CategoriesCard></CategoriesCard>,
                loader:({params}) => fetch(`https://art-avero-server.vercel.app/subCategories/${params.id}`)
            },
            {
                path: '/subCategories/cateDetails/:id',
                element: <CateDetails></CateDetails>,
                loader:({params}) => fetch(`https://art-avero-server.vercel.app/subCategories/${params.id}`)
            },
            
        ]
    }
]);

export default routes;