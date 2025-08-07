

function CardProduct({image}) {
return (
<div>
<div className="">
<img
src={image} alt="Product Card"
className="w-full h-full"/>
</div>
<div className='flex grid items-center justify-center'>
    <h5 className="text-[#252B42] font-bold text-[16px] font-montserrat text-center">Graphic Design</h5>
    <a href="#" className="text-[#737373] font-[700] text-[14px] font-montserrat no-underline">English Department</a>
    <div className='flex justify-center gap-[5px]'>
        <h5 className='text-[#BDBDBD] font-bold text-[16px] font-montserrat'>$16.48</h5>
        <h5 className='text-[#23856D] font-bold text-[16px] font-montserrat'>$6.48</h5>
    </div>
</div>
</div>
)
}

export default CardProduct