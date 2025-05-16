import React, { useContext, useRef } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../../../Context';
import Select from 'react-select';
import { useState } from 'react';
import axios from 'axios';



export default function AddProduct() {

  const {notify , categories , getcategories  ,colors ,getcolors,API_BASE_URL ,PRODUCT_URL,} =useContext(MainContext)
  const [selcolor , setselcolor] = useState()

  const nameRef = useRef();
  const slugRef = useRef();
  const originalPriceRef = useRef();
  const discountPriceRef = useRef();
  const finalPriceRef = useRef();

  function handlenamechange(){
    const name = nameRef.current.value;
    const slug = name.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');
    slugRef.current.value = slug;
  }

  function FinalpriceCal(){
    const OP = originalPriceRef.current.value;
    const DP = discountPriceRef.current.value;
    const FP =Math.floor(OP - (OP*(DP/100)))
    finalPriceRef.current.value =FP;
  }

  function submithandler (event){
    event.preventDefault();
const form = event.currentTarget;


    const formData = new FormData()
    formData.append('name' , nameRef.current.value);
    formData.append('slug' ,slugRef.current.value)
    formData.append('originalPrice' , originalPriceRef.current.value)
    formData.append('discountPrice' , discountPriceRef.current.value)
    formData.append('finalPrice' , finalPriceRef.current.value)
    formData.append('thumbnail' , event.target.thumbnail.files[0])
    formData.append('shortDescription' , event.target.shortdescription.value)
    formData.append('longDescription' , event.target.longdescription.value);
    formData.append('categoryId' , event.target.categoryId.value);
    formData.append("colors",JSON.stringify(selcolor));
    
    axios.post(API_BASE_URL + PRODUCT_URL + "/create" , formData).then(
      (response)=>{
        notify(response.data.msg,response.data.flag)
       if(response.data.flag === 1) {
        event.target.reset()
       } 
      }
    ).catch(
      (error)=>{
        console.log(error)
      }
    )
    
    
  }

  useEffect(
    ()=>{
    getcategories ()
    getcolors()
    },[]
  )



  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-10 transition-all duration-300">
           <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Add a New Product</h2>
         <div className="mb-10">
          <Link to={"/admin/product"}
            className="inline-block bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 text-sm font-medium rounded-md transition duration-200"
          >
            ← Back to Products
          </Link>
        </div>
        <form onSubmit={submithandler} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name='name'
                ref={nameRef}
                onChange={handlenamechange}
                placeholder="Enter product name"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 hover:shadow-md"
                required
              />
            </div>

            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                Slug
              </label>
              <input
                type="text"
                name='slug'
                ref={slugRef}
                id="slug"
                onChange={handlenamechange}
                placeholder="product-name"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 hover:shadow-md"
                disabled
              />
            </div>
      <div className='col-span-2 flex justify-between flex-wrap'>
         <div>
              <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700 mb-1">
               Original Price
              </label>
              <input
                type="number"
                name='originalPrice'
                id="originalPrice"
                ref={originalPriceRef}
                onChange={FinalpriceCal}
                placeholder="$2999"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 hover:shadow-md"
                required
              />
            </div>
            <div>
              <label htmlFor="discountPrice" className="block text-sm font-medium text-gray-700 mb-1">
               Dicount Price
              </label>
              <input
                type="number"
                id="discountPrice"
                name='discountPrice'
                ref={discountPriceRef}
                onChange={FinalpriceCal}
                placeholder="$2999"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 hover:shadow-md"
                required
              />
            </div>
            <div>
              <label htmlFor="finalPrice" className="block text-sm font-medium text-gray-700 mb-1">
               Final Price
              </label>
              <input
                type="number"
                name='finalPrice'
                id="price"
                ref={finalPriceRef}
                placeholder="$2999"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 hover:shadow-md"
                readOnly
              />
            </div>
      </div>
            

            <div>
              <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700 mb-1">
                Category Id
              </label>
               <Select name='categoryId' options={
                categories.map(
                  (cat , index)=>{
                     return {value:cat._id , label:cat.name}
                  }
                )
               } 
                />
            </div>

           <div>
              <label htmlFor="colors" className="block text-sm font-medium text-gray-700 mb-1">
                Colors
              </label>
               <Select 
               onChange={
              (color)=>{
            const col = color.map(o => o.value)
            setselcolor(col)
              }
               }
               isMulti closeMenuOnSelect={false}  options={
                colors.map(
                  (color , index)=>{
                     return {value:color._id , label:color.name}
                  }
                )
               } 
                />
            </div>
            </div>
          

          <div>
            <label htmlFor="shortdescription" className="block text-sm font-medium text-gray-700 mb-1">
            Short  Description
            </label>
            <textarea
              id="shortdescription"
              rows=""
              name='shortdescription'
              placeholder="Enter product description"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 hover:shadow-md"
            ></textarea>
          </div>

          <div>
            <label htmlFor="longdescription" className="block text-sm font-medium text-gray-700 mb-1">
              Long Description
            </label>
            <textarea
              id="longdescription"
              name='longdescription'
              rows="5"
              placeholder="Enter product description"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 hover:shadow-md"
            ></textarea>
          </div>

          <div>
            <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700 mb-1">
             Thumbnail
            </label>
            <input
             type="file"
             name='thumbnail'
             id='thumbnail'
             className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 hover:shadow-md" />
          </div>


          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
