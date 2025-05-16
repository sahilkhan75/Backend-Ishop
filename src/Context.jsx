  import React, { createContext ,useState } from 'react'
  const MainContext =createContext();
  import { ToastContainer, toast } from 'react-toastify';
  import axios from 'axios';


  function Context(props) {
      const [categories ,setcategories] = useState([]);
      const [colors ,setcolors] = useState([]);
      const [products ,setproducts] = useState([]);
      const API_BASE_URL = "http://localhost:5000/"
      const CATEGORY_URL = "category"
      const COLOR_URL = "color"
      const PRODUCT_URL = "product"
      
      
      const notify = (msg ,flag ) => toast( msg , {type: flag ? "succes" : "error"});
      function getcategories (id = null){
        
        let URL = API_BASE_URL + CATEGORY_URL;
          if(id != null){
          URL = URL + `/${id}`
          }

          axios.get(URL).then(
          (res)=>{
            if(res.data.flag==1){
              setcategories(res.data.categories)
            }
          }
          ).catch(
            (error)=>{
              setcategories([]);
            }
          )
        }

        function getcolors (id = null){
        
        let URL = API_BASE_URL + COLOR_URL;
          if(id != null){
          URL = URL + `/${id}`
          }

          axios.get(URL).then(
          (res)=>{
            if(res.data.flag==1){
              setcolors(res.data.colors)
            }
          }
          ).catch(
            (error)=>{
              setcolors([]);
            console.log(error)
            }
          )
        }

        
        function getproduct (id = null){
        
        let URL = API_BASE_URL + PRODUCT_URL;
          if(id != null){
          URL = URL + `/${id}`
          }

          axios.get(URL).then(
          (res)=>{
            if(res.data.flag==1){
              setproducts(res.data.products)
            }
          }
          ).catch(
            (error)=>{
              setproducts([]);
            console.log(error)
            }
          )
        }


    return (
      <MainContext.Provider value={{API_BASE_URL ,PRODUCT_URL, CATEGORY_URL , notify , categories , getcategories , COLOR_URL ,colors ,getcolors ,products,getproduct }}>
                  <ToastContainer />
          {
              props.children
          }
      </MainContext.Provider>
    )
  }

  export default Context;
  export {MainContext};
