import { createBrowserRouter, RouterProvider } from "react-router"
import './App.css'
import Layout from './Component/Layout/Layout'
import NotFound from "./Component/NotFound/NotFound"
import Meals from "./Component/Meals/Meals"
import Area from "./Component/Area/Area"
import Ingredients from "./Component/Ingredients/Ingredients"
import ProductDetails from "./Component/productDetails/ProductDetails"
import { Offline} from "react-detect-offline";


function App() {


  let routers = createBrowserRouter([
    {path  :'', element : <Layout/> , children : [
    {index : true , element  :<Meals/>},
    {path : 'area' , element  :<Area/>},
    {path : 'ingredient' , element  :<Ingredients/>},
    {path : 'productDitailsAll/:id' , element  :<ProductDetails/>},
    {path : '*' , element  :<NotFound/>}
    ]}
  ])
  return <>
    <div className=" bg-slate-100">

      <RouterProvider router ={routers}>
      <Offline><div className="  py-2 px-4 fixed right-0 bottom-0 ">
             <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-900  dark:text-red-400 dark:border-red-800" role="alert">
  <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Info</span>
  <div>
    <span className="font-medium me-1">Your Offline ?</span>Please Check your Enternet
  </div>
</div></div></Offline>
      </RouterProvider>
      <div>

  </div>
    </div>
    
  </>
      
}

export default App
