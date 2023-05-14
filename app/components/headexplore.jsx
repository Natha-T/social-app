import React from "react";
import headexplore from "../../public/headexplore.png";
import Image from "next/image";
export default function HeadExplore() {
  return (
    <div className="pt-6 w-full m-6 gap-16 flex w-full justify-center    ">
      <div className="basis-1/3 p-4 pr-6 rounded-sm bg-gray-200">
        <h1 className="font-semibold text-3xl">Hi, </h1>
        <span className="font-semibold text-3xl">User !</span>
        <p className=" mt-3  font-inter font-normal text-2xl leading-7 text-center tracking-wider opacity-75">
          Get matched with peapol who share your interest{" "}
        </p>
        <p className="text-center text-base mt-2 font-semibold">
          And credit them{" "}
        </p>

        <div className="flex w-full justify-center">
          <button className="px-6 py-2 mt-6 rounded-lg font-semibold text-white bg-[#238EF9]">
            {" "}
            Credit your favotire{" "}
          </button>
        </div>
      </div>

      <div className="basis-2/3 w-full ">
        <Image
          src={headexplore}
          alt="headexplore"
          width={600}
          height={500}
          className="rounded-md"
        />
      </div>
    </div>
  );
}
