import React from 'react'

export default function Dropdown() {
    const category = [
  { postCategory: "Gaming" },
  { postCategory: "Crypto" },
  { postCategory: "Programming" },
    { postCategory: "Music" },
      { postCategory: "Film" },
        { postCategory: "Learning" },
          { postCategory: "Travel" },
              { postCategory: "Technologie" },
                  { postCategory: "Artificial Inteligence" },

];
  return (
  <div class="">
      <div class="group inline-block ">
        <p
          class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
        >
          <span class="mr-1">Category</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </p>
        <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
  
            { 
            category.map((item, index) => (
                <li class=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">{item.postCategory}
                  <input type="checkbox"  className=" mx-4 "/> 
                </li>
                ))}


        </ul>
      </div>
    </div>
  )
}

