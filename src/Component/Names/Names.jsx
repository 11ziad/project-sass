import React, { useEffect, useState } from 'react'

import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import NotFound from '../NotFound/NotFound'
import style from './style.module.scss'
import Loading from '../Loading/Loading'

export default function Names() {

  

  const [nameCategory, setNameCategory] = useState([])
  const [allData, setAllData] = useState([])
  const [Loader, setLoading] = useState(true)

  
  async function names(){
    try{
              
      let {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      console.log(data);
        setNameCategory(data.meals)
      setLoading(false)
    
    }catch(err){
      setLoading(false)
    }
    }
          useEffect(()=> {
            names()
       
          }, [])

          async function category(para){

            try{
        
              let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${para}`);
              console.log(data.meals);
              setLoading(true)
              setAllData(data.meals);
              setLoading(false)
              
            }catch{
              setLoading(false)
        
            }
            
          }

  
  return <>


{Loader ? <Loading></Loading> : 


<div className="container">
      <h1 className={`${style.styleText} p-7`}>Learn, Cook, Eat Your Food</h1>
    <div className='ps-7 pe-11 flex gap-y-10 flex-wrap'>
      {nameCategory.map((cat)=>
      <div onClick={()=>{category(cat.strCategory)}}>
          
      <Link to={`/${cat.strCategory}`}
      className="text-gray-600 active  border-gray-400 border me-5 focus:bg-black focus:text-white  font-medium rounded-[20px] text-md px-5 py-2.5 text-center ">{cat.strCategory}
      </Link>
      </div>
      )}
     </div>
    </div>
}




{Loader ? <Loading></Loading>:<>


    <div className="container  mt-24 -z-40 mb-9">
      
      <div className=" flex  flex-wrap gap-y-14">
          
  {allData.map((data)=>
      
      <div className="sm:w-full over m-auto md:w-1/3 lg:w-1/4 p-3 text-center">
  <div className=" pb-6 rounded-[30px] hover:shadow-lg hover:scale-105  hover:scale-y-105 bg-white transition-all">
  <div className="-translate-y-16 w-[150px] h-[150px] m-auto flex justify-center items-center rounded-[200%]">
  <img src={data.strMealThumb} className='object-cover rounded-[100%] h-28 w-56 group-hover:rotate-180' alt="" /> 
  </div>
  <div className=" -translate-y-6">
<h2 className=' font-bold text-lg'>{data.strMeal.split(' ',2).join(' ')}</h2>                
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
</div>   
</>
 
}

  
  </>
} 
