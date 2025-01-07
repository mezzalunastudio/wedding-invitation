"use client";
import React from "react";
import Pict from "@/app/asset/IMG_1885.jpg";
import { useSearchParams } from "next/navigation";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "../src/fonts";
import { wedding } from "@/app/utils/types";

export default function Header({ data }: { data: wedding }) {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("nama") || "Nama Tamu Undangan";
  const { ref, isInView } = useInView();

  return (
    <section
      className={`relative h-screen text-center bg-slate-950`}
      style={{
        backgroundImage: `url(${Pict.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="header"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col justify-between h-full py-10 md:py-20">
        {/* Top Section */}
        <div className={`transition-transform duration-700`}>
          <p
            ref={ref}
            className={`text-xl text-white ${fonts.montserrat} ${
              isInView ? "animate-slideUp" : "opacity-0"
            }`}
          >
            The wedding of
          </p>
          <h1
            className={`mt-4 text-4xl md:text-6xl text-white font-bold ${
              fonts.bodoni
            } ${isInView ? "animate-slideDown" : "opacity-0"}`}
            ref={ref}
          >
            {data.groom.shortName} & {data.bride.shortName}
          </h1>
        </div>

        {/* Bottom Section */}
        <div>
          <div className={`transition-transform duration-700 `}>
            <p
              ref={ref}
              className={`text-white text-lg ${
                isInView ? "animate-slideUp" : "opacity-0"
              }`}
            >
              Kepada Yth.
            </p>
            <p
              ref={ref}
              className={`text-white text-lg ${
                isInView ? "animate-slideDown" : "opacity-0"
              }`}
            >
              Bapak/Ibu/Saudara/i :
            </p>
            <div
              className={`mt-6 ${isInView ? "animate-slideUp" : "opacity-0"}`}
              ref={ref}
            ></div>
            <h3
              ref={ref}
              className={`mt-4 text-2xl text-white ${fonts.cinzel} ${
                isInView ? "animate-slideUp" : "opacity-0"
              }`}
            >
              {guestName}
            </h3>
            <p
              ref={ref}
              className={`mt-4 text-lg text-white ${
                isInView ? "animate-slideDown" : "opacity-0"
              } ${fonts.montserrat}`}
            >
              Di Tempat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
