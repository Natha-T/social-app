import React from 'react'


export default function Postcard() {
  return (
                <div  class="group m-8 pb-8 focus:outline-none w-full border-2 border-gray-300 mb-7 bg-white p-6  shadow-md rounded">
                    <div class="flex items-center border-b  border-gray-200 pb-6">
                        <img src="https://cdn.tuk.dev/assets/components/misc/doge-coin.png" alt="coin avatar" class="w-12 h-12 rounded-full" />
                        <div class="flex items-start justify-between w-full ">
                            <div class="pl-3 ">
                                <p  class="focus:outline-none text-xl font-semibold leading-5 text-gray-800">Dogecoin nerds</p>
                                <div className="flex gap-4 ">
                                <p  class="focus:outline-none text-sm leading-normal pt-2 text-gray-500">36 folow,</p>
                                 <p  class="focus:outline-none text-sm leading-normal pt-2 text-gray-500">3 post,</p>
                                   <p  class="focus:outline-none text-sm leading-normal pt-2 text-gray-500">5 like</p>
                                 </div>
                            </div>
                            <div className="" >
                                <svg  class="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="px-2">
                      <h1 className="pt-4 text-xl font-mono font-medium">Text TITLE</h1>
                        <p  class="focus:outline-none text-sm leading-5 pb-6 pt-1 text-gray-600">A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                        <div  class="focus:outline-none flex">
                            <div class="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#dogecoin</div>
                            <div class="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#crypto</div>
                        </div>
                    </div>
                </div>
      
            
  )
}
