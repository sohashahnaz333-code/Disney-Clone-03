import React, { useState } from "react";
import logo from "./../assets/images/logo.png";
import { LuSearch } from "react-icons/lu";
import { HiHome } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { RiMovieFill } from "react-icons/ri";
import { MdMovieCreation } from "react-icons/md";
import Profile from "./../assets/images/Profile.png";
import { HiDotsVertical } from "react-icons/hi";

function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: LuSearch },
    { name: "WATCH LIST", icon: FaPlus },
    { name: "ORIGINALS", icon: FaRegStar },
    { name: "MOVIES", icon: RiMovieFill },
    { name: "SERIES", icon: MdMovieCreation },
  ];

  const HeaderItem = ({ name, Icon }) => (
  <div
    className="
     text-white flex items-center gap-3 
    text-[15px] font-semibold cursor-pointer 
    hover:underline underline-offset-8 mb-2

    xs:flex-col xs:items-center xs:gap-3  xs:text-[13px]
    sm:flex-row sm:items-center sm:gap-3 sm:text-[14px]
    android:flex-row  android:items-center android:gap-3 android:text-[14px]
    iphone12:flex-row iphone12:items-center iphone12:gap-3 phone12:text-[14px]
    md:gap-3 md:text-[15px]
  "
  >
    <Icon className="text-xl android:text-lg xs:text-lg" />
    <h2 className="android:text-center sm:text-center iphone12:text-center xs:text-center">{name}</h2>
  </div>
);

 return (
    <div className="flex items-center justify-between p-3 sm:p-4 md:p-5 bg-[#161827] relative">
      
      {/* Left Section: Logo + Menu */}
      <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-[110px] android:w-[110px] sm:w-[110px] md:w-[110px] object-cover"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden   items-center gap-3 sm:gap-4 relative">
          {menu.slice(0, 3).map((item, index) => (
            <HeaderItem key={index} name="" Icon={item.icon} />
          ))}

          {/* Toggle (3-dot icon) */}
          <div onClick={() => setToggle(!toggle)} className="cursor-pointer">
            <HeaderItem name="" Icon={HiDotsVertical} />
          </div>

          {/* Dropdown Menu (only visible when toggle is true) */}
          {toggle && (
            <div className="absolute top-12 left-0 bg-[#121212] border border-gray-700 rounded-lg shadow-lg p-4 flex flex-col gap-3 z-10 w-[200px]">
              {menu.slice(3).map((item, index) => (
                <HeaderItem key={index} name={item.name} Icon={item.icon} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Section: Profile */}
      <img
        src={Profile}
        alt="Profile"
        className="w-[100px] android:w-[50px] xs:w-[50px] sm:w-[50px] md:w-[50px] rounded-full object-cover"
      />
    </div>
  );
}

export default Header;