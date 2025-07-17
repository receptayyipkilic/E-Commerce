import React from 'react'
import { ShoppingCart, Heart, User, Search } from 'lucide-react';

function NavLogin() {
  return (
    <div className="flex items-center gap-[5px] h-[54px]">
      <a href="#" className="w-[166px] h-[54px] rounded-[37px] px-4 flex items-center justify-center bg-white shadow font-bold font-montserrat text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0] gap-2 hover:bg-[#f0f8ff] transition-colors">
        <User size={16} className="text-[#23A6F0]" />
        Login / Register
      </a>
      <a href="#" className="w-[46px] h-[46px] rounded-[37px] p-[15px] flex items-center justify-center bg-white shadow relative">
        <Search size={16} className="text-[#23A6F0]" />
      </a>
      <a href="#" className="w-[56px] h-[46px] rounded-[37px] p-[15px] flex items-center justify-center bg-white shadow relative">
        <ShoppingCart size={16} className="text-[#23A6F0]" />
      </a>
      <a href="#" className="w-[56px] h-[46px] rounded-[37px] p-[15px] flex items-center justify-center bg-white shadow relative">
        <Heart size={16} className="text-[#23A6F0]" />
      </a>
    </div>
  );
}

export default NavLogin;