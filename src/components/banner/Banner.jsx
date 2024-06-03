import { useState } from "react";
import Banner1 from "../../assets/banner-1.webp";
import Banner2 from "../../assets/banner-2.webp";
import Banner3 from "../../assets/banner-3.webp";
import Banner1M from "../../assets/banner-1-mobile.webp";
import Banner2M from "../../assets/banner-2-mobile.webp";
import Banner3M from "../../assets/banner-3-mobile.webp";
import Left from "../../assets/Left.png";
import Right from "../../assets/Right.png";
import "./Banner.css";

const ImageSlider = () => {
  const data = [Banner1, Banner2, Banner3];
  const data2 = [Banner1M, Banner2M, Banner3M];

  const [currentImage, setCurrentImage] = useState(0);
  //   const [direction, setDirection] = useState('');

  const handleNext = () => {
    // setDirection('next')
    setCurrentImage((currentImage + 1) % data.length);
  };

  const handlePrevious = () => {
    // setDirection('prev')
    setCurrentImage(!currentImage ? data.length - 1 : currentImage - 1);
  };

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       handleNext();
  //     }, 4000);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, [currentImage]);

  return (
    <>
      <div className="desktop-banner relative">
        <button
          className="absolute top-[50%] left-[1%]"
          onClick={handlePrevious}
        >
          <img
            src={Left}
            alt=""
            className="w-[3rem] h-[3rem] bg-white p-[5px] rounded-[50%]"
          />
        </button>
        <img
          src={data[currentImage]}
          alt=""
          className="h-screen cursor-pointer"
        />
        <button className="absolute top-[50%] right-[1%] " onClick={handleNext}>
          <img
            src={Right}
            alt=""
            className="w-[3rem] h-[3rem] bg-white p-[5px] rounded-[50%]"
          />
        </button>
      </div>

      <div className="mobile-banner relative">
        <button
          className="absolute top-[50%] left-[1%]"
          onClick={handlePrevious}
        >
          <img
            src={Left}
            alt=""
            className="w-[3rem] h-[3rem] bg-white p-[5px] rounded-[50%]"
          />
        </button>
        <img
          src={data2[currentImage]}
          alt=""
          className="w-[100%] h-screen cursor-pointer"
        />
        <button className="absolute top-[50%] right-[1%] " onClick={handleNext}>
          <img
            src={Right}
            alt=""
            className="w-[3rem] h-[3rem] bg-white p-[5px] rounded-[50%]"
          />
        </button>
      </div>
    </>
  );
};

export default ImageSlider;
