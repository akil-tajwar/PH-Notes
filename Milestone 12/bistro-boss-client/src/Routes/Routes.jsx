import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'ourmenu',
                element: <OurMenu></OurMenu>
            },
            {
                path: 'ourshop',
                element: <OurShop></OurShop>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    },
]);