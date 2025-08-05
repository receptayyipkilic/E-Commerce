import React from 'react'
import NavbarDark from './NavbarDark'
import NavbarLight from './NavbarLight'

function Navbar() {
  return (
    <div className='w-full bg-[#FFFFFF] h-[136px]'>
        <NavbarDark />
        <NavbarLight />
    </div>
  )
}

export default Navbar