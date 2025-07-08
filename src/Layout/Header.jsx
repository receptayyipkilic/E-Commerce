import React from 'react'
import NavbarDark from '../Header/NavbarDark'
import NavbarLight from '../Header/NavbarLight'
import MainImage from '../Header/MainImage'

function Header() {
  return (
    <div>
      <NavbarDark />
      <NavbarLight />
      <MainImage />
    </div>
  )
}

export default Header