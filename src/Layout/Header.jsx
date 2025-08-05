import React from 'react'
import MainImage from '../Header/MainImage'
import Navbar from '../Header/Navbar'

function Header() {
  return (
    <div className='h-[852px] bg-[#FFFFFF] '> 
      <Navbar />
      <MainImage />
    </div>
  )
}

export default Header