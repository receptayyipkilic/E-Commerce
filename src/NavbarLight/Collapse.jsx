import React from 'react'
import NavHome from './LoginHome/NavHome'
import NavLogin from './LoginHome/NavLogin'

function Collapse() {
  return (
    <div className='w-[1,155px] h-[58px] absolute left-[265px] relative flex  items-center'>
       <NavHome />
       <NavLogin />
    </div>
  )
}

export default Collapse