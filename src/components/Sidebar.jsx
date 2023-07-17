import { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../assets/constants";
import {RiCloseLine} from "react-icons/ri"
import {logo} from "../assets"

const Sidebar = () =>{
  const [mobileView , setMobileVied] = useState(false);
  

return (

  <>
  <div className="md:flex hidden flex-col w-[240px] px-4 bg-[#191624] py-10">
    <img src={logo} alt="logo" className="w-full h-14 object-contain "></img>
    <div className="mt-10 flex flex-col justify-center items-center">
    {links.map((link)=>{
      return (
        <NavLink className="p-5 flex group">
         <link.icon className="mr-1 w-7 h-7 pt-[2px] group-hover:text-gray-300" ></link.icon> <p className="text-lg pt-[2px] group-hover:text-gray-300">{link.name}</p> 
        </NavLink>
      )

    })}
  </div>

  </div>
  </>
) };

export default Sidebar;
