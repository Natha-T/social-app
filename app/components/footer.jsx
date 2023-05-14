import React from 'react'

export default function Footer() {
  return (
    <div className="bg-[#09111f]">
         <h1 className=" pt-6 text-center font-bold text-xl"> Join our Community</h1>
         <div className="flex justify-center gap-8">
            <a href="https://www.facebook.com/" className="text-center p-4 bg-blue-500 rounded-full hover:bg-blue-700 hover:text-white">
                <i className="fab fa-facebook-f"></i>
                </a>


            <a href="https://www.twitter.com/" className="text-center p-4 bg-blue-500 rounded-full hover:bg-blue-700 hover:text-white">
                <i className="fab fa-twitter"></i>
                </a>



         </div>

         <div className="flex pt-6 justify-between">
         <h1>EtherX</h1>


         <h1>Powerd by SNPXX</h1> 

         </div>




    </div>
  )
}
