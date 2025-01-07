import React from "react";
import bgPict from "@/app/asset/IMG_1885.jpg";
import frontPic from "@/app/asset/Foto-Profile-paling-depan.jpg";
import Image from "next/image";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "./src/fonts";
// import { wedding } from "@/app/utils/types";

// export default function Footer({ data }: { data: wedding }) {
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
        <p
          className={`leading-7 [&:not(:first-child)]:mt-6 mb-4 capitalize ${fonts.montserrat}`}
        >
          Kedatangan dan restu kalian hadiah terindah bagi kami
        </p>
        <h1
          className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 ${fonts.bodoni}`}
        >
          Jonathan & Felicia
        </h1>

        {/* Front Image */}
        <div className="mb-6">
          <Image
            src={frontPic}
            alt="Profile Picture"
            width={350}
            height={200}
            className="mx-auto rounded-md"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        {/* Footer Template Info */}
        <span
          className={`text-sm font-medium leading-none ${fonts.montserrat}`}
        >
          Template by Mezzaluna
        </span>
      </div>
    </footer>
  );
}
