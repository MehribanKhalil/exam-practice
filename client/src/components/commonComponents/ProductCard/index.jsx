import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
const ProductCard = ({ image, category, title, price }) => {
    return (
        <div className='text-center py-6 group'>
            <div className=' relative'>
                <img className=' w-full object-cover' src={image} alt="" />
                <div>

                    <ul className='  justify-center items-center  gap-5 absolute bottom-0 left-0 w-full bg-red-500 py-8 hidden group-hover:flex  custom-transition'   >
                        <li className='bg-main-color text-white w-10 h-10 center'><button className='center'><IoMdSearch size={22} /></button></li>
                        <li className='bg-main-color text-white w-10 h-10 center'><button className='center'><IoCartOutline size={22} /></button></li>
                        <li className='bg-main-color text-white w-10 h-10 center'><button className='center'><CiHeart size={22} /></button></li>
                    </ul>
                </div>
            </div>
            <div className='content space-y-1 py-3'>
                <h5 className=' text-sm text-gray-400'>{category}</h5>
                <h3 className=' text-lg font-medium group-hover:text-main-color custom-transition cursor-pointer'>{title}</h3>
                <span className=' text-lg font-medium text-gray-400'>${price}</span>
            </div>
        </div>
    )
}

export default ProductCard