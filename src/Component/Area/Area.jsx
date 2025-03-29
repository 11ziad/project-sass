import React, { useEffect, useState } from 'react'
import style from '../Area/style.module.scss'
import Loading from '../Loading/Loading';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import {Helmet} from "react-helmet";
import {motion} from 'framer-motion'


export default function Area(){


  const [category, setCategory] = useState('American')
  const [namesCategory, setNamesCategory] = useState([])
  const [loading, setLoading] = useState(false)
  const [allCategory, setAllCategory] = useState([])
  const [close, setClose] = useState(false)

  
  
  const divAnimation = {
    hidden : {
      x : 300,
      opacity : 0,
    },
    visible :{
      x : 0, 
      opacity : 1,
      transition :{
        duration : 4,
        delay : .9,  
      type : "spring",
      stiffness : 70,
      }
      

    }
  }

  const headerAnimation = {
    hidden : {
      x : 300,
      opacity : 0,
    },
    visible :{
      x : 0, 
      opacity : 1,
      transition :{
        duration : 4,
        delay : .5,  
      type : "spring",
      stiffness : 70,
      }
    }
  }

  const buttonAnimation = {
    hidden : {
      x : 300,
      opacity : 0,
    },
    visible :{
      x : 0, 
      opacity : 1,
      transition :{
        duration : 4,
        delay : 1.4,  
      type : "spring",
      stiffness : 70,
      }
    }
  }
  
  const listAnimation = {
    hidden : {
      y : -100,
      opacity : 0,
    },
    visible :{
      y : 0, 
      opacity : 1,
      transition :{
        duration : 4,
        delay : .2 ,  
      type : "spring",
      stiffness : 70,
      }
    }
  }
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
  
  async function getNameMeals(){
    try{
     let {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=')
    //  console.log(data.meals);
     
      setNamesCategory(data.meals)
    }catch(err){
      console.log(err);
    }
  }



  async function displayCategory() {
    try{
      setLoading(true)
     let {data} =  await axios.get(`${category ===true ? `https://www.themealdb.com/api/json/v1/1/filter.php?a=.American` : `https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`}`)
    //  console.log(data);
     setAllCategory(data.meals)
     setLoading(false)
    }catch(error){
      console.log(error); 
      setLoading(true)     
    }

  }

  
  useEffect(()=>{
    getNameMeals()
  },[])
  

  useEffect(()=>{
    displayCategory(category)

  },[category])

  return <>
  


       <motion.h1
         variants={headerAnimation}
         initial = "hidden"
         animate = "visible"
       className={`${style.styleText} p-7 mt-6 md:mt-0`}>Learn, Cook, Eat Your Food</motion.h1>
       <div className="container">
       <form class=" w-[100%] lg:w-[97%] mx-auto mb-6">   
    <motion.div 
  variants={divAnimation}
  initial = "hidden"  
  animate = "visible"
    class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <NavLink to={'/search'}>
        <input name='search' type="search" id="search" class="block w-full p-2.5 ps-10 lg:p-3.5 lg:ps-10 text-sm text-gray-900 border focus:outline-none border-gray-300 rounded-lg bg-gray-50" placeholder="Search Mockups, Logos..." required />
        </NavLink>
    </motion.div>
</form>

            <motion.div
                variants={buttonAnimation}
                initial = "hidden"
                animate = "visible"
            className="">

            <button onClick={()=>setClose(true)} className='hover:bg-orange-500 md:hidden inline-flex items-center text-start w-full bg-orange-400 text-white rounded-lg py-1.5 ps-7'> 
              Select Category
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
              </button>

            </motion.div>


              {close===true ?
              <motion.ul 
              variants={listAnimation}
              initial = "hidden"
              animate = "visible"
              className=' w-full bg-white mt-7 pt-8 rounded-2xl md:hidden text-center relative py-3' >
                {/* <span onClick={()=>{setClose(false)}} className='text-white absolute top-0 hover:cursor-pointer -translate-y-6 hover:bg-slate-400 right-0 py-1.5 px-3 rounded-xl bg-gray-400'> Close</span> */}
                <i onClick={()=>{setClose(false)}} className="fa-solid fa-xmark text-gray-500 absolute top-0 text-3xl hover:cursor-pointer -translate-y-2  right-0 pt-1 mb-3 pe-2 rounded-xl "></i>

                {namesCategory.map((cat,indix)=> <div onClick={()=>{setClose(false)}}  key={indix}>
          <li onClick={()=>{
                setCategory(cat.strArea)
              }}
          className={`${category === cat.strArea && style.actives} block py-2 hover:cursor-pointer border-b hover:bg-slate-100  `}>
          {cat.strArea}
          </li>
        </div>)}       
              </motion.ul>:null
              }
                <motion.ul
        variants={listAnimation}
        initial = "hidden"  
        animate = "visible"
                 onClick={()=>{setClose(false)}} className='ps-7 pe-11 hidden md:flex gap-y-3 flex-wrap'>
                    <li className={`${category === 'American' && style.active} bg-white`}></li>
                  {namesCategory.map((cat,index)=> <div key={index}>

                  <li
                  onClick={()=>{
                    setCategory(cat.strArea)
                  }}
                  className={`${category === cat.strArea && style.active} text-gray-600 hover:cursor-pointer bg-slate-50  border-gray-400 border me-2 focus:bg-black focus:text-white  font-medium rounded-[20px] text-md px-4 py-2.5 text-center`}> 
                    {cat.strArea}</li>
                  </div>)}

                  </motion.ul>
                <Helmet>
                        <meta charSet="utf-8" />
                        <title>Area</title>
                    </Helmet>


                      {loading === true ? <Loading></Loading>:
                      <div className=' flex flex-wrap justify-start mt-20 gap-y-10'>
                    {allCategory?.map((data)=>

              <div className="w-full m-auto md:w-1/2 lg:w-1/4 p-3 text-center">
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
                      </div>
  </>
}