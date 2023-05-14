import React from 'react'
import card from "../../public/card.png"
import user from "../../public/user.png"
import Image from "next/image";
export default function Card() {
  return (
    <div className="shadow-2xl drop-shadow-lg ">
<Image 
src={card}
width={200}
height={200}
layout="fixed"
objectFit="cover"
alt="headimg"
className="w-full  rounded-lg border border-gray-200 bg-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out bg-gray-200 border-2 border-gray-200 border-opacity-50 hover:border-opacity-100 hover:border-gray-300"
/>


<div className="  gap-4 m-2 flex ">
    <Image
    src={user}
    width={80}
    height={80}
    className="border-2  rounded-lg border-gray-100"
    alt=""
    />

    <h1 className="pt-5 w-1/4 ">Pätick</h1>

    <div className="pt-5 w-2/4 flex justify-end text-end">
        <p className="text-sm font-bold">P</p>
    </div>
</div>

    <p className="font-light text-xs  text-left text-black m-2 ">Current Price</p>   

<div className="flex">
    <p className=" font-bold m-2 text-lg ">225$ </p>
    <p className="text-sm  m-2 text-base ">I will design  wordpress site for you </p>
</div>

    </div>
  )
}
