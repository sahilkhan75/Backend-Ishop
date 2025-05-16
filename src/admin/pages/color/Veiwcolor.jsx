import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../../../Context';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2/dist/sweetalert2.js';



const Veiwcolor=()=>{
  const { notify ,API_BASE_URL , COLOR_URL ,colors ,getcolors }   = useContext (MainContext);
  


  function statushandler (id){
 
    axios.patch(API_BASE_URL + COLOR_URL +  `/status/${id}` ).then(

      (res)=>{
        notify(res.data.msg , res.data.flag)
    if(res.data.flag == 1){
      getcolors()     
    }
      }
    ).catch(
      (error)=>{
       console.log(error)
       notify("something went wrong" , 0)
      }
    )

  }
  
  
  function deletehandler (id){

//   Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, delete it!"
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire({
//       title: "Deleted!",
//       text: "Your file has been deleted.",
//       icon: "success"
//     });
//   }
// })

 
    axios.delete(API_BASE_URL + COLOR_URL +  `/delete/${id}` ).then(

      (res)=>{
        notify(res.data.msg , res.data.flag)
    if(res.data.flag == 1){
      getcolors()     
    }
      }
    ).catch(
      (error)=>{
       console.log(error)
       notify("something went wrong" , 0)
      }
    )

  }

  useEffect(
    ()=>{
   getcolors();
    },[ ]
  )




  return (
    <div className="p-8">
      <div className='flex justify-between'>
      <h1 className="text-3xl font-semibold mb-6">color List</h1>
      <Link to="/admin/color/add">
      <div><button className='border rounded-3xl  hover:bg-blue-600 text-white  bg-blue-500 px-5 py-3 '>Add Color</button></div>
      </Link>
      </div>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg mt-4">
        <thead>
          <tr>
            <th className="p-4 text-left">s.no</th>
            <th className="p-4 text-left">Product Name</th>
            <th className="p-4 text-left">Slug</th>
            <th className="p-4 text-left">Hexcode</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Edit</th>
            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          { Array.isArray(colors) && colors.map((color, index) => (
            <tr key={index} className="border-b">
              <td className="p-4">{index+1}</td>
              <td className="p-4">{color.name}</td>
              <td className="p-4">{color.slug}</td>
              <td className="p-4">{color.hexcode}</td>
              <td className="p-4">
                <button onClick={()=>statushandler(color._id)}>
                {
                  color.status  ?
                  "Active" : "Inactive"
                }
                </button>
              </td>
              <td className='p-4' >
               <Link to={`/admin/color/edit/${color._id}`}>  
                 Edit 
              </Link> </td>
              <td className="p-4"><button onClick={()=>deletehandler(color._id)}> Delete </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Veiwcolor;
