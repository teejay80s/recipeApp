import React,{useState}from 'react'
import { AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiFillTag  } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill  } from 'react-icons/bs'; 
import { TbTruckDelivery  } from 'react-icons/tb'; 
import {FaUserFriends,FaWallet  } from 'react-icons/fa'; 
import {MdFavorite,MdHelp  } from 'react-icons/md';
const NavBar = () => {
    const [nav,setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30}/></div>
                <h1 className='text-2xl sm:text-2xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='rounded-full bg-black text-white p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>
            {/* search input */}
            <div className='flex bg-gray-200 rounded-full items-center px-2 md:w-[400px] lg:w-[500px] '>
                <AiOutlineSearch size={25}/>
               <input className='bg-transparent p-2 w-full outline-none' type="text" placeholder="Search foods"/> 
            </div> 
            {/* cart */}
                <button className='hidden md:flex text-white items-center bg-black py-2 px-4 rounded-full'>
                    <BsFillCartFill size={20} className="mr-2" />
                    Cart
                </button>
        {/* mobile menu */}
        {/* overlay */}
        {nav ? <div className='w-full bg-black/80 fixed h-screen top-0 left-0 z-10'>
        </div> : null}
        
        {/* modal */}

        <div className={nav ? 'w-[300px] bg-white fixed h-screen top-0 left-0 z-10 duration-300' : 'w-[300px] bg-white fixed h-screen top-0 left-[-100%] z-10 duration-300'}>
            <AiOutlineClose onClick={()=>setNav(!nav)} className='absolute right-4 cursor-pointer' size={30}/>
            <h2 className='text-2xl p-4 mt-2'>Best <span className='font-bold'>Eats</span></h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800 '>
                <li className='flex text-xl py-4 items-center'><TbTruckDelivery size={20} className="mr-4"/>Orders</li>
                <li className='flex text-xl py-4 items-center'><MdFavorite size={20} className="mr-4"/>Favorites</li>
                <li className='flex text-xl py-4 items-center'><FaWallet size={20} className="mr-4"/>Wallet</li>
                <li className='flex text-xl py-4 items-center'><MdHelp size={20} className="mr-4"/>Help</li>
                <li className='flex text-xl py-4 items-center'><AiFillTag size={20} className="mr-4"/>Promotion</li>
                <li className='flex text-xl py-4 items-center'><BsFillSaveFill size={20} className="mr-4"/>Best ones</li>
                <li className='flex text-xl py-4 items-center'><FaUserFriends size={20} className="mr-4"/>Invite friends</li>
            </ul>
        </nav>
        </div>
        
    </div>
  )
}

export default NavBar