import { createBrowserRouter } from "react-router-dom";
import Main from '../../layout/Main'
import ErrorPage from '../../Pages/ErrorPage/ErrorPage'
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from '../../Pages/Blog/Blog'
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <Login></Login>

            },
            {
                path: '/services',
                element: <PrivateRoute> <Services></Services> </PrivateRoute>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]

    }
])

export default router