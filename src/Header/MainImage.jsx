import React from "react";
import MainImageText from "./MainImageText";
import MainImagePhoto from "./MainImagePhoto";

const MainImage = () => {
  return (
    <div className="flex justify-center w-full mt-[20px]">
      <div className="w-[90%] h-[615px] rounded-[20px] flex items-center bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] justify-between">
        <MainImageText />
        <MainImagePhoto />  
      </div>
    </div>
  );
};

export default MainImage;