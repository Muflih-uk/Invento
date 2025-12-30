"use client";

import Image from "next/image";
import main from "@/public/main.png";

export default function About() {
  return (
    <div className="bg-white min-w-screen min-h-screen">
      <Image
        src={main}
        className="min-w-screen min-h-screen "
        alt="Picture of the author"
      />
    </div>
  );
}
