import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Router, createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage/homePage'
import CataloguePage from './pages/CataloguePage/cataloguePage'
import AboutUsPage from './pages/AboutUsPage/aboutUsPage'


import './index.css'
import ShoppingCart from './Components/ShoppingCart/shoppingCart'
import UserPage from './pages/UserPage/userPage'
import OrdersPage from './pages/OrdersPage/ordersPage'




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "products",
    element: <CataloguePage />
  },
  {
    path: "orders",
    element: <OrdersPage />
  },
  {
    path: "about",
    element: <AboutUsPage />
  },
  {
    path: "user",
    element: <UserPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
