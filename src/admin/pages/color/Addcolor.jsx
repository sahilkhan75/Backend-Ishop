import React, { useRef } from 'react';
import { FaLaptop, FaTshirt, FaMobileAlt, FaShoePrints, FaHome, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { MainContext } from '../../../Context';

const Addcolor = () => {
     
   const {API_BASE_URL , COLOR_URL, notify} = useContext(MainContext);

  const nameref = useRef();
  const slugref = useRef();

  function handlename () {
    const name = nameref.current.value;
    const slug = name.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,''); 
    slugref.current.value = slug;
  }

  function submithandle (event){
    event.preventDefault();

    const data = {
        name: nameref.current.value,
        slug: slugref.current.value,
        hexcode : event.target.hexcode.value
    }
    
 axios.post(API_BASE_URL + COLOR_URL + "/create" ,data).then(
  (res)=>{
    notify(res.data.msg , res.data.flag)
if(res.data.flag == 1){
  event.target.reset();
}
  }
).catch(
  (error)=>{
   console.log(error)
   notify("something went wrong" , 0)
  }
)

  }

  const icons = [
    { name: 'Electronics', icon: <FaLaptop /> },
    { name: 'Fashion', icon: <FaTshirt /> },
    { name: 'Mobiles', icon: <FaMobileAlt /> },
    { name: 'Footwear', icon: <FaShoePrints /> },
    { name: 'Home & Living', icon: <FaHome /> }
  ];

  return (
    <div className="max-w-xl mx-auto p-8 bg-white mt-4 shadow-lg rounded-2xl transition-all duration-300">
      <Link to="/admin/color">
        <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium mb-4 transition-colors">
          <FaArrowLeft className="mr-2" />
          Back to colors
        </button>
      </Link>

      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Add New color</h2>

      <form onSubmit={submithandle}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
            Name 
          </label>
          <input
            type="text"
            id="name"
            ref={nameref}
            onChange={handlename}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter color name"

          />
        </div>

        <div className="mb-6">
          <label htmlFor="slug" className="block text-base font-medium text-gray-700 mb-2">
             Slug
          </label>
          <input
            type="text"
            ref={slugref}
            id="slug"
            className="w-full p-3 bg-gray-100 text-gray-600 border border-gray-300 rounded-lg"
            placeholder="Slug will be generated automatically"
            disabled
          />
        </div>

        <div className="mb-6">
          <label htmlFor="hexcode" className="block text-base font-medium text-gray-700 mb-2">
            Hex code
          </label>
          <input
            type="color"
            name='hexcode'
            className="w-full p-3 bg-gray-100 text-gray-600 border border-gray-300 rounded-lg"
            
          />
        </div>


        {/* <div className="mb-6">
          <label className="block text-base font-medium text-gray-700 mb-2">
            Select Category Icon
          </label>
          <div className="grid grid-cols-3 gap-4">
            {icons.map((icon) => (
              <div
                key={icon.name}
                className=" flex flex-col items-center justify-center p-4 rounded-xl border bg-gray-100 text-gray-500"
              >
                <div className="text-3xl mb-2">{icon.icon}</div>
                <p className="text-sm font-medium">{icon.name}</p>
              </div>
            ))}
          </div>
        </div> */}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white text-lg py-3 rounded-lg "
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Addcolor;
