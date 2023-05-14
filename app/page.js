"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Head from "./components/head";
import Cta from "./components/cta";
import Market from "./components/market";
import Trend from "./components/trend";
import GetStarted from "./components/getstarted";

export default function Home() {
  return (
    <main className="w-full ">
      <Head />
      <Cta />
      <Market />
      <Trend />
      <GetStarted />
    </main>
  );
}
