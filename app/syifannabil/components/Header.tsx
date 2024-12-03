"use client";
import React from "react";
import Pict from "../../asset/IMG_1885.jpg";
import { useSearchParams } from "next/navigation";
import { useInView } from "@/app/hooks/useInView";
import { fonts } from "@/app/syifannabil/src/fonts";

export default function Header() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("nama") || "Nama Tamu Undangan";

  const { ref: slideLeftRef, isInView: isSlideLeftInView } = useInView();
  const { ref: slideRightRef, isInView: isSlideRightInView } = useInView();

  return (
    <section
      className="h-screen flex flex-col items-center justify-between text-center bg-slate-950"
      style={{
        backgroundImage: `url(${Pict.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="header"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div
        className={`mt-20 mb-10 z-10 transition-transform duration-700 ${
          isSlideLeftInView ? "animate-slideLeft" : "opacity-0"
        }`}
        ref={slideLeftRef}
      >
        <h1 className={`text-xl ${fonts.montserrat}`}>The wedding of</h1>
        <h1 className={`text-6xl font-bold mt-6 ${fonts.bodoni} `}>
          Syifa & Nabila
        </h1>
      </div>
      <div
        ref={slideRightRef}
        className={`mb-28 z-10 transition-transform duration-700 ${
          isSlideRightInView ? "animate-slideRight" : "opacity-0"
        }`}
      >
        <p>Kepada Yth.</p>
        <p>Bapak/Ibu/Saudara/i : </p>
        <p className={`font-bold text-2xl my-3 ${fonts.cinzel}`}>{guestName}</p>
        <p className={`${fonts.montserrat}`}>Di Tempat</p>
      </div>
    </section>
  );
}
