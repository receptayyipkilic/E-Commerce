import React from 'react'
import { Mail as MailIcon} from 'lucide-react';

function Mail() {
  return (
    <div className="w-[260px] h-[44px] rounded-[5px] p-[10px] gap-[5px] flex items-center">
      <h6 className="w-[219px] h-[24px] font-bold text-[14px] leading-[24px] tracking-[0.2px] font-montserrat flex items-center gap-[5px]">
        <MailIcon size={16}/> michelle.rivera@example.com</h6>
      </div>
  )
}

export default Mail