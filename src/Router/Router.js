import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Login from "../Pages/Authentication/Login/Login";
import Home from '../Pages/Home/Home/Home';
import Register from "../Pages/Authentication/Register/Register"

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/login',
                element: <Login />
            },
            {
              path: '/register',
              element: <Register />
            }
        ]
    }
])