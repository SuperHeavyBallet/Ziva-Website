import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router, createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/homePage'


import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>
  },
  {
    path: "home",
    element: <HomePage />
  },
  {
    path: "catalogue",
    element: <div>Catalogue Page!</div>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
