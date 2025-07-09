import React from 'react'

function NavLogin() {
  return (
    <div className='w-[324px] h-[54px] absolute top-[2px] left-[832px] flex items-center'>
        <nav>
           <ul className="flex list-none [&_a]:no-underline"> 
          <li className="w-[166px] h-[54px]"><button className='rounded-[37px] p-[15px] gap-[5px] bg-[#FFFFFF] border-none '>
            <a href="#" className="font-bold font-montserrat  text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0]">Login / Register</a></button></li>
          <li><a href="#" className="">Shop</a></li>
          <li><a href="#" className="">About</a></li>
          <li><a href="#" className="">Blog</a></li>
        </ul>
        </nav>
    </div>
);
}

export default NavLogin