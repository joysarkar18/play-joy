import { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../assets/constants";
import { RiCloseLine } from "react-icons/ri";
import { logo } from "../assets";
import { HiOutlineMenu } from "react-icons/hi";

const Sidebar = () => {
  const [mobileView, setMobileView] = useState(false);
  const mobileClickHandeler = ()=>{
    setMobileView((prev)=> !prev);
  }

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] px-4 bg-[#191624] py-10">
        <img
          src={logo}
          alt="logo"
          className="w-full h-14 object-contain "
        ></img>
        <div className="mt-10 flex flex-col justify-center items-center">
          {links.map((link) => {
            return (
              <NavLink className="p-5 flex group">
                <link.icon className="mr-1 w-7 h-7 pt-[2px] group-hover:text-gray-300"></link.icon>{" "}
                <p className="text-lg pt-[2px] group-hover:text-gray-300">
                  {link.name}
                </p>
              </NavLink>
            );
          })}
        </div>
      </div>

      <div className="absolute top-3 md:hidden block right-3 onClick={mobileClickHandeler} z-30">
        {mobileView ? <RiCloseLine className="text-gray-300" size={30} onClick={mobileClickHandeler}></RiCloseLine> : <HiOutlineMenu size={30} className="text-gray-300" onClick={mobileClickHandeler}></HiOutlineMenu>}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-20 p-6 md:hidden ${mobileView ? "left-0" : "-left-full"} smooth-transition`}>
        <img
          src={logo}
          alt="logo"
          className="w-full h-14 object-contain "
        ></img>
        <div className="mt-10 flex flex-col justify-center items-center">
          {links.map((link) => {
            return (
              <NavLink className="p-5 flex group">
                <link.icon className="mr-1 w-7 h-7 pt-[2px] group-hover:text-gray-300"></link.icon>{" "}
                <p className="text-lg pt-[2px] group-hover:text-gray-300">
                  {link.name}
                </p>
              </NavLink>
            );
          })}
        </div>
      </div>


    </>
  );
};

export default Sidebar;
