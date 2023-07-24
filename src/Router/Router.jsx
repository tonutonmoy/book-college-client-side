import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Component/Home/Home";
import DetailsPage from "../Component/DetailsPage/DetailsPage";
import College from "../Component/College/College";
import Admission from "../Component/Admission/Admission";
import Registration from "../Component/Registration/Registration";
import Login from "../Component/Login/Login";
import Profile from "../Component/Profile/Profile";
import MyCollege from "../Component/MyCollege/MyCollege";

import NotFound from "../Component/MyCollege/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/detailsPage/:id',
                element: <DetailsPage></DetailsPage>
            },
            {
                path: '/college',
                element: <College></College>
            },
            {
                path: '/admission',
                element: <Admission></Admission>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/profile',
                element: 
                    
                        <Profile></Profile>
                    
                


            },
            {
                path: '/myCollege',
                element: <MyCollege></MyCollege>
            },
            {
                path:'*',
                element:<NotFound></NotFound>
              }
        ]
    },
]);