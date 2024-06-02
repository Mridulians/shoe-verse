import { useState } from "react";
import Logo from "../../assets/logo2.png";
import Cart from "../../assets/cart.png";
import { FaSearch } from "react-icons/fa";
import DArrow from "../../assets/down.png";
import Ham from "../../assets/hamburger.png";
import Cancel from "../../assets/cancel.png";
import Cross from "../../assets/cross.png";
import Insta from '../../assets/instagram.png'
import Fb from '../../assets/facebook.png'
import X from '../../assets/twitter.png'
import LI from '../../assets/linkedin.png'

import "./Header.css";
// import { useNavigate } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // const navigate = useNavigate();

  const onSearch = () => {
    setSearch(!search);
  };

  const closeSearch = () => {
    setSearch(false);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
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
          <div
            className="flex flex-row items-center gap-[10px]"
            onClick={onSearch}
          >
            <FaSearch className="opacity-[0.6]" />
            <span>SEARCH</span>
          </div>

          <div className="flex">
            <img src={Cart} alt="" className="h-[25px]"/> <sub>2</sub>
          </div>
        </div>
      </nav>

      <nav className="flex md:hidden items-center justify-between px-[1rem] py-[10px]">
        <img
          src={Ham}
          alt=""
          className="w-[1rem] h-[1rem]"
          onClick={toggleSidebar}
        />

        <img src={Logo} alt="" className="w-[150px] h-[50px]" />

        <FaSearch className="opacity-[0.6]" onClick={onSearch} />

        <div className="flex">
          <img src={Cart} alt="" /> <sub>2</sub>
        </div>
      </nav>

      {sidebarVisible && (
        <div className={`sidebar_content ${sidebarVisible ? "show" : ""}`}>
          <img
            src={Cross}
            alt=""
            onClick={toggleSidebar}
            className=" ml-[auto] my-[2rem] py-[0rem] px-[1rem]"
          />

          <div className="flex flex-col items-center justify-center list-none w-[100%]">
            <li className="py-[20px] px-[0px] font-sans font-semibold w-[100%] text-center hover:bg-sky-500 hover:text-white">SHOES</li>
            <li className="py-[20px] px-[0px] font-sans font-semibold w-[100%] text-center hover:bg-sky-500 hover:text-white">SLIPPERS</li>
            <li className="py-[20px] px-[0px] font-sans font-semibold w-[100%] text-center hover:bg-sky-500 hover:text-white">ABOUT US</li>
            <li className="py-[20px] px-[0px] font-sans font-semibold w-[100%] text-center hover:bg-sky-500 hover:text-white">HELP</li>
          </div>


          <div className="flex flex-row justify-center items-center w-[100%] gap-[2rem] py-[4rem] px-[0rem]">

            <img src={Insta} alt=""  className="w-[25px] h-[25px]"/>
            <img src={Fb} alt=""  className="w-[25px] h-[25px]"/>
            <img src={X} alt="" className="w-[25px] h-[25px]" />
            <img src={LI} alt=""  className="w-[25px] h-[25px]"/>

          </div>
        </div>
      )}

      {search && (
        <div className="flex px-[1rem] py-[0rem] border border-solid border-slate-600 h-[40px] items-center">
          🔍
          <input
            type="text"
            placeholder="Search"
            className="w-[100%] outline-none"
          />
          <img src={Cancel} alt="" onClick={closeSearch} />
        </div>
      )}
    </>
  );
};

export default Header;
