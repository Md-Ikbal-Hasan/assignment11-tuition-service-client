import { createBrowserRouter } from "react-router-dom";
import Main from '../../layout/Main'
import ErrorPage from '../../Pages/ErrorPage/ErrorPage'
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from '../../Pages/Blog/Blog'
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddService from "../../Pages/AddService/AddService";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import EditReview from "../../Pages/EditReview/EditReview";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://tuition-service-server.vercel.app/')
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
                element: <Services></Services>,
                loader: () => fetch('https://tuition-service-server.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://tuition-service-server.vercel.app/services/${params.id}`)

            },
            {

                path: "/addservice",
                element: <PrivateRoute> <AddService></AddService> </PrivateRoute>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute> <MyReviews></MyReviews> </PrivateRoute>,
            },
            {
                path: `/editreviews/:id`,
                element: <PrivateRoute>  <EditReview></EditReview> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://tuition-service-server.vercel.app/reviews/${params.id}`)

            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]

    }
])

export default router