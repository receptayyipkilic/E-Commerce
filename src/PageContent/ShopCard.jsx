import React from 'react'
import im1 from "../assets/image1.jpg";
import im2 from "../assets/image2.png";
import im3 from "../assets/image3.png";

function ShopCard() {
  return (
    <div className="grid grid-cols-2 h-[732px] w-[1500px] justify-center mx-auto">
      <div className="h-[572px] relative">
        <img
          src={im1}
          alt="Top Product"
          className="w-full object-cover h-full"
        />
        <div className="absolute bottom-px w-[420px] h-[238px] bg-[#2D8BC0BF] bg-opacity-75 flex flex-col pl-[70px] justify-start">
          <h6 className="text-[#FFFFFF] font-bold w-[200px] mb-[20px] text-[24px] leading-[32px] tracking-[0.2px] font-montserrat">Top Product Of the Week</h6>
          <button className="w-[198px] h-[52px] rounded-[5px] mb-[10px] bg-transparent border-[#FFFFFF] border-[1px] text-[#FFFFFF] font-[700] text-[14px] font-montserrat">
            EXPLORE ITEMS
          </button>
        </div>
      </div>
      <div className="flex flex-col pl-[15px] ">
        <div className="relative h-[289px] overflow-hidden mb-[20px]"> 
          <img
            src={im2}
            alt="Top Product"
            className="w-full h-full object-cover"
          />
          <div className=" absolute bottom-px bg-[#2D8BC0BF] bg-opacity-75 w-[347px] h-[173px] flex flex-col pl-[50px] justify-start ">
            <h6 className="text-[#FFFFFF] font-bold text-[20px] mb-[25px] font-montserrat ">Top Product Of the Week</h6>
            <button className="w-[198px] h-[52px] rounded-[5px]  bg-transparent border-[#FFFFFF] border-[1px] text-[#FFFFFF] font-[700] text-[14px] font-montserrat">
            EXPLORE ITEMS
          </button>
          </div>
        </div>
        <div className=" relative h-[263px] overflow-hidden">
          <img
            src={im3}
            alt="Top Product"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-px bg-[#2D8BC0BF] bg-opacity-75 w-[347px] h-[173px] flex flex-col pl-[50px] justify-start ">
            <h6 className="text-[#FFFFFF] font-bold text-[20px] mb-[25px]  font-montserrat">Top Product Of the Week</h6>
            <button className="w-[198px] h-[52px] rounded-[5px] bg-transparent border-[#FFFFFF] border-[1px] text-[#FFFFFF] font-[700] text-[14px] font-montserrat">
            EXPLORE ITEMS
          </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ShopCard;
