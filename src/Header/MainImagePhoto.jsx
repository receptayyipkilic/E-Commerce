import React from "react";
import mainImage from "../assets/hero.png";

const MainImagePhoto = () => (
  <div className="flex justify-center items-center w-[697px] h-[619px]">
    <img
      src={mainImage}
      alt="New Collection"
      className="w-[687px] h-[690px] object-contain absolute mr-[-180px] mt-[-4px]"
    />
  </div>
);

export default MainImagePhoto;