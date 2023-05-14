import React from "react";
import HeadExplore from "../components/headexplore";
import Postcard from "../components/postcard";
export default function Explore() {
  return (
    <main className="w-full">
      <HeadExplore />

      <h1 className=" pt-10  text-center font-bold text-3xl">
        {" "}
        Explore best Post
      </h1>
      <div className="grid  pt-4 grid-cols-2 lg:grid-cols-3 md:grid-cols-2 m-10 gap-10">
        <Postcard />
        <Postcard />
        <Postcard />
        <Postcard />
        <Postcard />
        <Postcard />
        <Postcard />
        <Postcard />
        <Postcard />
      </div>

      <p className="pt-16 mb-16 font-inter font-semibold text-black text-lg leading-6 text-center">
        Load More
      </p>
    </main>
  );
}
