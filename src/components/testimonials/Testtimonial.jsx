// import React from 'react'
import Star from '../../assets/Star.png'
import Test1 from '../../assets/test1.svg'
import Test2 from '../../assets/test2.svg'
import Test3 from '../../assets/test3.svg'
import Test4 from '../../assets/test4.svg'
import Test5 from '../../assets/test5.svg'
import TestimonialSlider from './TestimonialSlider'


const Testtimonial = () => {
  return (
    <>
    <div className='mb-[4rem]'>
        
        <p className='text-[2rem] font-sans font-semibold text-center'>Customer Testimonials</p>

        <div className='flex flex-row justify-center items-center mt-[3rem]'>
            <div className='flex flex-row border-r-2 border-slate-800 border-solid pr-[1rem] opacity-[0.6] justify-center items-center text-center flex-wrap'>
             <img src={Star} alt="" className='w-[4rem]'/>
             <p>17251 reviews</p>
            </div>

            <div className='flex flex-row pl-[1rem] flex-wrap'>
                <img src={Test1} alt="" className='w-[5rem]'/>
                <img src={Test2} alt="" className='w-[5rem]'/>
                <img src={Test3} alt="" className='w-[5rem]'/>
                <img src={Test4} alt="" className='w-[5rem]'/>
                <img src={Test5} alt="" className='w-[5rem]'/>
            </div>
        </div>
    </div>

    <TestimonialSlider />

    </>
  )
}

export default Testtimonial