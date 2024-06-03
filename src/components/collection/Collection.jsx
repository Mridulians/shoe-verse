// import React from 'react'
import Men from "../../assets/men.webp";
import Women from "../../assets/women.webp";
import Summer from "../../assets/summer.webp";
import Trending from "../../assets/trending.webp";
import "./Collection.css";

const Collection = () => {
  return (
    <div className="mt-[1.5rem]">
      <p className="font-sans text-[2rem] text-center font-semibold">
        Shop By Collection
      </p>

      <div className="big_collection flex-row p-[2rem] justify-center gap-[2rem] bg-gray-50">
        <img src={Men} alt="" className="w-[20%] cursor-pointer" />
        <img src={Women} alt="" className="w-[20%] cursor-pointer" />
        <img src={Summer} alt="" className="w-[20%] cursor-pointer" />
        <img src={Trending} alt="" className="w-[20%] cursor-pointer" />
      </div>

      <div className="small_collection flex-row py-[1rem] justify-center gap-[2rem] bg-gray-50">
        <img src={Men} alt="" className="w-[40%] cursor-pointer" />
        <img src={Women} alt="" className="w-[40%] cursor-pointer" />
        <img src={Summer} alt="" className="w-[40%] cursor-pointer" />
        <img src={Trending} alt="" className="w-[40%] cursor-pointer" />
      </div>
    </div>
  );
};

export default Collection;
