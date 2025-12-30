"use client";

import Image from "next/image";
import main from "@/public/main.png";
import AboutText from "@/src/components/about";
import Navbar from "@/src/components/Navbar/navbar";

export default function About() {
  return (
    <section className="bg-white min-w-screen min-h-screen">
      <div className=" relative">
        <Image
          src={main}
          className="min-w-screen min-h-screen "
          alt="Picture of the author"
        />
        <Navbar />
        <AboutText/>
      </div>
    </section>
  );
}
