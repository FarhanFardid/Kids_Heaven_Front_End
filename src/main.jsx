import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Error from './Components/Pages/Error/Error.jsx'
import Login from './Components/Pages/Authentication/Login'
import SignUp from './Components/Pages/Authentication/SignUp'
import Blogs from './Components/Pages/Blog/Blogs'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      }
    ]

  },
  {
    path:'*',
    element: <Error></Error>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
