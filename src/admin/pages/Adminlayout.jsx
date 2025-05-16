import React from 'react'
import Header from '../components/Header'
import {Outlet} from "react-router-dom"
import Sidemenu from '../components/Sidemenu'


export default function Adminlayout() {
  return (
    <div className='w-full grid grid-cols-5' >
        <div className='col-span-1'>
          <Sidemenu/>
        </div>
        <div className='col-span-4 w-full'>
        <Header/>
        <Outlet/>
        </div>
     </div>
  )
}
