"use client";

import { useEffect, useState } from "react";
import { akira } from "@/src/lib/fonts";

interface ContactAddressProps {
  showElements: boolean;
  addressRef: React.RefObject<HTMLParagraphElement | null>;
}

export default function ContactAddress({ showElements, addressRef }: ContactAddressProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <p
      ref={addressRef}
      className={akira.className}
      style={{
        position: "absolute",
        width: isMobile ? "200px" : "598px",
        height: "auto",
        top: isMobile ? "220px" : "30px",
        right: isMobile ? "20px" : "0",
        left: isMobile ? "auto" : "auto",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: isMobile ? "12px" : "20px",
        lineHeight: isMobile ? "20px" : "30px",
        color: "#FFFFFF",
        zIndex: 20,
        margin: 0,
        padding: isMobile ? "10px" : "20px",
        wordWrap: "break-word",
        overflowWrap: "break-word",
        textAlign: isMobile ? "left" : "left",
        visibility: showElements ? "visible" : "hidden",
      }}
    >
      Government Engineering College Sreekrishnapuram, Palakkad, Kerala - 678633
    </p>
  );
}

