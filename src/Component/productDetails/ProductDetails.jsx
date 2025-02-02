import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './style.module.scss'
import Loading from '../Loading/Loading'

export default function ProductDetails() {



    
    let {id} = useParams()

      const [Loader, setLoader] = useState(true)
      const [detailsData, setDetailsData] = useState([])
    

    async function getDetailsData(productId){
        try{          
        let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`)
        console.log(data.meals);
        setDetailsData(data.meals)
        setLoader(false)      
        }catch(err){
          console.log(err);
          setLoader(false)      
        }
      }
      useEffect(()=> {
  
        getDetailsData(id)
      }, [])

  return <>

  {Loader ? <Loading></Loading>:<>
  
  
  
  {detailsData.map((category)=><> <h1 className={`${style.styleMain} mt-5`}>{category.strIngredient1}</h1>
        <div className=" flex flex-wrap ">

        <div className=" lg:w-1/3 mt-10">
          <img src={category.strMealThumb} className=' w-full rounded-[30px]' alt={category.strIngredient1}  />
          <div className=" flex justify-center items-center mt-6">
         <a className='ps-5 pe-5 pt-2 pb-2 me-4 bg-red-500 text-white  rounded-md' href={category.strYoutube}> <span className='me-2'><i class="fa-brands fa-youtube bg-white text-white"></i></span>Youtube</a>
            <a className='ps-5 pe-5 pt-2 pb-2 bg-green-500 text-white rounded-md' href={category.strSource}><span><i class="fa-solid fa-globe me2 bg-white text-white"></i></span> Source</a>
          </div>
        </div>

        <div className="sm:w-full md:w-full lg:w-1/3 mt-10 ps-6">
            <p>{category.strInstructions}</p>          
        </div>
        <div className="sm:w-full m-auto md:w-full lg:w-1/3 mt-10 ps-3">
            <div className=" bg-white p-5 rounded-[20px]">
              <h1 className={`${style.borderBo} pb-2`}>Ingredients</h1>
              <div className=" flex justify-between mt-8 mb-2 border-b-[2px] pb-2">
                <span>{category.strIngredient1}</span>
                <span>{category.strMeasure1}</span>
              </div>
              {category.strIngredient2 ?<>
              <div className=" flex justify-between mb-2 border-b-[2px] pb-2">
                <span>{category.strIngredient2}</span>
                <span>{category.strMeasure2}</span>
              </div>
              </> : null            
            }

              {category.strIngredient3 ?<>
              <div className=" flex justify-between mb-2 border-b-[2px] pb-2">
                <span>{category.strIngredient3}</span>
                <span>{category.strMeasure3}</span>
              </div>
              </> : null            
            }

              {category.strIngredient4 ?<>
              <div className=" flex justify-between mb-2 border-b-[2px] pb-2">
                <span>{category.strIngredient4}</span>
                <span>{category.strMeasure4}</span>
              </div>
              </> : null            
            }

              {category.strIngredient5 ?<>
              <div className=" flex justify-between mb-2 border-b-[2px] pb-2">
                <span>{category.strIngredient5}</span>
                <span>{category.strMeasure5}</span>
              </div>
              </> : null            
            }
              {category.strIngredient6 ?<>
              <div className=" flex justify-between mb-2 border-b-[2px] pb-2">
                <span>{category.strIngredient6}</span>
                <span>{category.strMeasure6}</span>
              </div>
              </> : null            
            }


              {category.strIngredient7 ?<>
              <div className=" flex justify-between mb-2 border-b-[2px] pb-2">
                <span>{category.strIngredient7}</span>
                <span>{category.strMeasure7}</span>
              </div>
              </> : null            
            }
                 {category.strIngredient8 ?<>
              <div className=" flex justify-between border-b-[2px] pb-2">
                  <span>{category.strIngredient8}</span>
                  <span>{category.strMeasure8}</span>
              </div>
                </> : null}
               
              </div>          
        </div>

  </div>
  </>
  )}</>
 
  }
  

  </>
}
