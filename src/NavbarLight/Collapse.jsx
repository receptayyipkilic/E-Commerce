import React from 'react'
import NavHome from './LoginHome/NavHome'
import NavLogin from './LoginHome/NavLogin'

function Collapse() {
  return (
    <div className="flex flex-1 items-center justify-between h-[58px]">
      <NavHome />
      <NavLogin />
    </div>
  )
}

export default Collapse