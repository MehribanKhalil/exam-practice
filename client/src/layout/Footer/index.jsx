import React from 'react'
import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className=' py-6 bg-blue-800 center flex-wrap text-white px-10 text-[14px] sm:text-[16px] '>
      Copyright ©2024 All rights reserved | This template is made with <CiHeart />  by <Link className=' text-blue-400 px-1'>Colorlib</Link>
    </footer>
  )
}

export default Footer