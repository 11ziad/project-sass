import { createBrowserRouter, RouterProvider } from "react-router"
import { lazy } from "react"
import './App.css'
import Layout from './Component/Layout/Layout'
import NotFound from "./Component/NotFound/NotFound"
const Meals = lazy(()=> import('./Component/Meals/Meals'))
const Area = lazy(()=> import("./Component/Area/Area"))
const Ingredients = lazy(()=> import("./Component/Ingredients/Ingredients"))
import ProductDetails from "./Component/productDetails/ProductDetails"
import { Offline} from "react-detect-offline";
import Search from "./Component/Search/Search"


function App() {


  let routers = createBrowserRouter([
    {path  :'', element : <Layout/> , children : [
    {path : 'meals' , element  :<Meals/>},
    {path : 'area' , element  :<Area/>},
    {index : true , element  :<Ingredients/>},
    {path : 'search' , element  :<Search/>},
    {path : 'productDitailsAll/:id' , element  :<ProductDetails/>},
    {path : '*' , element  :<NotFound/>}
    ]}
  ])
  return <>
    <div className=" bg-slate-100">

      <RouterProvider router ={routers}>
      </RouterProvider>
      <Offline><div className="  py-2 fixed right-0 bottom-0 ">
             <div className="flex items-center p-4 mb-1 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 " role="alert">
  <i className="fa-solid fa-xmark flex  items-center me-2  text-sm text-red-800 "></i>
  <span className="sr-only">Info</span>
  <div>
    <span className="font-medium me-1">Your Offline ?</span>Please Check your Enternet
  </div>
</div></div></Offline>
      <div>

  </div>
    </div>
    
  </>
      
}

export default App
