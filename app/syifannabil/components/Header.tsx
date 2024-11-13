"use client"
import React from "react";
import Pict from "../../asset/IMG_1885.jpg";
import { useSearchParams } from "next/navigation";

export default function Header() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("nama") || "Nama Tamu Undangan";

  return (
    <section
      className="h-screen flex flex-col items-center justify-between text-center bg-slate-950"
      style={{
        backgroundImage: `url(${Pict.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className=" mt-20 mb-10 z-10">
        <h1 className=" text-xl ">The wedding of</h1>
        <h1 className="text-6xl font-bold mt-6">Syifa & Nabila</h1>
      </div>
      <div className="mb-28 z-10">
        <p>Kepada Yth.</p>
        <p>Bapak/Ibu/Saudara/i : </p>
        <p className="font-bold text-2xl my-3">{guestName}</p>
        <p>Di Tempat</p>
      </div>
    </section>
  );
}
