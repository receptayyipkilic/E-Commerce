import React from 'react';

function NavHome() {
  return (
    <div className="w-[361px] h-[25px] absolute top-[16.5px] flex gap-[15px] items-center">
      <nav>
        <ul className="flex gap-[15px] list-none [&_a]:no-underline">
          <li><a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Home</a></li>
          <li><a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">Shop</a></li>
          <li><a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">About</a></li>
          <li><a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Blog</a></li>
          <li><a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Contact </a></li>
          <li><a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Pages</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavHome;


