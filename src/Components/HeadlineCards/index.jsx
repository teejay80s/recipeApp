import React from 'react'

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* cards */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white p-2'>
                <p className='font-bold pt-4 px-2 text-2xl '>Sun Out, Bogo Out</p>
                <p className='px-2'>through 8/24</p>
                <button className='border-white bg-white text-black mx-2 p-2 absolute bottom-4 rounded-full '>
                    Order now
                </button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1568625365131-079e026a927d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
        </div>

        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white p-2'>
                <p className='font-bold pt-4 px-2 text-2xl '>Snacks time, Burger</p>
                <p className='px-2'>through 9/23</p>
                <button className='border-white bg-white text-black mx-2 p-2 absolute bottom-4 rounded-full '>
                    Order now
                </button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="" />
        </div>

        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white p-2'>
                <p className='font-bold pt-4 px-2 text-2xl '>Ice Cream</p>
                <p className='px-2'>through 9/29</p>
                <button className='border-white bg-white text-black mx-2 p-2 absolute bottom-4 rounded-full '>
                    Order now
                </button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            
            alt="ice cream" />
        </div>

        
    </div>
  )
}

export default Cards