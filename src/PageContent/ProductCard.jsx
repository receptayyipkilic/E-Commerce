import React from 'react'
import CardProduct from '../Components/CardProduct'
import card1 from "../assets/cards/card1.jpg";
import card2 from "../assets/cards/card2.jpg";
import card3 from "../assets/cards/card3.jpg";
import card4 from "../assets/cards/card4.jpg";
import card5 from "../assets/cards/card5.jpg";
import card6 from "../assets/cards/card6.jpg";
import card7 from "../assets/cards/card7.jpg";
import card8 from "../assets/cards/card8.jpg";
import card9 from "../assets/cards/card9.jpg";
import card10 from "../assets/cards/card10.jpg";

function ProductCard() {

  const productImages = [
    card1,
    card2,card3,
    card4,card5,card6,card7,card8,card9,card10
  ];

  return (
    <div className='bg-[#FFFFFF] h-[1350px] flex justify-center grid justify-items-center'>
    <div className='gap-[10px] text-center'>
    <h2 className='text-[20px] font-montserrat text-[#737373]'>Featured Products</h2>
    <h3 className='text-[24px] font-montserrat text-[#252B42]'>BESTSELLER PRODUCTS</h3>
    <p className='text-[14px] text-[#737373]'>Problems trying to resolve the conflict between </p>
    </div>
    <div className='h-[950px] w-[1400px] gap-[30px] grid grid-cols-5 mb-[80px]'>
    {productImages.map((img, index) => (
          <CardProduct key={index} image={img} />
        ))}
    </div>
    <div className='flex w-[256px] h-[52px] rounded-[5px] gap-[10px] border-[#23A6F0] border-[1px] justify-center'>
      <button className=' font-[700] text-[#23A6F0] text-[14px] font-montserrat border-0  bg-transparent text-center'>LOAD MORE PRODUCT</button>
    </div>
    </div>
  )
}

export default ProductCard