import React from 'react'
import { ShoppingCart, Heart, User, Search } from 'lucide-react';

function NavLogin() {
  return (
    <div className="flex items-center gap-[5px] h-[54px]">
      <a href="#" className="w-[166px] h-[54px] rounded-[37px] flex items-center justify-center bg-white shadow font-[700] font-montserrat text-[14px] text-[#23A6F0] transition-colors no-underline">
        <User size={16} className="text-[#23A6F0]" />
        Login / Register
      </a>
      <a href="#" className="w-[46px] h-[46px] rounded-[37px] flex items-center justify-center bg-white shadow relative">
        <Search size={16} className="text-[#23A6F0]" />
      </a>
      <a href="#" className="w-[56px] h-[46px] rounded-[37px] flex items-center justify-center bg-white shadow relative">
        <ShoppingCart size={16} className="text-[#23A6F0]" />
      </a>
      <a href="#" className="w-[56px] h-[46px] rounded-[37px] flex items-center justify-center bg-white shadow relative">
        <Heart size={16} className="text-[#23A6F0]" />
      </a>
    </div>
  );
}

export default NavLogin;