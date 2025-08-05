import React from 'react'
import Phones from '../Phones'
import Mail from '../Mail'

function PhoneMail() {
  return (
    <div className="flex item-center justify-between w-[415px] h-[46px] gap-[10px] pl-[28px]">
        <Phones/>
        <Mail />
    </div>
  )
}

export default PhoneMail