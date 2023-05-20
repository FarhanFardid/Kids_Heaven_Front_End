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
import AuthProvider from './Components/Providers/AuthProvider'
import PrivateRoute from './Components/Providers/PrivateRoute'
import AddToys from './Components/Toys/AddToys'
import AllToys from './Components/Toys/AllToys'
import ToyDetails from './Components/Toys/ToyDetails'


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
      },
      {
        path:'allToy',
        element:<AllToys></AllToys>,
        loader: ()=> fetch('http://localhost:5000/toys')
      },
      {
        path:'addToy',
        element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
       path: 'toyDetails/:id',
       element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
       loader: ({params})=> fetch(`http://localhost:5000/toys/${params.id}`)
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
   <AuthProvider> <RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
