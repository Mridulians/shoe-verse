// import React from 'react'
import Header1 from '../../assets/header_1.webp'
import Header2 from '../../assets/header_2.webp'

const SubHeader = () => {
  return (
    <div  className='flex flex-row justify-around gap-[2rem]'>
    <div>
      <img src={Header1} alt="" className='w-[200px] h-[200px]'/>
      <h2 className='font-semibold mt-[10px] text-center'>NEW ARRIVAL</h2>
      <p className='text-center mt-[10px] opacity-[0.7] font-sans'>BEGIN WALK - CRUISE</p>
    </div>
    <div>
      <img src={Header2} alt="" className='w-[200px] h-[200px]'/>
      <h2 className='font-semibold mt-[10px] text-center'>NEW ARRIVAL</h2>
      <p className='text-center mt-[10px] opacity-[0.7] font-sans'>PLUSH SQUARE FLATS</p>
    </div>
  </div>
  )
}

export default SubHeader