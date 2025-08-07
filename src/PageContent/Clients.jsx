import React from 'react'
import img1 from "../assets/fa-brands-1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";

function Clients() {
  return (
    <div className='grid grid-cols-6 gap-[30px] w-[1400px] h-[175px] mx-auto'>
      <div className='flex justify-center'>
      <a href="#"><img src={img1}/></a>
        </div>
      <div className='flex justify-center'>
        <a href="#"><img src={img2}/></a>
        </div>
      <div className='flex justify-center'> 
        <a href="#"><img src={img3}/></a>
        </div>
          <div className='flex justify-center'>
            <a href="#"><img src={img4}/></a>
            </div>
          <div className='flex justify-center'>
            <a href="#"><img src={img5}/></a>
            </div>
          <div className='flex justify-center'>
            <a href="#"><img src={img6}/></a>
            </div>
    </div>
  )
}

export default Clients