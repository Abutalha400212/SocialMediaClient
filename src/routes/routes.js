import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About/About";
import PostDetails from "../pages/Details/PostDetails";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Media from "../pages/Media/Media";
import SignUp from "../pages/Register/Register";
import { AxiosInstance, baseURL } from "../utilis/AxiosInstance";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/media",
                element:<Media/>
            },
            {
                path:"/about",
                element:<PrivateRoute><About/></PrivateRoute>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<SignUp/>
            },
            {
                path:"/posts-details/:id",
                loader:({params})=>fetch(`${AxiosInstance}/posts-details/${params.id}`),
                element:<PostDetails/>
            }
        ]
    }
])