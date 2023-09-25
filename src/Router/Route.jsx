import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CardDonation from "../pages/CardDonation/CardDonation";

const myCreatedRoute = createBrowserRouter([
    {
        path : '/',
        element :<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children :[
            {
                path: '/',
                element : <Home></Home>,
                loader : ()=> fetch('/donationData.json')
            },
            {
                path:'/donation',
                element : <Donation></Donation>

            },
            {
                path : '/statistics',
                element : <Statistics></Statistics>
            },
            {
                path : '/cards/:id',
                element : <CardDonation></CardDonation>,
                loader :()=>fetch('/donationData.json')
            }
          


        ]
    }
])

export default myCreatedRoute;