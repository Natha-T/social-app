import React, { useState } from "react";
import { Route } from "next";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/explore", label: "Explore" },
  { href: "/community", label: "Community" },
  { href: "/post", label: "Post" },
];
export default function Navbar() {
  const pathname = usePathname();
  const [ShowNav, SetShowNav] = useState(false);
  return (
   
    <div className="flex w-full   p-4  bg-[#09111f]   gap-4 justify-between ">

      <div className="flex w-1/7 text-2xl lg:text-1xl not-italic leading-7 items-center font-bold">
        <h1 className="text-[#0D99FF] ">Ether</h1>
        <h1 className="text-white  ">X</h1>
      </div>

      <nav className="flex gap-4 pr-4 pl-4  text-white items-center ">
      {nav.map((option) => (
          <Link href={option.href} key={option.label}>
            <ul>
              <li className="not-italic w-full font-semibold text-xl leading-5 tracking-wide lg:text-base">
              
                  {option.label}
           
              </li>
            </ul>
          </Link>
        ))}
      </nav>

         
      <div className="self-center  lg:px- lg:py-1 lg:w-full  rounded-full">
<input type="text" placeholder="Search, Meet and Colaborate with the ecosystem" 
         className=" lg:w-full px-3 py-1 border rounded-full w-f backdrop-blur-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
</div>

<div className="flex gap-2 pl-2 w-full font-semibold   ">

  <a href="login" className="text-xl  text-white bg-  px-4 py-3 rounded-lg lg:text-sm  "> Login</a>

  <a href="register" className="text-xl   bg-green-400 px-4 py-3   rounded-lg lg:text-sm "> Sign Up</a>

  <button className=" text-xl  bg-blue-500 px-4 py-3  text-white rounded-lg lg:text-sm  "> Connect Wallet </button>



</div>
      
    </div>
  );
}
    /*   */