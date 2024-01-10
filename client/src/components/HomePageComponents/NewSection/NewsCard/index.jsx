import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowForward } from "react-icons/md";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

const NewsCard = ({img,title,info}) => {
  return (
    <div className=' group cursor-pointer'>
        <div className=''>
            <img src={img} alt="" className=' w-full'/>
        </div>
        <div className='comments flex gap-10  text-sm text-gray-400 py-3' >
        <Link>By Admin </Link>
        <Link className='flex items-center gap-1'> <FaRegFaceSmileBeam />  2 Comments </Link>

            
        </div>
        <h5 className=' group-hover:text-main-color custom-transition text-lg font-semibold'>{title}</h5>
        <p className=' text-[15px] text-gray-400'> {info}</p>
        <Link className=' group-hover:gap-3 group-hover:text-main-color custom-transition flex items-center gap-2'> Read More <MdArrowForward />  </Link>
    </div>
  )
}

export default NewsCard