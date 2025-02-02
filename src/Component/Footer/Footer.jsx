import React from 'react'
import logo from '../../assets/logo-BfNap0Pe.png'
import style from './style.module.scss'

export default function Footer() {
  return <>
  
  
  



  <footer className="bg-white rounded-lg z-50 shadow-sm relative bottom-0">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex text-blue-600 sm:items-center px-20  sm:justify-between">
             <div className=" flex  justify-center items-center">
                <img src={logo} className="w-[100px]" alt="" />
             <span className={`${style.styleText} text-2xl`}>Flowbite</span>
          
             </div>
             <div className={`${style.styleText} text-2xl`}>Route</div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>



</>
}
