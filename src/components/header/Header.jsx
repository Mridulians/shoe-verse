import { useState } from "react";
import Logo from "../../assets/logo2.png";
import Cart from "../../assets/cart.png";
import { FaSearch } from "react-icons/fa";
import DArrow from "../../assets/down.png";
import Ham from "../../assets/hamburger.png";
import Cancel from "../../assets/cancel.png";
import Cross from "../../assets/cross.png";
import Insta from "../../assets/instagram.png";
import Fb from "../../assets/facebook.png";
import X from "../../assets/twitter.png";
import LI from "../../assets/linkedin.png";

import "./Header.css";
import SubHeader from "./SubHeader";
import SubList from "./SubList";
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

        <div className="list-none flex flex-row justify-between items-center w-[55%] xl:w-[40%]">
          <div className="relative group">
            <li className="flex flex-row justify-center items-center gap-[10px]">
              MEN <img src={DArrow} alt="" className="w-[1rem]" />
            </li>

            <div className="absolute hidden group-hover:flex flex-col justify-center w-max bg-white p-[2rem] lg:p-[4rem] gap-[5rem] shadow-lg z-10 left-[-10rem] xl:left-0">
              <div className="flex flex-row justify-center gap-[5rem]">
                <div>
                  <SubList
                    title="SNEAKERS"
                    item1="Casuals"
                    item2="Chunky"
                    item3="Formal"
                    item4="Retro"
                  />
                </div>
                <div>
                  <SubList
                    title="Slides And Sandals"
                    item1="Daily Use"
                    item2="Trendy"
                    item3="Casuals"
                  />
                </div>
                <div>
                  <SubList
                    title="Flip Flops"
                    item1="Daily Use"
                    item2="Extra Soft"
                    item3="Trendy"
                  />
                </div>
              </div>
              <SubHeader />
            </div>
          </div>

          <div className="relative group">
            <li className="flex flex-row justify-center items-center gap-[10px]">
              WOMEN <img src={DArrow} alt="" className="w-[1rem]" />
            </li>

            <div className="absolute hidden group-hover:flex flex-col justify-center w-max bg-white p-[2rem] lg:p-[4rem] gap-[5rem] shadow-lg z-10 left-[-15rem] xl:left-0">
              <div className="flex flex-row justify-center gap-[5rem]">
                <div>
                  <SubList
                    title="SNEAKERS"
                    item1="Casuals"
                    item2="Chunky"
                    item3="Formal"
                    item4="Retro"
                  />
                </div>
                <div>
                  <SubList
                    title="Slides And Sandals"
                    item1="Daily Use"
                    item2="Trendy"
                    item3="Casuals"
                  />
                </div>
                <div>
                  <SubList
                    title="Flip Flops"
                    item1="Daily Use"
                    item2="Extra Soft"
                    item3="Trendy"
                  />
                </div>
              </div>
              <SubHeader />
            </div>
          </div>

          <div className="relative group">
            <li className="flex flex-row justify-center items-center gap-[10px]">
              OFFERS <img src={DArrow} alt="" className="w-[1rem]" />
            </li>

            <div className="absolute hidden group-hover:flex flex-col justify-center w-max bg-white p-[2rem] lg:p-[4rem] gap-[5rem] shadow-lg z-10 left-[-15rem] xl:left-0">
              <div className="flex flex-row gap-[5rem] justify-center">
                <div>
                  <SubList
                    title="Price"
                    item1="Under Rs. 999"
                    item2="Under Rs. 1499"
                    item3="Under Rs. 1999"
                    item4="Under Rs. 3999"
                  />
                </div>
                <div>
                  <SubList
                    title="Discount"
                    item1="Upto 35% OFF"
                    item2="Upto 45% OFF"
                    item3="Upto 55% OFF"
                    item4="Upto 65% OFF"
                  />
                </div>
              </div>

              <SubHeader />
            </div>
          </div>

          <div className="relative group">
            <li className="flex flex-row justify-center items-center gap-[10px]">
              ABOUT US <img src={DArrow} alt="" className="w-[1rem]" />
            </li>

            <div className="absolute hidden group-hover:flex flex-row justify-center w-max bg-white p-[2rem] lg:p-[4rem] gap-[5rem] shadow-lg z-10 left-[-30rem]">
              <div>
                <SubList
                  item1="Our Journey"
                  item2="Brand Impact"
                  item3="Why Mriduls"
                  item4="Gift Card"
                />
              </div>

              <SubHeader />
            </div>
          </div>
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
            <img src={Cart} alt="" className="h-[25px]" /> <sub>2</sub>
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
            <li className="py-[20px] px-[0px] font-sans font-semibold w-[100%] text-center hover:bg-sky-500 hover:text-white">
              SHOES
            </li>
            <li className="py-[20px] px-[0px] font-sans font-semibold w-[100%] text-center hover:bg-sky-500 hover:text-white">
              SLIPPERS
            </li>
            <li className="py-[20px] px-[0px] font-sans font-semibold w-[100%] text-center hover:bg-sky-500 hover:text-white">
              ABOUT US
            </li>
            <li className="py-[20px] px-[0px] font-sans font-semibold w-[100%] text-center hover:bg-sky-500 hover:text-white">
              HELP
            </li>
          </div>

          <div className="flex flex-row justify-center items-center w-[100%] gap-[2rem] py-[4rem] px-[0rem]">
            <img src={Insta} alt="" className="w-[25px] h-[25px]" />
            <img src={Fb} alt="" className="w-[25px] h-[25px]" />
            <img src={X} alt="" className="w-[25px] h-[25px]" />
            <img src={LI} alt="" className="w-[25px] h-[25px]" />
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
