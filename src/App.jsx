import { createBrowserRouter, RouterProvider } from "react-router"
import './App.css'
import Layout from './Component/Layout/Layout'
import Names from './Component/Names/Names'
import ProductDetails from "./Component/productDetails/ProductDetails"
import Home from "./Component/Home/Home"
import NotFound from "./Component/NotFound/NotFound"


function App() {


  let routers = createBrowserRouter([
    {path  :'', element : <Layout/> , children : [
      {index : true, element : <Home/>},
    {path : '/:name' , element  :<Names/>},
    {path : 'productDitailsAll/:id' , element  :<ProductDetails/>},
    {path : '*' , element  :<NotFound/>}
    ]}
  ])
  return <>
    <div className=" bg-slate-100">

      <RouterProvider router ={routers}></RouterProvider>
    </div>
    
  </>
      
}

export default App
