import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router, createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage/homePage'
import CataloguePage from './pages/CataloguePage/cataloguePage'
import AboutUsPage from './pages/AboutUsPage/aboutUsPage'


import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "catalogue",
    element: <CataloguePage />
  },
  {
    path: "about",
    element: <AboutUsPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
