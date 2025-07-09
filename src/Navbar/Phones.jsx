import React from 'react';
import { Phone } from 'lucide-react';

function Phones() {
  return (
    <div className="rounded-[5px] w-[145px] h-[44px] p-[10px] gap-[5px] flex items-center ">
      <h6 className="font-bold text-[14px] leading-[24px] tracking-[0.2px] font-montserrat flex items-center gap-[5px]">
        <Phone size={16} /> (216) 429-8400
      </h6>
    </div>
  );
}

export default Phones;
