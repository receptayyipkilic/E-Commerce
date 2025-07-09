import React from 'react'
import NavbarDark from './NavbarDark'
import NavbarLight from './NavbarLight'

function Navbar() {
  return (
    <div className='"bg-[#FFFFFF] w-[1,439px] h-[136px]'>
        <NavbarDark />
        <NavbarLight />
    </div>
  )
}

export default Navbar