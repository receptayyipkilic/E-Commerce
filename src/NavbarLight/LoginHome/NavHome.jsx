import React from 'react';
import { ChevronDown } from 'lucide-react';
import ShopDropdown from './ShopDropdown';

function NavHome() {
  return (
    <nav>
      <ul className="flex gap-[10px] list-none [&_a]:no-underline items-center pl-[50px]">
        <li><a href="#" className="font-montserrat font-[700] text-[14px] text-[#737373]">Home</a></li>
        <ShopDropdown />
        <li><a href="#" className="font-montserrat font-[700] text-[14px] text-[#737373]">About</a></li>
        <li><a href="#" className="font-montserrat font-[700] text-[14px] text-[#737373]">Blog</a></li>
        <li><a href="#" className="font-montserrat font-[700] text-[14px] text-[#737373]">Contact</a></li>
        <li><a href="#" className="font-montserrat font-[700] text-[14px] text-[#737373]">Pages</a></li>
      </ul>
    </nav>
  );
}

export default NavHome;


