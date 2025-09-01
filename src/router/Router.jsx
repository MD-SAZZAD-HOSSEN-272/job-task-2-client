import HomeLayout from "../layout/HomeLayout";

import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Authentication from "../layout/Authentication";
import Login from "../Components/Login";
import Register from "../Components/Register";
import DashboardHome from "../pages/dashboard/DashboardHome";
import AddTask from "../pages/dashboard/AddTask";
import MyPostJobs from "../pages/dashboard/MyPostJobs";
import UpdateData from "../pages/dashboard/UpdateData";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children:[
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/dashboard',
                element: <DashboardHome></DashboardHome>,
                children: [
                    {
                        index: true,
                        element: <AddTask></AddTask>
                    },
                    {
                        path: 'my_posted_Jobs',
                        element: <MyPostJobs></MyPostJobs>
                    },
                    {
                        path: 'my_jobs/:id',
                        element: <UpdateData></UpdateData>
                    }
                ]
            }
        ]
    },
    {
        path:'/auth',
        element: <Authentication />,
        children: [
            {
                index: true,
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    }
])