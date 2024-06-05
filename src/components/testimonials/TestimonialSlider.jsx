// import React from 'react'
import StarTest from "../../assets/StarTest.png";
import Carousel from "react-elastic-carousel";
import './Test.css'

const TestimonialSlider = () => {
  const data = [
    {
      img: StarTest,
      title: "Excellent",
      desc: "Absolutely great pair of shoes. Light weight yet strong, so very comfortable, feels like I am",
      name: "Kuntal Das",
      order: "Thread Basis",
      id: 1,
    },
    {
      img: StarTest,
      title: "Grip Fit Slip Ons",
      desc: "I received the Grip Fit Slip Ons about ten days ago and am absolutely happy with them👌",
      name: "Vikas Sharan",
      order: "Grip Fit",
      id: 2,
    },
    {
      img: StarTest,
      title: "Awesome purchase😍",
      desc: "Good Quality very very comfortable shoes thanks to Neeman's.",
      name: "Bommalolla satish",
      order: "Thread Basis",
      id: 3,
    },
    {
      img: StarTest,
      title: "Worth for money",
      desc: "Look 🙈 like awesome 😎 Perfect fitting and stylish worth for for money",
      name: "Raj Guru",
      order: "Signature Slides",
      id: 4,
    },
    {
      img: StarTest,
      title: "Looks good & is comfy",
      desc: "I’m an avid Neemans footwear user, tree sneakers & relive knit sneakers are my favs.",
      name: "Soundarya",
      order: "Jumbo Slides",
      id: 5,
    },
    {
      img: StarTest,
      title: "Good One",
      desc: "Like it. Awesome 😎 Perfect fitting and stylish worth for for money",
      name: "Nt.",
      order: "Casual Sneakers",
      id: 6,
    },
    {
      img: StarTest,
      title: "Ultra superb",
      desc: "Good quality good service good comfort 5 on 5.",
      name: "Mrunal Taywade",
      order: "Super Sneakers",
      id: 7,
    },
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

  return (
    <div className="w-[100%] md:w-[70%] m-auto pb-[10rem] relative">
      <Carousel itemsToShow={3} enableAutoPlay autoPlaySpeed={1500} breakPoints={breakPoints}>
        {data.map((item) => (
          <div key={item.id} className="bg-gray-50 shadow-inner shadow-slate-500 mx-[2rem] p-[1rem] h-[300px]">
            <div>
              <img src={item.img} alt="" className="w-[4rem]" />
              <p className="font-bold font-sans">{item.title}</p>
              <p>{item.desc}</p>
            </div>

            <div className="mt-[5rem]">
              <p className="font-bold font-sans">{item.name}</p>
              <p>{item.order}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
