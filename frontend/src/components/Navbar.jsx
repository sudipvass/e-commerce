import React, { useState } from "react";
import { assets } from "../assets/assets";
import {Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const[visible,setVisible]= useState(false)
  return (
    <div className="flex item-center justify-between py-5 px-4 font-medium bg-[#0a2237] rounded-lg">
      <img src={assets.eimg} className="w-20 logo" />
      <ul className="hidden items-center  sm:flex gap-16 text-sm text-white">
        <NavLink to="/" className="flex flex-col items-center gap-2 hover:text-[#169bb5] font-bold">
          <p>HOME</p> 
          <hr className="w-2/4 border-none h-[1.5px] hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1 hover:text-[#169bb5] font-bold">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px]  hidden" />
        </NavLink>
        <NavLink to="about" className="flex flex-col items-center gap-1 hover:text-[#169bb5] font-bold">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden" />
        </NavLink>
        <NavLink to="contact" className="flex flex-col items-center gap-1 hover:text-[#169bb5] font-bold">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px]  hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6 text-white">
        <img
          src={assets.search_icon}
          alt="search icon"
          className="w-5 cursor-pointer  text-white bg-white rounded-md "
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer text-white bg-white rounded-md "
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-5 px-5 bg-slate-100 text-gray-500 rounded">
            <p className="cursor-pointer hover:text-black">My Profile</p>
            <p className="cursor-pointer hover:text-black">Orders</p>
            <p className="cursor-pointer hover:text-black">logout</p>
            </div>
          </div>
        </div>
        <Link to = "cart" className="relative">
        <img src={assets.cart_icon} alt="cart icon"
        className="w-5 min-2-5  text-white bg-white rounded-md " />
        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">20</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} className="w-6 h-6 cursor-pointer sm:hidden  text-white  px-[2px] py-[2px] bg-white rounded" alt=",menu-icon" />
      </div>

      {/* Sidebar menu for smll screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?"w-full":'w-0'}`}>
        <div className="flex flex-col">
            <div onClick={()=>setVisible(false)} className="flex items-cents gap-4 p-3 cursor-pointer">
                <img src={assets.dropdown_icon} className="h-4 rotate-100" alt="dropdown icon " />
                <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className="py-2 border pl-6" to='/collection'>Collection</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 border pl-6" to='/'>Home</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 border pl-6" to='/about'>About</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 border pl-6" to='/contact'>Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
