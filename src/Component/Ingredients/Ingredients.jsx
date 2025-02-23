import React, { useEffect, useState } from 'react'
import style from '../Ingredients/style.module.scss'
import axios from 'axios';
import 'flowbite'
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";


export default function Ingredients() {
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState('Chicken')
  const [namesCategory, setNamesCategory] = useState([])
  const [close, setClose] = useState(false)
    const [allCategory, setAllCategory] = useState([])
  
  
  async function getNameMeals(){
    try{
     let {data} = await axios.get(`${category ===true ? `https://www.themealdb.com/api/json/v1/1/filter.php?a=.Chicken` : `https://www.themealdb.com/api/json/v1/1/list.php?i=list${category}`}`)

    //  console.log(data.meals);
     setNamesCategory(data.meals)
     
      // setNamesCategory(data.meals)
    }catch(err){
      console.log(err);
    }
  }



  async function displayCategory() {
    try{
      setLoading(true)
     let {data} =  await axios.get(`${category ===true ? `https://themealdb.com/api/json/v1/1/filter.php?i=Chicken` : `https://themealdb.com/api/json/v1/1/filter.php?i=${category}`}`)
     console.log(data);
     setAllCategory(data.meals)
     setLoading(false)
    }catch(error){
      console.log(error); 
      setLoading(false)     
    }

  }
    
    useEffect(()=>{
      getNameMeals()
    },[])

  useEffect(()=>{
    displayCategory(category)

  },[category])
  

  return <>


       <h1 className={`${style.styleText} p-7 mt-5 md:mt-0`}>Learn, Cook, Eat Your Food</h1>
   <button onClick={()=>setClose(true)} className='transition-all duration-1000 hover:bg-orange-500 md:hidden inline-flex items-center text-start w-full bg-orange-400 text-white rounded-lg py-1.5 ps-7'> 
    Select Category
    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
    </button>

        {close===true ?
        <ul className=' transition-all duration-1000 w-full bg-white mt-7 rounded-2xl md:hidden text-center relative py-3' >
          <i onClick={()=>{setClose(false)}} className="fa-solid fa-xmark text-gray-500 absolute top-0 text-xl hover:cursor-pointer -translate-y-6 hover:bg-slate-400 hover:text-white right-0 py-1 px-3 rounded-xl bg-gray-300"></i>
          {/* <span onClick={()=>{setClose(false)}} className=''> Close</span> */}
          
          {namesCategory.slice(0,15).map((cat,indix)=> <div key={indix}>
    <li onClick={()=>{
          setCategory(cat.strIngredient)
        }}
     className={`${category === cat.strIngredient && style.actives } block py-2 hover:cursor-pointer border-b hover:bg-slate-100  `}>
    {cat.strIngredient}
    </li>
  </div>)}       
        </ul>:null
        }
           <ul  className='ps-7 pe-11 hidden md:flex gap-y-3 flex-wrap'>
               <li className={`${category === 'Chicken' && style.active} bg-white`}></li>
             {namesCategory.slice(0,15).map((cat,index)=> <div key={index}>
     
             <li
             onClick={()=>{
               setCategory(cat.strIngredient)
             }}
              className={`${category === cat.strIngredient && style.active} text-gray-600 hover:cursor-pointer bg-slate-50  border-gray-400 border me-2 focus:bg-black focus:text-white  font-medium rounded-[20px] text-md px-4 py-2.5 text-center`}> 
               {cat.strIngredient}</li>
             </div>)}
     
             </ul>
             

             <Helmet>
                <meta charSet="utf-8" />
                <title>Ingredient</title>
            </Helmet>
             {loading === true ? <Loading></Loading>:
        <div className=' flex flex-wrap justify-start mt-20 gap-y-10'>
      {allCategory.map((data)=>

<div className="w-full m-auto md:w-1/2 lg:w-1/4 p-3 text-center">
    <div className=" pb-6 rounded-[30px] hover:shadow-lg hover:scale-105  hover:scale-y-105 bg-white transition-all">
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
   </div>
     </div>

)}
   </div> 
      }



    

</>
}
