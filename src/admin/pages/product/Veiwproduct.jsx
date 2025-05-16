
import { MdEdit , MdDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../../Context";
import { useEffect } from "react";
import axios from "axios";



export default function Veiwproduct() {
const {notify, getproduct , products ,API_BASE_URL ,PRODUCT_URL,} = useContext(MainContext)

function statushandler(id ,flag ){
axios.patch(API_BASE_URL +PRODUCT_URL+`/status/${id}`,{flag}  ).then(
  (response)=>{
    notify(response.data.msg , response.data.flag)
       if(response.data.flag===1){
        getproduct()
       }
  }
).catch(
   (error)=>{
    console.log(error)
   }
)
}

function deletehandler(id){



axios.delete(API_BASE_URL+PRODUCT_URL+`/delete${id}`).then(
  (res)=>{
console.log(res)

  }
).catch(
  (error)=>{
console.log(error)
  }
)

}

useEffect(
  ()=>{
    getproduct()
  }
)

  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4 text-center">Product Table</h2>
      <div className="overflow-x-auto">

      <Link to={"/admin/product/add"}        className="text-2xl font-bold mb-4 text-center flex justify-end ">
      <button  className="p-3 bg-blue-500 rounded-2xl"> Add Product </button>
      </Link>
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left text-sm uppercase">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3"> Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">stock</th>
              <th className="px-4 py-3">Top Selling</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="px-4 py-3 font-medium">{product.name}</td>
                <td className="px-4 py-3">{product.slug}</td>
                <td className="px-4 py-3 gap-2">
                <span>  {product.originalPrice}</span>
                <span>  {product.DiscountPrice}%</span>
                <span>  ({product.FinalPrice})</span>
                </td>
               <td className="px-4 py-3 cursor-pointer" onClick={()=>statushandler(product._id ,1 ) } >{product.status ? " Active" : "Inactive"}</td>
                <td className="px-4 py-3 cursor-pointer"   onClick={()=>statushandler(product._id ,2)}>{product.stock ? " In Stock" : "Out of Stock"}</td>
                 <td className="px-4 py-3 cursor-pointer"  onClick={()=>statushandler(product._id ,3)}>{product.topSelling ? " Yes" : "No"}</td>
                <td className="px-4 py-3 flex gap-3 text-md">
                 <span> <MdEdit /> </span>
                 <span > <button onClick={()=>deletehandler(product._id)}>
                  <MdDelete />
                  </button></span>
                 <span> <FaRegEye /> </span>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
