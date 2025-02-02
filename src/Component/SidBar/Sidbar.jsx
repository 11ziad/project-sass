import React from 'react'
import logo from '../../assets/logo-BfNap0Pe.png'
import { NavLink } from 'react-router-dom'
export default function Sidbar() {
  return<>
  
   
  <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center z-50 fixed p-2 mt-2 ms-3 text-sm  sm:hidden rounded-lg bg-orange-400  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-100 dark:focus:ring-gray-600">
  <span className="sr-only">Open sidebar</span>
  <svg className="w-6 h-6" aria-hidden="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
  </svg>
</button>


<aside id="default-sidebar" className=" fixed z-20 mb-96 md:me-20 top-0 left-0  w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-white">
      <ul className="space-y-2 font-medium">
                   
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className=" sm:hidden hidden md:hidden items-center p-2 mt-2 ms-3 text-sm rounded-lg bg-orange-400 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600">
  <span className="sr-only">Open sidebar</span>
  <svg className="w-6 h-6" aria-hidden="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
  </svg>
</button>

<img src={logo} alt="" />

 
<li>
  <NavLink to={'/ '} className="flex ps-4 bg-orange-400 shadow-lg hover:cursor-pointer shadow-amber-600 ms-2  text-white  mb-4 items-center  p-2 rounded-lg  group">
    <i className="fa-solid fa-utensils" />
    <span className="flex-1 ms-3 whitespace-nowrap font-bold text-lg">Meals</span>
  </NavLink>
</li>



        
    <li>
  <span className="flex ps-4 mb-4 items-center border hover:cursor-pointer hover:scale-105 transition-all  hover:scale-y-105 border-gray-300 p-2 text-gray-900 rounded-lg  group">
    <i className="fa-solid fa-utensils" />
    <span className="flex-1 ms-3 whitespace-nowrap font-semibold ">Ingredients</span>
  </span>
</li>

<li>
  <span className="flex ps-4 items-center hover:scale-105 hover:cursor-pointer  hover:scale-y-105 transition-all  border border-gray-300 p-2 rounded-lg  group">
    <i className="fa-solid fa-utensils" />
    <span className="flex-1 ms-3 whitespace-nowrap font-semibold">Area</span>
  </span>
</li>

      </ul>
   </div>
</aside>

  </>
}
