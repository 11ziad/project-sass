import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return <>
 <div className=" p-4 h-screen flex justify-center text-center items-center flex-col">
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-orange-400 md:text-5xl lg:text-5xl ">Not Found</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400"> this padeg not found please back to home</p>
<Link to={'/'} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 ">
    Back
    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</Link>
</div>
  </>
}
