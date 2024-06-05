// import React from 'react'
import Insta from "../../assets/instagram.png";
import Fb from "../../assets/facebook.png";
import X from "../../assets/twitter.png";
import LI from "../../assets/linkedin.png";
import FooterImg from "../../assets/footerImg.png";
import BulkMobile from "../../assets/bulk-Mobile.webp";
import Bulk from "../../assets/bulk.jpg";

const Footer = () => {
  return (
    <>
      <div>
        <img src={Bulk} alt="" className="hidden md:block cursor-pointer" />
        <img
          src={BulkMobile}
          alt=""
          className="block md:hidden cursor-pointer"
        />
      </div>

      <div className="mt-[5rem] relative bg-black text-white py-[4rem] flex flex-col items-center">
        <h2 className="mt-[3rem] text-center font-sans font-bold sm:text-[2rem] lg:text-[3rem] py-[0rem] px-[1rem] text-[1.25rem] break-normal max-w-[800px]">
          Our page has come to an end, but our relationship with you has not.
        </h2>

        <div className="mt-[2rem]">
          <p className="text-[1.25rem] mb-[2rem] tracking-[2px] text-center sm:text-[1.5rem]">
            STAY SUSTAINABLE AND SUBSCRIBE NOW
          </p>
          <div className="mt-[1.5rem] flex flex-row justify-center">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              name=""
              id=""
              className="w-[40%] sm:w-[100%] py-[0.75rem] px-[1rem] sm:px-[3rem] text-black"
            />
            <button className="w-[40%] bg-orange-200 text-black font-bold font-sans py-[0.75rem] px-[1rem]">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="flex flex-col py-[10px] px-[2rem] sm:p-0 sm:flex-row mt-[4rem] justify-center w-[100%] gap-[2rem] lg:gap-[4rem] ">
          <div>
            <h3 className="mb-[1.5rem] tracking-[2px]">SHOP FOR MEN</h3>
            <ul>
              <li className="tracking-[1px] mb-[10px] text-[14px]">Sneakers</li>
              <li className="tracking-[1px] mb-[10px] text-[14px]">Slip Ons</li>
              <li className="tracking-[1px] mb-[10px] text-[14px]">Loafers</li>
              <li className="tracking-[1px] mb-[10px] text-[14px]">
                Flip Flop
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-[1.5rem] tracking-[2px]">SHOP FOR WOMEN</h3>
            <ul>
              <li className="tracking-[1px] mb-[10px] text-[14px]">Sneakers</li>
              <li className="tracking-[1px] mb-[10px] text-[14px]">Slip Ons</li>
              <li className="tracking-[1px] mb-[10px] text-[14px]">Flats</li>
              <li className="tracking-[1px] mb-[10px] text-[14px]">
                Flip Flop
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-[1.5rem] tracking-[2px]">INFORMATION</h3>
            <ul>
              <li className="tracking-[1px] mb-[10px] text-[14px]">
                Track Your Order
              </li>
              <li className="tracking-[1px] mb-[10px] text-[14px]">
                Brand Impact
              </li>
              <li className="tracking-[1px] mb-[10px] text-[14px]">
                Our Journey
              </li>
              <li className="tracking-[1px] mb-[10px] text-[14px]">
                Our Stores
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-[1.5rem] tracking-[2px]">GUIDES</h3>
            <ul>
              <li className="tracking-[1px] mb-[10px] text-[14px]">Exchange</li>
              <li className="tracking-[1px] mb-[10px] text-[14px]">Return</li>
              <li className="tracking-[1px] mb-[10px] text-[14px]">
                Shoe Care
              </li>
              <li className="tracking-[1px] mb-[10px] text-[14px]">
                Terms & Conditions
              </li>
            </ul>
          </div>
        </div>

        <hr className="w-[60%] my-[2rem]" />

        <div className="flex flex-col gap-[2rem] md:gap-0 md:flex-row justify-between w-[60%] text-center">
          <div>
            <p>CONTACT US - </p>
            <p>Whatsapp - 8527269730</p>
            <p>Call - 8527269730 </p>
            <p>(9:00AM to 9:00PM)</p>
          </div>
          <div className="flex flex-row items-center gap-[2rem] justify-center">
            <img src={Insta} alt="" className="w-[1.5rem]" />
            <img src={Fb} alt="" className="w-[1.5rem]" />
            <img src={X} alt="" className="w-[1.5rem]" />
            <img src={LI} alt="" className="w-[1.5rem]" />
          </div>
        </div>

        <img
          src={FooterImg}
          alt=""
          className=" bottom-[94%] absolute md:bottom-[88%]"
        />
      </div>
    </>
  );
};

export default Footer;
