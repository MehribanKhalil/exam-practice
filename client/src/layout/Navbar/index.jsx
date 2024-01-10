import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Button from '../../components/commonComponents/Button';
import './index.scss'
import { FaBars } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className='navbar '>
            <div className="nav-content px-10 xl:px-48  py-6 md:py-0 flex justify-between items-center bg-red-500">
                <div>
                    <img src="https://preview.colorlib.com/theme/aroma/img/logo.png" alt="" />
                </div>
                <div>
                    <ul className=' hidden md:flex gap-4 lg:gap-10'>
                        <li   className='nav-item'> <NavLink  to={'/'} >Home</NavLink> </li>
                        <li className='nav-item'> <NavLink to={'/add'}>Add Page</NavLink> </li>
                        <li  className='nav-item'> <NavLink to={'/blog'}>Blog</NavLink> </li>
                        <li  className='nav-item'> <NavLink to={'/pages'}>Pages</NavLink> </li>
                        <li  className='nav-item'> <NavLink to={'/contact'}>Contact</NavLink> </li>
                    </ul>
                </div>
                <div >
                    <ul className='hidden md:flex items-center  gap-5' >
                        <li><button className='center'><IoMdSearch size={22} /></button></li>
                        <li><button className='center'><IoCartOutline  size={22} /></button></li>
                        <li> <Button>Buy Now</Button></li>
                    </ul>
                  
                </div>
                <div className=' md:hidden text-main-color'>
                    <button><FaBars size={23} /></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar