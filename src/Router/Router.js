import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Login from "../Pages/Authentication/Login/Login";
import Home from '../Pages/Home/Home/Home';
import Register from "../Pages/Authentication/Register/Register"
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import PrivateRouter from "./PrivateRouter";
import DashboardLayout from "../Layout/DashboardLayout";
import MyAppointment from "../Pages/Dashboard/MyAppoinment/MyAppointment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../Layout/AdminRoute";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";

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
                path:'/about',
                element: <About />
            },
            {
                path:'/appointment',
                element: <Appointment />
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
    },

    {
        path:'/dashboard',
        element: <PrivateRouter><DashboardLayout /></PrivateRouter>,
        children:[
            {
                path:'/dashboard',
                element:<MyAppointment />
            },
            {
                path:'/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/add_doctor',
                element: <AdminRoute><AddDoctor /></AdminRoute>
            },
            {
                path:'/dashboard/manage_doctors',
                element: <AdminRoute><ManageDoctors /></AdminRoute>
            },
        ]  
        
    }
])