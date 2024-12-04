import React from "react";
import bgPict from "@/app/asset/IMG_1885.jpg";
import frontPic from "@/app/asset/Foto-Profile-paling-depan.jpg";
import Image from "next/image";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "@/app/syifannabil/src/fonts";

export default function Footer() {
  const { ref, isInView } = useInView();

  return (
    <footer
      className="flex flex-col justify-center items-center space-y-8 text-center bg-slate-950 relative"
      style={{
        backgroundImage: `url(${bgPict.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      {/* Second Layer: Content Container */}
      <div
        className={`relative z-10 w-3/4 mx-auto py-12 text-center text-white ${
          isInView ? "opacity-100 animate-fadeIn" : "opacity-0"
        }`}
        ref={ref}
      >
        {/* Third Layer: Text and Image */}
        <p className={`text-sm mb-4 capitalize ${fonts.montserrat}`}>
          Kedatangan dan restu kalian hadiah terindah bagi kami
        </p>
        <h1 className={`mb-6 ${fonts.bodoni}`}>Syifa & Nabil</h1>

        {/* Front Image */}
        <div className="mb-6">
          <Image
            src={frontPic}
            alt="Profile Picture"
            width={350}
            height={200}
            className="mx-auto"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        {/* Footer Template Info */}
        <span className={`text-base ${fonts.montserrat}`}>
          Template by Mezzaluna
        </span>
      </div>
    </footer>
  );
}
