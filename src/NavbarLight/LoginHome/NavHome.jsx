import React from 'react';
import { ChevronDown } from 'lucide-react';
import ShopDropdown from './ShopDropdown';

function NavHome() {
  return (
    <nav>
      <ul className="flex gap-[5px] list-none [&_a]:no-underline items-center">
        <li><a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Home</a></li>
        <ShopDropdown />
        <li><a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">About</a></li>
        <li><a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Blog</a></li>
        <li><a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Contact</a></li>
        <li><a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Pages</a></li>
      </ul>
    </nav>
  );
}

export default NavHome;


