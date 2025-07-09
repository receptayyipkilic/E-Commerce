import React from 'react'
import { Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

function SocialMedia() {
  return (
    <div className="w-[233px] h-[46px] p-[10px] gap-[10px] flex items-center relative">
      <h6 className='w-[83px] h-[24px] font-bold text-[14px] leading-[24px] tracking-[0.2px] font-montserrat  flex items-center'>Follow Us  :</h6>
      <nav className="w-[120px] h-[26px] flex items-center  ">
      <a href='#' className="w-[26px] h-[26px] p-[5px] gap-[10px] flex items-center justify-center "> <Instagram size={16} color='white'/> </a>
        <a href='#' className="w-[26px] h-[26px] p-[5px] gap-[10px] flex items-center justify-center "> <Youtube size={16} color='white'/> </a>
        <a href='#' className="w-[26px] h-[26px] p-[5px] gap-[10px] flex items-center justify-center "> <Facebook size={16} color='white'/> </a>
        <a href='#' className="w-[26px] h-[26px] p-[5px] gap-[10px] flex items-center justify-center "> <Twitter size={16} color='white'/> </a>
         </nav> 
    </div>

  )
}

export default SocialMedia