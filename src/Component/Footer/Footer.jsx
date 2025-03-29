import React from 'react'
import logo from '../../assets/logo-BfNap0Pe.png'
import style from './style.module.scss'

export default function Footer() {
  return <>
  
  
  



  <footer className="bg-white rounded-lg sm:z-20 md:z-50 shadow-sm relative left-0 right-0 bottom-0">
    <div className="w-full max-w-screen-xl mx-auto px-2 lg:px-4 ">
        <div className="flex text-blue-600 items-center px-3 md:px-20 w-full justify-between">
             <div className=" flex  justify-ceter items-center">
                <img src={logo} className=" w-[70px] lg:w-[100px]" alt="" />
             <span className={`${style.styleText} text-2xl`}>Flowbite</span>
          
             </div>
             <div className={`${style.styleText} text-2xl`}>Route</div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center text-center pb-5 ">© 2023 <a href="ziad.n.mostafa@gmail.com" className="hover:underline">Ziad Mostafa™</a>. All Rights Reserved.</span>
    </div>
</footer>



</>
}
