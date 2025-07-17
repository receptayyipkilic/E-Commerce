import React from 'react'
import Brand from '../NavbarLight/Brand'
import Collapse from '../NavbarLight/Collapse'

function NavbarLight() {
  return (
    <div className="flex w-full h-[58px] items-center">
      <Brand />
      <Collapse />
    </div>
  )
}

export default NavbarLight