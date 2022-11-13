import React, { useState } from 'react'
import {data} from "../data"

console.log(data,"yes")

const Food = () => {
  const [food,setFood]= useState(data)

  const filterType = (category)=>{
    setFood(
      data.filter((item)=>{
        return item.category === category
      })
    )
  }

  const priceType = (price)=>{
    setFood(
      data.filter((item)=>{
        return item.price === price
      })
    )
  }
  return (
    <div className='max-w-[1640px] m-auto px-4 py-4'>
      <h1 className='text-orange-600 font-bold lg:text-4xl text-center'>Top Rated Menu Items</h1>
       <div className='flex flex-col lg:flex-row justify-between'>
            <div>

                <p className='font-bold text-gray-700'> filter type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=>(setFood(data))} className=' border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 rounded-md  m-1  p-3'>All</button>
                    <button onClick={()=>(filterType("burger"))} className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 rounded-md  m-1 p-3'>Burger</button>
                    <button onClick={()=>(filterType("pizza"))} className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 rounded-md  m-1 p-3' >Pizza</button>
                    <button onClick={()=>(filterType("salad"))} className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 rounded-md   m11 p-3'>Salad</button>
                    <button onClick={()=>(filterType("chicken"))} className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 rounded-md  m-1 p-3' >Chicken</button>
                </div>
            </div>

            <div>
                <p className='font-bold text-gray-700'> filter Price</p>
                <div className='flex justify-between max-w-390px w-full'>
                    <button onClick={()=>(setFood(data))} className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 rounded-md m-1  p-3'>All</button>
                    <button onClick={()=>(priceType("$"))} className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 rounded-md m-1  p-3'>$</button>
                    <button onClick={()=>(priceType("$$"))} className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 rounded-md  m-1  p-3'>$$</button>
                    <button onClick={()=>(priceType("$$$"))} className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 rounded-md  m-1  p-3'>$$$</button>
                    <button  onClick={()=>(priceType("$$$$"))} className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 rounded-md  m-1  p-3'>$$$$</button>
                   
                </div>
            </div>
           
        </div> 
        {/* display food */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
            {food.map((item,index)=>(
              <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                <div className='flex justify-between px-2 py-4'>
                  <p >{item.name}</p>
                  <p >
                    <span className='bg-orange-500 font-bold
                    rounded-full text-white p-1 '>{item.price}</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Food