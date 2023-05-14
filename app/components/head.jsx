import React from "react";
import Image from "next/image";
import headimg from "../../utils/headimg.png"

//
export default function head() {
  return (
    <div className="pt-20  bg-[#09111f]  pb-20 grid place-content-center">
    
      <div  className="ml-6 mx-auto  col-span-2 text-center">
        <div className=" ">
        <h1 className= " text-white font-inter font-medium text-5xl leading-80 text-center tracking-wider text-white">Discover, Buy & Sell</h1>
        <h1 className="text-white font-inter font-medium text-5xl leading-80 text-center tracking-wider text-white">awesome <span className="text-[#0D99FF]">services</span></h1>
        </div>
        <div>
          <h1 className="font-inter pt-6 text-[#e4d8eb] font-normal text-xl leading-6 text-center tracking-widest ">Pakistan’s first block chain supported 
freelance marketplace</h1>
      </div>
      <div className="flex gap-5 pt-12 justify-center">
        <a className="px-6 text-white py-2 rounded-lg font-semibold bg-blue-500">Explore</a>
        <a className="px-6 py-2 rounded-lg font-semibold bg-white">Create</a>
      </div>
      <div className="pt-8 text-[#f2e9f7]"> <a className="mt-8"> #LeanMore</a></div>
     
</div>



    </div>
  );
}
