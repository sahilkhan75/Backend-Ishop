import React from 'react'
import WebLayout from './website/pages/WebLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './website/pages/Home'
import Adminlayout from './admin/pages/Adminlayout'
import Dashboard from './admin/pages/Dashboard'
import Veiwcategory from './admin/pages/category/Veiwcategory'
import Addcategory from './admin/pages/category/Addcategory'
import EditCategory from './admin/pages/category/Editcategory'
import Veiwcolor from './admin/pages/color/Veiwcolor'
import Addcolor from './admin/pages/color/Addcolor'
import Editcolor from './admin/pages/color/Editcolor'
import Veiwproduct from './admin/pages/product/Veiwproduct'
import Addproduct from './admin/pages/product/Addproduct'

export default function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<WebLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        }
      ]
    
    } , 
    {
      path:"/admin",
      element:<Adminlayout/>,
      children:[
        {
          path:"/admin",
          element:<Dashboard/>
        },
        {
          path:"category",
          element:<Veiwcategory/>
        },
        {
          path:"category/add",
          element:<Addcategory/>
        },
        {
          path:"category/edit/:categoryId",
          element:<EditCategory/>
        },
        {
          path: "color",
          element: <Veiwcolor/>
        },
        {
          path:"color/add",
          element: <Addcolor/>
        },
        {
          path:"color/edit/:id",
          element:<Editcolor/>
        },
        {
           path:"product",
           element:<Veiwproduct/>
        },
        {
          path:"product/add",
          element:<Addproduct/>
        }
      ]
    }
  ])
  return (
  <RouterProvider router= {router}/>
  )
}
