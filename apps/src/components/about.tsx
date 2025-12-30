import gsap from "gsap";
import { useEffect } from "react";

export default function AboutText() {
  useEffect(() => {
    gsap.from(".title", {
      y: 400,
      
    });
  });

  return (
    <>
      <div className="title absolute top-174  font-bold text-[360px] left-16 opacity-30 text-amber-50">
        <h1>ABOUT</h1>
      </div>
    </>
  );
}
