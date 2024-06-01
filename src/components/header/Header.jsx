// import React from 'react'
import Logo from "../../assets/logo2.png";
import Cart from "../../assets/cart.png";
import { FaSearch } from "react-icons/fa";
import DArrow from "../../assets/down.png";
import Ham from "../../assets/hamburger.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="hidden md:flex justify-between items-center flex-row bg-zinc-500 px-[2rem] h-[90px]">
        <div className="w-[20%]">
          <img src={Logo} alt="" className="h-[90px]" />
        </div>

        <div className="list-none flex flex-row justify-between items-center w-[40%]">
          <li className="flex flex-row justify-center items-center gap-[10px]">
            SHOES <img src={DArrow} alt="" className="w-[1rem]" />
          </li>
          <li className="flex flex-row justify-center items-center gap-[10px]">
            SLIPPERS <img src={DArrow} alt="" className="w-[1rem]" />
          </li>
          <li className="flex flex-row justify-center items-center gap-[10px]">
            ABOUT US <img src={DArrow} alt="" className="w-[1rem]" />
          </li>
        </div>

        <div className="flex flex-row justify-end gap-[3rem] items-center w-[20%]">
          <div className="flex flex-row items-center gap-[10px]">
            <FaSearch className="opacity-[0.6]" />
            <span>SEARCH</span>
          </div>

          <div className="flex">
            <img src={Cart} alt="" /> <sub>2</sub>
          </div>
        </div>
      </nav>

      <nav className="flex md:hidden items-center justify-between px-[1rem] py-[10px]">
        <img src={Ham} alt="" className="w-[1rem] h-[1rem]" />

        <img src={Logo} alt="" className="w-[150px] h-[50px]"/>

        <FaSearch className="opacity-[0.6]"/>

        <div className="flex">
          <img src={Cart} alt="" /> <sub>2</sub>
        </div>
      </nav>
    </>
  );
};

export default Header;
