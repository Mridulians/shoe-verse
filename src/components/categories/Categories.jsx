// import React from 'react'
import Cate1 from "../../assets/cate1.webp";
import Cate2 from "../../assets/cate2.webp";
import Cate3 from "../../assets/cate3.webp";
import Cate4 from "../../assets/cate4.webp";
import Cate5 from "../../assets/cate5.webp";
import Cate6 from "../../assets/cate6.webp";
import Cate7 from "../../assets/cate7.webp";
import Cate8 from "../../assets/cate8.webp";

import Right from "../../assets/Right.png";
import WhiteArrow from "../../assets/white-arrow.png";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="mb-[10rem]">
      <h2 className="text-[1.5rem] md:text-[2rem] font-bold font-sans text-center mb-[1rem]">
        Explore Our Categories
      </h2>

      <div className="big_category flex-row gap-[2rem] justify-center items-center">
        <img src={Cate1} alt="" className="w-[20%] cursor-pointer" />
        <img src={Cate2} alt="" className="w-[20%] cursor-pointer" />
        <img src={Cate3} alt="" className="w-[20%] cursor-pointer" />
        <img src={Cate4} alt="" className="w-[20%] cursor-pointer" />
      </div>
      <div className="big_category flex-row gap-[2rem] justify-center items-center">
        <img src={Cate5} alt="" className="w-[20%] cursor-pointer" />
        <img src={Cate6} alt="" className="w-[20%] cursor-pointer" />
        <img src={Cate7} alt="" className="w-[20%] cursor-pointer" />
        <img src={Cate8} alt="" className="w-[20%] cursor-pointer" />
      </div>

      <div className="small_category flex-row gap-[2rem] justify-center items-center">
        <img src={Cate1} alt="" className="w-[40%] cursor-pointer" />
        <img src={Cate2} alt="" className="w-[40%] cursor-pointer" />
      </div>
      <div className="small_category flex-row gap-[2rem] justify-center items-center">
        <img src={Cate3} alt="" className="w-[40%] cursor-pointer" />
        <img src={Cate4} alt="" className="w-[40%] cursor-pointer" />
      </div>
      <div className="small_category flex-row gap-[2rem] justify-center items-center">
        <img src={Cate5} alt="" className="w-[40%] cursor-pointer" />
        <img src={Cate6} alt="" className="w-[40%] cursor-pointer" />
      </div>
      <div className="small_category flex-row gap-[2rem] justify-center items-center">
        <img src={Cate7} alt="" className="w-[40%] cursor-pointer" />
        <img src={Cate8} alt="" className="w-[40%] cursor-pointer" />
      </div>

      <button className="flex flex-row justify-center items-center my-[3rem] mx-auto py-[0.5rem] md:py-[1rem] px-[1rem] md:px-[2rem] gap-[1rem] border-2 border-solid border-gray-600 relative overflow-hidden group">
        <span className="relative z-10 group-hover:text-white transition-colors duration-500">
          VIEW ALL PRODUCTS
        </span>
        <div className="relative w-[1rem] h-[1rem]">
          <img
            src={Right}
            alt="Right Arrow"
            className="absolute inset-0 w-full h-full transition-all z-10 duration-500 group-hover:z-0"
          />
          <img
            src={WhiteArrow}
            alt="White Arrow"
            className="absolute inset-0 w-full h-full transition-all duration-500 group-hover:z-10"
          />
        </div>
        <span className="absolute inset-0 bg-black transition-all duration-500 ease-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
      </button>
    </div>
  );
};

export default Categories;
