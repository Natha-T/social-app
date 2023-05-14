import React from 'react'
import trend from "../../public/trend.png"
import trend1 from "../../public/trend1.png"
import trend2 from "../../public/trend2.png"
import trend3 from "../../public/trend3.png"
import Image from "next/image";
export default function Trend() {
  return (
    <div className="m-12 pt-16  ">
         <h1 className="  text-center font-bold text-3xl"> Trending Gigs</h1>
        <p className="text-center pt-2 text-base">Millions of people are using EtherX to turn their ideas into reality.</p>

<div className="grid grid-cols-2 pt-10 gap-8 lg:grid-cols-4">


 <Image 
 src={trend}
 width="200"
 height="200"
 className="rounded-md border-2 drop-shadow-lg shadow-md"
 alt=""
 />
 <Image 
 src={trend1}
 width="200"
 height="200"
 className="rounded-md border-2 drop-shadow-lg shadow-md"
 alt=""
 />
  <Image 
 src={trend2}
 width="200"
 height="200"
 className="rounded-md border-2 drop-shadow-lg shadow-md"
 alt=""
 />
  <Image 
 src={trend3}
 width="200"
 height="200"
 className="rounded-md border-2 drop-shadow-lg shadow-md"
 alt=""
 />

</div>

    </div>
  )
}
