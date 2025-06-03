import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import Home from '../pages/Home';
import Nav from '../components/Nav';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';
import Footer from '../components/Footer';

function Layout() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer/>
        </>)
}


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "productdetails/:id", element: <ProductDetails /> },


        ]
    },
                { path: "register", element: <Register /> },
            { path: "login", element: <Login /> },
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}
