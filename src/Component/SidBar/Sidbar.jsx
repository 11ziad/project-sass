import React, { useState } from 'react'
import logo from '../../assets/logo-BfNap0Pe.png'
import { NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'
export default function Sidbar() {
  
  const [close, setClose] = useState(false)

    const divAnimation={
        hidden :{
          x : -300
        },
        visible :{
      x : 0,
      transition :{
        duration : .4,
        delay : 1.4,    
        type : "keyframes",
       
       
      }
        }
    }

  return<>

  {close ===false && 
  <button onClick={()=>{setClose(true)}}  className="inline-flex items-center z-50 fixed p-2 mt-2 ms-1 text-sm  sm:hidden rounded-lg  hover:bg-slate-100">
  <svg className="w-6 h-6" aria-hidden="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
  </svg>
</button>
  }

{close === true ?
   <div className=" px-3  fixed z-40 lg-z-20 mb-96 md:me-20 top-0 left-0  w-64 h-screen py-4 overflow-y-auto bg-white">
      <button onClick={()=>{setClose(false)}}  className="inline-flex items-center z-50 fixed top-0 left-0 p-2 mt-2 ms-3 text-sm hover:bg-slate-100 sm:hidden rounded-lg  ">
  <svg className="w-6 h-6" aria-hidden="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
  </svg>
</button>
      <ul className="space-y-2 font-medium">

<img src={logo} alt="" />
<li>
  <NavLink  onClick={()=>{setClose(false)}}  to={'meals'} className="flex ps-4 mb-4 items-center border hover:cursor-pointer hover:scale-105  transition-all  hover:scale-y-105 border-gray-300 p-2 text-gray-900 rounded-lg  group">
    <i className="fa-solid fa-utensils" />
    <span className="flex-1 ms-3 whitespace-nowrap font-semibold">Meals</span>
  </NavLink>
</li>
    <li>
  <NavLink  onClick={()=>{setClose(false)}}  to={'/'} className="flex ps-4 mb-4 items-center border hover:cursor-pointer hover:scale-105 transition-all  hover:scale-y-105 border-gray-300 p-2 text-gray-900 rounded-lg  group">
  <i class="fa-solid fa-cookie-bite"></i>
    <span className="flex-1 ms-3 whitespace-nowrap font-semibold ">Ingredients</span>
  </NavLink>
</li>
<li>
  <NavLink  onClick={()=>{setClose(false)}}  to={'area'} className="flex ps-4 items-center hover:scale-105 hover:cursor-pointer  hover:scale-y-105 transition-all  border border-gray-300 p-2 rounded-lg  group">
  <i className="fa-solid fa-globe"></i>
    <span className="flex-1 ms-3 whitespace-nowrap font-semibold">Area</span>
  </NavLink>
</li> 
      </ul>
   </div>
: null}

<motion.div
variants={divAnimation}
initial = 'hidden'
animate ='visible'

 className=" hidden sm:flex ">

<div className=" px-3 fixed z-40 lg-z-20 mb-96 md:me-20 top-0 left-0  w-64 h-screen py-4 overflow-y-auto bg-white">
      <ul className="space-y-2 font-medium">

<img src={logo} alt="" />
<li>
  <NavLink to={'meals'} className="flex ps-4 mb-4 items-center border hover:cursor-pointer hover:scale-105  transition-all  hover:scale-y-105 border-gray-300 p-2 text-gray-900 rounded-lg  group">
    <i className="fa-solid fa-utensils" />
    <span  className="flex-1 ms-3 whitespace-nowrap font-semibold">Meals</span>
  </NavLink>
</li>
    <li>
  <NavLink to={'/'} className="flex ps-4 mb-4 items-center border hover:cursor-pointer hover:scale-105 transition-all  hover:scale-y-105 border-gray-300 p-2 text-gray-900 rounded-lg  group">
  <i class="fa-solid fa-cookie-bite"></i>
    <span className="flex-1 ms-3 whitespace-nowrap font-semibold ">Ingredients</span>
  </NavLink>
</li>
<li>
  <NavLink to={'area'} className="flex ps-4 items-center hover:scale-105 hover:cursor-pointer  hover:scale-y-105 transition-all  border border-gray-300 p-2 rounded-lg  group">
  <i className="fa-solid fa-globe"></i>
    <span className="flex-1 ms-3 whitespace-nowrap font-semibold">Area</span>
  </NavLink>
</li> 
      </ul>
   </div>
</motion.div>
  </>
}
