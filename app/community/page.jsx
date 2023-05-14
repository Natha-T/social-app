import React from "react";
import CommunityCard from "../components/communityCard";
export default function Community() {
  return (
    <main className="w-full  ">
      <h1 className=" pt-10  text-center font-bold text-3xl">
        {" "}
        Hear our community
      </h1>
      <div className="grid space-y-20 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 m-10 gap-10">
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </div>
    </main>
  );
}
