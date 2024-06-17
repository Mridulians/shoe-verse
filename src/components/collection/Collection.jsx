// import React from 'react'
import Men from "../../assets/men.webp";
import Women from "../../assets/women.webp";
import Summer from "../../assets/summer.webp";
import Trending from "../../assets/trending.webp";
import "./Collection.css";
import Tilt from "react-parallax-tilt";

const Collection = () => {
  return (
    <div className="mt-[1.5rem]">
      <p className="font-sans text-[2rem] text-center font-semibold">
        Shop By Collection
      </p>

      <div className="big_collection flex-row p-[2rem] justify-center gap-[2rem] bg-gray-50">
        <Tilt className="w-[20%]">
          <img src={Men} alt="" className="cursor-pointer" />
        </Tilt>
        <Tilt className="w-[20%]">
          <img src={Women} alt="" className="cursor-pointer" />
        </Tilt>
        <Tilt className="w-[20%]">
          <img src={Summer} alt="" className="cursor-pointer" />
        </Tilt>
        <Tilt className="w-[20%]">
          <img src={Trending} alt="" className="cursor-pointer" />
        </Tilt>
      </div>

      <div className="small_collection flex-row py-[1rem] justify-center gap-[2rem] bg-gray-50">
        <Tilt className="w-[40%]">
          <img src={Men} alt="" className="cursor-pointer" />
        </Tilt>
        <Tilt className="w-[40%]">
          <img src={Women} alt="" className="cursor-pointer" />
        </Tilt>
        <Tilt className="w-[40%]">
          <img src={Summer} alt="" className="cursor-pointer" />
        </Tilt>
        <Tilt className="w-[40%]">
          <img src={Trending} alt="" className="cursor-pointer" />
        </Tilt>
      </div>
    </div>
  );
};

export default Collection;
