import React from "react";
import Pict from "../asset/IMG_1859.jpg";

export default function Hero() {
  return (
    <section
      className="h-screen flex flex-row justify-center items-center center bg-slate-900 relative"
      style={{
        backgroundImage: `url(${Pict.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* First div: vertical alignment */}
      <div className="flex flex-col items-center mb-6 z-10">
        <h1 className="text-xl font-semibold -rotate-90">The Wedding Of</h1>
      </div>

      {/* Second div: horizontal alignment */}
      <div className="z-10">
        <h1 className="text-5xl font-bold mb-3">Syifa</h1>

        <h1 className="text-3xl font-medium mb-3">&</h1>

        <h1 className="text-5xl font-bold mb-3">Nabil</h1>
      </div>
    </section>
  );
}
