import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function ShopDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42] focus:outline-none border-none bg-transparent"
        type="button"
      >
        Shop <ChevronDown size={16} className="ml-1" />
      </button>
      {open && (
        <div className="absolute w-[396px] h-[272px] bg-[#FFFFFF]  flex ">
          <div>
            <div className="font-bold "> 
              <button className="border-none bg-transparent font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] ">Kadın</button></div>
            <ul className="">
              <li>Bags</li>
              <li>Belts</li>
              <li>Cosmetics</li>
              <li>Bags</li>
              <li>Hats</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Erkek</div>
            <ul className="space-y-1">
              <li>Bags</li>
              <li>Belts</li>
              <li>Cosmetics</li>
              <li>Bags</li>
              <li>Hats</li>
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}

export default ShopDropdown; 