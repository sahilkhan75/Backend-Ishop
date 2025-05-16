import React, { useEffect, useRef } from 'react';
import { FaLaptop, FaTshirt, FaMobileAlt, FaShoePrints, FaHome, FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { MainContext } from '../../../Context';

const EditCategory = () => {
     const {categoryId} = useParams() 
   const {API_BASE_URL , CATEGORY_URL ,getcategories, notify ,categories } = useContext(MainContext);

  const nameref = useRef();
  const slugref = useRef();

  function handlename () {
    const name = nameref.current.value;
    const slug = name.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,''); 
    slugref.current.value = slug;
  }

  console.log(categories)

  function submithandle (event){
    event.preventDefault();

    const formData = new FormData();
    formData.append("name" ,nameref.current.value );
    formData.append("slug" ,slugref.current.value );
    formData.append("image" ,event.target.category_image.files[0] );
   
    console.log(event.target.category_image.files[0] )


 axios.put(API_BASE_URL + CATEGORY_URL + "/update/" + categoryId ,formData).then(

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


  useEffect(
    ()=>{
        getcategories(categoryId)
    },[]
  )

  return (
    <div className="max-w-xl mx-auto p-8 bg-white mt-4 shadow-lg rounded-2xl transition-all duration-300">
      <Link to="/admin/category">
        <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium mb-4 transition-colors">
          <FaArrowLeft className="mr-2" />
          Back to Categories
        </button>
      </Link>

      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Add New Category</h2>

      <form onSubmit={submithandle}>
        <div className="mb-6">
          <label htmlFor="categoryName" className="block text-base font-medium text-gray-700 mb-2">
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            defaultValue={categories?.name}
            ref={nameref}
            onChange={handlename}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter category name"

          />
        </div>

        <div className="mb-6">
          <label htmlFor="categorySlug" className="block text-base font-medium text-gray-700 mb-2">
            Category Slug
          </label>
          <input
            type="text"
            ref={slugref}
            id="categorySlug"
            defaultValue={categories?.slug}
            className="w-full p-3 bg-gray-100 text-gray-600 border border-gray-300 rounded-lg"
            placeholder="Slug will be generated automatically"
            disabled
          />
        </div>

        <div className="mb-6">
          <label htmlFor="categorySlug" className="block text-base font-medium text-gray-700 mb-2">
            Category Image
          </label>
          <input
            type="file"
            name='category_image'
            className="w-full p-3 bg-gray-100 text-gray-600 border border-gray-300 rounded-lg"
          />
          <img width="55px" src={`${API_BASE_URL}/images/category/${categories.image}`} alt="" />
        </div>


        <div className="mb-6">
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
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white text-lg py-3 rounded-lg "
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
