import React, { useEffect, useRef, useState } from 'react'
import style from './style.module.scss'
import { Link, NavLink} from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import Loading from '../Loading/Loading'
import { motion } from 'framer-motion'

export default function Search() {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)

    let inputRef =useRef()
    
   async function searche(){

        let vales = inputRef.current.value  
        try{
          setLoading(true)
          let {data} =await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${vales}`)
          console.log(data.meals
          );
          setMeals(data.meals)
          setLoading(false)
        }catch(err){
          console.log(err);
          setLoading(false)
          
        }
      }

      useEffect(()=>{
        inputRef.current.focus()
      },[])

      const mealsAnimation = {
        hidden : {
          opacity : 0,
        },
        visible :{
          opacity : 1,
          transition :{
            duration : .1,
            delay : .1 ,  
          type : "spring",
          stiffness : 30,
          }
        }
      }

  return <>
      <h1 className={`${style.styleText} p-7 mt-6 md:mt-0`}>Learn, Cook, Eat Your Food</h1>
      <form class=" w-full lg:w-[97%] mx-auto mb-6">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        
        <input onKeyUp={()=>{searche()}} ref={inputRef}  name='search' type="search" id="search" class="block w-full p-2.5 ps-10 lg:p-3.5 lg:ps-10 text-sm text-gray-900 border focus:border-orange-500 focus:outline-none border-gray-300 rounded-lg bg-gray-50" placeholder="Search Mockups, Logos..." required />
       
    </div>
</form>
<Helmet>
                        <meta charSet="utf-8" />
                        <title>Search</title>
                    </Helmet>

                 {loading ? <Loading></Loading> :
                 
                           <div className=' flex flex-wrap mt-20 gap-y-10'>
                                 {meals?.map((data)=>
                 
                           <div className="w-full opacity-100 m-auto md:w-1/2 lg:w-1/4 p-3 text-center">
                               <motion.div
                                    variants={mealsAnimation}
                                    initial = "hidden"
                                    animate = "visible"
                               className=" pb-6 rounded-[30px] hover:shadow-lg hover:scale-105  hover:scale-y-105 bg-white transition-all">
                             <div className="-translate-y-16 w-[150px] h-[150px] m-auto flex justify-center items-center rounded-[200%]">
                               <img src={data.strMealThumb} className='object-cover rounded-[100%] h-28 w-56 group-hover:rotate-180' alt="" /> 
                               </div>
                               <div className=" -translate-y-6">
                             <h2 className=' font-bold text-lg'>{data.strMeal.split(' ',2).join(' ')}</h2> 
                             <h2 className=' text-green-600'>{data.strArea}</h2>               
                               </div>
                               {data.idMeal ?
                               <Link to={`/productDitailsAll/${data.idMeal}`}>
                             
                             <button className='pe-5 ps-5 pt-3 text-white pb-3 bg-green-600 rounded-[20px]'>View Recipe</button>
                             </Link>    : <NotFound/>                   
                             }
                             </motion.div>
                               </div>
                 
                           )}
                 
                             </div>
                 }
  </>
}
