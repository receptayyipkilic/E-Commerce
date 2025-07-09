import React from 'react'
import MainImage from '../Header/MainImage'
import Navbar from '../Header/Navbar'

function Header() {
  return (
    <div className='relative w-[1,440px] h-[852px]'> 
      <Navbar />
      <MainImage />
    </div>
  )
}

export default Header