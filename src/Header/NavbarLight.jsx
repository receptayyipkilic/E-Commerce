import React from 'react'
import Brand from '../NavbarLight/Brand'
import Collapse from '../NavbarLight/Collapse'

function NavbarLight() {
  return (
    <div className="w-[1,437px] h-[58px] flex justify-between items-center relative ">
      <Brand />
      <Collapse />
    </div>
  )
}

export default NavbarLight