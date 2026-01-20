"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

interface TeamCardProps {
  image?: string | StaticImageData;
  name: string;
  role: string;
}

export default function TeamCard({ image, name, role }: TeamCardProps) {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData | undefined>(image);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(image);
    setHasError(false);
  }, [image]);

  return (
    <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 group shadow-lg">
      {/* 1. Person Image */}
      <div className="absolute inset-0 z-0">
        {!hasError && imgSrc ? (
            <Image
            src={imgSrc}
            alt={name}
            fill
            className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-opacity duration-500"
            onError={() => {
                setHasError(true);
            }}
          />
        ) : (
            // Placeholder for missing or loading images
            <div className="w-full h-full bg-gray-300 flex items-center justify-center animate-pulse">
                <span className="sr-only">Image not available</span>
            </div>
        )}
      </div>

      {/* 2. Red Wave Overlay */}
      {/* Increased height to 52% to ensure text has enough red background */}
      <div className="absolute bottom-0 left-0 w-full h-[52%] z-10 pointer-events-none">
         {/* SVG Wave */}
         <div className="absolute inset-0 w-full h-full text-[#FF0000]">
            <svg 
                className="w-full h-full" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
            >
                {/* 
                    Adjusted path:
                    M0,100 (Bottom Left)
                    L0,40  (Raised the visual start on the left side to 40% from top)
                    Q40,65 100,20 (Curve)
                    L100,100 (Bottom Right)
                */}
                <path 
                    d="M0,100 L0,40 Q40,65 100,20 L100,100 Z" 
                    fill="currentColor"
                />
            </svg>
         </div>

         {/* Content inside the wave */}
         <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-4 pb-4">
            <div className="flex justify-between items-end w-full">
                <div className="flex flex-col text-white pb-1">
                    <h3 className="text-lg md:text-xl font-bold uppercase leading-tight">{name}</h3>
                    <p className="text-xs md:text-sm font-medium opacity-90">{role}</p>
                </div>
                
                {/* Invento Logo Icon */}
                <div className="w-8 h-8 opacity-90 mb-1">
                    <Image 
                        src="/about/organizing-team/logo.png"
                        alt="Invento Logo" 
                        width={32} 
                        height={32} 
                        className="object-contain brightness-0 invert" 
                    />
                </div>
            </div>
         </div>
      </div>
    </div>
  );
}
