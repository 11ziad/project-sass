import React from 'react'
import Sidbar from '../SidBar/Sidbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
  
  
        <Sidbar></Sidbar>

        <div className="p-2 sm:ml-64 bg-slate-100 min-h-svh overflow-hidden">
  <div className="p-2">
      <Outlet>  
      </Outlet>

   </div>
</div>
        <Footer></Footer>


  </>
}
