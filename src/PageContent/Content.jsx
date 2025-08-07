import React from 'react'
import im1 from '../assets/im1.jpg'
import im2 from '../assets/im2.jpg'


function Content() {
  return (
    <div className='h-[658px] bg-[#FFFFFF] w-[1400px] mx-auto pb-[100px] pt-[100px]'>
    <div className='flex flex-row h-[498px] gap-[90px]'>
    <div className='flex flex-row gap-[20px]'>
      <img src={im1}
      className="w-[40%] object-cover"/>
      <img src={im2}
      className="w-[40%] object-cover"/>
    </div>
    <div className='flex flex-col justify-center'>
    <h5 className='font-bold text-[16px] text-[#23A6F0]'>Featured Products</h5>
    <h2 className='font-bold text-[40px] text-[#252B42] w-[450px]'>We love what we do</h2>
    <p className='w-[350px] text-[#737373] text-[14px]'>Problems trying to resolve the conflict between 
the two major realms of Classical physics: 
Newtonian mechanics.</p>
<p className='w-[350px] text-[#737373] text-[14px]'>
Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics </p>
    </div>
    </div>
    </div>
  )
}

export default Content