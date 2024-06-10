/* eslint-disable react/prop-types */
// import React from 'react'

const SubList = ({title , item1 , item2 , item3 , item4}) => {
  return (
    <>
     <h2 className="text-2xl font-bold font-sans text-fuchsia-900 hover:underline mb-[2rem] cursor-pointer">{title}</h2>
      <ul>
        <li className="mt-[10px] font-sans font-bold hover:underline cursor-pointer">
         {item1}
        </li>
        <li className="mt-[10px] font-sans font-bold hover:underline cursor-pointer">
          {item2}
        </li>
        <li className="mt-[10px] font-sans font-bold hover:underline cursor-pointer">
          {item3}
        </li>
        <li className="mt-[10px] font-sans font-bold hover:underline cursor-pointer">
        {item4}
        </li>
      </ul>
    </>
  );
};

export default SubList;
